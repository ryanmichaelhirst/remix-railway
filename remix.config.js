const { flatRoutes } = require("remix-flat-routes")

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverModuleFormat: "cjs",
  serverPlatform: "node",
  tailwind: true,
  future: {},
  // ignoredRouteFiles: ["**/.*", "**/*.test.{ts,tsx}"],
  ignoredRouteFiles: ["**/*"],
  cacheDirectory: "./node_modules/.cache/remix",
  routes: async (defineRoutes) => {
    return flatRoutes("routes", defineRoutes, {
      ignoredRouteFiles: ["**/.*", "**/*.test.{js,jsx,ts,tsx}"],
    })
  },
  serverDependenciesToBundle: [/^remix-utils.*/],
}