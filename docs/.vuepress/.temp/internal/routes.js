export const redirects = JSON.parse("{\"/blog/Hello%20World.html\":\"/blog/8b2bp882/\",\"/demo/bar.html\":\"/demo/lwo7fwio/\",\"/demo/foo.html\":\"/demo/0njsyu17/\",\"/zh/blog/Hello%20World.html\":\"/zh/blog/quhicg18/\",\"/zh/demo/bar.html\":\"/zh/demo/attck0kh/\",\"/zh/demo/foo.html\":\"/zh/demo/t1q9cpix/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Code/My-Website/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/blog/8b2bp882/", { loader: () => import(/* webpackChunkName: "blog_8b2bp882_index.html" */"D:/Code/My-Website/docs/.vuepress/.temp/pages/blog/8b2bp882/index.html.js"), meta: {"title":"Hello World"} }],
  ["/demo/lwo7fwio/", { loader: () => import(/* webpackChunkName: "demo_lwo7fwio_index.html" */"D:/Code/My-Website/docs/.vuepress/.temp/pages/demo/lwo7fwio/index.html.js"), meta: {"title":"bar"} }],
  ["/demo/0njsyu17/", { loader: () => import(/* webpackChunkName: "demo_0njsyu17_index.html" */"D:/Code/My-Website/docs/.vuepress/.temp/pages/demo/0njsyu17/index.html.js"), meta: {"title":"foo"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"D:/Code/My-Website/docs/.vuepress/.temp/pages/demo/index.html.js"), meta: {"title":"Demo"} }],
  ["/zh/", { loader: () => import(/* webpackChunkName: "zh_index.html" */"D:/Code/My-Website/docs/.vuepress/.temp/pages/zh/index.html.js"), meta: {"title":""} }],
  ["/zh/blog/quhicg18/", { loader: () => import(/* webpackChunkName: "zh_blog_quhicg18_index.html" */"D:/Code/My-Website/docs/.vuepress/.temp/pages/zh/blog/quhicg18/index.html.js"), meta: {"title":"Hello World"} }],
  ["/zh/demo/attck0kh/", { loader: () => import(/* webpackChunkName: "zh_demo_attck0kh_index.html" */"D:/Code/My-Website/docs/.vuepress/.temp/pages/zh/demo/attck0kh/index.html.js"), meta: {"title":"bar"} }],
  ["/zh/demo/t1q9cpix/", { loader: () => import(/* webpackChunkName: "zh_demo_t1q9cpix_index.html" */"D:/Code/My-Website/docs/.vuepress/.temp/pages/zh/demo/t1q9cpix/index.html.js"), meta: {"title":"foo"} }],
  ["/zh/demo/", { loader: () => import(/* webpackChunkName: "zh_demo_index.html" */"D:/Code/My-Website/docs/.vuepress/.temp/pages/zh/demo/index.html.js"), meta: {"title":"Demo"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/Code/My-Website/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"D:/Code/My-Website/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"Blog"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"D:/Code/My-Website/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"Tags"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"D:/Code/My-Website/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"Archives"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"D:/Code/My-Website/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"Categories"} }],
  ["/zh/blog/", { loader: () => import(/* webpackChunkName: "zh_blog_index.html" */"D:/Code/My-Website/docs/.vuepress/.temp/pages/zh/blog/index.html.js"), meta: {"title":"Blog"} }],
  ["/zh/blog/tags/", { loader: () => import(/* webpackChunkName: "zh_blog_tags_index.html" */"D:/Code/My-Website/docs/.vuepress/.temp/pages/zh/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/zh/blog/archives/", { loader: () => import(/* webpackChunkName: "zh_blog_archives_index.html" */"D:/Code/My-Website/docs/.vuepress/.temp/pages/zh/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/zh/blog/categories/", { loader: () => import(/* webpackChunkName: "zh_blog_categories_index.html" */"D:/Code/My-Website/docs/.vuepress/.temp/pages/zh/blog/categories/index.html.js"), meta: {"title":"分类"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
