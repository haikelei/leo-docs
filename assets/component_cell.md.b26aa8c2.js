import{_ as e,c as l,o as a,N as t}from"./chunks/framework.fc67cb9d.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"component/cell.md","lastUpdated":1685603474000}'),o={name:"component/cell.md"},r=t('<h4 id="cell" tabindex="-1">cell <a class="header-anchor" href="#cell" aria-label="Permalink to &quot;cell&quot;">​</a></h4><p>app端nvue专用组件。它的重要价值在于告诉原生引擎，哪些部分是可重用的。</p><p><code>&lt;cell&gt;</code> Cell 必须以一级子组件的形式存在于 <code>list recycler waterfall</code> 中。</p><h4 id="子组件" tabindex="-1">子组件 <a class="header-anchor" href="#子组件" aria-label="Permalink to &quot;子组件&quot;">​</a></h4><p>Cell 支持添加任意类型的组件作为自己的子组件，但是请不要再内部添加滚动容器了。</p><h4 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h4><ul><li><p>keep-scroll-position boolean, 它控制插入单元格后是否保持最后一个滑动位置。</p></li><li><p>insert-animation string, cell 的插入动画。当前只支持 <code>none</code> 和 <code>default</code>。</p></li><li><p>delete-animation string, cell 的删除动画。当前只支持 <code>none</code> 和 <code>default</code>。</p></li><li><p>recycle boolean, 默认值 true。这个属性控制这个 Cell 的 view 和子 views 是否在列表滚动时进行回收，在 iOS 上通常必须指定为 true （因为默认为 true，所以一般不需要写这个属性），如果设置为 false，列表滚动时，页面会占用非常高的内存。Android上默认是true，设置为false可以防止Image和Text上数据重新绑定。</p></li><li><p>render-reverse-position boolean, 默认值 false。定义开始渲染的位置，需搭配list的属性<code>render-reverse</code>共同使用，单独配置不起作用。HBuilderX3.6.9+支持。</p></li></ul><h4 id="样式" tabindex="-1">样式 <a class="header-anchor" href="#样式" aria-label="Permalink to &quot;样式&quot;">​</a></h4><ul><li>通用样式. <a href="https://uniapp.dcloud.net.cn/tutorial/nvue-css.html" target="_blank" rel="noreferrer">详见</a></li></ul><blockquote><p>TIP</p><ul><li>不要指定 <code>&lt;cell&gt;</code> 的 <code>flex</code> 值。Cell 的宽度是由它的父容器决定的，你也不需要指定它的高度。</li><li>Cell 的排版的位置是由父容器控制的，所以一般不要为其指定 <code>margin</code> 样式</li></ul></blockquote><h4 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h4><ul><li>通用事件. <a href="https://uniapp.dcloud.net.cn/tutorial/nvue-event.html" target="_blank" rel="noreferrer">详见</a></li></ul>',12),c=[r];function i(n,d,s,p,u,h){return a(),l("div",null,c)}const m=e(o,[["render",i]]);export{f as __pageData,m as default};
