import{_ as t,c as e,o as a,N as s}from"./chunks/framework.fc67cb9d.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/arrayBufferToBase64.md","lastUpdated":1685603474000}'),n={name:"api/arrayBufferToBase64.md"},r=s(`<h3 id="uni-arraybuffertobase64-arraybuffer" tabindex="-1">uni.arrayBufferToBase64(arrayBuffer) <a class="header-anchor" href="#uni-arraybuffertobase64-arraybuffer" aria-label="Permalink to &quot;uni.arrayBufferToBase64(arrayBuffer)&quot;">​</a></h3><p>将 ArrayBuffer 对象转成 Base64 字符串</p><p><strong>平台差异说明</strong></p><table><thead><tr><th style="text-align:center;">App</th><th style="text-align:center;">H5</th><th style="text-align:center;">微信小程序</th><th style="text-align:center;">支付宝小程序</th><th style="text-align:center;">百度小程序</th><th style="text-align:center;">字节跳动小程序、飞书小程序</th><th style="text-align:center;">快手小程序</th><th style="text-align:center;">京东小程序</th></tr></thead><tbody><tr><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">x</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td></tr></tbody></table><p><strong>参数说明</strong></p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">arrayBuffer</td><td style="text-align:left;">ArrayBuffer</td><td style="text-align:left;">是</td><td style="text-align:left;">要转换成 Base64 字符串的 ArrayBuffer 对象</td></tr></tbody></table><p><strong>示例</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> arrayBuffer </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Uint8Array</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">55</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">55</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">55</span><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> base64 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">arrayBufferToBase64</span><span style="color:#A6ACCD;">(arrayBuffer)</span></span>
<span class="line"></span></code></pre></div>`,8),l=[r];function o(p,c,y,i,d,f){return a(),e("div",null,l)}const A=t(n,[["render",o]]);export{g as __pageData,A as default};