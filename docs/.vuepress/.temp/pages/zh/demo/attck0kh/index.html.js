import comp from "D:/Code/My-Website/docs/.vuepress/.temp/pages/zh/demo/attck0kh/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/demo/attck0kh/\",\"title\":\"bar\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"bar\",\"createTime\":\"2025/11/30 00:28:43\",\"permalink\":\"/zh/demo/attck0kh/\"},\"readingTime\":{\"minutes\":0.04,\"words\":11},\"git\":{},\"filePathRelative\":\"zh/demo/bar.md\",\"headers\":[]}")
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
