import{_ as n,c as s,o as e,N as a}from"./chunks/framework.fc67cb9d.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"component/uniui/quickstart.md","lastUpdated":1685603474000}'),t={name:"component/uniui/quickstart.md"},l=a(`<p>uni-ui支持 HBuilderX直接新建项目模板、npm安装和单独导入个别组件等多种使用方式</p><h3 id="在hbuilderx-新建uni-app项目的模板中-选择uni-ui模板" tabindex="-1">在HBuilderX 新建uni-app项目的模板中，选择uni-ui模板 <a class="header-anchor" href="#在hbuilderx-新建uni-app项目的模板中-选择uni-ui模板" aria-label="Permalink to &quot;在HBuilderX 新建uni-app项目的模板中，选择uni-ui模板&quot;">​</a></h3><p><img src="https://img.cdn.aliyun.dcloud.net.cn/uni-app/doc/create-uni-ui-project.jpg" alt="HBuilderX内创建uni-ui项目"></p><p>由于uni-app独特的<a href="https://uniapp.dcloud.io/collocation/pages?id=easycom" target="_blank" rel="noreferrer">easycom</a>技术，可以免引用、注册，直接使用各种符合规则的vue组件。</p><p>在代码区键入<code>u</code>，拉出各种内置或uni-ui的组件列表，选择其中一个，即可使用该组件。</p><p>光标放在组件名称上，按F1，可以查阅组件的文档。</p><p><img src="https://img.cdn.aliyun.dcloud.net.cn/uni-app/doc/uni-ui-snippet.jpg" alt="uni-ui代码块"></p><h3 id="通过-uni-modules-单独安装组件" tabindex="-1">通过 uni_modules 单独安装组件 <a class="header-anchor" href="#通过-uni-modules-单独安装组件" aria-label="Permalink to &quot;通过 uni_modules 单独安装组件&quot;">​</a></h3><p>如果你没有创建uni-ui项目模板，也可以在你的工程里，通过 uni_modules 单独安装需要的某个组件。下表为uni-ui的扩展组件清单，点击每个组件在详情页面可以导入组件到项目下，导入后直接使用即可，无需import和注册。</p><table><thead><tr><th>组件名</th><th>组件说明</th></tr></thead><tbody><tr><td>uni-badge</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-badge" target="_blank" rel="noreferrer">数字角标</a></td></tr><tr><td>uni-calendar</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-calendar" target="_blank" rel="noreferrer">日历</a></td></tr><tr><td>uni-card</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-card" target="_blank" rel="noreferrer">卡片</a></td></tr><tr><td>uni-collapse</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-collapse" target="_blank" rel="noreferrer">折叠面板</a></td></tr><tr><td>uni-combox</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-combox" target="_blank" rel="noreferrer">组合框</a></td></tr><tr><td>uni-countdown</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-countdown" target="_blank" rel="noreferrer">倒计时</a></td></tr><tr><td>uni-data-checkbox</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-data-checkbox" target="_blank" rel="noreferrer">数据选择器</a></td></tr><tr><td>uni-data-picker</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-data-picker" target="_blank" rel="noreferrer">数据驱动的picker选择器</a></td></tr><tr><td>uni-dateformat</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-dateformat" target="_blank" rel="noreferrer">日期格式化</a></td></tr><tr><td>uni-datetime-picker</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-datetime-picker" target="_blank" rel="noreferrer">日期选择器</a></td></tr><tr><td>uni-drawer</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-drawer" target="_blank" rel="noreferrer">抽屉</a></td></tr><tr><td>uni-easyinput</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-easyinput" target="_blank" rel="noreferrer">增强输入框</a></td></tr><tr><td>uni-fab</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-fab" target="_blank" rel="noreferrer">悬浮按钮</a></td></tr><tr><td>uni-fav</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-fav" target="_blank" rel="noreferrer">收藏按钮</a></td></tr><tr><td>uni-file-picker</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-file-picker" target="_blank" rel="noreferrer">文件选择上传</a></td></tr><tr><td>uni-forms</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-forms" target="_blank" rel="noreferrer">表单</a></td></tr><tr><td>uni-goods-nav</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-goods-nav" target="_blank" rel="noreferrer">商品导航</a></td></tr><tr><td>uni-grid</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-grid" target="_blank" rel="noreferrer">宫格</a></td></tr><tr><td>uni-group</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-group" target="_blank" rel="noreferrer">分组</a></td></tr><tr><td>uni-icons</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-icons" target="_blank" rel="noreferrer">图标</a></td></tr><tr><td>uni-indexed-list</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-indexed-list" target="_blank" rel="noreferrer">索引列表</a></td></tr><tr><td>uni-link</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-link" target="_blank" rel="noreferrer">超链接</a></td></tr><tr><td>uni-list</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-list" target="_blank" rel="noreferrer">列表</a></td></tr><tr><td>uni-load-more</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-load-more" target="_blank" rel="noreferrer">加载更多</a></td></tr><tr><td>uni-nav-bar</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-nav-bar" target="_blank" rel="noreferrer">自定义导航栏</a></td></tr><tr><td>uni-notice-bar</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-notice-bar" target="_blank" rel="noreferrer">通告栏</a></td></tr><tr><td>uni-number-box</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-number-box" target="_blank" rel="noreferrer">数字输入框</a></td></tr><tr><td>uni-pagination</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-pagination" target="_blank" rel="noreferrer">分页器</a></td></tr><tr><td>uni-popup</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-popup" target="_blank" rel="noreferrer">弹出层</a></td></tr><tr><td>uni-rate</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-rate" target="_blank" rel="noreferrer">评分</a></td></tr><tr><td>uni-row</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-row" target="_blank" rel="noreferrer">布局-行</a></td></tr><tr><td>uni-search-bar</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-search-bar" target="_blank" rel="noreferrer">搜索栏</a></td></tr><tr><td>uni-segmented-control</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-segmented-control" target="_blank" rel="noreferrer">分段器</a></td></tr><tr><td>uni-steps</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-steps" target="_blank" rel="noreferrer">步骤条</a></td></tr><tr><td>uni-swipe-action</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-swipe-action" target="_blank" rel="noreferrer">滑动操作</a></td></tr><tr><td>uni-swiper-dot</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-swiper-dot" target="_blank" rel="noreferrer">轮播图指示点</a></td></tr><tr><td>uni-table</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-table" target="_blank" rel="noreferrer">表格</a></td></tr><tr><td>uni-tag</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-tag" target="_blank" rel="noreferrer">标签</a></td></tr><tr><td>uni-title</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-title" target="_blank" rel="noreferrer">章节标题</a></td></tr><tr><td>uni-transition</td><td><a href="https://ext.dcloud.net.cn/plugin?name=uni-transition" target="_blank" rel="noreferrer">过渡动画</a></td></tr></tbody></table><p>使用 <code>uni_modules</code> 方式安装组件库，可以直接通过插件市场导入，通过右键菜单快速更新组件，不需要引用、注册，直接在页面中使用 <code>uni-ui</code> 组件。<a href="https://ext.dcloud.net.cn/plugin?id=55" target="_blank" rel="noreferrer">点击安装 uni-ui 组件库</a></p><p><strong>注意：下载最新的组件目前仅支持 uni_modules ,非 uni_modules 版本最高支持到组件的1.2.10版本</strong></p><p>如不能升级到 <code>uni_modules</code> 版本，可以使用 <code>uni_modules</code> 安装好对应组件，将组件拷贝到对应目录。</p><p>例如需更新 <code>uni-list</code>和<code>uni-badge</code> ,将 <code>uni_modules&gt;uni-list&gt;components</code>和<code>uni_modules&gt;uni-badege&gt;components</code>下所有目录拷贝到如下目录即可：</p><p><strong>目录示例</strong></p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">┌─components              组件目录</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─uni-list             list 列表目录</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  └─uni-list.vue      list 组件文件</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─uni-list-item        list-item 列表目录</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  └─uni-list-item.vue list 组件文件</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─uni-badge         	  badge 角标目录</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  └─uni-badge.vue     badge 组件文件</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ </span><span style="color:#676E95;font-style:italic;">//....              更多组件文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├─pages                   业务页面文件存放的目录</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─index</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  └─index.vue         index示例页面</span></span>
<span class="line"><span style="color:#A6ACCD;">├─main.js                 Vue初始化入口文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├─App.vue                 应用配置，用来配置App全局样式以及监听 应用生命周期</span></span>
<span class="line"><span style="color:#A6ACCD;">├─manifest.json           配置应用名称、appid、logo、版本等打包信息，详见</span></span>
<span class="line"><span style="color:#A6ACCD;">└─pages.json              配置页</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="通过-uni-modules-导入全部组件" tabindex="-1">通过 <code>uni_modules</code> 导入全部组件 <a class="header-anchor" href="#通过-uni-modules-导入全部组件" aria-label="Permalink to &quot;通过  \`uni_modules\` 导入全部组件&quot;">​</a></h3><p>如果想一次把所有uni-ui组件导入到项目中，只需要导入一个 <code>uni-ui</code> 组件即可 <a href="https://ext.dcloud.net.cn/plugin?id=55" target="_blank" rel="noreferrer">点击去导入</a>。</p><p>如果没有自动导入其他组件，可以在 uni-ui 组件目录上右键选择 <code>安装三方插件依赖</code> 即可。</p><h3 id="npm安装" tabindex="-1">npm安装 <a class="header-anchor" href="#npm安装" aria-label="Permalink to &quot;npm安装&quot;">​</a></h3><p>在 <code>vue-cli</code> 项目中可以使用 <code>npm</code> 安装 <code>uni-ui</code> 库 ，或者直接在 <code>HBuilderX</code> 项目中使用 <code>npm</code> 。</p><blockquote><p><strong>注意</strong> cli 项目默认是不编译 <code>node_modules</code> 下的组件的，导致条件编译等功能失效 ，导致组件异常 需要在根目录创建 <code>vue.config.js</code> 文件 ，增加 <code>@dcloudio/uni-ui</code> 包的编译即可正常</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// vue.config.js</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">transpileDependencies</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@dcloudio/uni-ui</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></blockquote><p><strong>准备 sass</strong></p><p><code>vue-cli</code> 项目请先安装 sass 及 sass-loader，如在 HBuliderX 中使用，可跳过此步。</p><ul><li>安装 sass</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> npm i sass -D   或   yarn add sass -D  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>安装 sass-loader</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm i sass-loader@10.1.1 -D   或   yarn add sass-loader@10.1.1 -D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>如果 <code>node</code> 版本小于 16 ，sass-loader 请使用低于 @11.0.0 的版本，<a href="https://stackoverflow.com/questions/66082397/typeerror-this-getoptions-is-not-a-function" target="_blank" rel="noreferrer">sass-loader@11.0.0 不支持 vue@2.6.12 </a> 如果 <code>node</code> 版本大于 16 ， <code>sass-loader</code> 建议使用 <code>v8.x</code> 版本</p></blockquote><p><strong>安装 uni-ui</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm i @dcloudio/uni-ui   或   yarn add @dcloudio/uni-ui</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>配置easycom</strong></p><p>使用 <code>npm</code> 安装好 <code>uni-ui</code> 之后，需要配置 <code>easycom</code> 规则，让 <code>npm</code> 安装的组件支持 <code>easycom</code></p><p>打开项目根目录下的 <code>pages.json</code> 并添加 <code>easycom</code> 节点：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// pages.json</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">easycom</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">autoscan</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">custom</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">			</span><span style="color:#676E95;font-style:italic;">// uni-ui 规则如下配置</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">^uni-(.*)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">	</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">// 其他内容</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#FFCB6B;">pages</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">[</span></span>
<span class="line"><span style="color:#89DDFF;">		</span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#F07178;">	]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>在 <code>template</code> 中使用组件：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uni-badge</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">uni-badge</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uni-badge</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bindClick</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">uni-badge</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uni-badge</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:inverted</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">uni-badge</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p><strong>注意</strong></p><ul><li>uni-ui 现在只推荐使用 <code>easycom</code> ，如自己引用组件，可能会出现组件找不到的问题</li><li>使用 npm 安装的组件，默认情况下 babel-loader 会忽略所有 node_modules 中的文件 ，导致条件编译失效，需要通过配置 <code>vue.config.js</code> 解决：<div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 在根目录创建 vue.config.js 文件，并配置如下</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#F07178;">transpileDependencies</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@dcloudio/uni-ui</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 如果是 vue3 + vite, 无需添加配置</span></span>
<span class="line"></span></code></pre></div></li><li>uni-ui 是uni-app内置组件的扩展。注意与web开发不同，uni-ui不包括基础组件，它是基础组件的补充。web开发中有的开发者习惯用一个ui库完成所有开发，但在uni-app体系中，推荐开发者首先使用性能更高的基础组件，然后按需引入必要的扩展组件。</li><li><code>uni-ui</code> 不支持使用 <code>Vue.use()</code> 的方式安装</li></ul>`,39),o=[l];function p(r,c,i,d,u,y){return e(),s("div",null,o)}const F=n(t,[["render",p]]);export{g as __pageData,F as default};