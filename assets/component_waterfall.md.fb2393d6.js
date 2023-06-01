import{_ as s,c as l,o as a,N as n}from"./chunks/framework.fc67cb9d.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"component/waterfall.md","lastUpdated":1685603474000}'),o={name:"component/waterfall.md"},e=n(`<h4 id="waterfall" tabindex="-1">waterfall <a class="header-anchor" href="#waterfall" aria-label="Permalink to &quot;waterfall&quot;">​</a></h4><p>app端nvue专用组件。</p><p><code>&lt;waterfall&gt;</code> 组件是提供瀑布流布局的核心组件。瀑布流，又称瀑布流式布局，是比较流行的一种页面布局，视觉表现为参差不齐的多栏布局。随着页面滚动条向下滚动，这种布局还可以不断加载数据块并附加至当前尾部。</p><p>在nvue中，使用普通view做瀑布流，无法实现复用和不可见渲染资源释放。使用<code>&lt;waterfall&gt;</code>组件且指定<code>cell</code>后，原生引擎会自动优化性能。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">waterfall</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">column-count</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">column-width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">auto</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">cell</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">num in lists</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">{{num}}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">cell</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">waterfall</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">data</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        lists</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">B</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">C</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">D</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">E</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h4 id="子组件" tabindex="-1">子组件 <a class="header-anchor" href="#子组件" aria-label="Permalink to &quot;子组件&quot;">​</a></h4><p>和 <code>&lt;list&gt;</code> 组件一样, <code>&lt;waterfall&gt;</code> 组件的子组件只能包括以下四种组件或是 fix 定位的组件，其他形式的组件将不能被正确渲染。</p><ul><li><code>&lt;cell&gt;</code>：用于定义列表中的子列表项，类似于 HTML 中的 ul 之于 li。<code>&lt;waterfall&gt;</code> 会对 <code>&lt;cell&gt;</code> 进行高效的内存回收以达到更好的性能。</li><li><code>&lt;header&gt;</code>：当 <code>&lt;header&gt;</code> 到达屏幕顶部时，吸附在屏幕顶部。</li><li><code>&lt;refresh&gt;</code>：用于给列表添加下拉刷新的功能。</li><li><code>&lt;loading&gt;</code>：<code>&lt;loading&gt;</code> 用法与特性和 <code>&lt;refresh&gt;</code> 类似，用于给列表添加上拉加载更多的功能。 <img src="https://web-assets.dcloud.net.cn/unidoc/zh/app-nvue-component-waterfall-01.png"></li></ul><h4 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h4><ul><li>show-scrollbar : <code>[可选]</code> 可选值为 true/ false，默认值为 true。控制是否出现滚动条。</li><li>column-count: <code>[可选]</code>描述瀑布流的列数 <ul><li>auto: 意味着列数是被其他属性所决定的(比如 column-width)</li><li><code>&lt;integer&gt;</code>: 最佳列数，column-width 和 column-count 都指定非0值， 则 column-count 代表最大列数。</li></ul></li><li>column-width : <code>[可选]</code>描述瀑布流每一列的列宽 <ul><li><code>auto</code>: 意味着列宽是被其他属性所决定的(比如 column-count)</li><li><code>&lt;length&gt;</code>: 最佳列宽，实际的列宽可能会更宽(需要填充剩余的空间)， 或者更窄(如果剩余空间比列宽还要小)。 该值必须大于0</li></ul></li><li>column-gap: <code>[可选]</code>列与列的间隙. 如果指定了 <code>normal</code> ，则对应 32.</li><li>left-gap: <code>[可选]</code>左边cell和列表的间隙. 如果未指定 ，则对应 <code>0</code></li><li>right-gap: <code>[可选]</code>右边cell和列表的间隙. 如果未指定，则对应 <code>0</code><img src="https://web-assets.dcloud.net.cn/unidoc/zh/app-nvue-component-waterfall-02.png"></li><li>always-scrollable-vertical : <code>[可选]</code> 可选值为 true/ false，默认值为 false，iOS 平台，内容不满一屏无法触发下拉刷新时需要设置为true，因为默认子视图高度不超过父视图高度的时候 waterfall 不能滑动</li></ul><p>其他支持的属性参见 <code>&lt;list&gt;</code> <a href="https://uniapp.dcloud.net.cn/component/list.html" target="_blank" rel="noreferrer">组件属性部分</a></p><h4 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h4><p>支持所有<a href="https://uniapp.dcloud.net.cn/tutorial/nvue-event.html" target="_blank" rel="noreferrer">通用事件</a>：</p><ul><li>click：用于监听点击事件。（例如：一般绑定于子组件之上触发跳转）。</li><li>longpress：用于监听长按事件（一般绑定于子组件之上例如：长按可删除）。</li><li>appear：用于监听子组件出现事件（一般绑定于子组件之上例如：监听最后一个元素出现，加载新的数据）</li><li>disappear：用于监听子组件滑出屏幕事件（一般绑定于子组件之上）</li></ul><p><strong>注意</strong></p><ul><li>waterfall是区域滚动，不会触发页面滚动，无法触发pages.json配置的下拉刷新、页面触底onReachBottomDistance、titleNView的transparent透明渐变。</li></ul>`,16),t=[e];function p(c,r,D,F,i,y){return a(),l("div",null,t)}const h=s(o,[["render",p]]);export{u as __pageData,h as default};