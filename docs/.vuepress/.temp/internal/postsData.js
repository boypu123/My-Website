export const postsData = {"/blog/":[{"path":"/blog/8b2bp882/","title":"Hello World","categoryList":[],"createTime":"2025/11/30 20:37:11","lang":"en-US","excerpt":""}],"/zh/blog/":[{"path":"/zh/blog/quhicg18/","title":"Hello World","categoryList":[],"createTime":"2025/11/30 20:42:12","lang":"zh-CN","excerpt":""}]}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePostsData) {
    __VUE_HMR_RUNTIME__.updatePostsData(postsData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ postsData }) => {
    __VUE_HMR_RUNTIME__.updatePostsData(postsData)
  })
}
