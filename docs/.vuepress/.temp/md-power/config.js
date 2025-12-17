import { defineClientConfig } from 'vuepress/client'
import Tabs from 'D:/Code/My-Website/node_modules/.pnpm/vuepress-plugin-md-power@1._73e4e82488604f1a3693d56aac5148d1/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from 'D:/Code/My-Website/node_modules/.pnpm/vuepress-plugin-md-power@1._73e4e82488604f1a3693d56aac5148d1/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from 'D:/Code/My-Website/node_modules/.pnpm/vuepress-plugin-md-power@1._73e4e82488604f1a3693d56aac5148d1/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeNode from 'D:/Code/My-Website/node_modules/.pnpm/vuepress-plugin-md-power@1._73e4e82488604f1a3693d56aac5148d1/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeNode.vue'
import { setupMarkHighlight } from 'D:/Code/My-Website/node_modules/.pnpm/vuepress-plugin-md-power@1._73e4e82488604f1a3693d56aac5148d1/node_modules/vuepress-plugin-md-power/lib/client/composables/mark.js'

import 'D:/Code/My-Website/node_modules/.pnpm/vuepress-plugin-md-power@1._73e4e82488604f1a3693d56aac5148d1/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeNode', FileTreeNode)
  },
  setup() {
        setupMarkHighlight("eager")

  }
})
