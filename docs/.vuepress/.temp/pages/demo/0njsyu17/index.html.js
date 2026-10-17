import comp from "D:/Code/My-Website/docs/.vuepress/.temp/pages/demo/0njsyu17/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/0njsyu17/\",\"title\":\"foo\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"foo\",\"createTime\":\"2025/11/30 00:28:43\",\"permalink\":\"/demo/0njsyu17/\"},\"readingTime\":{\"minutes\":0.04,\"words\":11},\"git\":{},\"filePathRelative\":\"demo/foo.md\",\"headers\":[]}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
