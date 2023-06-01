import{_ as t,c as e,o as s,N as n}from"./chunks/framework.fc67cb9d.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/other/set-enable-debug.md","lastUpdated":1685603474000}'),a={name:"api/other/set-enable-debug.md"},l=n(`<h3 id="uni-setenabledebug-object" tabindex="-1">uni.setEnableDebug(OBJECT) <a class="header-anchor" href="#uni-setenabledebug-object" aria-label="Permalink to &quot;uni.setEnableDebug(OBJECT)&quot;">​</a></h3><p>设置是否打开调试开关。此开关对正式版也能生效。</p><p><strong>平台差异说明</strong></p><table><thead><tr><th style="text-align:center;">App</th><th style="text-align:center;">H5</th><th style="text-align:center;">微信小程序</th><th style="text-align:center;">支付宝小程序</th><th style="text-align:center;">百度小程序</th><th style="text-align:center;">字节跳动小程序、飞书小程序</th><th style="text-align:center;">QQ小程序</th><th style="text-align:center;">快手小程序</th><th style="text-align:center;">京东小程序</th></tr></thead><tbody><tr><td style="text-align:center;">x</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td></tr></tbody></table><p><strong>OBJECT说明</strong></p><table><thead><tr><th>属性</th><th>类型</th><th>必填</th><th>说明</th><th>平台差异说明</th></tr></thead><tbody><tr><td>enableDebug</td><td>boolean</td><td>是</td><td>是否打开调试</td><td></td></tr><tr><td>success</td><td>function</td><td>否</td><td>接口调用成功的回调函数</td><td>微信小程序</td></tr><tr><td>fail</td><td>function</td><td>否</td><td>接口调用失败的回调函数</td><td>微信小程序</td></tr><tr><td>complete</td><td>function</td><td>否</td><td>接口调用结束的回调函数（调用成功、失败都会执行）</td><td>微信小程序</td></tr></tbody></table><h4 id="示例代码" tabindex="-1">示例代码 <a class="header-anchor" href="#示例代码" aria-label="Permalink to &quot;示例代码&quot;">​</a></h4><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 打开调试</span></span>
<span class="line"><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setEnableDebug</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">enableDebug</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 关闭调试</span></span>
<span class="line"><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setEnableDebug</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">enableDebug</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,8),o=[l];function p(r,d,c,i,h,y){return s(),e("div",null,o)}const D=t(a,[["render",p]]);export{g as __pageData,D as default};