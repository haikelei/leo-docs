import{_ as l,c as a,o as n,N as t,x as s}from"./chunks/framework.fc67cb9d.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"component/barcode.md","lastUpdated":1685603474000}'),o={name:"component/barcode.md"},e=t('<h4 id="barcode" tabindex="-1">Barcode <a class="header-anchor" href="#barcode" aria-label="Permalink to &quot;Barcode&quot;">​</a></h4><p>app端nvue专用的扫码组件。</p><ul><li>此组件用于app端nvue页面实现内嵌到界面上的扫码。其他场景、其他平台，请使用全屏扫码API：<a href="https://uniapp.dcloud.io/api/system/barcode" target="_blank" rel="noreferrer">uni.scanCode</a></li><li>App下纯nvue项目（manifest中renderer为native），暂不支持uni.scanCode API，此时只能使用barcode组件来替代。</li><li>此组件自HBuilderX 2.1.5+起支持。</li></ul><p><strong>属性说明</strong> 设置Barcode扫码控件的属性，如扫码框、扫码条的颜色等。</p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">autostart</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">否</td><td style="text-align:left;">是否自动开始扫码</td></tr><tr><td style="text-align:left;">background</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">条码识别控件背景颜色,颜色值支持(参考CSS颜色规范)：颜色名称(参考CSS Color Names)/十六进制值/rgb值，默认值为黑色。</td></tr><tr><td style="text-align:left;">frameColor</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">扫码框颜色,颜色值支持(参考CSS颜色规范)：颜色名称(参考CSS Color Names)/十六进制值/rgb值/rgba值，默认值为红色。</td></tr><tr><td style="text-align:left;">scanbarColor</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">扫码条颜色,颜色值支持(参考CSS颜色规范)：颜色名称(参考CSS Color Names)/十六进制值/rgb值/rgba值，默认值为红色。</td></tr><tr><td style="text-align:left;">filters</td><td style="text-align:left;">Array[Number]</td><td style="text-align:left;">[0,1,2]</td><td style="text-align:left;">否</td><td style="text-align:left;">条码类型过滤器，条码类型常量数组，默认情况支持QR、EAN13、EAN8类型。 通过此参数可设置扫码识别支持的条码类型（注意：设置支持的条码类型越多，扫描识别速度可能将会降低）。</td></tr></tbody></table><p><strong>码类型常量</strong></p><ul><li>QR: QR二维码，数值为0</li><li>EAN13: EAN条形码标准版，数值为1</li><li>EAN8: EAN条形码简版，数值为2</li><li>AZTEC: Aztec二维码，数值为3</li><li>DATAMATRIX: Data Matrix二维码，数值为4</li><li>UPCA: UPC条形码标准版，数值为5</li><li>UPCE: UPC条形码缩短版，数值为6</li><li>CODABAR: Codabar条形码，数值为7</li><li>CODE39: Code39条形码，数值为8</li><li>CODE93: Code93条形码，数值为9</li><li>CODE128: Code128条形码，数值为10</li><li>ITF: ITF条形码，数值为11</li><li>MAXICODE: MaxiCode二维码，数值为12</li><li>PDF417: PDF 417二维条码，数值为13</li><li>RSS14: RSS 14条形组合码，数值为14</li><li>RSSEXPANDED: 扩展式RSS条形组合码，数值为15</li></ul><h5 id="start-object" tabindex="-1">start(object) <a class="header-anchor" href="#start-object" aria-label="Permalink to &quot;start(object)&quot;">​</a></h5><blockquote><p>开始扫码识别</p></blockquote><h6 id="object-object" tabindex="-1">Object object <a class="header-anchor" href="#object-object" aria-label="Permalink to &quot;Object object&quot;">​</a></h6><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">备注</th></tr></thead><tbody><tr><td style="text-align:left;">conserve</td><td style="text-align:left;">是否保存扫码成功时的截图</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">否</td><td style="text-align:left;">如果设置为true则在扫码成功时将图片保存，并通过onmarked回调函数的file参数返回保存文件的路径。 默认值为false，不保存截图。</td></tr><tr><td style="text-align:left;">filename</td><td style="text-align:left;">保存扫码成功时图片保存路径</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">可通过此参数设置保存截图的路径和名称，如果设置图片文件名称则必须指定文件的后缀名（必须是.png），否则认为是指定目录，文件名称则自动生成。</td></tr><tr><td style="text-align:left;">vibrate</td><td style="text-align:left;">扫码成功时是否需要震动提醒</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">否</td><td style="text-align:left;">如果设置为true则在扫码成功时震动设备，false则不震动。 默认值为true。</td></tr><tr><td style="text-align:left;">sound</td><td style="text-align:left;">扫码成功时播放的提示音</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">可取值： &quot;none&quot; - 不播放提示音； &quot;default&quot; - 播放默认提示音（5+引擎内置）。 默认值为&quot;default&quot;。</td></tr></tbody></table><h5 id="cancel" tabindex="-1">cancel() <a class="header-anchor" href="#cancel" aria-label="Permalink to &quot;cancel()&quot;">​</a></h5><blockquote><p>取消扫码识别</p></blockquote><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">无</td><td style="text-align:left;">无</td><td style="text-align:left;">无</td><td style="text-align:left;">结束对摄像头获取图片数据进行条码识别操作，同时关闭摄像头的视频捕获。 结束后可调用start方法重新开始识别。</td></tr></tbody></table><h5 id="setflash-boolean" tabindex="-1">setFlash(boolean) <a class="header-anchor" href="#setflash-boolean" aria-label="Permalink to &quot;setFlash(boolean)&quot;">​</a></h5><blockquote><p>操作闪光灯</p></blockquote><h6 id="boolean-boolean" tabindex="-1">Boolean boolean <a class="header-anchor" href="#boolean-boolean" aria-label="Permalink to &quot;Boolean boolean&quot;">​</a></h6><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th><th style="text-align:left;">备注</th></tr></thead><tbody><tr><td style="text-align:left;">Boolean</td><td style="text-align:left;">是</td><td style="text-align:left;">是否开启闪光灯</td><td style="text-align:left;">可取值true或false，true表示打开闪光灯，false表示关闭闪光灯。</td></tr></tbody></table><h5 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h5><h5 id="marked" tabindex="-1">marked <a class="header-anchor" href="#marked" aria-label="Permalink to &quot;marked&quot;">​</a></h5>',20),p=s("blockquote",{"event.detail":""},[s("p",null,"条码识别成功事件")],-1),r=t(`<h6 id="返回参数说明" tabindex="-1">返回参数说明 <a class="header-anchor" href="#返回参数说明" aria-label="Permalink to &quot;返回参数说明&quot;">​</a></h6><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">type</td><td style="text-align:left;">string</td><td style="text-align:left;">&quot;success&quot; 表示成功</td></tr><tr><td style="text-align:left;">message</td><td style="text-align:left;">string</td><td style="text-align:left;">识别到的条码数据，扫码识别出的数据内容，字符串类型，采用UTF8编码格式。</td></tr><tr><td style="text-align:left;">code</td><td style="text-align:left;">Number</td><td style="text-align:left;">识别到的条码类型，与Barcode组件的条码类型常量一致。</td></tr><tr><td style="text-align:left;">file</td><td style="text-align:left;">string</td><td style="text-align:left;">扫码成功的截图文件路径，扫码识别到的截图，png格式文件，如果设置为不保存截图，则返回undefined。</td></tr></tbody></table><h5 id="error" tabindex="-1">error <a class="header-anchor" href="#error" aria-label="Permalink to &quot;error&quot;">​</a></h5><blockquote><p>条码识别错误事件</p></blockquote><h6 id="返回参数说明-1" tabindex="-1">返回参数说明 <a class="header-anchor" href="#返回参数说明-1" aria-label="Permalink to &quot;返回参数说明&quot;">​</a></h6><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">type</td><td style="text-align:left;">string</td><td style="text-align:left;">&quot;fail&quot; 表示失败</td></tr><tr><td style="text-align:left;">code</td><td style="text-align:left;">number</td><td style="text-align:left;">相应 code 码</td></tr><tr><td style="text-align:left;">message</td><td style="text-align:left;">string</td><td style="text-align:left;">失败描述</td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">barcode</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">barcode</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">autostart</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">barcode</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">background</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rgb(0,0,0)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">frameColor</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#1C86EE</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">scanbarColor</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#1C86EE</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:filters</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fil</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@marked</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@error</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fail1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">barcode</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">toStart</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">开始扫码识别</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tocancel</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">取消扫码识别</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">toFlash</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">开启闪光灯</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">toscan</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">预览</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">onLoad</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">				fil</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#F07178;">success1</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success1:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#F07178;">fail1</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fail1:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#82AAFF;">toStart</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$refs</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">barcode</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">start</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">					conserve</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">					filename</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">_doc/barcode/</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#82AAFF;">tocancel</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$refs</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">barcode</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cancel</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#82AAFF;">toFlash</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$refs</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">barcode</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setFlash</span><span style="color:#F07178;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#82AAFF;">toscan</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scan:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">				</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">barcodeModule</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">requireNativePlugin</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">barcodeScan</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#A6ACCD;">barcodeModule</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">scan</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/static/barcode1.png</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">,(</span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scan_error:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">barcode</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">750</span><span style="color:#A6ACCD;">rpx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">700</span><span style="color:#A6ACCD;">rpx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">808080</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">btn</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;">rpx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">730</span><span style="color:#A6ACCD;">rpx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#B2CCD6;">margin-left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">rpx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#B2CCD6;">margin-top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">rpx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">458B00</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#B2CCD6;">border-radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">rpx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,8),c=[e,p,r];function y(F,D,i,C,d,A){return n(),a("div",null,c)}const u=l(o,[["render",y]]);export{f as __pageData,u as default};