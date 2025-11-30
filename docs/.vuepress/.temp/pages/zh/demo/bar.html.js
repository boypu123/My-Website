import comp from "/Users/jaydenpu/Library/CloudStorage/OneDrive-个人/Codes/My-Website/docs/.vuepress/.temp/pages/zh/demo/bar.html.vue"
const data = JSON.parse("{\"path\":\"/zh/demo/bar.html\",\"title\":\"bar\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"bar\"},\"readingTime\":{\"minutes\":0.01,\"words\":4},\"git\":{},\"filePathRelative\":\"zh/demo/bar.md\",\"headers\":[]}")
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
