# 工程简介
一个Leo工程，就是一个Vue3.0项目。你可以通过Leo-CLI的方式创建一个Leo工程，也可以通过Leo-UI的方式创建一个Leo工程。Leo工程的目录结构如下：
```bash
┌─dist                  uni打包产物，包含h5,mp-weixin,mp-alipay,mp-baidu,mp-toutiao等平台的代码
├─src                   源码目录
│  │─api                存放各个平台的API请求
│  │─components         符合vue组件规范的uni-app组件目录
│  │─pages              业务页面文件存放的目录
│  │─static             存放应用引用的本地静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此
│  │─platforms          存放各平台专用页面的目录
│  │─store              pinia状态管理器目录
│  │─styles             存放应用公共样式文件的目录
│  │─utils              存放应用公用函数的目录
│  │─App.vue            应用配置，用来配置App全局样式以及监听 应用生命周期
│  │─main.ts            Vue初始化入口文件
│  │─manifest.json      配置应用名称、appid、logo、版本等打包信息，
│  │─pages.json         配置页面路由、导航条、选项卡等页面类信息，
│  └─uni.scss           uni-app内置的常用样式变量
├─.env                  环境变量配置文件
├─.eslintrc.js          eslint配置文件
├─prettierrc.js         prettier配置文件
├─index.html            应用的主 HTML 文件，应用的入口点
├─package.json          node依赖配置
├─tailwind.config.ts    Tailwind CSS 的配置文件
├─tsconfig.ts           配置 TypeScript 编译器
└─vite.config.ts        Vite 的配置文件 
```
### static目录 使用注意
* 编译到任意平台时，static 目录下除不满足条件编译的文件，会直接复制到最终的打包目录，不会打包编译。非 static 目录下的文件（vue、js、css 等）只有被引用时，才会被打包编译。
* css、less/scss 等资源不要放在 static 目录下，建议这些公用的资源放在自建的 common 目录下。

