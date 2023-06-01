import{_ as t,c as e,o as l,N as a}from"./chunks/framework.fc67cb9d.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/system/ibeacon.md","lastUpdated":1685603474000}'),n={name:"api/system/ibeacon.md"},d=a(`<p><strong>iBeacon API 平台差异说明</strong></p><table><thead><tr><th style="text-align:center;">App</th><th style="text-align:center;">H5</th><th style="text-align:center;">微信小程序</th><th style="text-align:center;">支付宝小程序</th><th style="text-align:center;">百度小程序</th><th style="text-align:center;">字节跳动小程序</th><th style="text-align:center;">飞书小程序</th><th style="text-align:center;">QQ小程序</th><th style="text-align:center;">快手小程序</th><th style="text-align:center;">京东小程序</th></tr></thead><tbody><tr><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">x</td><td style="text-align:center;">x</td></tr></tbody></table><h3 id="uni-onbeaconservicechange-callback" tabindex="-1">uni.onBeaconServiceChange(CALLBACK) <a class="header-anchor" href="#uni-onbeaconservicechange-callback" aria-label="Permalink to &quot;uni.onBeaconServiceChange(CALLBACK)&quot;">​</a></h3><p>监听 iBeacon 服务状态变化事件</p><p><strong>CALLBACK 返回参数</strong></p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">available</td><td style="text-align:left;">boolean</td><td style="text-align:left;">服务目前是否可用</td></tr><tr><td style="text-align:left;">discovering</td><td style="text-align:left;">boolean</td><td style="text-align:left;">目前是否处于搜索状态</td></tr></tbody></table><h3 id="uni-onbeaconupdate-callback" tabindex="-1">uni.onBeaconUpdate(CALLBACK) <a class="header-anchor" href="#uni-onbeaconupdate-callback" aria-label="Permalink to &quot;uni.onBeaconUpdate(CALLBACK)&quot;">​</a></h3><p>监听 iBeacon 设备更新事件</p><p><strong>CALLBACK 返回参数</strong></p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">beacons</td><td style="text-align:left;">Array&lt;<a href="/leo-docs/api/system/ibeacon.html?id=ibeaconinfo">IBeaconInfo</a>&gt;</td><td style="text-align:left;">当前搜寻到的所有 iBeacon 设备列表</td></tr></tbody></table><h3 id="uni-getbeacons-object" tabindex="-1">uni.getBeacons(OBJECT) <a class="header-anchor" href="#uni-getbeacons-object" aria-label="Permalink to &quot;uni.getBeacons(OBJECT)&quot;">​</a></h3><p>获取所有已搜索到的 iBeacon 设备</p><p><strong>OBJECT 参数说明</strong></p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">success</td><td style="text-align:left;">function</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用成功的回调函数</td></tr><tr><td style="text-align:left;">fail</td><td style="text-align:left;">function</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用失败的回调函数</td></tr><tr><td style="text-align:left;">complete</td><td style="text-align:left;">function</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用结束的回调函数（调用成功、失败都会执行）</td></tr></tbody></table><p><strong>success 返回参数说明：</strong></p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">beacons</td><td style="text-align:left;">Array&lt;<a href="/leo-docs/api/system/ibeacon.html?id=ibeaconinfo">IBeaconInfo</a>&gt;</td><td style="text-align:left;">iBeacon 设备列表</td></tr></tbody></table><h4 id="错误" tabindex="-1">错误 <a class="header-anchor" href="#错误" aria-label="Permalink to &quot;错误&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">错误码</th><th style="text-align:left;">错误信息</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">0</td><td style="text-align:left;">ok</td><td style="text-align:left;">正常</td></tr><tr><td style="text-align:left;">11000</td><td style="text-align:left;">unsupport</td><td style="text-align:left;">系统或设备不支持</td></tr><tr><td style="text-align:left;">11001</td><td style="text-align:left;">bluetooth service unavailable</td><td style="text-align:left;">蓝牙服务不可用</td></tr><tr><td style="text-align:left;">11002</td><td style="text-align:left;">location service unavailable</td><td style="text-align:left;">位置服务不可用</td></tr><tr><td style="text-align:left;">11003</td><td style="text-align:left;">already start</td><td style="text-align:left;">已经开始搜索</td></tr></tbody></table><h3 id="uni-startbeacondiscovery-object" tabindex="-1">uni.startBeaconDiscovery(OBJECT) <a class="header-anchor" href="#uni-startbeacondiscovery-object" aria-label="Permalink to &quot;uni.startBeaconDiscovery(OBJECT)&quot;">​</a></h3><p>开始搜索附近的 iBeacon 设备</p><p><strong>OBJECT 参数说明</strong></p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">uuids</td><td style="text-align:left;">Array＜String＞</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">iBeacon 设备广播的 uuid 列表</td></tr><tr><td style="text-align:left;">ignoreBluetoothAvailable</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">否</td><td style="text-align:left;">是否校验蓝牙开关，仅在 iOS 下有效</td></tr><tr><td style="text-align:left;">success</td><td style="text-align:left;">function</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用成功的回调函数</td></tr><tr><td style="text-align:left;">fail</td><td style="text-align:left;">function</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用失败的回调函数</td></tr><tr><td style="text-align:left;">complete</td><td style="text-align:left;">function</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用结束的回调函数（调用成功、失败都会执行）</td></tr></tbody></table><h4 id="错误-1" tabindex="-1">错误 <a class="header-anchor" href="#错误-1" aria-label="Permalink to &quot;错误&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">错误码</th><th style="text-align:left;">错误信息</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">0</td><td style="text-align:left;">ok</td><td style="text-align:left;">正常</td></tr><tr><td style="text-align:left;">11000</td><td style="text-align:left;">unsupport</td><td style="text-align:left;">系统或设备不支持</td></tr><tr><td style="text-align:left;">11001</td><td style="text-align:left;">bluetooth service unavailable</td><td style="text-align:left;">蓝牙服务不可用</td></tr><tr><td style="text-align:left;">11002</td><td style="text-align:left;">location service unavailable</td><td style="text-align:left;">位置服务不可用</td></tr><tr><td style="text-align:left;">11003</td><td style="text-align:left;">already start</td><td style="text-align:left;">已经开始搜索</td></tr></tbody></table><h4 id="示例代码" tabindex="-1">示例代码 <a class="header-anchor" href="#示例代码" aria-label="Permalink to &quot;示例代码&quot;">​</a></h4><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">startBeaconDiscovery</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">success</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="uni-stopbeacondiscovery-object" tabindex="-1">uni.stopBeaconDiscovery(OBJECT) <a class="header-anchor" href="#uni-stopbeacondiscovery-object" aria-label="Permalink to &quot;uni.stopBeaconDiscovery(OBJECT)&quot;">​</a></h3><p>停止搜索附近的 iBeacon 设备</p><p><strong>OBJECT 参数说明</strong></p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">success</td><td style="text-align:left;">function</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用成功的回调函数</td></tr><tr><td style="text-align:left;">fail</td><td style="text-align:left;">function</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用失败的回调函数</td></tr><tr><td style="text-align:left;">complete</td><td style="text-align:left;">function</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用结束的回调函数（调用成功、失败都会执行）</td></tr></tbody></table><h4 id="错误-2" tabindex="-1">错误 <a class="header-anchor" href="#错误-2" aria-label="Permalink to &quot;错误&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">错误码</th><th style="text-align:left;">错误信息</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">0</td><td style="text-align:left;">ok</td><td style="text-align:left;">正常</td></tr><tr><td style="text-align:left;">11000</td><td style="text-align:left;">unsupport</td><td style="text-align:left;">系统或设备不支持</td></tr><tr><td style="text-align:left;">11001</td><td style="text-align:left;">bluetooth service unavailable</td><td style="text-align:left;">蓝牙服务不可用</td></tr><tr><td style="text-align:left;">11002</td><td style="text-align:left;">location service unavailable</td><td style="text-align:left;">位置服务不可用</td></tr><tr><td style="text-align:left;">11003</td><td style="text-align:left;">already start</td><td style="text-align:left;">已经开始搜索</td></tr></tbody></table><h3 id="ibeaconinfo" tabindex="-1">IBeaconInfo <a class="header-anchor" href="#ibeaconinfo" aria-label="Permalink to &quot;IBeaconInfo&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">uuid</td><td style="text-align:left;">string</td><td style="text-align:left;">iBeacon 设备广播的 uuid</td></tr><tr><td style="text-align:left;">major</td><td style="text-align:left;">string</td><td style="text-align:left;">iBeacon 设备的主 id</td></tr><tr><td style="text-align:left;">minor</td><td style="text-align:left;">string</td><td style="text-align:left;">iBeacon 设备的次 id</td></tr><tr><td style="text-align:left;">proximity</td><td style="text-align:left;">number</td><td style="text-align:left;">表示设备距离的枚举值</td></tr><tr><td style="text-align:left;">accuracy</td><td style="text-align:left;">number</td><td style="text-align:left;">iBeacon 设备的距离</td></tr><tr><td style="text-align:left;">rssi</td><td style="text-align:left;">number</td><td style="text-align:left;">表示设备的信号强度</td></tr></tbody></table><h3 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h3><ul><li>未启用定位将影响 iBeacon 的正常使用。（相关反馈：<a href="https://github.com/dcloudio/uni-app/issues/2027" target="_blank" rel="noreferrer">#2027</a>）</li></ul>`,36),s=[d];function i(r,o,y,g,f,c){return l(),e("div",null,s)}const b=t(n,[["render",i]]);export{h as __pageData,b as default};