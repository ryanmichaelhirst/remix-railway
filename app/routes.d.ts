declare module "routes-gen" {
  export type RouteParams = {
    "/": Record<string, never>;
    "/auth/login": Record<string, never>;
    "/health-check": Record<string, never>;
  };

  export function route<
    T extends
      | ["/"]
      | ["/auth/login"]
      | ["/health-check"]
  >(...args: T): typeof args[0];
}
