import{_ as t,c as s,o as e,N as a}from"./chunks/framework.fc67cb9d.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/system/compass.md","lastUpdated":1685603474000}'),l={name:"api/system/compass.md"},n=a(`<h3 id="uni-oncompasschange-callback" tabindex="-1">uni.onCompassChange(CALLBACK) <a class="header-anchor" href="#uni-oncompasschange-callback" aria-label="Permalink to &quot;uni.onCompassChange(CALLBACK)&quot;">​</a></h3><p>监听罗盘数据，频率：5次/秒，接口调用后会自动开始监听，可使用 <code>uni.offCompassChange</code> 取消监听。</p><p><strong>CALLBACK 返回参数</strong></p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">direction</td><td style="text-align:left;">Number</td><td style="text-align:left;">面对的方向度数</td></tr></tbody></table><p><strong>Tips</strong></p><ul><li>H5端获取罗盘信息，需要部署在 <strong>https</strong> 服务上，本地预览（localhost）仍然可以使用 http 协议。</li></ul><p><strong>示例</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> callback </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">direction</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onCompassChange</span><span style="color:#A6ACCD;">(callback)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="uni-offcompasschange-callback" tabindex="-1">uni.offCompassChange(CALLBACK) <a class="header-anchor" href="#uni-offcompasschange-callback" aria-label="Permalink to &quot;uni.offCompassChange(CALLBACK)&quot;">​</a></h3><p>取消监听罗盘数据。</p><p><strong>平台差异说明</strong></p><table><thead><tr><th style="text-align:center;">App</th><th style="text-align:center;">H5</th><th style="text-align:center;">微信小程序</th><th style="text-align:center;">支付宝小程序</th><th style="text-align:center;">百度小程序</th><th style="text-align:center;">字节跳动小程序、飞书小程序</th><th style="text-align:center;">QQ小程序</th><th style="text-align:center;">快手小程序</th><th style="text-align:center;">京东小程序</th></tr></thead><tbody><tr><td style="text-align:center;">HBuilderX 2.9.6+</td><td style="text-align:center;">HBuilderX 2.9.6+</td><td style="text-align:center;">基础库 2.9.3+</td><td style="text-align:center;">x</td><td style="text-align:center;">x</td><td style="text-align:center;">x</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td></tr></tbody></table><p><strong>示例</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> callback </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">direction</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onCompassChange</span><span style="color:#A6ACCD;">(callback)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 和 onCompassChange 传入同一个函数即可</span></span>
<span class="line"><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">offCompassChange</span><span style="color:#A6ACCD;">(callback)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p><strong>Tips</strong></p><ul><li><code>CALLBACK</code>为调用<code>uni.onCompassChange</code>时传入的<code>CALLBACK</code></li></ul><h3 id="uni-startcompass-object" tabindex="-1">uni.startCompass(OBJECT) <a class="header-anchor" href="#uni-startcompass-object" aria-label="Permalink to &quot;uni.startCompass(OBJECT)&quot;">​</a></h3><p>开始监听罗盘数据。</p><p><strong>平台差异说明</strong></p><table><thead><tr><th style="text-align:center;">App</th><th style="text-align:center;">H5</th><th style="text-align:center;">微信小程序</th><th style="text-align:center;">支付宝小程序</th><th style="text-align:center;">百度小程序</th><th style="text-align:center;">字节跳动小程序、飞书小程序</th><th style="text-align:center;">QQ小程序</th><th style="text-align:center;">快手小程序</th><th style="text-align:center;">京东小程序</th></tr></thead><tbody><tr><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td></tr></tbody></table><p><strong>OBJECT 参数说明</strong></p><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">success</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用成功的回调</td></tr><tr><td style="text-align:left;">fail</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用失败的回调函数</td></tr><tr><td style="text-align:left;">complete</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用结束的回调函数（调用成功、失败都会执行）</td></tr></tbody></table><p><strong>示例</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">startCompass</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="uni-stopcompass-object" tabindex="-1">uni.stopCompass(OBJECT) <a class="header-anchor" href="#uni-stopcompass-object" aria-label="Permalink to &quot;uni.stopCompass(OBJECT)&quot;">​</a></h3><p>停止监听罗盘数据。</p><p><strong>OBJECT 参数说明</strong></p><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">success</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用成功的回调</td></tr><tr><td style="text-align:left;">fail</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用失败的回调函数</td></tr><tr><td style="text-align:left;">complete</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用结束的回调函数（调用成功、失败都会执行）</td></tr></tbody></table><p><strong>示例</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stopCompass</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,30),o=[n];function p(c,r,i,d,y,g){return e(),s("div",null,o)}const A=t(l,[["render",p]]);export{C as __pageData,A as default};
