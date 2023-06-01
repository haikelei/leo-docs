import{_ as s,c as a,o as n,N as t}from"./chunks/framework.fc67cb9d.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/other/update.md","lastUpdated":1685603474000}'),l={name:"api/other/update.md"},e=t(`<h3 id="uni-getupdatemanager" tabindex="-1">uni.getUpdateManager() <a class="header-anchor" href="#uni-getupdatemanager" aria-label="Permalink to &quot;uni.getUpdateManager()&quot;">​</a></h3><p>本API返回<strong>全局唯一</strong>的版本更新管理器对象： updateManager，用于管理小程序更新。</p><p>App的更新不使用本API，另见文档：</p><ul><li>整包更新：<a href="https://ask.dcloud.net.cn/article/34972" target="_blank" rel="noreferrer">https://ask.dcloud.net.cn/article/34972</a></li><li>资源文件热更新(wgt升级)：<a href="https://ask.dcloud.net.cn/article/35667" target="_blank" rel="noreferrer">https://ask.dcloud.net.cn/article/35667</a></li></ul><p><strong>平台差异说明</strong></p><table><thead><tr><th style="text-align:center;">App</th><th style="text-align:center;">H5</th><th style="text-align:center;">微信小程序</th><th style="text-align:center;">支付宝小程序</th><th style="text-align:center;">百度小程序</th><th style="text-align:center;">字节跳动小程序、飞书小程序</th><th style="text-align:center;">QQ小程序</th><th style="text-align:center;">快手小程序</th><th style="text-align:center;">京东小程序</th></tr></thead><tbody><tr><td style="text-align:center;">x</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td></tr></tbody></table><p><strong>updateManager 对象的方法列表：</strong></p><table><thead><tr><th>方法</th><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>onCheckForUpdate</td><td>callback</td><td>当向小程序后台请求完新版本信息，会进行回调</td></tr><tr><td>onUpdateReady</td><td>callback</td><td>当新版本下载完成，会进行回调</td></tr><tr><td>onUpdateFailed</td><td>callback</td><td>当新版本下载失败，会进行回调</td></tr><tr><td>applyUpdate</td><td></td><td>当新版本下载完成，调用该方法会强制当前小程序应用上新版本并重启</td></tr></tbody></table><p><strong>onCheckForUpdate(callback) 回调结果说明：</strong></p><table><thead><tr><th>属性</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>hasUpdate</td><td>Boolean</td><td>是否有新的版本</td></tr></tbody></table><p><strong>代码示例</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> updateManager </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getUpdateManager</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">updateManager</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onCheckForUpdate</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 请求完新版本信息的回调</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">hasUpdate</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">updateManager</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onUpdateReady</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">showModal</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">更新提示</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    content</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">新版本已经准备好，是否重启应用？</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    success</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">confirm</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">updateManager</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">applyUpdate</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">updateManager</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onUpdateFailed</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 新的版本下载失败</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,12),p=[e];function o(r,c,y,F,D,d){return n(),a("div",null,p)}const C=s(l,[["render",o]]);export{A as __pageData,C as default};