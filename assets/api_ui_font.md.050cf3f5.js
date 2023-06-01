import{_ as t,c as l,o as s,N as e}from"./chunks/framework.fc67cb9d.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/ui/font.md","lastUpdated":1685603474000}'),n={name:"api/ui/font.md"},a=e(`<h3 id="uni-loadfontface-object-object" tabindex="-1">uni.loadFontFace(Object object) <a class="header-anchor" href="#uni-loadfontface-object-object" aria-label="Permalink to &quot;uni.loadFontFace(Object object)&quot;">​</a></h3><p>动态加载网络字体，文件地址需为下载类型。微信小程序 <code>&#39;2.10.0&#39;</code>起支持全局生效，需在 <code>app.vue</code> 中调用。</p><p>注意:</p><ol><li>引入中文字体，体积过大时会发生错误，建议抽离出部分中文，减少体积，或者用图片替代</li><li>微信小程序端只支持网络字体，字体链接必须是https。App支持网络或本地的字体（本地字体需使用<a href="http://www.html5plus.org/doc/zh_cn/io.html#plus.io.convertLocalFileSystemURL" target="_blank" rel="noreferrer">平台绝对路径</a>）。</li><li>微信小程序端字体链接必须是同源下的，或开启了cors支持，微信小程序的域名是servicewechat.com</li><li>工具里提示 Faild to load font可以忽略</li><li>nvue不支持。nvue使用 Weex 提供的 DOM.addRule 加载自定义字体，<a href="https://uniapp.dcloud.io/tutorial/nvue-api.html#dom" target="_blank" rel="noreferrer">详见</a>。</li></ol><p><strong>平台差异说明</strong></p><table><thead><tr><th style="text-align:center;">5+App</th><th style="text-align:center;">H5</th><th style="text-align:center;">微信小程序</th><th style="text-align:center;">支付宝小程序</th><th style="text-align:center;">百度小程序</th><th style="text-align:center;">字节跳动小程序、飞书小程序</th><th style="text-align:center;">QQ小程序</th></tr></thead><tbody><tr><td style="text-align:center;">1.9.0+</td><td style="text-align:center;">2.3.4+</td><td style="text-align:center;">基础库 2.1.0+</td><td style="text-align:center;">1.11.0+</td><td style="text-align:center;">x</td><td style="text-align:center;">x</td><td style="text-align:center;">x</td></tr></tbody></table><p><strong>参数说明</strong></p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">global</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">否</td><td style="text-align:left;">是否全局生效</td></tr><tr><td style="text-align:left;">family</td><td style="text-align:left;">String</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">定义的字体名称</td></tr><tr><td style="text-align:left;">source</td><td style="text-align:left;">String</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">字体资源的地址。建议格式为 TTF 和 WOFF，WOFF2 在低版本的iOS上会不兼容。</td></tr><tr><td style="text-align:left;">desc</td><td style="text-align:left;">Object</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">可选的字体描述符</td></tr><tr><td style="text-align:left;">success</td><td style="text-align:left;">Function</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用成功的回调函数</td></tr><tr><td style="text-align:left;">fail</td><td style="text-align:left;">Function</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用失败的回调函数</td></tr><tr><td style="text-align:left;">complete</td><td style="text-align:left;">Function</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用结束的回调函数（调用成功、失败都会执行）</td></tr></tbody></table><p><strong>Object.desc 的结构</strong></p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">style</td><td style="text-align:left;">String</td><td style="text-align:left;">normal</td><td style="text-align:left;">否</td><td style="text-align:left;">字体样式，可选值为 normal / italic / oblique</td></tr><tr><td style="text-align:left;">weight</td><td style="text-align:left;">String</td><td style="text-align:left;">normal</td><td style="text-align:left;">否</td><td style="text-align:left;">字体粗细，可选值为 normal / bold / 100 / 200../ 900</td></tr><tr><td style="text-align:left;">variant</td><td style="text-align:left;">String</td><td style="text-align:left;">normal</td><td style="text-align:left;">否</td><td style="text-align:left;">设置小型大写字母的字体显示文本，可选值为 normal / small-caps / inherit</td></tr></tbody></table><p><strong>代码示例</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">loadFontFace</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">family</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Bitstream Vera Serif Bold</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">source</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">url(&quot;https://sungd.github.io/Pacifico.ttf&quot;)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">success</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>Tips</strong></p><p>插件市场有加载字体的例子：<a href="https://ext.dcloud.net.cn/plugin?id=954" target="_blank" rel="noreferrer">https://ext.dcloud.net.cn/plugin?id=954</a></p><h3 id="uni-upx2px" tabindex="-1">uni.upx2px() <a class="header-anchor" href="#uni-upx2px" aria-label="Permalink to &quot;uni.upx2px()&quot;">​</a></h3><p>将rpx单位值转换成px</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	export default </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#82AAFF;">data</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			return </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#FFCB6B;">boxWidth</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#82AAFF;">onLoad</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			this.boxWidth </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">upx2px</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">600</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">px</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,17),o=[a];function p(r,c,i,d,y,F){return s(),l("div",null,o)}const x=t(n,[["render",p]]);export{D as __pageData,x as default};