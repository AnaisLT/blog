const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/make/Desktop/blog/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/make/Desktop/blog/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/make/Desktop/blog/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/make/Desktop/blog/src/pages/index.js"))),
  "component---src-pages-tags-js": hot(preferDefault(require("/Users/make/Desktop/blog/src/pages/tags.js"))),
  "component---src-pages-team-js": hot(preferDefault(require("/Users/make/Desktop/blog/src/pages/team.js")))
}

