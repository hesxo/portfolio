self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/blog/:slug.mdx",
        "destination": "/blog.mdx/:slug"
      },
      {
        "source": "/components/:slug.mdx",
        "destination": "/blog.mdx/:slug"
      }
    ],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()