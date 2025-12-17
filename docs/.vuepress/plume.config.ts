/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 *
 * 请注意，对此文件的修改不会重启 vuepress 服务，而是通过热更新的方式生效
 * 但同时部分配置项不支持热更新，请查看文档说明
 * 对于不支持热更新的配置项，请在 `.vuepress/config.ts` 文件中配置
 *
 * 特别的，请不要在两个配置文件中重复配置相同的项，当前文件的配置项会覆盖 `.vuepress/config.ts` 文件中的配置
 */

import { defineThemeConfig } from 'vuepress-theme-plume'
import { enCollections, zhCollections } from './collections'
import { enNavbar, zhNavbar } from './navbar'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: './images/profile.jpg',

  appearance: true,  // 配置 深色模式

  social: [
    {
      icon: 'github',
      link: 'https://github.com/boypu123'
    },
    {
      icon: {
        name: 'gscholar',
        svg: `
          <svg t="1764521805570" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2134" width="200" height="200"><path d="M466.346667 87.253333c-23.338667 15.616-137.386667 91.306667-253.354667 168.32C96.938667 332.544 2.133333 396.202667 2.133333 396.970667c0 0.810667 5.802667 4.693333 13.013334 8.533333 7.125333 4.096 121.6 67.541333 254.506666 141.226667l241.322667 134.101333 6.144-3.157333c3.498667-1.706667 92.544-52.565333 198.058667-112.725334l191.701333-109.568 1.152 339.072h113.834667V397.610667l-147.626667-98.986667c-198.997333-133.290667-358.058667-238.336-361.984-239.189333-1.92-0.341333-22.485333 12.245333-45.909333 27.818666M228.48 709.674667l0.597333 85.546666 141.226667 84.778667 141.226667 84.565333 142.378666-85.333333 142.165334-85.546667V709.12c0-46.592-0.554667-84.608-1.152-84.608s-56.234667 33.365333-123.733334 74.282667l-141.056 85.162666-18.389333 10.922667-56.32-33.749333a25775.786667 25775.786667 0 0 1-140.202667-84.437334l-85.546666-51.626666c-1.024-0.341333-1.365333 37.674667-1.152 84.608" p-id="2135" fill="#8a8a8a"></path></svg>
        `
      },
      link: 'https://scholar.google.com/citations?user=kN2nwrcAAAAJ'
    },
    {
      icon: 'linkedin',
      link: 'https://www.linkedin.com/in/%E5%BC%98%E6%96%87-%E6%BF%AE-058696233/'
    }
  ],
  
  navbarSocialInclude: ['github', 'gscholar', 'linkedin'], // 允许显示在导航栏的 social 社交链接
  // aside: true, // 页内侧边栏， 默认显示在右侧
  // outline: [2, 3], // 页内大纲， 默认显示 h2, h3

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  // copyright: true,

  // prevPage: true,   // 是否启用上一页链接
  // nextPage: true,   // 是否启用下一页链接
  // createTime: true, // 是否显示文章创建时间

  /* 站点页脚 */
  footer: {
    message: '🎵“正在被大家打扰的你，不如一起活在爱里面”——上海彩虹合唱团🎵',
    copyright: '本网站基于VuePress和VuePress Theme Plume构建。版权所有 &copy; 2025 Hongwen Pu',
  },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  // transition: {
  //   page: true,        // 启用 页面间跳转过渡动画
  //   postList: true,    // 启用 博客文章列表过渡动画
  //   appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  // },

  locales: {
    '/': {
      /**
       * @see https://theme-plume.vuejs.press/config/basic/#profile
       */
      profile: {
        avatar: './images/profile.jpg',
        name: 'Hongwen Pu\'s Website',
        description: 'Hongwen Pu\'s Website',
        // circle: true,
        // location: '',
        // organization: '',
      },

      navbar: enNavbar,
      collections: enCollections,

      /**
       * 公告板
       * @see https://theme-plume.vuejs.press/guide/features/bulletin/
       */
       // bulletin: {
       //   layout: 'top-right',
       //   contentType: 'markdown',
       //   title: '',
       //   content: '',
       // },
    },
    '/zh/': {
      /**
       * @see https://theme-plume.vuejs.press/config/basic/#profile
       */
      profile: {
        avatar: './images/profile.jpg',
        name: 'Hongwen Pu\'s Website',
        description: 'Hongwen Pu\'s Website',
        // circle: true,
        // location: '',
        // organization: '',
      },

      navbar: zhNavbar,
      collections: zhCollections,

      /**
       * 公告板
       * @see https://theme-plume.vuejs.press/guide/features/bulletin/
       */
       // bulletin: {
       //   layout: 'top-right',
       //   contentType: 'markdown',
       //   title: '',
       //   content: '',
       // },
    },
  },
})
