import{_ as t,c as l,o as s,N as e}from"./chunks/framework.fc67cb9d.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"component/textarea.md","lastUpdated":1685603474000}'),a={name:"component/textarea.md"},n=e(`<h4 id="textarea" tabindex="-1">textarea <a class="header-anchor" href="#textarea" aria-label="Permalink to &quot;textarea&quot;">​</a></h4><p>多行输入框。</p><p><strong>属性说明</strong></p><table><thead><tr><th style="text-align:left;">属性名</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">说明</th><th style="text-align:left;">平台差异说明</th></tr></thead><tbody><tr><td style="text-align:left;">value</td><td style="text-align:left;">String</td><td style="text-align:left;"></td><td style="text-align:left;">输入框的内容</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">placeholder</td><td style="text-align:left;">String</td><td style="text-align:left;"></td><td style="text-align:left;">输入框为空时占位符</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">placeholder-style</td><td style="text-align:left;">String</td><td style="text-align:left;"></td><td style="text-align:left;">指定 placeholder 的样式</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">placeholder-class</td><td style="text-align:left;">String</td><td style="text-align:left;">textarea-placeholder</td><td style="text-align:left;">指定 placeholder 的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/</td><td style="text-align:left;">字节跳动小程序、飞书小程序、快手小程序不支持</td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">是否禁用</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">maxlength</td><td style="text-align:left;">Number</td><td style="text-align:left;">140</td><td style="text-align:left;">最大输入长度，设置为 -1 的时候不限制最大长度</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">focus</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">获取焦点</td><td style="text-align:left;">在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用组件的 focus()、blur() 方法控制焦点</td></tr><tr><td style="text-align:left;">auto-focus</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">自动聚焦，拉起键盘</td><td style="text-align:left;">京东小程序</td></tr><tr><td style="text-align:left;">auto-height</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">是否自动增高，设置auto-height时，style.height不生效</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">fixed</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true</td><td style="text-align:left;">微信小程序、百度小程序、字节跳动小程序、飞书小程序、QQ小程序、快手小程序、京东小程序</td></tr><tr><td style="text-align:left;">cursor-spacing</td><td style="text-align:left;">Number</td><td style="text-align:left;">0</td><td style="text-align:left;">指定光标与键盘的距离，单位 px 。取 textarea 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离</td><td style="text-align:left;">App、微信小程序、百度小程序、字节跳动小程序、飞书小程序、QQ小程序、京东小程序</td></tr><tr><td style="text-align:left;">cursor</td><td style="text-align:left;">Number</td><td style="text-align:left;"></td><td style="text-align:left;">指定focus时的光标位置</td><td style="text-align:left;">微信小程序、App、H5、百度小程序、字节跳动小程序、飞书小程序、QQ小程序、京东小程序</td></tr><tr><td style="text-align:left;">confirm-type</td><td style="text-align:left;">String</td><td style="text-align:left;">done</td><td style="text-align:left;">设置键盘右下角按钮的文字</td><td style="text-align:left;">微信小程序基础库2.13.0+、App-vue和H5(2.9.9+，且要求设备webview内核Chrome81+、Safari13.7+)</td></tr><tr><td style="text-align:left;">confirm-hold</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">点击键盘右下角按钮时是否保持键盘不收起</td><td style="text-align:left;">App(3.3.7+)、H5 (3.3.7+)、微信小程序 (基础库 2.16.0+)、百度小程序 (基础库 3.130.1+)、快手小程序</td></tr><tr><td style="text-align:left;">show-confirm-bar</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">是否显示键盘上方带有”完成“按钮那一栏</td><td style="text-align:left;">微信小程序、百度小程序、QQ小程序、京东小程序</td></tr><tr><td style="text-align:left;">selection-start</td><td style="text-align:left;">Number</td><td style="text-align:left;">-1</td><td style="text-align:left;">光标起始位置，自动聚焦时有效，需与selection-end搭配使用</td><td style="text-align:left;">微信小程序、App、H5、百度小程序、字节跳动小程序、飞书小程序、QQ小程序、京东小程序</td></tr><tr><td style="text-align:left;">selection-end</td><td style="text-align:left;">Number</td><td style="text-align:left;">-1</td><td style="text-align:left;">光标结束位置，自动聚焦时有效，需与selection-start搭配使用</td><td style="text-align:left;">微信小程序、App、H5、百度小程序、字节跳动小程序、飞书小程序、QQ小程序、京东小程序</td></tr><tr><td style="text-align:left;">adjust-position</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">键盘弹起时，是否自动上推页面</td><td style="text-align:left;">App-Android（softinputMode 为 adjustResize 时无效）、微信小程序、百度小程序、QQ小程序、京东小程序</td></tr><tr><td style="text-align:left;">disable-default-padding</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">是否去掉 iOS 下的默认内边距</td><td style="text-align:left;">微信小程序2.10.0、飞书小程序 3.46</td></tr><tr><td style="text-align:left;">hold-keyboard</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">focus时，点击页面的时候不收起键盘</td><td style="text-align:left;">微信小程序2.8.2</td></tr><tr><td style="text-align:left;">auto-blur</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">键盘收起时，是否自动失去焦点</td><td style="text-align:left;">App-vue 3.0.0+ ，App-nvue不支持</td></tr><tr><td style="text-align:left;">ignoreCompositionEvent</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">是否忽略组件内对文本合成系统事件的处理。为 <code>false</code> 时将触发 <code>compositionstart、compositionend、compositionupdate</code> 事件，且在文本合成期间会触发 <code>input</code> 事件</td><td style="text-align:left;">App-vue (3.4.4+)、H5 (3.4.4+)、App-nvue不支持</td></tr><tr><td style="text-align:left;">inputmode</td><td style="text-align:left;">String</td><td style="text-align:left;">&quot;text&quot;</td><td style="text-align:left;">是一个枚举属性，它提供了用户在编辑元素或其内容时可能输入的数据类型的提示。<a href="#inputmode">有效值</a></td><td style="text-align:left;">H5（3.7.0+）、App-vue（3.7.0+）</td></tr><tr><td style="text-align:left;">@focus</td><td style="text-align:left;">EventHandle</td><td style="text-align:left;"></td><td style="text-align:left;">输入框聚焦时触发，<code>event.detail = { value, height }</code>，height 为键盘高度</td><td style="text-align:left;">仅微信小程序、京东小程序、App（HBuilderX 2.0+ <a href="http://ask.dcloud.net.cn/article/36074" target="_blank" rel="noreferrer">nvue uni-app模式</a>） 、QQ小程序支持 height</td></tr><tr><td style="text-align:left;">@blur</td><td style="text-align:left;">EventHandle</td><td style="text-align:left;"></td><td style="text-align:left;">输入框失去焦点时触发，<code>event.detail = {value, cursor}</code></td><td style="text-align:left;">快手小程序不支持</td></tr><tr><td style="text-align:left;">@linechange</td><td style="text-align:left;">EventHandle</td><td style="text-align:left;"></td><td style="text-align:left;">输入框行数变化时调用，<code>event.detail = {height: 0, heightRpx: 0, lineCount: 0}</code></td><td style="text-align:left;">字节跳动小程序、飞书小程序、快手小程序不支持</td></tr><tr><td style="text-align:left;">@input</td><td style="text-align:left;">EventHandle</td><td style="text-align:left;"></td><td style="text-align:left;">当键盘输入时，触发 input 事件，<code>event.detail = {value, cursor}</code>， @input 处理函数的返回值并不会反映到 textarea 上</td><td style="text-align:left;">快手小程序不支持</td></tr><tr><td style="text-align:left;">@confirm</td><td style="text-align:left;">EventHandle</td><td style="text-align:left;"></td><td style="text-align:left;">点击完成时， 触发 confirm 事件，<code>event.detail = {value: value}</code></td><td style="text-align:left;">微信小程序、百度小程序、QQ小程序、京东小程序</td></tr><tr><td style="text-align:left;">@keyboardheightchange</td><td style="text-align:left;">Eventhandle</td><td style="text-align:left;"></td><td style="text-align:left;">键盘高度发生变化的时候触发此事件，<code>event.detail = {height: height, duration: duration}</code></td><td style="text-align:left;">微信小程序基础库2.7.0+、App 3.1.0+</td></tr></tbody></table><p><strong>confirm-type 有效值</strong></p><table><thead><tr><th style="text-align:left;">值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">send</td><td style="text-align:left;">右下角按钮为“发送”</td></tr><tr><td style="text-align:left;">search</td><td style="text-align:left;">右下角按钮为“搜索”</td></tr><tr><td style="text-align:left;">next</td><td style="text-align:left;">右下角按钮为“下一个”</td></tr><tr><td style="text-align:left;">go</td><td style="text-align:left;">右下角按钮为“前往”</td></tr><tr><td style="text-align:left;">done</td><td style="text-align:left;">右下角按钮为“完成”</td></tr></tbody></table><p><strong>示例</strong> <a href="https://hellouniapp.dcloud.net.cn/pages/component/textarea/textarea" target="_blank" rel="noreferrer">查看示例</a></p><p>以下示例代码，来自于<a href="https://github.com/dcloudio/hello-uniapp" target="_blank" rel="noreferrer">hello uni-app项目</a>，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。</p><p>::: preview <a href="https://hellouniapp.dcloud.net.cn/pages/component/textarea/textarea" target="_blank" rel="noreferrer">https://hellouniapp.dcloud.net.cn/pages/component/textarea/textarea</a></p><blockquote><p>Template</p></blockquote><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">uni-title uni-common-pl</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">输入区域高度自适应，不会出现滚动条</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">uni-textarea</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">textarea</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@blur</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bindTextAreaBlur</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">auto-height</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">uni-title uni-common-pl</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">占位符字体是红色的textarea</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">uni-textarea</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">textarea</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">placeholder-style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">color:#F76260</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">占位符字体是红色的</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">bindTextAreaBlur</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">detail</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>:::</p><p><strong>Tips</strong></p><ul><li>textarea 的 blur 事件会晚于页面上的 tap 事件，如果需要在 button 的点击事件获取 textarea，可以使用 form 的 @submit。</li><li>如果遇到 value 属性设置不生效的问题参考：<a href="/leo-docs/tutorial/vue-api.html#componentsolutions">组件属性设置不生效解决办法</a></li><li>微信小程序、百度小程序、字节跳动小程序、飞书小程序中，textarea是原生组件，层级高于前端组件，请勿在 scroll-view、swiper、picker-view、movable-view 中使用 textarea 组件。覆盖textarea需要使用cover-view。<a href="/leo-docs/component/native-component.html">详见</a></li><li>小程序端 css 动画对 textarea 组件无效。</li><li>H5 平台只能在用户交互时修改 focus 生效。</li><li>如果遇到 focus 属性设置不生效的问题参考：<a href="/leo-docs/tutorial/vue-api.html#componentsolutions">组件属性设置不生效解决办法</a></li><li>软键盘的弹出和收起逻辑，详见<a href="/leo-docs/component/input.html?id=app平台ios端软键盘上方横条去除方案">input的文档</a></li><li>如需禁止点击其他位置收起键盘的默认行为，可以监听<code>touch</code>事件并使用<code>prevent</code>修饰符（仅支持App、H5，其他平台可以通过设置<code>focus</code>来使输入框重新获取焦点），例如在确认按钮上使用：<code>@touchend.prevent=&quot;onTap&quot;</code></li><li>js中给textarea组件赋值为字符串，在字符串中加\\n可实现换行。</li><li>nvue 样式 <code>word-wrap</code> 在 Android 平台暂不支持</li><li>旧版本chrome或同内核浏览器会将输入多个标点符号放在一行，此时可通过将textarea样式设置为<code>word-break: break-word;</code>实现自动换行。</li><li>placeholder-style指定样式类font-size单位为rpx时，字节跳动小程序、飞书小程序、快手小程序不支持，可使用uni.upx2px()将rpx单位值转换成px。</li><li>App-iOS nvue页面默认是收起键盘，如果想换行需要设置confirm-hold为true。</li></ul><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">content</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">textarea</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">textarea</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">txt</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">textarea</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">txt</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello world！</span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;"> textarea多行输入框</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>nvue下键盘右下角按钮点击仅触发换行；如想监听该按钮事件可以参考，示例代码如下：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">content</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">textarea</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">textarea</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">txt</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">textarea</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">				txt</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">txt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">watch</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#F07178;">txt</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">txt</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">( </span><span style="color:#A6ACCD;">txt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">indexOf</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">!=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> )</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//敲了回车键了</span></span>
<span class="line"><span style="color:#F07178;">				   </span><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">hideKeyboard</span><span style="color:#F07178;">() </span><span style="color:#676E95;font-style:italic;">//收起软键盘</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">textarea</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> solid </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h4 id="inputmode-有效值-inputmode" tabindex="-1">inputmode 有效值 @inputmode <a class="header-anchor" href="#inputmode-有效值-inputmode" aria-label="Permalink to &quot;inputmode 有效值 @inputmode&quot;">​</a></h4><blockquote><p>新增于 uni-app 3.7.0+ inputmode是html规范后期更新的内容。各家小程序还未支持此属性。</p></blockquote><p>在符合条件的高版本webview里，uni-app的web和app-vue平台中可使用本属性。</p><table><thead><tr><th style="text-align:left;">值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">none</td><td style="text-align:left;">无虚拟键盘。在应用程序或者站点需要实现自己的键盘输入控件时很有用。</td></tr><tr><td style="text-align:left;">text</td><td style="text-align:left;">使用用户本地区域设置的标准文本输入键盘。</td></tr><tr><td style="text-align:left;">decimal</td><td style="text-align:left;">小数输入键盘，包含数字和分隔符（通常是“ . ”或者“ , ”），设备可能也可能不显示减号键。</td></tr><tr><td style="text-align:left;">numeric</td><td style="text-align:left;">数字输入键盘，所需要的就是 0 到 9 的数字，设备可能也可能不显示减号键。</td></tr><tr><td style="text-align:left;">tel</td><td style="text-align:left;">电话输入键盘，包含 0 到 9 的数字、星号（*）和井号（#）键。表单输入里面的电话输入通常应该使用 &lt;input type=&quot;tel&quot;&gt; 。</td></tr><tr><td style="text-align:left;">search</td><td style="text-align:left;">为搜索输入优化的虚拟键盘，比如，返回键可能被重新标记为“搜索”，也可能还有其他的优化。</td></tr><tr><td style="text-align:left;">email</td><td style="text-align:left;">为邮件地址输入优化的虚拟键盘，通常包含&quot;@&quot;符号和其他优化。表单里面的邮件地址输入应该使用 &lt;input type=&quot;email&quot;&gt; 。</td></tr><tr><td style="text-align:left;">url</td><td style="text-align:left;">为网址输入优化的虚拟键盘，比如，“/”键会更加明显、历史记录访问等。表单里面的网址输入通常应该使用 &lt;input type=&quot;url&quot;&gt; 。</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">注意事项</p><ul><li>inputmode 兼容性：<code>Chrome &gt;= 66</code>、<code>Edge &gt;= 79</code>、<code>Firefox &gt;= 95</code>、<code>Chrome Android &gt;= 66</code>、<code>Firefox for Android &gt;= 79</code>、<code>Safari on iOS &gt;= 12.2</code>、<code>WebView Android &gt;= 66</code></li><li>input组件有 <code>inputmode</code> 和 <code>type</code>、<code>comfirm-tye</code> 3个相似的属性，它们的区别详解如下： <ul><li>type：在 uni-app 和小程序中仅仅是输入框，定义 input 的工作方式，此值决定可输入什么值。比如 number 只能输入数字。</li><li>comfirm-type：定义键盘右下角按键的文字</li><li>inputmode：inputmode 属性是当使用某些值时会对键盘所作出的优化。 <ul><li>同时使用 inputmode 和 comfirm-type 时，若设值冲突，键盘右下角按键类型由 comfirm-type 决定</li><li>type 属性和 inputmode 属性并不冲突</li></ul></li></ul></li></ul></div><p><strong>富文本编辑的解决方案</strong> 在输入框里图文混排内容，在web上该功能依赖document，而小程序和app的正常页面又没有document。</p><ul><li>方式一：使用uni-app自带的<code>editor</code>组件，该组件支持App、H5、微信小程序，其他家小程序自身未提供这类解决方案。</li><li>方式二：采用markdown编辑器方案，输入区输入markdown语法，预览区提供预览。这种方式可以跨端。插件市场搜<a href="https://ext.dcloud.net.cn/search?q=%E5%AF%8C%E6%96%87%E6%9C%AC%E7%BC%96%E8%BE%91" target="_blank" rel="noreferrer">富文本编辑</a>，有不少插件。</li><li>方式三：使用web-view组件，加载html页面，此时可使用web中常见的各种富文本编辑器，插件市场也有这类插件。</li></ul>`,24),o=[n];function p(r,c,y,d,i,F){return s(),l("div",null,o)}const f=t(a,[["render",p]]);export{g as __pageData,f as default};