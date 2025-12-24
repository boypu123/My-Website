import comp from "D:/Code/My-Website/docs/.vuepress/.temp/pages/zh/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"config\":[{\"type\":\"profile\",\"name\":\"濮弘文 Hongwen Pu\",\"description\":\"🇨🇳 浙江绍兴人，现居英国伦敦\\n大一学生，现就读于UCL的数学计算（计算机科学与数学）专业\\n电子邮件：hongwen.pu.25@ucl.ac.uk\\n\",\"avatar\":\"/images/selfie.jpg\"},{\"type\":\"custom\"}],\"pageLayout\":\"home\"},\"readingTime\":{\"minutes\":5.09,\"words\":1528},\"git\":{},\"filePathRelative\":\"zh/README.md\",\"headers\":[]}")
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
