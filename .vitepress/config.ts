import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { SitemapStream } from 'sitemap'
import { defineConfig } from 'vitepress'

const links: Array<any> = []

export default defineConfig({
  lang: 'zh-CN',
  title: 'Leo',
  titleTemplate: undefined,
  description: '帮助你快速创建项目的官方文档站点；快速搭建属于你的个人知识体系、博客；',
  ignoreDeadLinks: true,
  lastUpdated: true,
  // cleanUrls: 'without-subfolders', // 注释了，避免 nginx 静态站部署时，刷新页面会找不到网页

  head: [
    // ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'keywords', content: '文档站,VitePress 文档站,博客,知识图谱,知识网,知识体系,官方网站,静态站,hexo' }],
    ['script', { src: '//unpkg.com/alpinejs', defer: 'true' }],

    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://blog.iwnweb.com/vitepress-doc-website/' }],
    ['meta', { property: 'og:title', content: '文档站' }],
    ['meta', { property: 'og:description', content: '帮助你快速创建项目的官方文档站点；快速搭建属于你的个人知识体系、博客；' }],
    ['meta', { property: 'og:image', content: 'https://blog.iwnweb.com/vitepress-doc-website/logo.png' }],

    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],

  markdown: {
    theme: 'material-theme-palenight',
    lineNumbers: false,
  },

  themeConfig: {
    // example: logo: '/logo_square_en.png',
    // example: logo: undefined,
    logo: './logo.png',
    siteTitle: undefined,
    outlineTitle: '页面梗概',
    lastUpdatedText: '最后一次更新',
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    /** https://vitepress.vuejs.org/guide/theme-nav.html#nav */
    nav: navbar(),
    /** https://vitepress.vuejs.org/guide/theme-sidebar.html#sidebar */
    sidebar: {
      '/guide/': sidebarGuide(),
      '/database/': sidebarDatabase(),
      '/api/': sidebarApi(),
      '/component/': sidebarComponent(),
      '/component/uniui/': sidebarUniui(),
      '/faqs/': sidebarFAQ(),

      '/community/': sidebarCommunity(),
      '/contributing/': sidebarCommunity(),
    },
    /** https://vitepress.vuejs.org/guide/theme-nav.html#social-links */
    // socialLinks: [
    //   {
    //     icon: {
    //       svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1894" height="128" width="128"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z" fill="#888888" p-id="1895"></path></svg>'
    //     },
    //     link: 'https://gitee.com/github-mouyong/vitepress-doc-website'
    //   },
    //   {
    //     icon: {
    //         svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2686" height="128" width="128"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" p-id="2687"></path></svg>',
    //     },
    //     link: 'https://github.com/mouyong/vitepress-doc-website'
    //   },
    //   {
    //     icon: {
    //       svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4808" height="128" width="128"><path d="M832 160c16.954 0 32.986 6.696 45.145 18.855C889.304 191.014 896 207.046 896 224v416c0 16.954-6.696 32.986-18.855 45.145C864.986 697.304 848.954 704 832 704H192c-16.954 0-32.986-6.696-45.145-18.855C134.696 672.986 128 656.954 128 640V224c0-16.954 6.696-32.986 18.855-45.145C159.014 166.696 175.046 160 192 160h640m0-64H192c-70.4 0-128 57.6-128 128v416c0 70.4 57.6 128 128 128h640c70.4 0 128-57.6 128-128V224c0-70.4-57.6-128-128-128zM736 928H288c-17.6 0-32-14.4-32-32s14.4-32 32-32h448c17.6 0 32 14.4 32 32s-14.4 32-32 32zM736 352H288c-17.6 0-32-14.4-32-32s14.4-32 32-32h448c17.6 0 32 14.4 32 32s-14.4 32-32 32zM544 576H288c-17.6 0-32-14.4-32-32s14.4-32 32-32h256c17.6 0 32 14.4 32 32s-14.4 32-32 32z" p-id="4809"></path></svg>'
    //     },
    //     link: 'https://mouyong.github.io/vitepress-doc-website'
    //   },
    // ],
    footer: {
      message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      // copyright: 'Copyright © 2014-present <a href="https://mouyong.github.io" target="_blank">mouyong</a><br><a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">蜀ICP备17018093号</a>'
    },

    editLink: {
      pattern: 'https://github.com/mouyong/vitepress-doc-website/blob/master/src/:path',
      text: '提交改进'
    },

    // algolia: {
    //   appId: '',
    //   apiKey: '',
    //   indexName: ''
    // },

    // carbonAds: {
    //   code: '',
    //   placement: ''
    // }
  },

  /**
   * build for sub dir
   */
  base: '/leo-docs/',
  srcDir: 'src/', // relative of `vitepress-docs-website/` directory
  // outDir: '../public/docs/', // relative of `vitepress-docs-website/` directory

  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id)) {
      let url = pageData.relativePath.replace(/((^|\/)index)?\$/, '$2')
      url = url.replace('.md', '.html')
      links.push({
        // you might need to change this if not using clean urls mode
        url: url,
        lastmod: pageData.lastUpdated
      })
    }
  },

  /**
   * build end.
   */
  buildEnd: async ({ outDir }) => {
    const sitemap = new SitemapStream({
      hostname: 'https://blog.iwnweb.com/vitepress-doc-website/'
    })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
    links.forEach((link) => sitemap.write(link))
    sitemap.end()
    await new Promise((r) => writeStream.on('finish', r))
  },

  /**
   * vite config
   */
  vite: {
    plugins: [
    ],
    server: {
      host: '0.0.0.0',
      port: 3005,
      // port: 8082,
      hmr: {
        clientPort: 3005,
        // clientPort: 443, // when you using reverse proxy to run docs:dev
      }
    }
  }
})

