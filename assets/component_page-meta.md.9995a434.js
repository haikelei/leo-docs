import{_ as n,c as a,o as t,N as l,x as s}from"./chunks/framework.fc67cb9d.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"component/page-meta.md","lastUpdated":1685603474000}'),e={name:"component/page-meta.md"},o=l('<h4 id="page-meta" tabindex="-1">page-meta <a class="header-anchor" href="#page-meta" aria-label="Permalink to &quot;page-meta&quot;">​</a></h4><p>页面属性配置节点，用于指定页面的一些属性、监听页面事件。可部分替代pages.json的功能。</p><p>从微信基础库2.9.0开始，新增了<code>page-meta</code>组件，它是一个特殊的标签，有点类似html里的header标签。页面的背景色、原生导航栏的参数，都可以写在<code>page-meta</code>里。HBuilderX 2.6.3+ 支持了这个组件，并且全平台都实现了。</p><p>从某种意义讲，<code>page-meta</code>对pages.json有一定替代作用，可以让页面的配置和页面内容代码写在一个vue文件中。它还可以实现通过变量绑定来控制页面配置。但它的性能不如pages.json的配置，在新页面加载时，渲染速度还是pages.json方式的写法更快。</p><p><code>page-meta</code>只能是页面内的第一个节点。可以配合 <a href="https://uniapp.dcloud.io/component/navigation-bar" target="_blank" rel="noreferrer">navigation-bar</a> 组件一同使用。</p><p><strong>平台差异说明</strong></p><table><thead><tr><th style="text-align:center;">App</th><th style="text-align:center;">H5</th><th style="text-align:center;">微信小程序</th><th style="text-align:center;">支付宝小程序</th><th style="text-align:center;">百度小程序</th><th style="text-align:center;">字节跳动小程序</th><th style="text-align:center;">飞书小程序</th><th style="text-align:center;">QQ小程序</th><th style="text-align:center;">快手小程序</th><th style="text-align:center;">京东小程序</th></tr></thead><tbody><tr><td style="text-align:center;">√ 2.6.3+</td><td style="text-align:center;">2.6.3+</td><td style="text-align:center;">√ 2.9.0+</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">x</td></tr></tbody></table><p>从HBuilderX 2.6.3起，编译到所有平台均支持<code>page-meta</code>，但编译到微信时，受微信基础库版本限制；编译到其他平台不受平台版本限制。</p><p><strong>属性说明</strong></p>',9),p=s("table",null,[s("thead",null,[s("tr",null,[s("th",{style:{"text-align":"left"}},"属性"),s("th",{style:{"text-align":"left"}},"类型"),s("th",{style:{"text-align":"left"}},"默认值"),s("th",{style:{"text-align":"left"}},"必填"),s("th",{style:{"text-align":"left"}},"说明"),s("th",{style:{"text-align":"left"}},"版本要求/平台差异说明")])]),s("tbody",null,[s("tr",null,[s("td",{style:{"text-align":"left"}},"background-text-style"),s("td",{style:{"text-align":"left"}},"string"),s("td",{style:{"text-align":"left"}}),s("td",{style:{"text-align":"left"}},"否"),s("td",{style:{"text-align":"left"}},"下拉背景字体、loading 图的样式，仅支持 dark 和 light"),s("td",{style:{"text-align":"left"}},"微信基础库 2.9.0")]),s("tr",null,[s("td",{style:{"text-align":"left"}},"background-color"),s("td",{style:{"text-align":"left"}},"string"),s("td",{style:{"text-align":"left"}}),s("td",{style:{"text-align":"left"}},"否"),s("td",{style:{"text-align":"left"}},"窗口的背景色，必须为十六进制颜色值"),s("td",{style:{"text-align":"left"}},"微信基础库 2.9.0")]),s("tr",null,[s("td",{style:{"text-align":"left"}},"background-color-top"),s("td",{style:{"text-align":"left"}},"string"),s("td",{style:{"text-align":"left"}}),s("td",{style:{"text-align":"left"}},"否"),s("td",{style:{"text-align":"left"}},"顶部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持"),s("td",{style:{"text-align":"left"}},"微信基础库 2.9.0")]),s("tr",null,[s("td",{style:{"text-align":"left"}},"background-color-bottom"),s("td",{style:{"text-align":"left"}},"string"),s("td",{style:{"text-align":"left"}}),s("td",{style:{"text-align":"left"}},"否"),s("td",{style:{"text-align":"left"}},"底部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持"),s("td",{style:{"text-align":"left"}},"微信基础库 2.9.0")]),s("tr",null,[s("td",{style:{"text-align":"left"}},"scroll-top"),s("td",{style:{"text-align":"left"}},"string"),s("td",{style:{"text-align":"left"}},'""'),s("td",{style:{"text-align":"left"}},"否"),s("td",{style:{"text-align":"left"}},"滚动位置，可以使用 px 或者 rpx 为单位，在被设置时，页面会滚动到对应位置"),s("td",{style:{"text-align":"left"}},"微信基础库 2.9.0、H5 3.7.0、App-vue 3.7.0")]),s("tr",null,[s("td",{style:{"text-align":"left"}},"scroll-duration"),s("td",{style:{"text-align":"left"}},"number"),s("td",{style:{"text-align":"left"}},"300"),s("td",{style:{"text-align":"left"}},"否"),s("td",{style:{"text-align":"left"}},"滚动动画时长"),s("td",{style:{"text-align":"left"}},"微信基础库 2.9.0")]),s("tr",null,[s("td",{style:{"text-align":"left"}},"page-style"),s("td",{style:{"text-align":"left"}},"string"),s("td",{style:{"text-align":"left"}},'""'),s("td",{style:{"text-align":"left"}},"否"),s("td",{style:{"text-align":"left"}},"页面根节点样式，页面根节点是所有页面节点的祖先节点，相当于 HTML 中的 body 节点"),s("td",{style:{"text-align":"left"}},"微信基础库 2.9.0、H5 2.6.7、App-vue 2.6.7")]),s("tr",null,[s("td",{style:{"text-align":"left"}},"root-font-size"),s("td",{style:{"text-align":"left"}},"string"),s("td",{style:{"text-align":"left"}},'""'),s("td",{style:{"text-align":"left"}},"否"),s("td",{style:{"text-align":"left"}},"页面的根字体大小，页面中的所有 rem 单位，将使用这个字体大小作为参考值，即 1rem 等于这个字体大小"),s("td",{style:{"text-align":"left"}},"微信基础库 2.9.0、H5 2.6.7、App-vue 2.6.7")]),s("tr",null,[s("td",{style:{"text-align":"left"}},"enable-pull-down-refresh"),s("td",{style:{"text-align":"left"}},"Boolean"),s("td",{style:{"text-align":"left"}},'""'),s("td",{style:{"text-align":"left"}},"否"),s("td",{style:{"text-align":"left"}},"是否开启下拉刷新"),s("td",{style:{"text-align":"left"}},"App 2.6.7")]),s("tr",null,[s("td",{style:{"text-align":"left"}},"@resize"),s("td",{style:{"text-align":"left"}},"eventhandle"),s("td",{style:{"text-align":"left"}}),s("td",{style:{"text-align":"left"}},"否"),s("td",{style:{"text-align":"left"}},"页面尺寸变化时会触发 resize 事件， event.detail = { size: { windowWidth, windowHeight } }"),s("td",{style:{"text-align":"left"}},"微信基础库 2.9.0")]),s("tr",null,[s("td",{style:{"text-align":"left"}},"@scroll"),s("td",{style:{"text-align":"left"}},"eventhandle"),s("td",{style:{"text-align":"left"}}),s("td",{style:{"text-align":"left"}},"否"),s("td",{style:{"text-align":"left"},scrollTop:""},"页面滚动时会触发 scroll 事件， event.detail ="),s("td",{style:{"text-align":"left"}},"微信基础库 2.9.0")]),s("tr",null,[s("td",{style:{"text-align":"left"}},"@scrolldone"),s("td",{style:{"text-align":"left"}},"eventhandle"),s("td",{style:{"text-align":"left"}}),s("td",{style:{"text-align":"left"}},"否"),s("td",{style:{"text-align":"left"}},"如果通过改变 scroll-top 属性来使页面滚动，页面滚动结束后会触发 scrolldone 事件"),s("td",{style:{"text-align":"left"}},"微信基础库 2.9.0")])])],-1),c=l(`<p><strong>注意</strong></p><ul><li><code>&lt;page-meta&gt;</code> 目前支持的配置仅为上表所列，并不支持所有 page.json 的配置</li><li><code>&lt;page-meta&gt;</code> 与 pages.json 的设置相冲突时，会覆盖 page.json 的配置</li></ul><h4 id="head标签-head" tabindex="-1">head标签@head <a class="header-anchor" href="#head标签-head" aria-label="Permalink to &quot;head标签@head&quot;">​</a></h4><blockquote><p>新增于<code>HBuilderX 3.3.0</code></p></blockquote><p>vue3 下还可以在<code>page-meta</code>内使用浏览器原生 head 标签，<strong>此用法仅 vue3 版本 ssr 可用</strong>，方便在 编译为 ssr 时进行 seo 优化。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">page-meta</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:background-text-style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bgTextStyle</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:background-color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bgColor</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:background-color-top</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bgColorTop</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:background-color-bottom</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bgColorBottom</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:scroll-top</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scrollTop</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">page-style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">color: green</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">root-font-size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">16px</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> // 仅vue3 ssr支持，此节点下的元素会被拷贝到h5页面的head标签下，可以利用此特性进行seo优化</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">keyword</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">title</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">page-meta</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">content</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">				keyword</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">serverPrefetch</span><span style="color:#89DDFF;">(){</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 仅vue3版本支持</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">keyword</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ServerKeyword</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">onLoad</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h4 id="示例代码" tabindex="-1">示例代码 <a class="header-anchor" href="#示例代码" aria-label="Permalink to &quot;示例代码&quot;">​</a></h4><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">page-meta</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:background-text-style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bgTextStyle</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:background-color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bgColor</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:background-color-top</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bgColorTop</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:background-color-bottom</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bgColorBottom</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:scroll-top</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scrollTop</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">page-style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">color: green</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">root-font-size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">16px</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">navigation-bar</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">:title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nbTitle</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">:loading</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nbLoading</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">:front-color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nbFrontColor</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">:background-color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nbBackgroundColor</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">page-meta</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">content</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        bgTextStyle</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dark</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        scrollTop</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">200rpx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        bgColor</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#ff0000</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        bgColorTop</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#00ff00</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        bgColorBottom</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#0000ff</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        nbTitle</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">标题</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        nbLoading</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        nbFrontColor</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#000000</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        nbBackgroundColor</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#ffffff</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">onLoad</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,8),r=[o,p,c];function y(D,F,i,d,g,C){return t(),a("div",null,r)}const u=n(e,[["render",y]]);export{f as __pageData,u as default};
