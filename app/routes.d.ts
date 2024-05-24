declare module "routes-gen" {
  export type RouteParams = {
    "/": Record<string, never>;
    "/auth/login": Record<string, never>;
    "/auth/logout": Record<string, never>;
    "/auth/redirect": Record<string, never>;
    "/health-check": Record<string, never>;
    "/preferences/theme": Record<string, never>;
    "/privacy": Record<string, never>;
    "/terms": Record<string, never>;
  };

  export function route<
    T extends
      | ["/"]
      | ["/auth/login"]
      | ["/auth/logout"]
      | ["/auth/redirect"]
      | ["/health-check"]
      | ["/preferences/theme"]
      | ["/privacy"]
      | ["/terms"]
  >(...args: T): typeof args[0];
}
