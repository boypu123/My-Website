export const postsData = {"/blog/":[{"path":"/blog/e2252f6y/","title":"From Geometrical Intuitions to Well-Founded Recursion - How I Reinterpreted the Euclidean Algorithm","categoryList":[],"createTime":"2026/02/14 19:09:41","lang":"en-US","excerpt":""},{"path":"/blog/8b2bp882/","title":"Hello World","categoryList":[],"createTime":"2025/11/30 20:37:11","lang":"en-US","excerpt":""}],"/zh/blog/":[{"path":"/zh/blog/t81w9hxa/","title":"从几何意义到良好递归——一个欧几里得算法的重新诠释","categoryList":[],"createTime":"2026/02/14 19:13:37","lang":"zh-CN","excerpt":""},{"path":"/zh/blog/quhicg18/","title":"Hello World","categoryList":[],"createTime":"2025/11/30 20:42:12","lang":"zh-CN","excerpt":""}]}

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