function navbar() {
  return [
    { text: '首页', link: '/' },
    // { text: '官网', link: '/home', activeMatch: `^/(home)/`, },
    { text: '快速进阶', link: '/guide/', activeMatch: `^/(guide)/`, },
    { text: '内置组件', activeMatch: `^/(component)/`,
      items: [
        { text: '文档', link: '/component/' },
        { text: '演示', link: 'https://hellouniapp.dcloud.net.cn/pages/component/view/view' },
      ],
    },
    { text: '扩展组件', activeMatch: `^/(component/uniui)/`,
      items: [
        { text: '文档', link: '/component/uniui/' },
        { text: '演示', link: 'https://hellouniapp.dcloud.net.cn/pages/extUI/badge/badge' },
      ],
    },
    { text: 'API能力', activeMatch: `^/(api)/`,
      items: [
        { text: '文档', link: '/api/' },
        { text: '演示', link: 'https://hellouniapp.dcloud.net.cn/pages/API/set-navigation-bar-title/set-navigation-bar-title' },
      ],
    },
    { text: '常见问题', link: '/faqs/', activeMatch: `^/(faqs)/`, },
    // {
    //   text: '生态系统',
    //   activeMatch: `^/(community|contributing)/`,
    //   items: [
    //     { text: '团队', link: '/community/teams' },
    //     { text: '加入我们', link: '/community/join' },
    //     { text: '赞助我们', link: '/community/sponsor' },
    //     { text: '贡献指南', link: '/contributing/' },
    //     { text: '常见问题', link: '/community/faq' },
    //     { text: '提交反馈', link: '/contributing/feedback' },
    //     { text: '互动交流', link: '/community/discuss' },
    //     { text: '应用市场', link: 'https://market.plugins-world.cn' },
    //   ],
    // },
    // {
    //   text: '项目资料',
    //   items: [
    //     {
    //       text: '飞书',
    //       items: [
    //         { text: '团队协同文档', link: 'https://wv446p4j9c.feishu.cn/docs/doccnuDx1Cloij1MQg25I3Z9yUb' },
    //         { text: '项目研发流程', link: 'https://wv446p4j9c.feishu.cn/docx/doxcn4BS4V1wo0h1TU14uRZ4icf' },
    //         { text: 'xx - 目录索引', link: 'https://feishu.cn' },
    //         { text: 'xx - 项目管理表（简化）', link: 'https://wv446p4j9c.feishu.cn/base/bascn38ACf4UHV1cWaPvPEcJoUc' },
    //         { text: '【xxx 项目】需求及 Bug 管理（完整）', link: 'https://wv446p4j9c.feishu.cn/base/bascnpubydTzWJ5M5LJ2lkWSatS' },
    //       ]
    //     },
    //     {
    //       text: '项目 - 接口文档',
    //       items: [
    //         { text: 'Apifox', link: 'https://www.apifox.cn/web' },
    //       ]
    //     },
    //   ]
    // }
  ]
}

