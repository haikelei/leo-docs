import{_ as t,c as s,o as l,N as n}from"./chunks/framework.fc67cb9d.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/media/record-manager.md","lastUpdated":1685603474000}'),a={name:"api/media/record-manager.md"},e=n(`<h3 id="uni-getrecordermanager" tabindex="-1">uni.getRecorderManager() <a class="header-anchor" href="#uni-getrecordermanager" aria-label="Permalink to &quot;uni.getRecorderManager()&quot;">​</a></h3><p>获取<strong>全局唯一</strong>的录音管理器 <code>recorderManager</code>。</p><p><strong>平台差异说明</strong></p><table><thead><tr><th style="text-align:center;">App</th><th style="text-align:center;">H5</th><th style="text-align:center;">微信小程序</th><th style="text-align:center;">支付宝小程序</th><th style="text-align:center;">百度小程序</th><th style="text-align:center;">字节跳动小程序、飞书小程序</th><th style="text-align:center;">QQ小程序</th><th style="text-align:center;">快手小程序</th><th style="text-align:center;">京东小程序</th></tr></thead><tbody><tr><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td></tr></tbody></table><p><strong>recorderManager 对象的方法列表</strong></p><table><thead><tr><th style="text-align:left;">方法</th><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">平台差异说明</th></tr></thead><tbody><tr><td style="text-align:left;">start</td><td style="text-align:left;">options</td><td style="text-align:left;">开始录音</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">pause</td><td style="text-align:left;"></td><td style="text-align:left;">暂停录音</td><td style="text-align:left;">App 暂不支持</td></tr><tr><td style="text-align:left;">resume</td><td style="text-align:left;"></td><td style="text-align:left;">继续录音</td><td style="text-align:left;">App 暂不支持</td></tr><tr><td style="text-align:left;">stop</td><td style="text-align:left;"></td><td style="text-align:left;">停止录音</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">onStart</td><td style="text-align:left;">callback</td><td style="text-align:left;">录音开始事件</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">onPause</td><td style="text-align:left;">callback</td><td style="text-align:left;">录音暂停事件</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">onStop</td><td style="text-align:left;">callback</td><td style="text-align:left;">录音停止事件，会回调文件地址</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">onResume</td><td style="text-align:left;">callback</td><td style="text-align:left;">监听录音继续事件</td><td style="text-align:left;">微信小程序、百度小程序、QQ小程序、京东小程序、字节小程序</td></tr><tr><td style="text-align:left;">onInterruptionBegin</td><td style="text-align:left;">callback</td><td style="text-align:left;">监听录音因为受到系统占用而被中断开始事件。以下场景会触发此事件：微信语音聊天、微信视频聊天、QQ语音聊天、QQ视频聊天、电话响铃、接听电话。此事件触发后，录音会被暂停。pause 事件在此事件后触发</td><td style="text-align:left;">微信小程序、百度小程序、QQ小程序</td></tr><tr><td style="text-align:left;">onInterruptionEnd</td><td style="text-align:left;">callback</td><td style="text-align:left;">监听录音中断结束事件。在收到 interruptionBegin 事件之后，小程序内所有录音会暂停，收到此事件之后才可再次录音成功。</td><td style="text-align:left;">微信小程序、百度小程序、QQ小程序</td></tr><tr><td style="text-align:left;">onFrameRecorded</td><td style="text-align:left;">callback</td><td style="text-align:left;">已录制完指定帧大小的文件，会回调录音分片结果数据。如果设置了 frameSize ，则会回调此事件</td><td style="text-align:left;">App 暂不支持</td></tr><tr><td style="text-align:left;">onError</td><td style="text-align:left;">callback</td><td style="text-align:left;">录音错误事件, 会回调错误信息</td><td style="text-align:left;"> </td></tr></tbody></table><p><strong>start(options) 说明</strong></p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th><th style="text-align:left;">平台差异说明</th></tr></thead><tbody><tr><td style="text-align:left;">duration</td><td style="text-align:left;">Number</td><td style="text-align:left;">否</td><td style="text-align:left;">指定录音的时长，单位 ms ，如果传入了合法的 duration ，在到达指定的 duration 后会自动停止录音，最大值 600000（10 分钟）,默认值 60000（1 分钟）</td><td style="text-align:left;">App、小程序支持</td></tr><tr><td style="text-align:left;">sampleRate</td><td style="text-align:left;">Number</td><td style="text-align:left;">否</td><td style="text-align:left;">采样率，有效值 8000/16000/44100</td><td style="text-align:left;">App、小程序支持</td></tr><tr><td style="text-align:left;">numberOfChannels</td><td style="text-align:left;">Number</td><td style="text-align:left;">否</td><td style="text-align:left;">录音通道数，有效值 1/2</td><td style="text-align:left;">仅小程序支持</td></tr><tr><td style="text-align:left;">encodeBitRate</td><td style="text-align:left;">Number</td><td style="text-align:left;">否</td><td style="text-align:left;">编码码率，有效值见下表格</td><td style="text-align:left;">仅小程序支持</td></tr><tr><td style="text-align:left;">format</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">音频格式，有效值 aac/mp3/wav/PCM。App默认值为mp3，小程序默认值aac</td><td style="text-align:left;">App、小程序支持</td></tr><tr><td style="text-align:left;">frameSize</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">指定帧大小，单位 KB。传入 frameSize 后，每录制指定帧大小的内容后，会回调录制的文件内容，不指定则不会回调。暂仅支持 mp3 格式。</td><td style="text-align:left;">App、百度小程序不支持</td></tr></tbody></table><p>其中，采样率和码率有一定要求，具体有效值如下：</p><table><thead><tr><th style="text-align:left;">采样率</th><th style="text-align:left;">编码码率</th></tr></thead><tbody><tr><td style="text-align:left;">8000</td><td style="text-align:left;">16000 ~ 48000</td></tr><tr><td style="text-align:left;">11025</td><td style="text-align:left;">16000 ~ 48000</td></tr><tr><td style="text-align:left;">12000</td><td style="text-align:left;">24000 ~ 64000</td></tr><tr><td style="text-align:left;">16000</td><td style="text-align:left;">24000 ~ 96000</td></tr><tr><td style="text-align:left;">22050</td><td style="text-align:left;">32000 ~ 128000</td></tr><tr><td style="text-align:left;">24000</td><td style="text-align:left;">32000 ~ 128000</td></tr><tr><td style="text-align:left;">32000</td><td style="text-align:left;">48000 ~ 192000</td></tr><tr><td style="text-align:left;">44100</td><td style="text-align:left;">64000 ~ 320000</td></tr><tr><td style="text-align:left;">48000</td><td style="text-align:left;">64000 ~ 320000</td></tr></tbody></table><p><strong>onStop(callback) 回调结果说明</strong></p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">tempFilePath</td><td style="text-align:left;">String</td><td style="text-align:left;">录音文件的临时路径</td></tr></tbody></table><p><strong>onFrameRecorded(callback) 回调结果说明</strong></p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">frameBuffer</td><td style="text-align:left;">ArrayBuffer</td><td style="text-align:left;">录音分片结果数据</td></tr><tr><td style="text-align:left;">isLastFrame</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">当前帧是否正常录音结束前的最后一帧</td></tr></tbody></table><p><strong>onError(callback) 回调结果说明</strong></p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">errMsg</td><td style="text-align:left;">String</td><td style="text-align:left;">错误信息</td></tr></tbody></table><p><strong>注意</strong></p><ul><li>可以通过用户授权API来判断用户是否给应用授予麦克风的访问权限<a href="https://uniapp.dcloud.io/api/other/authorize" target="_blank" rel="noreferrer">https://uniapp.dcloud.io/api/other/authorize</a></li></ul><p><strong>示例</strong></p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@tap</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">startRecord</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">开始录音</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@tap</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">endRecord</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">停止录音</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@tap</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">playVoice</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">播放录音</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> recorderManager </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getRecorderManager</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> innerAudioContext </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createInnerAudioContext</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">innerAudioContext</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">autoplay </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			text</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">uni-app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">			voicePath</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">onLoad</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">self</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#A6ACCD;">recorderManager</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onStop</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">recorder stop</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">voicePath</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tempFilePath</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">startRecord</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">开始录音</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#A6ACCD;">recorderManager</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">start</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">endRecord</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">录音结束</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#A6ACCD;">recorderManager</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stop</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">playVoice</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">播放录音</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">voicePath</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#A6ACCD;">innerAudioContext</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">src</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">voicePath</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#A6ACCD;">innerAudioContext</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">play</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,21),p=[e];function o(r,y,c,d,F,i){return l(),s("div",null,p)}const x=t(a,[["render",o]]);export{g as __pageData,x as default};
