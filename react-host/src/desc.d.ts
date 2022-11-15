interface Callable {
  (elem: Element): never;
}

declare module "reactApp/Content" {
  const Component: React.FC;
  export = Component;
}

declare module "vueApp/ContentRenderer" {
  function ContentRenderer(element?: HTMLElement): void;
}
declare module "vanillaApp/AppRenderer" {
  const Component: Callable;
  export = Component;
}

type Wc = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

declare namespace JSX {
  interface IntrinsicElements {
    "angular-component": Wc;
    "lit-button": Wc;
  }
}
