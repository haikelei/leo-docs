import{_ as t,c as e,o as l,N as n}from"./chunks/framework.fc67cb9d.js";const x=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/ui/navigationbar.md","lastUpdated":1685603474000}'),a={name:"api/ui/navigationbar.md"},s=n(`<h3 id="uni-setnavigationbartitle-object" tabindex="-1">uni.setNavigationBarTitle(OBJECT) <a class="header-anchor" href="#uni-setnavigationbartitle-object" aria-label="Permalink to &quot;uni.setNavigationBarTitle(OBJECT)&quot;">​</a></h3><p>动态设置当前页面的标题。</p><p><strong>OBJECT参数说明</strong></p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">title</td><td style="text-align:left;">String</td><td style="text-align:left;">是</td><td style="text-align:left;">页面标题</td></tr><tr><td style="text-align:left;">success</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用成功的回调函数</td></tr><tr><td style="text-align:left;">fail</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用失败的回调函数</td></tr><tr><td style="text-align:left;">complete</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用结束的回调函数（调用成功、失败都会执行）</td></tr></tbody></table><p><strong>示例</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setNavigationBarTitle</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">新的标题</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p><strong>注意</strong></p><ul><li>如果需要在页面进入时设置标题，可以在<code>onReady</code>内执行，以避免被框架内的修改所覆盖。如果必须在<code>onShow</code>内执行需要延迟一小段时间</li></ul><h3 id="uni-setnavigationbarcolor-object" tabindex="-1">uni.setNavigationBarColor(OBJECT) <a class="header-anchor" href="#uni-setnavigationbarcolor-object" aria-label="Permalink to &quot;uni.setNavigationBarColor(OBJECT)&quot;">​</a></h3><p>设置页面导航条颜色。<strong>如果需要进入页面就设置颜色，请延迟执行，防止被框架内设置颜色逻辑覆盖</strong></p><p><strong>平台差异说明</strong></p><table><thead><tr><th style="text-align:center;">App</th><th style="text-align:center;">H5</th><th style="text-align:center;">微信小程序</th><th style="text-align:center;">支付宝小程序</th><th style="text-align:center;">百度小程序</th><th style="text-align:center;">字节跳动小程序、飞书小程序</th><th style="text-align:center;">QQ小程序</th><th style="text-align:center;">快手小程序</th><th style="text-align:center;">京东小程序</th></tr></thead><tbody><tr><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td></tr></tbody></table><p><strong>OBJECT参数说明</strong></p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th><th style="text-align:left;">平台差异说明</th></tr></thead><tbody><tr><td style="text-align:left;">frontColor</td><td style="text-align:left;">String</td><td style="text-align:left;">是</td><td style="text-align:left;">前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000</td><td style="text-align:left;">App、H5、微信小程序、百度小程序、字节跳动小程序、QQ小程序、快手小程序、京东小程序</td></tr><tr><td style="text-align:left;">backgroundColor</td><td style="text-align:left;">String</td><td style="text-align:left;">是</td><td style="text-align:left;">背景颜色值，有效值为十六进制颜色</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">animation</td><td style="text-align:left;">Object</td><td style="text-align:left;">否</td><td style="text-align:left;">动画效果，<code>{duration,timingFunc}</code></td><td style="text-align:left;">微信小程序、百度小程序、QQ小程序、快手小程序、京东小程序</td></tr><tr><td style="text-align:left;">success</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用成功的回调函数</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">fail</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用失败的回调函数</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">complete</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用结束的回调函数（调用成功、失败都会执行）</td><td style="text-align:left;"> </td></tr></tbody></table><p><strong>注意</strong></p><ul><li>Android 上的 backgroundColor 参数有限制，黑色大于 rgb(30,30,30), 白色小于 rgb(235,235,235)</li><li>如果需要在页面进入时设置标题，可以在<code>onReady</code>内执行，以避免被框架内的修改所覆盖。如果必须在<code>onShow</code>内执行需要延迟一小段时间</li></ul><p><strong>animation 结构</strong></p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">duration</td><td style="text-align:left;">number</td><td style="text-align:left;">0</td><td style="text-align:left;">否</td><td style="text-align:left;">动画变化时间，单位 ms</td></tr><tr><td style="text-align:left;">timingFunc</td><td style="text-align:left;">String</td><td style="text-align:left;">&#39;linear&#39;</td><td style="text-align:left;">否</td><td style="text-align:left;">动画变化方式</td></tr></tbody></table><p><strong>animation.timingFunc 有效值</strong></p><table><thead><tr><th style="text-align:left;">值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">linear</td><td style="text-align:left;">动画从头到尾的速度是相同的。</td></tr><tr><td style="text-align:left;">easeIn</td><td style="text-align:left;">动画以低速开始</td></tr><tr><td style="text-align:left;">easeOut</td><td style="text-align:left;">动画以低速结束。</td></tr><tr><td style="text-align:left;">easeInOut</td><td style="text-align:left;">动画以低速开始和结束。</td></tr></tbody></table><p><strong>success返回参数说明</strong></p><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">errMsg</td><td style="text-align:left;">String</td><td style="text-align:left;">调用结果</td></tr></tbody></table><p><strong>示例</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setNavigationBarColor</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">frontColor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#ffffff</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">backgroundColor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#ff0000</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">animation</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">duration</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">400</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">timingFunc</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">easeIn</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="uni-shownavigationbarloading-object" tabindex="-1">uni.showNavigationBarLoading(OBJECT) <a class="header-anchor" href="#uni-shownavigationbarloading-object" aria-label="Permalink to &quot;uni.showNavigationBarLoading(OBJECT)&quot;">​</a></h3><p>在当前页面显示导航条加载动画。</p><p><strong>平台差异说明</strong></p><table><thead><tr><th style="text-align:center;">App</th><th style="text-align:center;">H5</th><th style="text-align:center;">微信小程序</th><th style="text-align:center;">支付宝小程序</th><th style="text-align:center;">百度小程序</th><th style="text-align:center;">字节跳动小程序、飞书小程序</th><th style="text-align:center;">QQ小程序</th><th style="text-align:center;">快手小程序</th><th style="text-align:center;">京东小程序</th></tr></thead><tbody><tr><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td></tr></tbody></table><p>App平台调用此API时会在屏幕中间悬浮显示loading</p><p><strong>OBJECT参数说明</strong></p><table><thead><tr><th>参数</th><th>类型</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>success</td><td>Function</td><td>否</td><td>接口调用成功的回调函数</td></tr><tr><td>fail</td><td>Function</td><td>否</td><td>接口调用失败的回调函数</td></tr><tr><td>complete</td><td>Function</td><td>否</td><td>接口调用结束的回调函数（调用成功、失败都会执行）</td></tr></tbody></table><p><strong>示例</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">showNavigationBarLoading</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><h3 id="uni-hidenavigationbarloading-object" tabindex="-1">uni.hideNavigationBarLoading(OBJECT) <a class="header-anchor" href="#uni-hidenavigationbarloading-object" aria-label="Permalink to &quot;uni.hideNavigationBarLoading(OBJECT)&quot;">​</a></h3><p>在当前页面隐藏导航条加载动画。</p><p><strong>平台差异说明</strong></p><table><thead><tr><th style="text-align:center;">App</th><th style="text-align:center;">H5</th><th style="text-align:center;">微信小程序</th><th style="text-align:center;">支付宝小程序</th><th style="text-align:center;">百度小程序</th><th style="text-align:center;">字节跳动小程序、飞书小程序</th><th style="text-align:center;">QQ小程序</th><th style="text-align:center;">快手小程序</th><th style="text-align:center;">京东小程序</th></tr></thead><tbody><tr><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td></tr></tbody></table><p>App平台调用此API时会关闭屏幕中间悬浮显示的loading</p><p><strong>OBJECT参数说明</strong></p><table><thead><tr><th>参数</th><th>类型</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>success</td><td>Function</td><td>否</td><td>接口调用成功的回调函数</td></tr><tr><td>fail</td><td>Function</td><td>否</td><td>接口调用失败的回调函数</td></tr><tr><td>complete</td><td>Function</td><td>否</td><td>接口调用结束的回调函数（调用成功、失败都会执行）</td></tr></tbody></table><p><strong>示例</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">hideNavigationBarLoading</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><h3 id="uni-hidehomebutton-object" tabindex="-1">uni.hideHomeButton(OBJECT) <a class="header-anchor" href="#uni-hidehomebutton-object" aria-label="Permalink to &quot;uni.hideHomeButton(OBJECT)&quot;">​</a></h3><p>隐藏返回首页按钮。</p><p><strong>平台差异说明</strong></p><table><thead><tr><th style="text-align:center;">App</th><th style="text-align:center;">H5</th><th style="text-align:center;">微信小程序</th><th style="text-align:center;">支付宝小程序</th><th style="text-align:center;">百度小程序</th><th style="text-align:center;">字节跳动小程序、飞书小程序</th><th style="text-align:center;">QQ小程序</th><th style="text-align:center;">快手小程序</th><th style="text-align:center;">京东小程序</th></tr></thead><tbody><tr><td style="text-align:center;">x</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">x</td><td style="text-align:center;">1.48.0+</td><td style="text-align:center;">1.10.0+</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td></tr></tbody></table><p><strong>OBJECT参数说明</strong></p><table><thead><tr><th>参数</th><th>类型</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>success</td><td>Function</td><td>否</td><td>接口调用成功的回调函数</td></tr><tr><td>fail</td><td>Function</td><td>否</td><td>接口调用失败的回调函数</td></tr><tr><td>complete</td><td>Function</td><td>否</td><td>接口调用结束的回调函数（调用成功、失败都会执行）</td></tr></tbody></table><p><strong>示例</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">hideHomeButton</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><p><strong>说明</strong></p><ul><li>微信小程序自基础库版本2.8.3开始支持</li><li>当用户打开的小程序最底层页面是非首页时，默认展示“返回首页”按钮，开发者可在页面<code>onShow</code>中调用<code>hideHomeButton</code>进行隐藏。</li></ul>`,52),d=[s];function o(i,r,p,c,g,y){return l(),e("div",null,d)}const f=t(a,[["render",o]]);export{x as __pageData,f as default};