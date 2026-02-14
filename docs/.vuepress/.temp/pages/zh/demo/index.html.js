import comp from "/Users/jaydenpu/Documents/Code/My-Website/docs/.vuepress/.temp/pages/zh/demo/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/demo/\",\"title\":\"Demo\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Demo\",\"createTime\":\"2025/11/30 00:28:43\",\"permalink\":\"/zh/demo/\"},\"readingTime\":{\"minutes\":0.04,\"words\":13},\"git\":{},\"filePathRelative\":\"zh/demo/README.md\",\"headers\":[]}")
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
