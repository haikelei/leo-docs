import{_ as t,c as s,o as e,N as n}from"./chunks/framework.fc67cb9d.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/ui/intersection-observer.md","lastUpdated":1685603474000}'),l={name:"api/ui/intersection-observer.md"},a=n(`<p>节点布局交叉状态 API 可用于监听两个或多个组件节点在布局位置上的相交状态。这一组API常常可以用于推断某些节点是否可以被用户看见、有多大比例可以被用户看见。</p><h3 id="uni-createintersectionobserver-this-options" tabindex="-1">uni.createIntersectionObserver([this], [options]) <a class="header-anchor" href="#uni-createintersectionobserver-this-options" aria-label="Permalink to &quot;uni.createIntersectionObserver([this], [options])&quot;">​</a></h3><p>创建并返回一个 <code>IntersectionObserver</code> 对象实例。</p><p><strong>this说明：</strong></p><p>自定义组件实例。<strong>支付宝小程序不支持此参数，传入仅为抹平写法差异</strong></p><p><strong>options 的可选参数为：</strong></p><table><thead><tr><th style="text-align:left;">字段名</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">thresholds</td><td style="text-align:left;">Array</td><td style="text-align:left;">一个数值数组，包含所有阈值。默认为 <code>[0]</code>。</td></tr><tr><td style="text-align:left;">initialRatio</td><td style="text-align:left;">Number</td><td style="text-align:left;">初始的相交比例，如果调用时检测到的相交比例与这个值不相等且达到阈值，则会触发一次监听器的回调函数。默认为 <code>0</code>。</td></tr><tr><td style="text-align:left;">observeAll</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">是否同时观测多个参照节点（而非一个），如果设为 <code>true</code>，<code>observe</code> 的 <code>targetSelector</code> 将选中多个节点（注意：同时选中过多节点将影响渲染性能）</td></tr></tbody></table><h3 id="intersectionobserver-对象的方法列表" tabindex="-1">IntersectionObserver 对象的方法列表 <a class="header-anchor" href="#intersectionobserver-对象的方法列表" aria-label="Permalink to &quot;IntersectionObserver 对象的方法列表&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">方法</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">IntersectionObserver.relativeTo(selector,[margins])</td><td style="text-align:left;">使用选择器指定一个节点，作为参照区域之一。</td></tr><tr><td style="text-align:left;">IntersectionObserver.relativeToViewport([margins])</td><td style="text-align:left;">指定页面显示区域作为参照区域之一</td></tr><tr><td style="text-align:left;">IntersectionObserver.observe(selector,[callback])</td><td style="text-align:left;">指定目标节点并开始监听相交状态变化情况。回调函数 <code>callback</code> 包含一个参数 <code>result</code></td></tr><tr><td style="text-align:left;">IntersectionObserver.disconnect()</td><td style="text-align:left;">停止监听。回调函数将不再触发。</td></tr></tbody></table><p><strong>margins 参数：</strong> 用来扩展（或收缩）参照节点布局区域的边界。</p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">是否必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">left</td><td style="text-align:left;">number</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">节点布局区域的左边界</td></tr><tr><td style="text-align:left;">right</td><td style="text-align:left;">number</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">节点布局区域的右边界</td></tr><tr><td style="text-align:left;">top</td><td style="text-align:left;">number</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">节点布局区域的上边界</td></tr><tr><td style="text-align:left;">bottom</td><td style="text-align:left;">number</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">节点布局区域的下边界</td></tr></tbody></table><p>下面的示例代码中，如果目标节点 <code>&quot;.test&quot;</code> 进入 <code>&quot;.scroll&quot;</code> 区域以下 100px 时，就会触发回调函数。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">uni.createIntersectionObserver(this).relativeTo(&#39;.scroll&#39;,{bottom: 100}).observe(&#39;.test&#39;, (res) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(res);</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>observe 回调函数 result 包含的字段</strong></p><table><thead><tr><th style="text-align:left;">字段名</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">intersectionRatio</td><td style="text-align:left;">Number</td><td style="text-align:left;">相交比例</td></tr><tr><td style="text-align:left;">intersectionRect</td><td style="text-align:left;">Object</td><td style="text-align:left;">相交区域的边界，包含 <code>left</code>、<code>right</code>、<code>top</code>、<code>bottom</code> 四项</td></tr><tr><td style="text-align:left;">boundingClientRect</td><td style="text-align:left;">Object</td><td style="text-align:left;">目标节点布局区域的边界，包含 <code>left</code>、<code>right</code>、<code>top</code>、<code>bottom</code> 四项</td></tr><tr><td style="text-align:left;">relativeRect</td><td style="text-align:left;">Object</td><td style="text-align:left;">参照区域的边界，包含 <code>left</code>、<code>right</code>、<code>top</code>、<code>bottom</code> 四项</td></tr><tr><td style="text-align:left;">time</td><td style="text-align:left;">Number</td><td style="text-align:left;">相交检测时的时间戳</td></tr></tbody></table><p><strong>Tips</strong></p><ul><li>与页面显示区域的相交区域并不准确代表用户可见的区域，因为参与计算的区域是“布局区域”，布局区域可能会在绘制时被其他节点裁剪隐藏（如祖先节点中 overflow 样式为 hidden 的节点）或遮盖（如 fixed 定位的节点）。</li><li>节点交互状态 <code>API</code> 建议在 <code>onReady</code> 生命周期里监听，因为此 <code>API</code> 需要查找页面元素，<code>onReady</code> 时页面已经完成初次渲染，已经能查找到对应的元素。</li></ul><h3 id="代码示例" tabindex="-1">代码示例 <a class="header-anchor" href="#代码示例" aria-label="Permalink to &quot;代码示例&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;view class=&quot;container&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;text&gt;{{appear ? &#39;小球出现&#39; : &#39;小球消失&#39;}}&lt;/text&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;view class=&quot;page-section&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			&lt;scroll-view class=&quot;scroll-view&quot; scroll-y&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">				&lt;view class=&quot;scroll-area&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">					&lt;text class=&quot;notice&quot;&gt;向下滚动让小球出现&lt;/text&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">					&lt;view class=&quot;ball&quot;&gt;&lt;/view&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">				&lt;/view&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			&lt;/scroll-view&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;/view&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;/view&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	let observer = null;</span></span>
<span class="line"><span style="color:#A6ACCD;">	export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">		data() {</span></span>
<span class="line"><span style="color:#A6ACCD;">			return {</span></span>
<span class="line"><span style="color:#A6ACCD;">				appear: false</span></span>
<span class="line"><span style="color:#A6ACCD;">			}</span></span>
<span class="line"><span style="color:#A6ACCD;">		},</span></span>
<span class="line"><span style="color:#A6ACCD;">		onReady() {</span></span>
<span class="line"><span style="color:#A6ACCD;">			observer = uni.createIntersectionObserver(this);</span></span>
<span class="line"><span style="color:#A6ACCD;">            observer.relativeTo(&#39;.scroll-view&#39;).observe(&#39;.ball&#39;, (res) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">              if (res.intersectionRatio &gt; 0 &amp;&amp; !this.appear) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                this.appear = true;</span></span>
<span class="line"><span style="color:#A6ACCD;">              } else if (!res.intersectionRatio &gt; 0 &amp;&amp; this.appear) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                this.appear = false;</span></span>
<span class="line"><span style="color:#A6ACCD;">              }</span></span>
<span class="line"><span style="color:#A6ACCD;">            })</span></span>
<span class="line"><span style="color:#A6ACCD;">		},</span></span>
<span class="line"><span style="color:#A6ACCD;">		onUnload() {</span></span>
<span class="line"><span style="color:#A6ACCD;">			if (observer) {</span></span>
<span class="line"><span style="color:#A6ACCD;">				observer.disconnect()</span></span>
<span class="line"><span style="color:#A6ACCD;">			}</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	view,page {</span></span>
<span class="line"><span style="color:#A6ACCD;">		display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">		flex-direction: column;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	.scroll-view {</span></span>
<span class="line"><span style="color:#A6ACCD;">		height: 400rpx;</span></span>
<span class="line"><span style="color:#A6ACCD;">		background: #fff;</span></span>
<span class="line"><span style="color:#A6ACCD;">		border: 1px solid #ccc;</span></span>
<span class="line"><span style="color:#A6ACCD;">		box-sizing: border-box;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	.scroll-area {</span></span>
<span class="line"><span style="color:#A6ACCD;">		height: 1300rpx;</span></span>
<span class="line"><span style="color:#A6ACCD;">		display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">		flex-direction: column;</span></span>
<span class="line"><span style="color:#A6ACCD;">		align-items: center;</span></span>
<span class="line"><span style="color:#A6ACCD;">		transition: .5s;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	.notice {</span></span>
<span class="line"><span style="color:#A6ACCD;">		margin-top: 150rpx;</span></span>
<span class="line"><span style="color:#A6ACCD;">		margin: 150rpx 0 400rpx 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	.ball {</span></span>
<span class="line"><span style="color:#A6ACCD;">		width: 200rpx;</span></span>
<span class="line"><span style="color:#A6ACCD;">		height: 200rpx;</span></span>
<span class="line"><span style="color:#A6ACCD;">		background: #1AAD19;</span></span>
<span class="line"><span style="color:#A6ACCD;">		border-radius: 50%;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,19),o=[a];function p(r,c,i,d,A,y){return e(),s("div",null,o)}const f=t(l,[["render",p]]);export{g as __pageData,f as default};
