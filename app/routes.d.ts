declare module "routes-gen" {
  export type RouteParams = {
    "/": Record<string, never>;
    "/healthcheck": Record<string, never>;
  };

  export function route<
    T extends
      | ["/"]
      | ["/healthcheck"]
  >(...args: T): typeof args[0];
}
