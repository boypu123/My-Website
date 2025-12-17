export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"icon\",\"type\":\"image/png\",\"href\":\"./images/profile.jpg\"}]],\"locales\":{\"/\":{\"title\":\"Hongwen's Website\",\"lang\":\"en-US\",\"description\":\"Hongwen's Website\"},\"/zh/\":{\"title\":\"Hongwen's Website\",\"lang\":\"zh-CN\",\"description\":\"Hongwen's Website\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
