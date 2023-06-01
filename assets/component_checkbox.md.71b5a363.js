import{_ as s,c as n,o as l,N as a}from"./chunks/framework.fc67cb9d.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"component/checkbox.md","lastUpdated":1685603474000}'),t={name:"component/checkbox.md"},p=a(`<h4 id="checkbox-group" tabindex="-1">checkbox-group <a class="header-anchor" href="#checkbox-group" aria-label="Permalink to &quot;checkbox-group&quot;">​</a></h4><p>多项选择器，内部由多个 checkbox 组成。</p><p><strong>属性说明</strong></p><table><thead><tr><th style="text-align:left;">属性名</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">@change</td><td style="text-align:left;">EventHandle</td><td style="text-align:left;"></td><td style="text-align:left;"><code>&lt;checkbox-group&gt;</code>中选中项发生改变是触发 change 事件，<code>detail = {value:[选中的checkbox的value的数组]}</code></td></tr></tbody></table><h4 id="checkbox" tabindex="-1">checkbox <a class="header-anchor" href="#checkbox" aria-label="Permalink to &quot;checkbox&quot;">​</a></h4><p>多选项目。</p><p><strong>属性说明</strong></p><table><thead><tr><th style="text-align:left;">属性名</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">value</td><td style="text-align:left;">String</td><td style="text-align:left;"></td><td style="text-align:left;"><code>&lt;checkbox&gt;</code> 标识，选中时触发 <code>&lt;checkbox-group&gt;</code> 的 change 事件，并携带 <code>&lt;checkbox&gt;</code> 的 value。</td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">是否禁用</td></tr><tr><td style="text-align:left;">checked</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">当前是否选中，可用来设置默认选中</td></tr><tr><td style="text-align:left;">color</td><td style="text-align:left;">Color</td><td style="text-align:left;"></td><td style="text-align:left;">checkbox的颜色，同css的color</td></tr></tbody></table><p><strong>示例</strong> <a href="https://hellouniapp.dcloud.net.cn/pages/component/checkbox/checkbox" target="_blank" rel="noreferrer">查看演示</a></p><p>以下示例代码，来自于<a href="https://github.com/dcloudio/hello-uniapp" target="_blank" rel="noreferrer">hello uni-app项目</a>，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。</p><p>::: preview <a href="https://hellouniapp.dcloud.net.cn/pages/component/checkbox/checkbox" target="_blank" rel="noreferrer">https://hellouniapp.dcloud.net.cn/pages/component/checkbox/checkbox</a></p><blockquote><p>Template</p></blockquote><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">uni-padding-wrap uni-common-mt</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">uni-title uni-common-mt</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">默认样式</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">checkbox-group</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">						</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">checkbox</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cb</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">checked</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span><span style="color:#A6ACCD;">选中</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">						</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">checkbox</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cb</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span><span style="color:#A6ACCD;">未选中</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">checkbox-group</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">uni-title uni-common-mt</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">不同颜色和尺寸的checkbox</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">checkbox-group</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">						</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">checkbox</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cb</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">checked</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#FFCC33</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">transform:scale(0.7)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span><span style="color:#A6ACCD;">选中</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">						</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">checkbox</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cb</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#FFCC33</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">transform:scale(0.7)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span><span style="color:#A6ACCD;">未选中</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">checkbox-group</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">uni-padding-wrap</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">uni-title uni-common-mt</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">				推荐展示样式</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\\n使用 uni-list 布局</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">uni-list</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">checkbox-group</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@change</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">checkboxChange</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">uni-list-cell uni-list-cell-pd</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item in items</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item.value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">						</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">checkbox</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item.value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:checked</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item.checked</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">{{item.name}}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">checkbox-group</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><blockquote><p>Script</p></blockquote><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">				title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">checkbox 复选框</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">				items</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">						value</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">USA</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">						name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">美国</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">						value</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">CHN</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">						name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">中国</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">						checked</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">						value</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">BRA</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">						name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">巴西</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">						value</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">JPN</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">						name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">日本</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">						value</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ENG</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">						name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">英国</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">						value</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">FRA</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">						name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">法国</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">				]</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#82AAFF;">checkboxChange</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">items</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">items</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#A6ACCD;">values</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">detail</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">lenI</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">items</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">lenI</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">items</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">values</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">includes</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">						</span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">$set</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">checked</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">						</span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">$set</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">checked</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#FF9CAC;">false</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><blockquote><p>Style</p></blockquote><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">uni-list-cell</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">justify-content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> flex-start</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>:::</p><p><strong>注意</strong></p><ul><li>checkbox的默认颜色，在不同平台不一样。微信小程序、360小程序是绿色的，字节跳动小程序为红色，其他平台是蓝色的。更改颜色使用color属性。</li><li>如需调节checkbox大小，可通过css的scale方法调节，如缩小到70%<code>style=&quot;transform:scale(0.7)&quot;</code></li></ul><p><strong>扩展</strong></p><ul><li>uni-ui提供了增强的uni-data-checkbox组件，基于<a href="/leo-docs/component/datacom.html">datacom规范</a>，只需传入data数据，即可自动生成一组复选框，使用方式更简洁，并且支持<a href="https://ext.dcloud.net.cn/plugin?id=2773" target="_blank" rel="noreferrer">uni-forms</a>的表单验证。uni-data-checkbox组件详见<a href="https://ext.dcloud.net.cn/plugin?id=3456" target="_blank" rel="noreferrer">https://ext.dcloud.net.cn/plugin?id=3456</a></li></ul>`,22),o=[p];function e(c,F,r,D,y,i){return l(),n("div",null,o)}const u=s(t,[["render",e]]);export{A as __pageData,u as default};