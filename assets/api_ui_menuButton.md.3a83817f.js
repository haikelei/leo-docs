import{_ as t,c as e,o as n,N as l}from"./chunks/framework.fc67cb9d.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/ui/menuButton.md","lastUpdated":1685603474000}'),a={name:"api/ui/menuButton.md"},r=l(`<h3 id="getmenubuttonboundingclientrect" tabindex="-1">getMenuButtonBoundingClientRect() <a class="header-anchor" href="#getmenubuttonboundingclientrect" aria-label="Permalink to &quot;getMenuButtonBoundingClientRect()&quot;">​</a></h3><p>在小程序平台，如果原生导航栏被隐藏，仍然在右上角会有一个悬浮按钮，微信下也被称为胶囊按钮。本API用于获取小程序下该菜单按钮的布局位置信息，方便开发者布局顶部内容时避开该按钮。</p><p>坐标信息以屏幕左上角为原点。</p><p><strong>平台差异说明</strong></p><table><thead><tr><th style="text-align:center;">App</th><th style="text-align:center;">H5</th><th style="text-align:center;">微信小程序</th><th style="text-align:center;">支付宝小程序</th><th style="text-align:center;">百度小程序</th><th style="text-align:center;">字节跳动小程序</th><th style="text-align:center;">飞书小程序</th><th style="text-align:center;">QQ小程序</th></tr></thead><tbody><tr><td style="text-align:center;">x</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td></tr></tbody></table><p><strong>返回值说明</strong></p><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">类型</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">width</td><td style="text-align:center;">number</td><td style="text-align:center;">宽度，单位：px</td></tr><tr><td style="text-align:center;">height</td><td style="text-align:center;">number</td><td style="text-align:center;">高度，单位：px</td></tr><tr><td style="text-align:center;">top</td><td style="text-align:center;">number</td><td style="text-align:center;">上边界坐标，单位：px</td></tr><tr><td style="text-align:center;">right</td><td style="text-align:center;">number</td><td style="text-align:center;">右边界坐标，单位：px</td></tr><tr><td style="text-align:center;">bottom</td><td style="text-align:center;">number</td><td style="text-align:center;">下边界坐标，单位：px</td></tr><tr><td style="text-align:center;">left</td><td style="text-align:center;">number</td><td style="text-align:center;">左边界坐标，单位：px</td></tr></tbody></table><p><strong>示例</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> menuButtonInfo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getMenuButtonBoundingClientRect</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><p><strong>注意</strong></p><ul><li>支付宝小程序：其逻辑与微信小程序不同，它提供了菜单点击后按钮的自定义功能，可以选择显示那些系统按钮，<a href="https://docs.alipay.com/mini/api/optionmenuitem" target="_blank" rel="noreferrer">规范详情</a></li></ul>`,11),s=[r];function i(d,c,o,p,g,y){return n(),e("div",null,s)}const u=t(a,[["render",i]]);export{h as __pageData,u as default};
