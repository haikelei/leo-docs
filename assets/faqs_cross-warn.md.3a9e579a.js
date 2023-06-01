import{_ as l,c as s,a as e,N as a,o}from"./chunks/framework.fc67cb9d.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"faqs/cross-warn.md","lastUpdated":1685603474000}'),n={name:"faqs/cross-warn.md"},p=a(`<p>每个端有每个端的特点，有的能被抹平，有的不可能被抹平。</p><p>注意：跨端，不是把web的习惯迁移到全平台。而是按照uni的写法，然后全平台使用。</p><h3 id="h5正常但app异常的可能性" tabindex="-1">H5正常但App异常的可能性 <a class="header-anchor" href="#h5正常但app异常的可能性" aria-label="Permalink to &quot;H5正常但App异常的可能性&quot;">​</a></h3><ol><li>css异常：</li></ol><ul><li>不支持的选择器</li></ul><p>非H5端不支持*选择器；</p><p>body的元素选择器请改为page，同样，div和ul和li等改为view、span和font改为text、a改为navigator、img改为image...</p><ul><li>组件和页面样式相互影响</li></ul><p>非H5端默认并未启用 scoped，如需要隔离组件样式可以在 style 标签增加 scoped 属性，H5端为了隔离页面间的样式默认启用了 scoped</p><ul><li>webview浏览器兼容性</li></ul><p>vue页面在App端，默认是被系统的webview渲染的（不是手机自带浏览器，是rom的webview），在较老的手机上，比如Android4.4、5.0或iOS8，很多css是不支持的，所以不要使用太新的css，会导致界面异常。</p><p>注意这不意味着不能使用flex，Android4.4也支持flex，只是不要使用太新的css。</p><p>可以找Android4.4手机或使用pc模拟器实际测试下，大多数国产Android模拟器都是4.4或5.0。</p><p>从 uni-app 2.5.3 起，Android端支持引入腾讯x5浏览器内核，可以抹平低端Android的浏览器兼容性问题，<a href="https://ask.dcloud.net.cn/article/36806" target="_blank" rel="noreferrer">详见x5使用指南</a></p><p>小程序不存在浏览器兼容问题，它自带了一个很大的Webview。所以如果你的H5和小程序界面正常，而Android低端机App界面异常，且App没有使用x5引擎，那基本就可以判定是因为css兼容性。</p><p>app端nvue页面，不存在浏览器兼容问题，它自带一个统一的原生渲染引擎，不依赖webview。</p><p>Android4.4对应的webview是chrome37。各端浏览器内核的详情查阅，参考：<a href="https://ask.dcloud.net.cn/article/1318" target="_blank" rel="noreferrer">关于手机webview内核、默认浏览器、各家小程序的渲染层浏览器的区别和兼容性</a></p><ul><li>原生组件层级问题 H5没有原生组件概念问题，非H5端有原生组件并引发了原生组件层级高于前端组件的概念，要遮挡video、map等原生组件，请使用cover-view组件。</li></ul><ol start="2"><li>使用了非H5端不支持的API 小程序和App的js运行在jscore下而不是浏览器里，没有浏览器专用的js对象，比如document、xmlhttp、cookie、window、location、navigator、localstorage、websql、indexdb、webgl等对象。</li></ol><p>如果你的代码没有直接使用这些，那很可能是引入的三方库使用了这些。如果是后者，去<a href="https://ext.dcloud.net.cn/" target="_blank" rel="noreferrer">插件市场</a>搜索替代方案。要知道非H5端的js是运行在一个独立的js core或v8下，并不是运行在浏览器里。</p><p>从HBuilderX 2.6起，App端新增了renderjs，这是一种运行在视图层的js，vue页面通过renderjs可以操作浏览器对象，进而可以让基于浏览器的库直接在uni-app的App端运行，诸如echart、threejs，详见：<a href="https://uniapp.dcloud.io/tutorial/renderjs" target="_blank" rel="noreferrer">renderjs</a></p><ol><li>使用了非H5端不支持的vue语法，受小程序自定义组件限制的写法，<a href="/leo-docs/tutorial/vue-components.html">详见</a></li><li>不要在引用组件的地方在组件属性上直接写 style=&quot;xx&quot;，要在组件内部写样式</li><li><code>url(//alicdn.net)</code>等路径，改为<code>url(https://alicdn.net)</code>，因为在App端//是file协议</li><li>很多人在H5端联网时使用本地测试服务地址(localhost或127.0.0.1)，这样的联网地址手机App端是无法访问的，请使用手机可访问的IP进行联网</li></ol><h3 id="h5正常但小程序异常的可能性" tabindex="-1">H5正常但小程序异常的可能性 <a class="header-anchor" href="#h5正常但小程序异常的可能性" aria-label="Permalink to &quot;H5正常但小程序异常的可能性&quot;">​</a></h3><ol><li>同上</li><li>v-html在h5和app-vue均支持，但小程序不支持</li><li>小程序要求连接的网址都要配白名单</li></ol><h3 id="小程序正常但app异常的可能性" tabindex="-1">小程序正常但App异常的可能性 <a class="header-anchor" href="#小程序正常但app异常的可能性" aria-label="Permalink to &quot;小程序正常但App异常的可能性&quot;">​</a></h3><p>vue页面在App端的渲染引擎默认是系统webview（不是手机自带浏览器，是rom的webview），在较老的手机上，比如Android4.4、5.0或iOS8，一些新出的css语法是不支持的。注意这不意味着不能使用flex，Android4.4也支持flex，只是不要使用太新的css。可以找Android4.4手机或使用pc模拟器实际测试下，大多数国产Android模拟器都是4.4或5.0。</p><p>小程序不存在浏览器兼容问题，它内置了几十M自己的定制webview。所以如果你的H5和小程序界面正常，而App界面异常，大多是因为css兼容性。</p><p>解决这类问题：</p><ol><li>放弃老款手机支持</li><li>不用使用太新的css语法，可以在caniuse查询</li><li>从 uni-app 2.5.3 起，Android端支持引入腾讯x5浏览器内核，可以抹平低端Android的浏览器兼容性问题，<a href="https://ask.dcloud.net.cn/article/36806" target="_blank" rel="noreferrer">详见x5使用指南</a></li></ol><h3 id="小程序或app正常-但h5异常的可能性" tabindex="-1">小程序或App正常，但H5异常的可能性 <a class="header-anchor" href="#小程序或app正常-但h5异常的可能性" aria-label="Permalink to &quot;小程序或App正常，但H5异常的可能性&quot;">​</a></h3><ol><li>在 uni-app 2.4.7 以前，H5端不支持微信小程序自定义组件，即 wxcomponents 下的组件，此时可能产生兼容问题。从 2.4.7 起，H5也支持微信自定义组件，不再存在这这方面兼容问题。</li><li>App端使用了App特有的API和功能，比如plus、Native.js、subNVue、原生插件等</li><li>使用了小程序专用的功能，比如微信卡券、小程序插件、微信小程序云开发。对于云开发，建议使用可跨端的uniCloud。</li></ol><h3 id="app正常-小程序、h5异常的可能性" tabindex="-1">App正常，小程序、H5异常的可能性 <a class="header-anchor" href="#app正常-小程序、h5异常的可能性" aria-label="Permalink to &quot;App正常，小程序、H5异常的可能性&quot;">​</a></h3><ol><li>代码中使用了App端特有的plus、Native.js、subNVue、原生插件等功能</li></ol><h3 id="使用-vue-js-的注意" tabindex="-1">使用 Vue.js 的注意 <a class="header-anchor" href="#使用-vue-js-的注意" aria-label="Permalink to &quot;使用 Vue.js 的注意&quot;">​</a></h3><ol><li><p><code>uni-app</code> 基于<code>Vue 2.0</code>实现，开发者需注意Vue 1.0 -&gt; 2.0 的使用差异，详见<a href="https://cn.vuejs.org/v2/guide/migration.html" target="_blank" rel="noreferrer">从 Vue 1.x 迁移</a></p></li><li><p>data 属性必须声明为返回一个初始数据对象的函数；否则页面关闭时，数据不会自动销毁，再次打开该页面时，会显示上次数据</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//正确用法，使用函数返回对象</span></span>
<span class="line"><span style="color:#82AAFF;">data</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//错误写法，会导致再次打开页面时，显示上次数据</span></span>
<span class="line"><span style="color:#FFCB6B;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#FFCB6B;">title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li><li><p>在微信小程序端，<code>uni-app</code> 将数据绑定功能委托给<code>Vue</code>，开发者需按<code>Vue 2.0</code>的写法实现数据绑定，不支持微信小程序的数据绑定写法，故如下写法不支持：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item-{{id}}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">	</span></span>
<span class="line"></span></code></pre></div><p>需修改为：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">v-bind</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&#39;</span><span style="color:#C3E88D;">item-</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> id </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">	</span></span>
<span class="line"></span></code></pre></div></li></ol><h3 id="区别于传统-web-开发的注意" tabindex="-1">区别于传统 web 开发的注意 <a class="header-anchor" href="#区别于传统-web-开发的注意" aria-label="Permalink to &quot;区别于传统 web 开发的注意&quot;">​</a></h3><p>你之前可能习惯自由的web开发，但目前各家小程序都有很多限制。 当然限制是为了在框架层更好的优化用户体验，所以小程序的体验要优于web。 并且这些限制只是写法的限制，并不影响功能。 如果你做过微信小程序开发，对这些限制应该已经很了解了。如果没有做过小程序，请仔细阅读本节。</p><ol><li>JS注意</li></ol><ul><li>非H5端，不能使用浏览器自带对象，比如document、window、localstorage、cookie等，更不能使用jquery等依赖这些浏览器对象的框架。因为各家小程序快应用都不支持这些对象。</li><li>没有这些浏览器自带对象并不影响业务开发，uni提供的api足够完成业务。</li><li>uni的api在编译到web平台运行时，其实也会转为浏览器的js api。</li><li>App端若要使用操作window、document的库，需要通过renderjs来实现。 <ul><li>uni的api是多端可用的。在条件编译区，每个平台的专有api也可以使用，比如wx.、plus.等api可以分别在微信下和app下使用。</li><li>出于降低小程序向uni-app迁移成本的考虑，wx的api在app里也可以直接运行，比如写wx.request和uni.request是一样的，但仍然建议仅在微信的条件编译区使用wx的api。</li></ul></li></ul><ol start="2"><li>Tag注意</li></ol><ul><li>uni-app的tag同小程序的tag，和HTML的tag不一样，比如div要改成view，span要改成text、a要改成navigator。</li><li>出于降低h5应用向uni-app迁移成本的考虑，写成div、span也可以运行在app和小程序上，因为uni-app编译器会把这些HTML标签编译为小程序标签。但仍然建议养成新习惯。</li></ul><ol start="3"><li>Css注意</li></ol><ul><li>虽然大部分css样式在微信小程序和app中都可以支持，但推荐使用flex布局模型，这种布局更灵活高效且支持更多平台(比如nvue、快应用只支持flex布局)</li><li>单位方面，uni-app默认为rpx。这是一种可跨端的通用单位 <a href="/leo-docs/tutorial/syntax-css.html#尺寸单位">详见</a></li></ul><ol start="4"><li>工程目录注意</li></ol><ul><li>页面文件：放到<code>pages</code>目录下；推荐方案：新建一个页面目录，然后创建一个目录同名的<code>.vue</code>文件，如<code>/pages/list/list.vue</code>，接着在<code>pages.json</code>里完成注册。这与小程序的策略相同。</li><li>自定义组件：放到<code>component</code>目录</li><li>静态资源：如图片，固定放到<code>static</code>目录下。这是<code>webpack</code>的规则</li></ul><ol start="5"><li>数据绑定方式的注意</li></ol><ul><li><code>uni-app</code> 基于<code>Vue 2.0</code>实现，开发者需注意Vue 1.0 -&gt; 2.0 的使用差异，详见<a href="https://cn.vuejs.org/v2/guide/migration.html" target="_blank" rel="noreferrer">从 Vue 1.x 迁移</a></li></ul><ol start="6"><li>每个页面支持使用原生title，首页支持使用原生底部tab，这些是要在pages.json里配置，这些并不是vue页面的一部分。当然vue里的js api也可以动态修改原生title</li><li>虽然使用vue，但在app和小程序里，不是spa而是mpa</li><li>位置坐标系统一为国测局坐标系gcj02，这种坐标系可以被多端支持。老版5+的百度定位和百度地图使用的是百度私有坐标系bd09ll，这种坐标系需要转换。新版uni-app里的百度地图已经默认改为gcj02。高德地图不受影响，一直是gcj02</li></ol><h3 id="h5-开发注意" tabindex="-1">H5 开发注意 <a class="header-anchor" href="#h5-开发注意" aria-label="Permalink to &quot;H5 开发注意&quot;">​</a></h3><ul><li>H5 发布到服务器注意： <ol><li>配置发行后的路径（发行在网站根目录可不配置），比如发行网站路径是 www.xxx.com/html5，在 <code>manifest.json</code> 文件内编辑 h5 节点，router 下增加 base 属性为 html5</li></ol></li></ul><div><img src="https://web-assets.dcloud.net.cn/unidoc/zh/html5-a.png" width="500"></div>`,51),t=a(`<ul><li>引用第三方 js 的方式： <ol><li>通过 npm 引入（通过条件编译，只有是 h5 平台才 import 相应的库）</li><li>在 <code>manifest.json</code> 文件编辑 h5 节点的 template 属性，填写 html 模版路径，在 html 模版里面可以使用 script 的方式引入三方的 js，如下示例是加了百度统计的 html 模板部分代码，模版全部代码可参考：<a href="/leo-docs/collocation/manifest.html?id=h5-template">自定义模板</a></li></ol></li></ul><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- ... --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">noscript</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">strong</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Please enable JavaScript to continue.</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">strong</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">noscript</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#676E95;font-style:italic;">&lt;!-- built files will be auto injected --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">            &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> _hmt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> _hmt </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">                (</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">hm</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElement</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">script</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#A6ACCD;">hm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">src</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://hm.baidu.com/hm.js?xxxxxx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementsByTagName</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">script</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">parentNode</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">insertBefore</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">hm</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- ... --&gt;</span></span>
<span class="line"></span></code></pre></div><ul><li><p>H5 版 <code>uni-app</code> 全支持 <code>vue</code> 语法，所以可能造成部分写法在 H5 端生效，在小程序或 App 端不生效。</p></li><li><p>H5 校验了更严格的 <code>vue</code> 语法，有些写法不规范会报警，比如： <code>data</code> 后面写对象会报警，必须写 <code>function</code>；不能修改 <code>props</code> 的值；组件最外层 <code>template</code> 节点下不允许包含多个节点等。</p></li><li><p>编译为 H5 版后生成的是单页应用（SPA）。</p></li><li><p>如果遇到跨域造成js无法联网，注意网络请求（request、uploadFile、downloadFile等）在浏览器存在跨域限制，解决方案有详见：<a href="https://ask.dcloud.net.cn/article/35267" target="_blank" rel="noreferrer">https://ask.dcloud.net.cn/article/35267</a></p></li><li><p>APP 和小程序的导航栏和 <code>tabbar</code> 均是原生控件，元素区域坐标是不包含原生导航栏和 <code>tabbar</code> 的；而 H5 里导航栏和 <code>tabbar</code> 是 div 模拟实现的，所以元素坐标会包含导航栏和tabbar的高度。为了优雅的解决多端高度定位问题，<code>uni-app</code> 新增了2个css变量：<code>--window-top</code> 和 <code>--window-bottom</code>，这代表了页面的内容区域距离顶部和底部的距离。举个实例，如果你想在原生<code>tabbar</code> 上方悬浮一个菜单，之前写 <code>bottom:0</code>。这样的写法编译到 h5 后，这个菜单会和 <code>tabbar</code> 重叠，位于屏幕底部。而改为使用 <code>bottom:var(--window-bottom)</code>，则不管在 app 下还是在h5下，这个菜单都是悬浮在 <code>tabbar</code> 上浮的。这就避免了写条件编译代码。当然仍然也可以使用 H5 的条件编译处理界面的不同。</p></li><li><p>CSS 內使用 <code>vh</code> 单位的时候注意 <code>100vh</code> 包含导航栏，使用时需要减去导航栏和 <code>tabBar</code> 高度，部分浏览器还包含浏览器操作栏高度，使用时请注意。</p></li><li><p>正常支持 <code>rpx</code>，<code>px</code> 是真实物理像素。暂不支持通过设 <code>manifest.json</code> 的 <code>&quot;transformPx&quot; : true</code>，把 px 当动态单位使用。</p></li><li><p>使用罗盘、地理位置、加速计等相关接口需要使用 https 协议，本地预览（localhost）可以使用 http 协议。</p></li><li><p>PC 端 Chrome 浏览器模拟器设备测试的时候，获取位置 API 需要连接谷歌服务器。</p></li><li><p>组件内（页面除外）不支持 <code>onLoad</code>、<code>onShow</code> 等页面生命周期。</p></li><li><p>为避免和内置组件冲突，自定义组件请加上前缀（但不能是 u 和 uni）。比如可使用的自定义组件名称：<code>my-view</code>、<code>m-input</code>、<code>we-icon</code>，例如不可使用的自定义组件名称：<code>u-view</code>、<code>uni-input</code>，如果已有项目使用了可能造成冲突的名称，请修改名称，另外微信小程序下自定义组件名称不能以 wx 开头。</p></li></ul><h3 id="小程序开发注意-mp" tabindex="-1">小程序开发注意@mp <a class="header-anchor" href="#小程序开发注意-mp" aria-label="Permalink to &quot;小程序开发注意@mp&quot;">​</a></h3><h4 id="各家小程序实现机制不同-可能存在的平台兼容问题" tabindex="-1">各家小程序实现机制不同，可能存在的平台兼容问题 <a class="header-anchor" href="#各家小程序实现机制不同-可能存在的平台兼容问题" aria-label="Permalink to &quot;各家小程序实现机制不同，可能存在的平台兼容问题&quot;">​</a></h4><ol><li>浏览器内核差异</li></ol><p>各家小程序的浏览器内核不同，可能会造成css兼容性问题，更多细节参考：<a href="https://ask.dcloud.net.cn/article/1318" target="_blank" rel="noreferrer">https://ask.dcloud.net.cn/article/1318</a></p><ol start="2"><li>自定义组件渲染差异</li></ol><p>微信（可以使用<a href="/leo-docs/tutorial/vue-api.html#其他配置">virtualHost</a>配置）/QQ/百度/字节跳动这四家小程序，自定义组件在渲染时会比App/H5端多一级节点，在写样式时需要注意：</p><ul><li>使用<code>flex</code>布局时，直接给自定义组件的父元素设置为<code>display:flex</code>不能影响到自定义组件内部的根节点，需要设置当前自定义组件为<code>display:flex</code>才可以。</li><li>在自定义组件内部设置根元素高度为100%，不能撑满自定义组件父元素。需要同时设置当前自定义组件高度为100%才可以。</li></ul><p>支付宝小程序默认启用了<a href="/leo-docs/tutorial/vue-api.html#其他配置">virtualHost</a>配置不会插入节点，一般不存在如上问题。</p><h4 id="vendor-js-过大的处理方式" tabindex="-1">vendor.js 过大的处理方式 <a class="header-anchor" href="#vendor-js-过大的处理方式" aria-label="Permalink to &quot;vendor.js 过大的处理方式&quot;">​</a></h4><p>小程序工具提示<code>vendor.js</code>过大，已经跳过es6向es5转换。这个转换问题本身不用理会，因为<code>vendor.js</code>已经是es5的了。</p><p>关于体积控制，参考如下：</p><ul><li>使用运行时代码压缩 <ul><li><code>HBuilderX</code>创建的项目勾选<code>运行--&gt;运行到小程序模拟器--&gt;运行时是否压缩代码</code></li><li><code>cli</code>创建的项目可以在<code>package.json</code>中添加参数<code>--minimize</code>，示例：<code>&quot;dev:mp-weixin&quot;: &quot;cross-env NODE_ENV=development UNI_PLATFORM=mp-weixin vue-cli-service uni-build --watch --minimize&quot;</code></li></ul></li><li>使用分包优化，<a href="/leo-docs/collocation/manifest.html?id=关于分包优化的说明">关于分包优化的说明</a></li></ul><h4 id="各家小程序开发工具下载地址" tabindex="-1">各家小程序开发工具下载地址 <a class="header-anchor" href="#各家小程序开发工具下载地址" aria-label="Permalink to &quot;各家小程序开发工具下载地址&quot;">​</a></h4><ul><li><a href="https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html" target="_blank" rel="noreferrer">微信开发者工具</a></li><li><a href="https://docs.alipay.com/mini/ide/download" target="_blank" rel="noreferrer">支付宝开发者工具</a></li><li><a href="https://smartprogram.baidu.com/docs/introduction/tool/" target="_blank" rel="noreferrer">百度开发者工具</a></li><li><a href="https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/changelog/update-log/" target="_blank" rel="noreferrer">字节跳动开发者工具</a></li><li><a href="https://open.feishu.cn/document/uYjL24iN/ucDOzYjL3gzM24yN4MjN" target="_blank" rel="noreferrer">飞书开发者工具</a></li></ul><h4 id="各家小程序更新日志列表" tabindex="-1">各家小程序更新日志列表 <a class="header-anchor" href="#各家小程序更新日志列表" aria-label="Permalink to &quot;各家小程序更新日志列表&quot;">​</a></h4><ul><li><a href="https://developers.weixin.qq.com/miniprogram/dev/framework/release/" target="_blank" rel="noreferrer">微信小程序更新日志</a></li><li><a href="https://opendocs.alipay.com/mini/01iolt" target="_blank" rel="noreferrer">支付宝小程序更新日志</a></li><li><a href="https://smartprogram.baidu.com/docs/develop/swan/swanchangelog/" target="_blank" rel="noreferrer">百度小程序更新日志</a></li><li><a href="https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/changelog/update-log" target="_blank" rel="noreferrer">字节跳动小程序更新日志</a></li><li><a href="https://open.feishu.cn/document/uYjL24iN/uATM0YjLwEDN24CMxQjN" target="_blank" rel="noreferrer">飞书小程序更新日志</a></li></ul><h4 id="微信小程序开发注意" tabindex="-1">微信小程序开发注意 <a class="header-anchor" href="#微信小程序开发注意" aria-label="Permalink to &quot;微信小程序开发注意&quot;">​</a></h4><ul><li>建议关注<a href="https://developers.weixin.qq.com/community/develop/issueList?type=%E4%BF%AE%E5%A4%8D%E4%B8%AD&amp;block=bug" target="_blank" rel="noreferrer">微信小程序当前bug列表</a>，对已知Bug，想办法避让。</li></ul><h4 id="支付宝小程序开发注意" tabindex="-1">支付宝小程序开发注意 <a class="header-anchor" href="#支付宝小程序开发注意" aria-label="Permalink to &quot;支付宝小程序开发注意&quot;">​</a></h4><ul><li><code>showLoading</code> 是不透传的，也就是说 <code>loading</code> 显示的时候无法点击页面内容。</li><li>文件名或文件夹名中不允许出现 <code>@</code> 符号。</li><li>网络请求返回的数据会严格按照 <code>dataType</code> 进行处理，如果不符合规范则会抛出错误，而不是按照原格式返回。</li><li><code>canvas</code> 组件的标识是 <code>id</code>，而不是 <code>canvas-id</code>。目前还未进行处理，所以需要主动添加 id 属性。</li><li>目前测试的结果，导航栏只有设置背景颜色为 #FFF(FFF) 时才会变成黑色文字。</li><li>支付宝小程序的导航栏是支持透明渐变效果的，后面会提供相关的配置。</li><li>使用伪元素做边框时，高度值不能用 <code>1rpx</code>，需要直接用 <code>1px</code>。</li><li>不支持 ECharts。</li><li>支付功能模拟不了，需要真机测试。</li></ul><h4 id="百度小程序开发注意" tabindex="-1">百度小程序开发注意 <a class="header-anchor" href="#百度小程序开发注意" aria-label="Permalink to &quot;百度小程序开发注意&quot;">​</a></h4><ul><li>不支持属性选择器。</li><li>不支持 <code>scoped</code>。</li><li>login / getUserInfo /支付等功能在模拟器（开发工具）上不能模拟。</li><li><code>map</code> 组件在开发工具上预览效果不对，但是手机上是对的。</li><li><code>getSystemInfo</code> 获取到的 <code>windowHeight</code> 在模拟器中值不正确，真机预览是正确的。</li><li><code>v-if</code> 和 <code>v-for</code> 不可在同一标签下同时使用。</li><li>页面中引入自定义组件时，渲染的结果中外层会有一个 <code>template</code> 标签，这会导致部分选择器对应的样式匹配不上。</li></ul><h4 id="_360小程序开发注意-mp-360" tabindex="-1">360小程序开发注意 @mp-360 <a class="header-anchor" href="#_360小程序开发注意-mp-360" aria-label="Permalink to &quot;360小程序开发注意 @mp-360&quot;">​</a></h4><ul><li>HBuilderX 2.7.6+ 版支持</li><li>默认为H5平台组件，如果需要360平台组件请使用 &lt;se-...&gt;&lt;/se-...&gt;，例如 <code>&lt;se-video&gt;&lt;/se-video&gt;</code></li><li><code>&lt;se-...&gt;&lt;/se-...&gt;</code> 为360平台专有组件，不能跨平台，需要条件编译 <code>mp-360</code> pages 配置</li></ul><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">//...</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">globalStyle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">mp-360</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">navigationStyle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">custom</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 去掉uni-app header，使用360小程序header</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">//...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><a href="https://mp.360.cn/doc/miniprogram/dev/#/" target="_blank" rel="noreferrer">360小程序文档</a></p><h4 id="快应用开发注意-quickapp" tabindex="-1">快应用开发注意@quickapp <a class="header-anchor" href="#快应用开发注意-quickapp" aria-label="Permalink to &quot;快应用开发注意@quickapp&quot;">​</a></h4><ul><li>HBuilderX 2.7.12+ 版支持</li></ul><h5 id="quickapp-webview" tabindex="-1">quickapp-webview <a class="header-anchor" href="#quickapp-webview" aria-label="Permalink to &quot;quickapp-webview&quot;">​</a></h5><ul><li>目前仅vivo oppo支持</li><li>最小平台版本支持需要 1063</li><li>暂不支持 canvas 组件</li></ul><h5 id="quickapp-webview-huawei" tabindex="-1">quickapp-webview-huawei <a class="header-anchor" href="#quickapp-webview-huawei" aria-label="Permalink to &quot;quickapp-webview-huawei&quot;">​</a></h5><ul><li>Huawei QuickApp IDE 最低版本 2.5.2 （已知该版本工具有个bug：不支持项目名称中包含空格）</li><li>最小平台版本支持需要 1070</li><li>暂不支持 <code>uni.login(OBJECT)</code>，暂时使用条件编译，参考文档 <a href="https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/webview-api-hwaccount" target="_blank" rel="noreferrer">https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/webview-api-hwaccount</a></li><li>暂不支持 支付，支付依赖<code>uni.login(OBJECT)</code></li><li>页面有滚动条时 canvas 组件不会跟随页面滚动</li><li>rich-text 组件某些情况下显示异常</li></ul><h5 id="sign-证书配置" tabindex="-1">sign 证书配置 <a class="header-anchor" href="#sign-证书配置" aria-label="Permalink to &quot;sign 证书配置&quot;">​</a></h5><p>sign放到项目根目录，编译后自动拷贝到 .quickapp/sign，每次编译完成时会删除.quickapp，避免证书丢失</p>`,37);function c(i,r,d,u,h,F){return o(),s("div",null,[p,e(" 2. 点击菜单 发行-> H5 3. 在当下项目下的 ``unpackage/dist/build/h5`` 目录找到出的资源，部署服务器（或者使用本地服务器预览），如需部署到相对路径（支持本地file协议打开）参考：https://ask.dcloud.net.cn/article/37432。 "),t])}const m=l(n,[["render",c]]);export{D as __pageData,m as default};