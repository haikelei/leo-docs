import{_ as s,c as n,o as a,N as l}from"./chunks/framework.fc67cb9d.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/uniscss-config.md","lastUpdated":1685603474000}'),p={name:"guide/uniscss-config.md"},o=l(`<p><code>uni.scss</code>文件的用途是为了方便整体控制应用的风格。比如按钮颜色、边框风格，<code>uni.scss</code>文件里预置了一批scss变量预置。</p><p><code>uni-app</code> 官方扩展插件（uni ui）及 <a href="https://ext.dcloud.net.cn" target="_blank" rel="noreferrer">插件市场</a> 上很多三方插件均使用了这些样式变量，如果你是插件开发者，建议你使用 scss 预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App。</p><p><code>uni.scss</code>是一个特殊文件，在代码中无需 import 这个文件即可在scss代码中使用这里的样式变量。uni-app的编译器在webpack配置中特殊处理了这个uni.scss，使得每个scss文件都被注入这个uni.scss，达到全局可用的效果。如果开发者想要less、stylus的全局使用，需要在vue.config.js中自行配置webpack策略。</p><p><strong>注意：</strong></p><ol><li>如要使用这些常用变量，需要在 HBuilderX 里面安装 scss 插件；</li><li>使用时需要在 style 节点上加上 <code>lang=&quot;scss&quot;</code>。</li></ol><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scss</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>pages.json不支持scss，原生导航栏和tabbar的动态修改只能使用js api</li></ol><p><strong>以下是 uni.scss 的相关变量：</strong></p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* 颜色变量 */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 行为相关颜色 */</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">uni-color-primary</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">007aff;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">uni-color-success</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">4cd964;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">uni-color-warning</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">f0ad4e;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">uni-color-error</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">dd524d;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 文字基本颜色 */</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">uni-text-color</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">333;//基本色</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">uni-text-color-inverse</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">fff;//反色</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">uni-text-color-grey</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">999;//辅助灰色，如加载更多的提示信息</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">uni-text-color-placeholder</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">808080;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">uni-text-color-disable</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">c0c0c0;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 背景颜色 */</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">uni-bg-color</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ffffff;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">uni-bg-color-grey</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">f8f8f8;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">uni-bg-color-hover</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">f1f1f1;//点击状态颜色</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">uni-bg-color-mask</span><span style="color:#A6ACCD;">:rgba(0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 0</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">4</span><span style="color:#A6ACCD;">);//遮罩颜色</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 边框颜色 */</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">uni-border-color</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">c8c7cc;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 尺寸变量 */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 文字尺寸 */</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">uni-font-size-sm</span><span style="color:#A6ACCD;">:24rpx;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">uni-font-size-base</span><span style="color:#A6ACCD;">:28rpx;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">uni-font-size-lg</span><span style="color:#A6ACCD;">:32rpx;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 图片尺寸 */</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">uni-img-size-sm</span><span style="color:#A6ACCD;">:40rpx;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">uni-img-size-base</span><span style="color:#A6ACCD;">:52rpx;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">uni-img-size-lg</span><span style="color:#A6ACCD;">:80rpx;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* Border Radius */</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">uni-border-radius-sm</span><span style="color:#A6ACCD;">: 4rpx;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">uni-border-radius-base</span><span style="color:#A6ACCD;">: 6rpx;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">uni-border-radius-lg</span><span style="color:#A6ACCD;">: 12rpx;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">uni-border-radius-circle</span><span style="color:#A6ACCD;">: 50%;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 水平间距 */</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">uni-spacing-row-sm</span><span style="color:#A6ACCD;">: 10px;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">uni-spacing-row-base</span><span style="color:#A6ACCD;">: 20rpx;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">uni-spacing-row-lg</span><span style="color:#A6ACCD;">: 30rpx;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 垂直间距 */</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">uni-spacing-col-sm</span><span style="color:#A6ACCD;">: 8rpx;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">uni-spacing-col-base</span><span style="color:#A6ACCD;">: 16rpx;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">uni-spacing-col-lg</span><span style="color:#A6ACCD;">: 24rpx;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 透明度 */</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">uni-opacity-disabled</span><span style="color:#A6ACCD;">: 0.3; // 组件禁用态的透明度</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 文章场景相关 */</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">uni-color-title</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">2C405A; // 文章标题颜色</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">uni-font-size-title</span><span style="color:#A6ACCD;">:40rpx;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">uni-color-subtitle</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">555555; // 二级标题颜色</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">uni-font-size-subtitle</span><span style="color:#A6ACCD;">:36rpx;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">uni-color-paragraph</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">3F536E; // 文章段落颜色</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">uni-font-size-paragraph</span><span style="color:#A6ACCD;">:30rpx;</span></span>
<span class="line"></span></code></pre></div>`,9),e=[o];function c(t,r,C,i,y,A){return a(),n("div",null,e)}const B=s(p,[["render",c]]);export{F as __pageData,B as default};
