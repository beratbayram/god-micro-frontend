# god-micro-frontend

A **compatibility matrix for cross-framework micro frontends**: every possible
host × remote combination under Webpack Module Federation, tested to find out
which ones actually work.

React, Vue, Angular, and vanilla JS apps each act as remotes; React, Vue, and a
framework-agnostic "god host" consume them, with a shared [Lit](https://lit.dev)
Web Component (`lit-button`) as the framework-neutral common denominator.

## The matrix

| host ⬇ / remote ➡ | react-app | vue-app | angular-app | vanilla-app | lit-button |
|---|---|---|---|---|---|
| **god-host** | ✅ ¹ | ✅ ¹ | ✅ ² | ✅ ¹ | ✅ |
| **react-host** | ✅ | ⚠️ ³ | ✅ ⁴ | ⚠️ ³ | ⚠️ ⁵ |
| **vue-host** | ⚠️ ³ ⁶ | ✅ | ✅ ⁴ | ⚠️ ³ | ⚠️ ⁵ |

✅ works with an idiomatic import · ⚠️ works, but with glue code or a caveat

¹ god-host never imports the app remotes directly: they arrive **transitively**
through the embedded react-host and vue-host (nested federation, two hops:
god-host → react-host → react-app). Rendering and live prop propagation
verified all the way down: typing in god-host's input updates every leaf across
all four frameworks.

² god-host puts `<angular-component>` in its own HTML and declares `angularApp`
as a remote, but never actually imports `angularApp/Component`. The element
upgrades only because an embedded host registers it in the page-global custom
elements registry. It works, by transitive side effect.

³ Needs a hand-written wrapper: grab a DOM ref, then call the remote's exposed
imperative renderer (`createApp().mount()`, `ReactDOM.render()`, or
`innerHTML`). Works, but the remote fully remounts on every prop change;
there's no reconciliation across the framework boundary.

⁴ Consumed as an Angular Elements Web Component: a side-effect import registers
`<angular-component>`, props flow as attributes. After Lit, this is the
cleanest cross-framework path: no wrapper component needed on the React side
beyond a JSX tag.

⁵ `<lit-button>` tags are present in every app, but nothing except god-host
(via `wc.js`) registers the element. Standalone, react-host and vue-host render
five blank tags with **zero console errors**: undefined custom elements fail
silently. Composed under god-host, all of them upgrade and work.

⁶ vue-host consumes react-app **two ways at once**: an imperative
`ContentRenderer` wrapper and a `content-wc` custom element built with
`react-to-webcomponent`. Both render and receive props correctly.

Tested empirically (July 2026): all seven apps served with webpack dev servers
on Node 16, exact dependency versions from the 2022 lockfiles, driven in a real
browser: rendering, prop propagation, and custom-element registry state
checked per cell. React 17 is a shared singleton between react-host and
react-app; Vue 3.2 is shared between vue-host and vue-app. No version-conflict
warnings from Module Federation's shared-scope negotiation in any combination.

## Architecture

| Package | Role |
|---|---|
| `god-host` (:4000) | Top-level host consuming remotes from every framework |
| `react-host` (:3000) / `vue-host` (:3005) | Framework-specific hosts, each consuming foreign remotes |
| `react-app` (:3001) / `vue-app` (:3003) / `angular-app` (:3004) / `vanilla-app` (:3002) | Remotes exposing components |
| `lit-button` | Shared Web Component consumed by all of the above |

Each app is independently built and served; remotes are resolved at runtime via
Module Federation. react-host and vue-host are hosts *and* remotes: they expose
their own renderers, which god-host consumes, so the app remotes are federated
through two levels of hosts.

The Angular remote is its own experiment: the Angular 14 app is compiled to a
single Angular Elements bundle (`elements/index.js`), and a thin webpack
wrapper federates that bundle as `angularApp/Component`. Angular's build
tooling never has to know Module Federation exists.

Each remote exposes components in whatever shape its framework allows
(a React component, a Vue component, an imperative `render(element, props)`
function, a custom element), which is exactly what makes the matrix
interesting: the host has to bridge whatever it gets.

## What this answers

- Which host × remote combinations work out of the box, which need glue code, and which break entirely
- Whether Web Components are a viable framework-neutral interface between federated apps
- How Module Federation's shared-dependency negotiation behaves when frameworks disagree

*These experiments informed production micro-frontend architecture powering
multiple enterprise products at TÜBİTAK BİLGEM YTE.*

## Notable failures

- **Undefined custom elements fail silently.** A host that forgets to register
  `lit-button` renders blank inline elements: no error, no warning, nothing.
  The worst kind of integration failure: invisible.
- **god-host's Angular cell works by accident.** Remove the Angular import from
  the embedded hosts and god-host's own `<angular-component>` quietly stops
  upgrading. Page-global registries create invisible coupling between federated
  apps.
- **Imperative bridges throw away reconciliation.** Every React↔Vue crossing
  remounts the entire remote subtree per prop change. Fine for a demo, a real
  cost at scale.

## Running

```sh
docker-compose up
```

Starts all seven apps; open http://localhost:4000 for the full constellation.

Without Docker: Node 16, `npm install && npx webpack serve --mode development`
in each package (ports in the table above), plus `npx tsc` in
`god-host/lit-button` once so `wc.js` has a `dist/` to import.

MIT licensed.
