import comp from "D:/Code/My-Website/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"config\":[{\"type\":\"profile\",\"name\":\"Hongwen Pu\",\"description\":\"🇨🇳 From Shaoxing, Zhejiang, China. Currently based in London, United Kingdom.\\nYear 1 Student, Mathematical Computation (Computer Science and Mathematics) @ University College London.\\nEmail: hongwen.pu.25@ucl.ac.uk\\n\",\"avatar\":\"./images/selfie.jpg\"},{\"type\":\"custom\"}],\"pageLayout\":\"home\"},\"readingTime\":{\"minutes\":3.21,\"words\":964},\"git\":{},\"filePathRelative\":\"README.md\",\"headers\":[]}")
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
