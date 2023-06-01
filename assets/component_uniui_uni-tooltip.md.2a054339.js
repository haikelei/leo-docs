import{_ as s,c as n,o as a,N as l}from"./chunks/framework.fc67cb9d.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"component/uniui/uni-tooltip.md","lastUpdated":1685603474000}'),t={name:"component/uniui/uni-tooltip.md"},o=l(`<div class="tip custom-block"><p class="custom-block-title">组件名：uni-tooltip</p><blockquote><p>代码块： <code>utooltip</code></p></blockquote><p><a href="https://ext.dcloud.net.cn/plugin?name=uni-tooltip" target="_blank" rel="noreferrer">点击下载&amp;安装</a></p></div><p>常用于展示鼠标 hover 时的提示信息。</p><blockquote><p>遮挡不住原生组件</p></blockquote><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><h3 id="安装方式" tabindex="-1">安装方式 <a class="header-anchor" href="#安装方式" aria-label="Permalink to &quot;安装方式&quot;">​</a></h3><p>本组件符合<a href="https://uniapp.dcloud.io/collocation/pages?id=easycom" target="_blank" rel="noreferrer">easycom</a>规范，<code>HBuilderX 2.5.5</code>起，只需将本组件导入项目，在页面<code>template</code>中即可直接使用，无需在页面中<code>import</code>和注册<code>components</code>。</p><p>如需通过<code>npm</code>方式使用<code>uni-ui</code>组件，另见文档：<a href="https://ext.dcloud.net.cn/plugin?id=55" target="_blank" rel="noreferrer">https://ext.dcloud.net.cn/plugin?id=55</a></p><h3 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h3><p>在 <code>template</code> 中使用组件</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uni-tooltip</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tooltip显示的内容</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">被包裹的组件</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">uni-tooltip</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="tooltip-props" tabindex="-1">Tooltip Props <a class="header-anchor" href="#tooltip-props" aria-label="Permalink to &quot;Tooltip Props&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">属性名</th><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">content</td><td style="text-align:center;">String</td><td style="text-align:center;"></td><td style="text-align:center;">弹出层显示的内容</td></tr><tr><td style="text-align:center;">placement</td><td style="text-align:center;">String</td><td style="text-align:center;">left</td><td style="text-align:center;">Tooltip 的出现位置, 目前只支持 left</td></tr></tbody></table><h3 id="tooltip-slots" tabindex="-1">Tooltip Slots <a class="header-anchor" href="#tooltip-slots" aria-label="Permalink to &quot;Tooltip Slots&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">default</td><td style="text-align:center;">被 Tooltip 包裹的组件</td></tr><tr><td style="text-align:center;">content</td><td style="text-align:center;">弹出层插槽</td></tr></tbody></table><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">注意</p><p>直接拷贝示例代码，无法运行 ，示例依赖了 <code>uni-card</code> <code>uni-section</code> <code>uni-scss</code> 等多个组件。</p><p>请到 <a href="https://ext.dcloud.net.cn/plugin?name=uni-tooltip" target="_blank" rel="noreferrer">组件下载页面</a> ，在页面右侧选择 <code>使用 HBuilderX导入示例项目</code> ，体验完整组件示例。</p></div><p>:::preview <a href="https://hellouniapp.dcloud.net.cn/pages/extUI/tooltip/tooltip" target="_blank" rel="noreferrer">https://hellouniapp.dcloud.net.cn/pages/extUI/tooltip/tooltip</a></p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">container</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uni-card</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">is-full</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:is-shadow</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">false</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">text</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">uni-h6</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">常用于展示鼠标 hover 时的提示信息，注意：无法覆盖原生组件</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">uni-card</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uni-section</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">基础用法</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">line</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">padding</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uni-tooltip</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">提示文字</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">uni-section</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uni-section</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">插槽用法</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">line</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">padding</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uni-tooltip</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">提示文字</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">一段文字</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">uni-tooltip</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">uni-section</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uni-section</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">自定义弹层宽度</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">line</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">padding</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uni-tooltip</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">提示文字</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">一段文字</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">uni-tooltip</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">uni-section</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">components</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{};</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scss</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>:::</p><p><a href="https://hellouniapp.dcloud.net.cn/pages/extUI/tooltip/tooltip" target="_blank" rel="noreferrer">完整示例演示</a></p>`,21),p=[o];function e(c,r,D,F,y,i){return a(),n("div",null,p)}const C=s(t,[["render",e]]);export{u as __pageData,C as default};