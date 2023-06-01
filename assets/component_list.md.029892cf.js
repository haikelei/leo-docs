import{_ as s,c as l,o as a,N as t}from"./chunks/framework.fc67cb9d.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"component/list.md","lastUpdated":1685603474000}'),n={name:"component/list.md"},e=t(`<h4 id="list" tabindex="-1">list <a class="header-anchor" href="#list" aria-label="Permalink to &quot;list&quot;">​</a></h4><p>app端nvue专用组件。在app-nvue下，如果是长列表，使用list组件的性能高于使用view或scroll-view的滚动。原因在于list在不可见部分的渲染资源回收有特殊的优化处理。</p><p>原生渲染的资源回收机制，与webview渲染不同。webview不需要数据有规则格式，长页面处于不可视的部分，其渲染资源会自动回收，除非webview使用区域滚动而不是页面滚动。所以vue页面只要不用scroll-view，就不需要关注这个问题。而原生渲染则必须注意。</p><p><strong>如果需要跨端，建议使用uni-ui的uni-list组件，它会自动处理webview渲染和原生渲染的情况，在app-nvue下使用list组件，而在其他平台则使用页面滚动。详见<a href="https://ext.dcloud.net.cn/plugin?id=24" target="_blank" rel="noreferrer">https://ext.dcloud.net.cn/plugin?id=24</a></strong></p><p><code>&lt;list&gt;</code> 组件是提供垂直列表功能的核心组件，拥有平滑的滚动和高效的内存管理，非常适合用于长列表的展示。最简单的使用方法是在 <code>&lt;list&gt;</code> 标签内使用一组由简单数组循环生成的 <code>&lt;cell&gt;</code> 标签填充。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">list</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">&lt;!-- 注意事项: 不能使用 index 作为 key 的唯一标识 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">cell</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">(item, index) in dataList</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item.id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">{{item.name}}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">cell</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">list</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">data</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        dataList</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">B</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">C</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><blockquote><p><strong>注意</strong></p><ul><li>相同方向 <code>&lt;list&gt;</code> 或者 <code>&lt;scroll-view&gt;</code> 互相嵌套时，Android 平台子 <code>&lt;list&gt;</code> 不可滚动，iOS 可以，iOS 有Bounce效果， Android仅可滚动时有</li><li><code>&lt;list&gt;</code> 需要显式的设置其宽高，可使用 position: absolute; 定位或 width、height 设置其宽高值。</li><li>list是区域滚动，不会触发页面滚动，无法触发pages.json配置的下拉刷新、页面触底onReachBottomDistance、titleNView的transparent透明渐变、style的transparentTitle导航栏透明。</li><li>Android 平台，因 <code>&lt;list&gt;</code> 高效内存回收机制，不在屏幕可见区域的组件不会被创建，导致一些内部需要计算宽高的组件无法正常工作，例如 <code>&lt;slider&gt;</code>、<code>&lt;progress&gt;</code>、<code>&lt;swiper&gt;</code></li></ul></blockquote><h4 id="子组件" tabindex="-1">子组件 <a class="header-anchor" href="#子组件" aria-label="Permalink to &quot;子组件&quot;">​</a></h4><p><code>&lt;list&gt;</code> 的子组件只能包括以下四种组件或是 fix 定位的组件，其他形式的组件将不能被正确渲染。</p><ul><li><code>&lt;cell&gt;</code><br> 用于定义列表中的子列表项，类似于 HTML 中的 ul 之于 li。<code>&lt;list&gt;</code> 会对 <code>&lt;cell&gt;</code> 进行高效的内存回收以达到更好的性能。</li><li><code>&lt;header&gt;</code><br>当 <code>&lt;header&gt;</code> 到达屏幕顶部时，吸附在屏幕顶部。</li><li><code>&lt;refresh&gt;</code><br>用于给列表添加下拉刷新的功能。</li><li><code>&lt;loading&gt;</code><br><code>&lt;loading&gt;</code> 用法与特性和 <code>&lt;refresh&gt;</code> 类似，用于给列表添加上拉加载更多的功能。</li></ul><h4 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">属性名</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">show-scrollbar</td><td style="text-align:left;">控制是否出现滚动条</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">bounce</td><td style="text-align:left;">控制是否回弹效果, iOS 不支持动态修改</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">loadmoreoffset</td><td style="text-align:left;">触发 loadmore 事件所需要的垂直偏移距离（设备屏幕底部与 list 底部之间的距离），建议手动设置此值，设置大于0的值即可</td><td style="text-align:left;">number</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">offset-accuracy</td><td style="text-align:left;">控制 onscroll 事件触发的频率：表示两次onscroll事件之间列表至少滚动了10px。注意，将该值设置为较小的数值会提高滚动事件采样的精度，但同时也会降低页面的性能</td><td style="text-align:left;">number</td><td style="text-align:left;">10</td></tr><tr><td style="text-align:left;">pagingEnabled</td><td style="text-align:left;">是否按分页模式显示List，默认值false</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true/false</td></tr><tr><td style="text-align:left;">scrollable</td><td style="text-align:left;">是否允许List滚动</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true/false</td></tr><tr><td style="text-align:left;">enable-back-to-top</td><td style="text-align:left;">iOS点击顶部状态栏滚动条返回顶部，只支持竖向</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">render-reverse</td><td style="text-align:left;">定义是否从底部渲染，需搭配cell的属性render-reverse-position共同使用，单独配置会导致渲染异常。HBuilderX3.6.9+支持</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td></tr></tbody></table><p><code>loadmoreoffset</code> 示意图：</p><img src="https://web-assets.dcloud.net.cn/unidoc/zh/app-nvue-component-list.png"><h4 id="setspecialeffects-object" tabindex="-1">setSpecialEffects(object) <a class="header-anchor" href="#setspecialeffects-object" aria-label="Permalink to &quot;setSpecialEffects(object)&quot;">​</a></h4><p>设置嵌套list父容器支持swiper-list吸顶滚动效果</p><h6 id="object-object" tabindex="-1">Object object <a class="header-anchor" href="#object-object" aria-label="Permalink to &quot;Object object&quot;">​</a></h6><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">备注</th></tr></thead><tbody><tr><td style="text-align:left;">id</td><td style="text-align:left;">list父容器滚动组件id</td><td style="text-align:left;">String</td><td style="text-align:left;">是</td><td style="text-align:left;">应为最外层滚动容器，必须是list组件</td></tr><tr><td style="text-align:left;">headerHeight</td><td style="text-align:left;">吸顶距离</td><td style="text-align:left;">Number</td><td style="text-align:left;">是</td><td style="text-align:left;">子list吸顶距离最外层滚动容器顶部的距离</td></tr></tbody></table><h4 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h4><p><code>scrollToElement(ref, options)</code></p><p>滚动到指定位置，详情 <a href="https://uniapp.dcloud.net.cn/tutorial/nvue-api.html#dom" target="_blank" rel="noreferrer">scrollToElement</a></p><h4 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h4><ul><li><p><code>loadmore</code> 事件 如果列表滚动到底部将会立即触发这个事件，你可以在这个事件的处理函数中加载下一页的列表项。 如果未触发，请检查是否设置了loadmoreoffset的值，建议此值设置大于0</p></li><li><p>如何重置 loadmore</p></li></ul><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">list</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">list</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">cell</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">num in lists</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">{{num}}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">cell</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">list</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">data</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        lists</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">B</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">C</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">D</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">E</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 重置 loadmore</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">resetLoadMore</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$refs</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">list</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resetLoadmore</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><ul><li><p><code>scroll</code> 事件 列表发生滚动时将会触发该事件，事件的默认抽样率为 10px，即列表每滚动 10px 触发一次，可通过属性 offset-accuracy 设置抽样率。</p><p>事件中的 event 对象属性：</p><ul><li><code>contentSize {Object}</code>：列表的内容尺寸 <ul><li><code>width {number}</code>：列表内容宽度</li><li><code>height {number}</code>：列表内容高度</li></ul></li><li><code>contentOffset {Object}</code>：列表的偏移尺寸 <ul><li><code>x {number}</code>：x轴上的偏移量</li><li><code>y {number}</code>：y轴上的偏移量</li></ul></li><li><code>isDragging {boolean}</code>: 用户是否正在拖动列表</li></ul></li></ul><h4 id="list-setspecialeffects-args" tabindex="-1">list.setSpecialEffects(args) <a class="header-anchor" href="#list-setspecialeffects-args" aria-label="Permalink to &quot;list.setSpecialEffects(args)&quot;">​</a></h4><p>设置嵌套父容器信息</p><h4 id="参数" tabindex="-1">参数: <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数:&quot;">​</a></h4><p>args 为要设置的参数为json类型可以包含下列元素</p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">id</td><td style="text-align:left;">string</td><td style="text-align:left;">无</td><td style="text-align:left;">是</td><td style="text-align:left;">和list同时滚动的组件id，应为外层的scroller</td></tr><tr><td style="text-align:left;">headerHeight</td><td style="text-align:left;">float</td><td style="text-align:left;">0</td><td style="text-align:left;">是</td><td style="text-align:left;">要吸顶的header顶部距离scroller顶部的距离，Android暂不支持</td></tr></tbody></table><h4 id="返回值-无" tabindex="-1">返回值：无 <a class="header-anchor" href="#返回值-无" aria-label="Permalink to &quot;返回值：无&quot;">​</a></h4><h4 id="示例" tabindex="-1">示例: <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例:&quot;">​</a></h4><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">&lt;!-- ios 需要配置 fixFreezing=&quot;true&quot; --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">uni-swiper-page</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">list</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">list</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">fixFreezing</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">list</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">data</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 重置 loadmore</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">setSpecialEffects</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$refs</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">list</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setSpecialEffects</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scroller</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> headerHeight</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">150</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">clearSpecialEffects</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$refs</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">list</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setSpecialEffects</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p><code>setSpecialEffects</code> 完整代码: <a href="https://github.com/dcloudio/hello-uniapp/tree/master/pages/template/swiper-list-nvue" target="_blank" rel="noreferrer">https://github.com/dcloudio/hello-uniapp/tree/master/pages/template/swiper-list-nvue</a></p>`,34),o=[e];function p(c,r,F,y,D,i){return a(),l("div",null,o)}const f=s(n,[["render",p]]);export{g as __pageData,f as default};