function sidebarGuide() {
  return [
    {
      text: '关于Leo',
      collapsible: true,
      items: [
        { text: 'Leo介绍', link: '/guide/' },
        { text: '团队介绍', link: '/guide/team.md' },
        { text: 'Leo架构图', link: '/guide/business-flowchart' },
      ]
    },
    {
      text: '快速开始',
      collapsible: true,
      items: [
        { text: '安装及使用', link: '/guide/install' },
        { text: '工程介绍', link: '/guide/project-introduce' },
        { text: '页面介绍', link: '/guide/page-introduce' },
      ]
    },
    {
      text: '全局配置',
      collapsible: true,
      items: [
        { text: 'pages.json页面配置', link: '/guide/page-config' },
        { text: 'manifest.json应用配置', link: '/guide/manifest-config' },
        { text: 'uni.scss整体样式', link: '/guide/uniscss-config' },
        { text: 'App.vue', link: '/guide/appvue-config' },
      ]
    },
    {
      text: '通用支持',
      collapsible: true,
      items: [
        { text: '条件编译', link: '/guide/compile' },
        // { text: '运行和调试', link: '/guide/debug' },
      ]
    },
  ]
}

function sidebarApi() {
  return [  {    text: '概述',    collapsible: true,    link: '/api/README.md'  },  {    text: '基础',    link: '/api/log',    collapsible: true,    items: [      { text: '日志打印', link: '/api/log.md' },      { text: '定时器', link: '/api/timer.md' },      { text: 'uni.base64ToArrayBuffer', link: '/api/base64ToArrayBuffer.md' },      { text: 'uni.arrayBufferToBase64', link: '/api/arrayBufferToBase64.md' },      {        text: '启动',        collapsible: true,        items: [          { text: 'uni.getLaunchOptionsSync', link: '/api/getLaunchOptionsSync.md' },          { text: 'uni.getEnterOptionsSync', link: '/api/getEnterOptionsSync.md' },        ]
    },
      { text: '应用级事件', link: '/api/application.md' },
      { text: '拦截器', link: '/api/interceptor.md' },
      { text: '全局API', link: '/api/global.md' },
      { text: 'uni.canIUse', link: '/api/caniuse.md' },
    ]
  },
    {
      text: '网络',
      link: '/api/request/request.md',
      collapsible: true,
      items: [
        { text: '发起请求', link: '/api/request/request.md' },
        { text: '上传、下载', link: '/api/request/network-file.md' },
        { text: 'WebSocket', link: '/api/request/websocket.md' },
        { text: 'SocketTask', link: '/api/request/socket-task.md' },
        { text: 'mDNS', link: '/api/request/mDNS.md' },
        { text: 'UDP 通信', link: '/api/request/UDP.md' },
      ]
    },
    {
      text: '页面和路由',
      link: '/api/router',
      collapsible: true,
      items: [
        { text: '路由方式', link: '/api/router' },
        { text: '获取页面', link: '/api/window/window.md' },
        { text: '页面通讯', link: '/api/window/communication.md' },
      ]
    },
    {
      text: '数据缓存',
      link: '/api/storage/storage',
      collapsible: true,
      items: [
        { text: '存储', link: '/api/storage/storage' },
      ]
    },
    {
      text: '位置',
      link: '/api/location/location.md',
      collapsible: true,
      items: [
        { text: '获取位置', link: '/api/location/location.md' },
        { text: '查看位置', link: '/api/location/open-location.md' },
        { text: '位置更新', link: '/api/location/location-change.md' },
        { text: '地图组件控制', link: '/api/location/map.md' },
      ]
    },
    {
      text: '媒体',
      link: '/api/media/image.md',
      collapsible: true,
      items: [
        { text: '图片', link: '/api/media/image.md' },
        { text: '文件', link: '/api/media/file.md' },
        { text: '录音管理', link: '/api/media/record-manager.md' },
        { text: '背景音频播放管理', link: '/api/media/background-audio-manager.md' },
        { text: '音频组件控制', link: '/api/media/audio-context.md' },
        { text: '视频', link: '/api/media/video.md' },
        { text: '视频组件控制', link: '/api/media/video-context.md' },
        { text: '相机组件控制', link: '/api/media/camera-context.md' },
        { text: '直播组件控制', link: '/api/media/live-player-context.md' },
        { text: '富文本', link: '/api/media/editor-context.md' },
        { text: '音视频合成', link: '/api/media/media-container.md' }
      ]
    },
    {
      text: '设备',
      link: '/api/system/info.md',
      collapsible: true,
      items: [
        {
          text: '系统',
          collapsible: true,
          items: [
            { text: 'uni.getSystemInfo', link: '/api/system/info.md' },
            { text: 'uni.getDeviceInfo', link: '/api/system/getDeviceInfo.md' },
            { text: 'uni.getWindowInfo', link: '/api/system/getWindowInfo.md' },
            { text: 'uni.getAppBaseInfo', link: '/api/system/getAppBaseInfo.md' },
            { text: 'uni.getAppAuthorizeSetting', link: '/api/system/getappauthorizesetting.md' },
            { text: 'uni.getSystemSetting', link: '/api/system/getsystemsetting.md' },
            { text: 'uni.openAppAuthorizeSetting', link: '/api/system/openappauthorizesetting.md' },
          ]
        },
        { text: '内存', link: '/api/system/memory.md' },
        { text: '网络状态', link: '/api/system/network.md' },
        { text: '系统主题', link: '/api/system/theme.md' },
        { text: '加速度计', link: '/api/system/accelerometer.md' },
        { text: '罗盘', link: '/api/system/compass.md' },
        { text: '陀螺仪', link: '/api/system/gyroscope.md' },
        { text: '拨打电话', link: '/api/system/phone.md' },
        { text: '扫码', link: '/api/system/barcode.md' },
        { text: '剪贴板', link: '/api/system/clipboard.md' },
        { text: '屏幕亮度', link: '/api/system/brightness.md' },
        { text: '用户截屏事件', link: '/api/system/capture-screen.md' },
        { text: '振动', link: '/api/system/vibrate.md' },
        { text: '手机联系人', link: '/api/system/contact.md' },
        { text: '蓝牙', link: '/api/system/bluetooth.md' },
        { text: '低功耗蓝牙', link: '/api/system/ble.md' },
        { text: 'iBeacon', link: '/api/system/ibeacon.md' },
        { text: 'Wi-Fi', link: '/api/system/wifi.md' },
        { text: '电量', link: '/api/system/batteryInfo.md' },
        { text: 'NFC', link: '/api/system/nfc.md' },
        { text: '设备方向', link: '/api/system/deviceMotion.md' },
        { text: '生物认证', link: '/api/system/authentication.md' },
      ]
    },
    {
      text: '键盘',
      link: '/api/key',
      collapsible: true,
      items: [
        { text: '键盘', link: '/api/key' },
      ]
    },
    {
      text: '界面',
      collapsible: true,
      items: [
        { text: '交互反馈', link: '/api/ui/prompt.md' },
        { text: '设置导航条', link: '/api/ui/navigationbar.md' },
        { text: '设置TabBar', link: '/api/ui/tabbar.md' },
        { text: '背景', link: '/api/ui/bgcolor.md' },
        { text: '动画', link: '/api/ui/animation' },
        { text: '滚动', link: '/api/ui/scroll' },
        { text: '窗口', link: '/api/ui/window.md' },
        { text: '宽屏适配', link: '/api/ui/adapt.md' },
        { text: '字体', link: '/api/ui/font.md' },
        { text: '下拉刷新', link: '/api/ui/pulldown.md' },
        { text: '节点信息', link: '/api/ui/nodes-info.md' },
        { text: '节点布局相交状态', link: '/api/ui/intersection-observer.md' },
        { text: '媒体查询', link: '/api/ui/media-query-observer.md' },
        { text: '自定义组件', link: '/api/ui/nextTick.md' },
        { text: '菜单', link: '/api/ui/menuButton.md' },
        { text: '语言', link: '/api/ui/locale.md' },
      ]
    },
    {
      text: '文件',
      link: '/api/file/file',
      collapsible: true,
      items: [
        { text: '文件', link: '/api/file/file' },
      ]
    },
    {
      text: '绘画',
      collapsible: true,
      items: [
        { text: 'uni.createOffscreenCanvas', link: 'api/canvas/createOffscreenCanvas.md' },
        { text: 'uni.createCanvasContext', link: 'api/canvas/createCanvasContext.md' },
        { text: 'uni.canvasToTempFilePath', link: 'api/canvas/canvasToTempFilePath.md' },
        { text: 'uni.canvasPutImageData', link: 'api/canvas/canvasPutImageData.md' },
        { text: 'uni.canvasGetImageData', link: 'api/canvas/canvasGetImageData.md' },
        { text: 'CanvasContext', link: 'api/canvas/CanvasContext.md' },
        { text: 'CanvasGradient', link: 'api/canvas/CanvasGradient.md' },
      ]
    },
  ]
}
function sidebarComponent() {
  return [
    {
      text: '概述',
      collapsible: true,
      items: [
        { text: '组件介绍', link: '/component/' },
        { text: '视图容器', link: '/component/view',
          collapsible: true,
          items: [
            { text: 'view', link: '/component/view' },
            { text: 'scroll-view', link: '/component/scroll-view.md' },
            { text: 'swiper', link: '/component/swiper' },
            { text: 'match-media', link: '/component/match-media' },
            { text: 'movable-area', link: '/component/movable-area.md' },
            { text: 'movable-view', link: '/component/movable-view.md' },
            { text: 'cover-view', link: '/component/cover-view' },
            { text: 'cover-image', link: '/component/cover-image' },
          ]
        },
        { text: '基础内容', link: '/component/icon',
          collapsible: true,
          items: [
            { text: 'icon', link: '/component/icon' },
            { text: 'text', link: '/component/text' },
            { text: 'rich-text', link: '/component/rich-text' },
            { text: 'progress', link: '/component/progress' },
          ]
        },
        { text: '表单组件', link: '/component/button',
          collapsible: true,
          items: [
            { text: 'button', link: '/component/button' },
            { text: 'checkbox', link: '/component/checkbox' },
            { text: 'editor', link: '/component/editor' },
            { text: 'form', link: '/component/form' },
            { text: 'input', link: '/component/input' },
            { text: 'label', link: '/component/label' },
            { text: 'picker', link: '/component/picker' },
            { text: 'picker-view', link: '/component/picker-view' },
            { text: 'radio', link: '/component/radio' },
            { text: 'slider', link: '/component/slider' },
            { text: 'switch', link: '/component/switch' },
            { text: 'textarea', link: '/component/textarea' },
          ]
        },
        { text: '路由与页面跳转', link: '/component/navigator',
          collapsible: true,
          items: [
            { text: 'navigator', link: '/component/navigator' },
          ]
        },
        { text: '媒体组件', link: '/component/audio',
          collapsible: true,
          items: [
            { text: 'animation-view', link: '/component/animation-view' },
            { text: 'audio', link: '/component/audio' },
            { text: 'camera', link: '/component/camera' },
            { text: 'image', link: '/component/image' },
            { text: 'video', link: '/component/video' },
            { text: 'live-player', link: '/component/live-player' },
            { text: 'live-pusher', link: '/component/live-pusher' },
          ]
        },
        { text: '地图', link: '/component/map',
          collapsible: true,
          items: [
            { text: 'map', link: '/component/map' },
          ]
        },
        { text: '画布', link: '/component/canvas',
          collapsible: true,
          items: [
            { text: 'canvas', link: '/component/canvas' },
          ]
        },
        { text: 'web-view', link: '/component/web-view',
          collapsible: true,
          items: [
            { text: 'web-view', link: '/component/web-view' },
          ]
        },
        { text: '页面属性配置', link: '/component/page-meta',
          collapsible: true,
          items: [
            { text: 'page-meta', link: '/component/page-meta' },
            { text: 'navigation-bar', link: '/component/navigation-bar' },
            { text: 'custom-tab-bar', link: '/component/custom-tab-bar' },
          ]
        },
      ]
    },
  ]
}

