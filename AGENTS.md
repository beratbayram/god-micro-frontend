# AGENTS.md

This file provides guidance to coding agents when working with code in this repository.

An experiment repo: seven independently built apps wired together with Webpack 5 Module
Federation to test every host × remote combination across React 17, Vue 3.2, Angular 14, vanilla
TypeScript and a Lit Web Component. The README holds the tested compatibility matrix and its
footnotes; it is the main deliverable. The repo is archived on GitHub (read-only) and the
dependencies are from 2022.

## Running

```bash
docker-compose up        # all seven apps, then open http://localhost:4000
```

Without Docker, use Node 16 and, in each app folder:

```bash
npm install && npx webpack serve --mode development
```

`god-host` also needs `cd god-host/lit-button && yarn && npx tsc` once, because `god-host/wc.js`
imports `lit-button/dist/src/index`. Each package has its own `yarn.lock`; there is no workspace
or root `package.json`. The root `.npmrc` points at the public npm registry.

## Layout and ports

| Folder        | Port | Federation name | Role                                                        |
| ------------- | ---- | --------------- | ----------------------------------------------------------- |
| `god-host`    | 4000 | `god_host`      | Top host, consumes `reactHost`, `vueHost`, `angularApp`     |
| `react-host`  | 3000 | `host`          | Host and remote, exposes `./MainRenderer`                   |
| `vue-host`    | 3005 | `vue_host`      | Host and remote, exposes `./AppRenderer`                    |
| `react-app`   | 3001 | `reactApp`      | Remote                                                      |
| `vanilla-app` | 3002 | `vanillaApp`    | Remote, imperative `render(element, props)`                 |
| `vue-app`     | 3003 | `vueApp`        | Remote                                                      |
| `angular-app` | 3004 | `angularApp`    | Angular Elements bundle federated by a thin webpack wrapper |

Remote URLs are hard-coded as `http://localhost:<port>/remoteEntry.js` in each
`webpack.config.js`; change a port in the config, the Dockerfile and `docker-compose.yml`
together.

## Things that are easy to get wrong

- The app remotes reach `god-host` only transitively, through `react-host` and `vue-host`. A
  change to a framework host's exposed renderer can silently break god-host's cells.
- `<lit-button>` is only registered by `god-host` (via `wc.js`). The framework hosts render blank
  tags when run standalone, and that is a documented result, not a bug to fix.
- `<angular-component>` in god-host upgrades only because an embedded host imports the Angular
  remote. Removing that import changes a matrix cell.
- There are two copies of the Lit component: root `lit-button/` and `god-host/lit-button/`
  (the one god-host builds). They have already drifted in `package.json` and the Docker setup.
- Angular is built separately: `yarn wc:build` in `angular-app` runs `ng build` and
  `concatenate.js` into `elements/index.js`, which is committed. The federation wrapper in
  `angular-app/elements/angularApp` and the Docker image use that committed bundle, so an Angular
  source change does nothing until the bundle is rebuilt.
- React and react-dom are shared singletons between `react-host` and `react-app`; Vue is shared
  between `vue-host` and `vue-app`. Keep `shared` in sync if versions change.

## Changing the matrix

Any change that affects how a host consumes a remote must be re-tested in a real browser
(rendering, prop propagation, custom element registry state) and reflected in the README matrix
and footnotes. The README records the test date and setup; update them with the results.
