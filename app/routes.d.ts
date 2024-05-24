declare module "routes-gen" {
  export type RouteParams = {
    "/": Record<string, never>;
    "/auth/login": Record<string, never>;
    "/auth/logout": Record<string, never>;
    "/auth/redirect": Record<string, never>;
    "/checkout": Record<string, never>;
    "/dashboard": Record<string, never>;
    "/health-check": Record<string, never>;
    "/preferences/theme": Record<string, never>;
    "/privacy": Record<string, never>;
    "/stripe/event": Record<string, never>;
    "/terms": Record<string, never>;
  };

  export function route<
    T extends
      | ["/"]
      | ["/auth/login"]
      | ["/auth/logout"]
      | ["/auth/redirect"]
      | ["/checkout"]
      | ["/dashboard"]
      | ["/health-check"]
      | ["/preferences/theme"]
      | ["/privacy"]
      | ["/stripe/event"]
      | ["/terms"]
  >(...args: T): typeof args[0];
}