function sidebarUniui() {
  return [
    {
      text: '概述',
      collapsible: true,
      items: [
        { text: '扩展组件', link: '/component/uniui/' },
        { text: '开始使用', link: '/component/uniui/quickstart' },
        { text: '色彩说明', link: '/component/uniui/color' },
        { text: 'uni-sass 辅助样式', link: '/component/uniui/uni-sass.md'},
        { text: 'uni-badge 数字角标', link: '/component/uniui/uni-badge.md' },
        { text: 'uni-breadcrumb 面包屑', link: '/component/uniui/uni-breadcrumb.md'},
        { text: 'uni-calendar 日历', link: '/component/uniui/uni-calendar.md'},
        { text: 'uni-card 卡片', link: '/component/uniui/uni-card.md'},
        { text: 'uni-collapse 折叠面板', link: '/component/uniui/uni-collapse.md'},
        { text: 'uni-combox 组合框', link: '/component/uniui/uni-combox.md'},
        { text: 'uni-countdown 倒计时', link: '/component/uniui/uni-countdown.md'},
        { text: 'uni-data-checkbox 数据选择器', link: '/component/uniui/uni-data-checkbox.md'},
        { text: 'uni-data-picker 级联选择器', link: '/component/uniui/uni-data-picker.md'},
        { text: 'uni-data-select 下拉框', link: '/component/uniui/uni-data-select.md'},
        { text: 'uni-dateformat 日期格式化', link: '/component/uniui/uni-dateformat.md'},
        { text: 'uni-datetime-picker 日期选择器', link: '/component/uniui/uni-datetime-picker.md'},
        { text: 'uni-drawer 抽屉', link: '/component/uniui/uni-drawer.md'},
        { text: 'uni-easyinput 增强输入框', link: '/component/uniui/uni-easyinput.md'},
        { text: 'uni-fab 悬浮按钮', link: '/component/uniui/uni-fab.md'},
        { text: 'uni-fav 收藏按钮', link: '/component/uniui/uni-fav.md'},
        { text: 'uni-file-picker 文件选择上传', link: '/component/uniui/uni-file-picker.md'},
        { text: 'uni-forms 表单', link: '/component/uniui/uni-forms.md'},
        { text: 'uni-goods-nav 商品导航', link: '/component/uniui/uni-goods-nav.md'},
        { text: 'uni-grid 宫格', link: '/component/uniui/uni-grid.md'},
        { text: 'uni-group 分组', link: '/component/uniui/uni-group.md'},
        { text: 'uni-icons 图标', link: '/component/uniui/uni-icons.md'},
        { text: 'uni-indexed-list 索引列表', link: '/component/uniui/uni-indexed-list.md'},
        { text: 'uni-link 超链接', link: '/component/uniui/uni-link.md'},
        { text: 'uni-list 列表', link: '/component/uniui/uni-list.md'},
        { text: 'uni-load-more 加载更多', link: '/component/uniui/uni-load-more.md'},
        { text: 'uni-nav-bar 自定义导航栏', link: '/component/uniui/uni-nav-bar.md'},
        { text: 'uni-notice-bar 通告栏', link: '/component/uniui/uni-notice-bar.md'},
        { text: 'uni-number-box 数字输入框', link: '/component/uniui/uni-number-box.md'},
        { text: 'uni-pagination 分页器', link: '/component/uniui/uni-pagination.md'},
        { text: 'uni-popup 弹出层', link: '/component/uniui/uni-popup.md'},
        { text: 'uni-rate 评分', link: '/component/uniui/uni-rate.md'},
        { text: 'uni-row 布局-行', link: '/component/uniui/uni-row.md'},
        { text: 'uni-search-bar 搜索栏', link: '/component/uniui/uni-search-bar.md'},
        { text: 'uni-section 标题栏', link: '/component/uniui/uni-section.md'},
        { text: 'uni-segmented-control 分段器', link: '/component/uniui/uni-segmented-control.md'},
        { text: 'uni-steps 步骤条', link: '/component/uniui/uni-steps.md'},
        { text: 'uni-swipe-action 滑动操作', link: '/component/uniui/uni-swipe-action.md'},
        { text: 'uni-swiper-dot 轮播图指示点', link: '/component/uniui/uni-swiper-dot.md'},
        { text: 'uni-table 表格', link: '/component/uniui/uni-table.md'},
        { text: 'uni-tag 标签', link: '/component/uniui/uni-tag.md'},
        { text: 'uni-title 章节标题', link: '/component/uniui/uni-title.md'},
        { text: 'uni-tooltip 文字提示', link: '/component/uniui/uni-tooltip.md'},
        { text: 'uni-transition 过渡动画', link: '/component/uniui/uni-transition.md'},
      ]
    },
  ]
}

