declare module "routes-gen" {
  export type RouteParams = {
    "/": Record<string, never>;
    "/health-check": Record<string, never>;
  };

  export function route<
    T extends
      | ["/"]
      | ["/health-check"]
  >(...args: T): typeof args[0];
}
