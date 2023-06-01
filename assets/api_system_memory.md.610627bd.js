import{_ as t,c as n,o as e,N as s}from"./chunks/framework.fc67cb9d.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/system/memory.md","lastUpdated":1685603474000}'),a={name:"api/system/memory.md"},l=s(`<h3 id="uni-onmemorywarning-callback" tabindex="-1">uni.onMemoryWarning(CALLBACK) <a class="header-anchor" href="#uni-onmemorywarning-callback" aria-label="Permalink to &quot;uni.onMemoryWarning(CALLBACK)&quot;">​</a></h3><p>监听内存不足告警事件。</p><p>当 iOS/Android 向小程序进程发出内存警告时，触发该事件。Android 下有告警等级划分，iOS 无等级划分。</p><p><strong>平台差异说明</strong></p><table><thead><tr><th style="text-align:center;">App</th><th style="text-align:center;">H5</th><th style="text-align:center;">微信小程序</th><th style="text-align:center;">支付宝小程序</th><th style="text-align:center;">百度小程序</th><th style="text-align:center;">字节跳动小程序、飞书小程序</th><th style="text-align:center;">QQ小程序</th><th style="text-align:center;">快手小程序</th><th style="text-align:center;">京东小程序</th></tr></thead><tbody><tr><td style="text-align:center;">Android 3.6.9+、iOS 3.6.11+</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td></tr></tbody></table><blockquote><p>本 API 是 <a href="https://uniapp.dcloud.net.cn/api/extapi.html" target="_blank" rel="noreferrer">uni ext api</a>，需下载插件：<a href="https://ext.dcloud.net.cn/plugin?id=10071" target="_blank" rel="noreferrer">https://ext.dcloud.net.cn/plugin?id=10071</a></p></blockquote><p><strong>CALLBACK返回参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>level</td><td>Number</td><td>仅 Android 有该字段，对应系统内存告警等级宏定义</td></tr></tbody></table><p><strong>level 的合法值</strong></p><table><thead><tr><th>值</th><th>对应的Android告警值</th><th>说明</th></tr></thead><tbody><tr><td>5</td><td>TRIM_MEMORY_RUNNING_MODERATE</td><td>进程在后台LRU列表的中间；释放内存可以帮助系统保持列表中稍后运行的其他进程，以获得更好的整体性能。</td></tr><tr><td>10</td><td>TRIM_MEMORY_RUNNING_LOW</td><td>该进程不是可消耗的后台进程，但设备内存不足</td></tr><tr><td>15</td><td>TRIM_MEMORY_RUNNING_CRITICAL</td><td>该进程不是可消耗的后台进程，但设备运行的内存极低，即将无法保持任何后台进程运行。</td></tr></tbody></table><p><strong>代码示例</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> callback </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">onMemoryWarningReceive</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onMemoryWarning</span><span style="color:#A6ACCD;">(callback)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="uni-offmemorywarning-callback" tabindex="-1">uni.offMemoryWarning(CALLBACK) <a class="header-anchor" href="#uni-offmemorywarning-callback" aria-label="Permalink to &quot;uni.offMemoryWarning(CALLBACK)&quot;">​</a></h3><p>取消监听内存不足告警事件。不传入 callback 则取消所有监听。</p><p><strong>平台差异说明</strong></p><table><thead><tr><th style="text-align:center;">App</th><th style="text-align:center;">H5</th><th style="text-align:center;">微信小程序</th><th style="text-align:center;">支付宝小程序</th><th style="text-align:center;">百度小程序</th><th style="text-align:center;">字节跳动小程序、飞书小程序</th><th style="text-align:center;">QQ小程序</th><th style="text-align:center;">快手小程序</th><th style="text-align:center;">京东小程序</th></tr></thead><tbody><tr><td style="text-align:center;">x</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td></tr></tbody></table><table><thead><tr><th>属性</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>回调函数</td><td>Function</td><td>内存不足告警事件的回调函数</td></tr></tbody></table><p><strong>代码示例</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> callback </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onMemoryWarning</span><span style="color:#A6ACCD;">(callback)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 和 onMemoryWarning 传入同一个函数即可</span></span>
<span class="line"><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">offMemoryWarning</span><span style="color:#A6ACCD;">(callback)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p><strong>Tips</strong></p><ul><li><code>CALLBACK</code>为调用<code>uni.onMemoryWarning</code>时传入的<code>CALLBACK</code></li></ul>`,21),o=[l];function r(p,c,i,d,y,h){return e(),n("div",null,o)}const D=t(a,[["render",r]]);export{g as __pageData,D as default};