function sidebarFAQ() {
  return [
    {
      text: '常见问题',
      collapsible: true,
      items: [
        { text: '跨端注意', link: '/faqs/cross-warn' },
      ]
    },
  ]
}



function sidebarDatabase() {
  return [
    {
      text: '概览',
      collapsible: true,
      items: [
        { text: '目录', link: '/database/' },
      ]
    },
    {
      text: '模型',
      collapsible: true,
      items: [
        { text: '用户', link: '/database/users/users' },
      ]
    },
    {
      text: '字典数据',
      collapsible: true,
      items: [
        { text: '目录', link: '/database/dictionary/' },
        { text: '民族', link: '/database/dictionary/ethnicity' },
      ]
    },
  ]
}

function sidebarCommunity() {
  return [
    {
      text: '关于',
      collapsible: true,
      items: [
        { text: '团队', link: '/community/teams' },
        { text: '加入我们', link: '/community/join' },
        { text: '赞助我们', link: '/community/sponsor' },
      ]
    },
    {
      text: '贡献',
      collapsible: true,
      items: [
        { text: '贡献指南', link: '/contributing/' },
        { text: '常见问题', link: '/community/faq' },
        { text: '提交反馈', link: '/contributing/feedback' },
      ]
    },
    {
      text: '互动',
      collapsible: true,
      items: [
        { text: '互动交流', link: '/community/discuss' },
        { text: '应用市场', link: 'https://market.plugins-world.cn' },
      ]
    },
  ]
}
