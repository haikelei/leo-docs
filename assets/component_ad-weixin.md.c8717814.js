import{_ as a,c as e,o as t,N as n}from"./chunks/framework.fc67cb9d.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"component/ad-weixin.md","lastUpdated":1685603474000}'),l={name:"component/ad-weixin.md"},o=n(`<h2 id="uni-ad支持微信小程序广告" tabindex="-1">uni-ad支持微信小程序广告 <a class="header-anchor" href="#uni-ad支持微信小程序广告" aria-label="Permalink to &quot;uni-ad支持微信小程序广告&quot;">​</a></h2><p>3.4.10+ 支持</p><p>在微信小程序上，有2种广告类型：</p><ol><li>DCloud的uni-ad广告（简称uni-ad广告），uni-ad微信小程序广告开通指南<a href="https://ask.dcloud.net.cn/article/39928" target="_blank" rel="noreferrer">点击这里</a></li><li>微信小程序自带的流量主广告（简称wx广告）</li></ol><p>这两者的区别是：</p><ol><li>申请门槛</li></ol><p>uni-ad的申请门槛较低，对初创者更友好；微信申请流量主需要小程序日活过千</p><ol start="2"><li>全端支持</li></ol><p>uni-ad可以一套代码全端变现，包括app、web、微信小程序；wx广告仅支持微信小程序</p><ol start="3"><li>广告类型</li></ol><p>两者均支持banner/信息流、激励视频、插屏。wx广告多支持一个开屏广告</p><ol start="4"><li>收益比较</li></ol><p>有高有低，不同小程序cpm不同，需要开发者测试比较</p><ol start="4"><li>结算周期</li></ol><p>相比微信自带流量主广告，uni-ad开发者可以申请相对更短的结算周期和垫资服务。具体扫码加企业微信咨询。</p><p><img src="https://web-assets.dcloud.net.cn/unidoc/zh/eryunweixin.jpg" alt=""></p><ol start="5"><li>安全防护</li></ol><p>uni-ad内置了安全防护策略，减少广告被刷风险</p><p>3.6.8+ 支持激励视频服务器安全回调，<a href="https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html#callback" target="_blank" rel="noreferrer">详情</a></p><p>服务器回调用于业务系统判断是否提供奖励给观看广告的用户。配置服务器回调后，当用户成功看完广告时，<a href="https://uniapp.dcloud.net.cn/uniCloud/" target="_blank" rel="noreferrer">uniCloud</a>服务器会访问配置的云函数，通知用户完成观看激励视频。 相对来讲服务器回调将更加安全</p><ol start="6"><li>开通方式</li></ol><p>uni-ad由开发者在DCloud网站<a href="https://uniad.dcloud.net.cn" target="_blank" rel="noreferrer">uniad.dcloud.net.cn</a>申请，开发者与DCloud开票结算；而wx广告在微信小程序后台申请，开发者与微信开票结算</p><ol start="7"><li>代码写法</li></ol><p>两者在开发时，都使用相同的组件，比如<code>&lt;ad&gt;</code>组件、<code>&lt;ad-rewarded-video&gt;</code>组件，但uni-ad的组件属性是adpid（广告位id的缩写），微信小程序的组件属性是unit-id。</p><h2 id="uni-ad的开发者使用流程" tabindex="-1">uni-ad的开发者使用流程 <a class="header-anchor" href="#uni-ad的开发者使用流程" aria-label="Permalink to &quot;uni-ad的开发者使用流程&quot;">​</a></h2><ol><li>在<a href="https://uniad.dcloud.net.cn" target="_blank" rel="noreferrer">uniad.dcloud.net.cn</a>申请开通广告</li><li>在<a href="https://uniad.dcloud.net.cn" target="_blank" rel="noreferrer">uniad.dcloud.net.cn</a>获取广告位id（adpid）</li><li>在小程序插件配置中引入uni-ad微信小程序插件和腾讯珊瑚广告插件，参考下面的申请方案</li><li>在前端页面的合适位置写上广告组件<code>&lt;ad adpid=&quot;&quot;&gt;&lt;/ad&gt;</code></li></ol><p>注意：微信小程序平台暂不提供测试广告位，开发期间也可以预览广告效果，以真机效果运行为准</p><h2 id="不同广告类型的开发文档" tabindex="-1">不同广告类型的开发文档 <a class="header-anchor" href="#不同广告类型的开发文档" aria-label="Permalink to &quot;不同广告类型的开发文档&quot;">​</a></h2><ul><li>banner/信息流广告</li></ul><p>详细开发文档地址：<a href="https://uniapp.dcloud.io/component/ad" target="_blank" rel="noreferrer">https://uniapp.dcloud.io/component/ad</a></p><ul><li>激励视频广告</li></ul><p>详细开发文档地址：<a href="https://uniapp.dcloud.io/component/ad-rewarded-video" target="_blank" rel="noreferrer">https://uniapp.dcloud.io/component/ad-rewarded-video</a></p><ul><li>插屏广告</li></ul><p>详细开发文档地址：<a href="https://uniapp.dcloud.io/component/ad-interstitial" target="_blank" rel="noreferrer">https://uniapp.dcloud.io/component/ad-interstitial</a></p><h2 id="adpid和unit-id详解" tabindex="-1">adpid和unit-id详解 <a class="header-anchor" href="#adpid和unit-id详解" aria-label="Permalink to &quot;adpid和unit-id详解&quot;">​</a></h2><p><code>&lt;ad&gt;</code>（banner/信息流）、<code>&lt;ad-rewarded-video&gt;</code>（激励视频）、<code>&lt;ad-interstitial&gt;</code>（插屏）是<code>uni-app</code>框架的内置的3个广告组件。</p><p>其中<code>&lt;ad&gt;</code>组件同时支持<code>uni-ad</code>广告和wx广告，而其他2个广告组件仅支持uni-ad广告。开发wx广告的激励视频和插屏需要通过js api而不是组件方式。</p><p>在<code>&lt;ad&gt;</code>组件上可以同时写adpid和unit-id，区别如下：</p><ul><li><code>&lt;ad adpid=&quot;&quot;&gt;&lt;/ad&gt;</code>，uni-ad广告（uni-app 3.4.10+版）</li><li><code>&lt;ad unit-id=&quot;&quot;&gt;&lt;/ad&gt;</code>，wx广告，unit-id需在微信小程序后台申请</li></ul><p><code>adpid</code>和<code>unit-id</code>可以同时设置。<code>adpid</code>优先级高于<code>unit-id</code>，如果没有开通<code>uni-ad</code>或网络失败则切换为wx广告，这个过程会有3秒的间隔</p><p><strong>例子：</strong> 如果想在微信上仅使用微信的广告，App 或 Web 使用 uni-ad 可使用条件编译，如下</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- #ifdef MP-WEIXIN --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ad</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">unit-id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">ad</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- #endif --&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- #ifndef MP-WEIXIN --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ad</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">adpid</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">ad</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- #endif --&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="微信小程序插件申请" tabindex="-1">微信小程序插件申请 <a class="header-anchor" href="#微信小程序插件申请" aria-label="Permalink to &quot;微信小程序插件申请&quot;">​</a></h2><p>通过以下两种方案申请插件</p><h3 id="方案一" tabindex="-1">方案一 <a class="header-anchor" href="#方案一" aria-label="Permalink to &quot;方案一&quot;">​</a></h3><p>在 HBuilderX 运行到微信开发者工具，在微信的开发者工具调试控制台会输出申请插件的链接，点击后弹出申请确认框，然后点击 <code>确定</code> 按钮</p><h3 id="方案二" tabindex="-1">方案二 <a class="header-anchor" href="#方案二" aria-label="Permalink to &quot;方案二&quot;">​</a></h3><p>登陆微信公众平台 <a href="https://mp.weixin.qq.com/" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/</a>，点击左侧栏 <code>设置</code>，然后找到顶部页签 <code>第三方设置</code>，向下滚动屏幕到 <code>插件管理</code>, 点击 <code>添加插件</code> 按钮，搜索 <code>uni-ad</code> 和 <code>珊瑚运营平台</code> 并添加</p>`,48),d=[o];function i(p,r,s,c,u,h){return t(),e("div",null,d)}const _=a(l,[["render",i]]);export{g as __pageData,_ as default};