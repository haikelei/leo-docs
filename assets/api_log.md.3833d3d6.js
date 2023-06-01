import{_ as o,c as e,o as a,N as r}from"./chunks/framework.fc67cb9d.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/log.md","lastUpdated":1685603474000}'),t={name:"api/log.md"},l=r('<h3 id="console" tabindex="-1">console <a class="header-anchor" href="#console" aria-label="Permalink to &quot;console&quot;">​</a></h3><p>向控制台打印日志信息。</p><h3 id="debug" tabindex="-1">debug <a class="header-anchor" href="#debug" aria-label="Permalink to &quot;debug&quot;">​</a></h3><p>向控制台打印 debug 日志</p><p>注：App 端 debug 方法等同于 log 方法。</p><h3 id="log" tabindex="-1">log <a class="header-anchor" href="#log" aria-label="Permalink to &quot;log&quot;">​</a></h3><p>向控制台打印 log 日志</p><h3 id="info" tabindex="-1">info <a class="header-anchor" href="#info" aria-label="Permalink to &quot;info&quot;">​</a></h3><p>向控制台打印 info 日志</p><h3 id="warn" tabindex="-1">warn <a class="header-anchor" href="#warn" aria-label="Permalink to &quot;warn&quot;">​</a></h3><p>向控制台打印 warn 日志</p><h3 id="error" tabindex="-1">error <a class="header-anchor" href="#error" aria-label="Permalink to &quot;error&quot;">​</a></h3><p>向控制台打印 error 日志</p><p><strong>注意：</strong></p><ul><li>不同平台对于 console 方法的支持存在差异，建议在开发过程中只使用文档中提到的方法。</li><li>HBuilderX中有2个重要的代码块，敲<code>clog</code>：可直接输出<code>console.log()</code>；敲<code>clogv</code>：可输出<code>console.log(&quot;: &quot; + );</code>，并且出现双光标，方便把变量名称和值同时打印出来。</li></ul>',15),n=[l];function c(i,d,s,h,p,u){return a(),e("div",null,n)}const b=o(t,[["render",c]]);export{g as __pageData,b as default};