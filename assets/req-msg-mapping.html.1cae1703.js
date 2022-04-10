import{d as n}from"./app.2cf53764.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="\u8BF7\u6C42\u6D88\u606F\u6620\u5C04" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u6D88\u606F\u6620\u5C04" aria-hidden="true">#</a> \u8BF7\u6C42\u6D88\u606F\u6620\u5C04</h1><h2 id="jt808requesthandler" tabindex="-1"><a class="header-anchor" href="#jt808requesthandler" aria-hidden="true">#</a> @Jt808RequestHandler</h2><p><code>@Jt808RequestHandler</code> \u6CE8\u89E3\u7684\u4F5C\u7528\u7C7B\u4F3C\u4E8E <code>WebFlux/WebMvc</code> \u4E2D\u7684 <code>@Controller</code>/<code>@RestController</code>\u3002</p><p>\u5C31\u662F\u6807\u8BB0\u4E00\u4E0B\u88AB\u8BE5\u6CE8\u89E3\u4FEE\u9970\u7684\u7C7B\u4E2D\u5B58\u5728\u82E5\u5E72\u4E2A\u80FD\u5904\u7406\u8BF7\u6C42\u7684\u5904\u7406\u5668\u65B9\u6CD5\u3002\u6CA1\u6709\u5176\u4ED6\u4EFB\u4F55\u5C5E\u6027\u3002</p><div class="custom-container danger"><p class="custom-container-title">\u8B66\u544A</p><p>\u88AB\u8BE5\u6CE8\u89E3\u6807\u8BB0\u7684\u7C7B\u5E94\u8BE5\u662F\u88AB <code>Spring</code> \u7BA1\u7406\u7684\u7C7B\u3002\u4E00\u822C\u6765\u8BF4\u5E94\u8BE5\u548C <code>Spring</code> \u7684 <code>@Component</code> \u7B49\u6CE8\u89E3\u540C\u65F6\u51FA\u73B0\u3002</p><p>\u56E0\u4E3A\u5728 <strong>2.x</strong> \u4E2D\u53BB\u6389\u4E86\u914D\u7F6E\u5305\u624B\u52A8\u626B\u63CF\u7684\u529F\u80FD(\u914D\u7F6E\u7E41\u7410\uFF0C\u8FD8\u4E0D\u5982\u76F4\u63A5\u4EA4\u7ED9 <code>Spring</code> \u6765\u5904\u7406)\u3002</p></div><h2 id="jt808requesthandlermapping" tabindex="-1"><a class="header-anchor" href="#jt808requesthandlermapping" aria-hidden="true">#</a> @Jt808RequestHandlerMapping</h2><p>\u8BE5\u6CE8\u89E3\u548C <code>WebFlux/WebMvc</code> \u4E2D <code>@RequestMapping</code> \u3001<code>@GetMapping</code> \u7B49\u6CE8\u89E3\u529F\u80FD\u7C7B\u4F3C\u3002</p><p>\u8868\u660E\u88AB\u8BE5\u6CE8\u89E3\u4FEE\u9970\u7684\u65B9\u6CD5\u5177\u6709\u5904\u7406\u8BF7\u6C42\u7684\u80FD\u529B\u3002</p><h3 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th><th>\u793A\u4F8B</th></tr></thead><tbody><tr><td><code>msgType</code></td><td>\u6D88\u606F\u7C7B\u578B</td><td>--</td><td><code>{0x0001}</code>\u3001<code>{0x0102}</code></td></tr><tr><td><code>versions</code></td><td>\u534F\u8BAE\u7248\u672C</td><td><code>AUTO_DETECTION</code></td><td><code>VERSION_2013</code> \u3001<code>{VERSION_2019,VERSION_2013}</code></td></tr><tr><td><code>desc</code></td><td>\u63CF\u8FF0\u4FE1\u606F</td><td><code>&quot;&quot;</code></td><td><code>&quot;Some description ...&quot;</code></td></tr></tbody></table><h3 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Jt808RequestHandler</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CommonHandler</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Jt808RequestHandlerMapping</span><span class="token punctuation">(</span>msgType <span class="token operator">=</span> <span class="token number">0x0100</span><span class="token punctuation">,</span> versions <span class="token operator">=</span> VERSION_2019<span class="token punctuation">,</span> desc <span class="token operator">=</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">TerminalRegisterReplyMsg</span> <span class="token function">clientRegisterV2019</span><span class="token punctuation">(</span><span class="token class-name">Jt808RequestEntity</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">BuiltinMsg0100V2019</span><span class="token punctuation">&gt;</span></span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">final</span> <span class="token class-name">BuiltinMsg0100V2019</span> body <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;client register v2019 : {}&quot;</span><span class="token punctuation">,</span> body<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">TerminalRegisterReplyMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setFlowId</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">flowId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setResult</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setAuthCode</span><span class="token punctuation">(</span><span class="token string">&quot;AuthCode2019----&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="jt808requestbody" tabindex="-1"><a class="header-anchor" href="#jt808requestbody" aria-hidden="true">#</a> @Jt808RequestBody</h2><p>\u8BE5\u6CE8\u89E3\u548C <code>WebFlux/WebMvc</code> \u4E2D <code>@RequestBody</code> \u6CE8\u89E3\u529F\u80FD\u7C7B\u4F3C\u3002 \u53EF\u4EE5\u5C06 <strong>\u8BF7\u6C42\u4F53</strong> \u6620\u5C04\u5230\u88AB\u8BE5\u6CE8\u89E3\u4FEE\u9970\u7684\u7C7B\u3002</p><p>\u548C <code>@Jt808RequestHandler</code> \u6CE8\u89E3\u4E00\u6837\uFF0C\u8BE5\u6CE8\u89E3\u4EC5\u4EC5\u8D77\u4E00\u4E2A\u6807\u8BB0\u4F5C\u7528\uFF0C\u6682\u65F6\u6CA1\u6709\u5176\u4ED6\u5C5E\u6027\u3002</p><h2 id="requestfield" tabindex="-1"><a class="header-anchor" href="#requestfield" aria-hidden="true">#</a> @RequestField</h2><h3 id="\u5C5E\u6027-1" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027-1" aria-hidden="true">#</a> \u5C5E\u6027</h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th><th>\u793A\u4F8B</th></tr></thead><tbody><tr><td><code>order</code></td><td>\u5B57\u6BB5\u89E3\u6790\u987A\u5E8F</td><td>--</td><td><code>0</code>\u3001<code>1</code>\u3001<code>2</code></td></tr><tr><td><code>startIndex</code></td><td>\u8D77\u59CB\u5B57\u8282\u7D22\u5F15</td><td><code>-1</code></td><td><code>0</code>\u3001<code>2</code>\u3001<code>4</code>\u3001<code>8</code></td></tr><tr><td><code>startIndexExpression</code></td><td>\u4F5C\u7528\u548C <code>startIndex</code> \u76F8\u540C,\u4F46\u662F\u8BE5\u5C5E\u6027\u662F\u57FA\u4E8E SpEL \u7684</td><td><code>&quot;&quot;</code></td><td><code>&quot;#ctx.msgBodyLength() - 27 + 1&quot;</code></td></tr><tr><td><code>startIndexMethod</code></td><td>\u4F5C\u7528\u548C <code>startIndex</code> \u76F8\u540C,\u4F46\u662F\u8BE5\u5C5E\u6027\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A<strong>\u65B9\u6CD5\u540D</strong></td><td>&quot;&quot;</td><td><code>somMethodName</code></td></tr><tr><td><code>length</code></td><td>\u8BE5\u5B57\u6BB5\u6240\u5360\u7684\u5B57\u8282\u6570\u3001\u957F\u5EA6</td><td><code>-1</code></td><td><code>2</code>\u3001<code>4</code></td></tr><tr><td><code>lengthExpression</code></td><td>\u4F5C\u7528\u548C <code>length</code> \u76F8\u540C,\u4F46\u662F\u8BE5\u5C5E\u6027\u662F\u57FA\u4E8E <code>SpEL</code> \u7684</td><td>&quot;&quot;</td><td><code>#this.someFieldValue + 1 - 2 * 3</code></td></tr><tr><td><code>lengthMethod</code></td><td>\u4F5C\u7528\u548C <code>length</code> \u76F8\u540C, \u4F46\u662F\u8BE5\u5C5E\u6027\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A <strong>\u65B9\u6CD5\u540D</strong></td><td><code>&quot;&quot;</code></td><td><code>&quot;SomMethodName&quot;</code></td></tr><tr><td><code>dataType</code></td><td>\u6570\u636E\u7C7B\u578B</td><td>--</td><td><code>DWORD</code> \u3001<code>BYTES</code></td></tr><tr><td><code>customerFieldDeserializerClass</code></td><td>\u81EA\u5B9A\u4E49\u7684\u7C7B\u578B\u8F6C\u6362\u5668</td><td>--</td><td><code>XxxDeserializer.class</code></td></tr></tbody></table><h3 id="spel" tabindex="-1"><a class="header-anchor" href="#spel" aria-hidden="true">#</a> SpEL</h3><p>\u8BE5\u6CE8\u89E3\u7684 <code>startIndexExpression</code> \u548C <code>lengthExpression</code> \u4E24\u4E2A\u5C5E\u6027\u652F\u6301 <code>SpEL</code>\u3002\u53EF\u7528\u7684 <code>SpEL</code>\u5143\u6570\u636E\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>this</code></td><td>\u6B63\u5728\u8FED\u4EE3\u7684\u5F53\u524D\u5BF9\u8C61</td></tr><tr><td><code>request</code></td><td>\u672C\u6B21\u8BF7\u6C42\u5BF9\u5E94\u7684 <code>Jt808Request</code> \u5B9E\u4F8B</td></tr><tr><td><code>header</code></td><td>\u672C\u6B21\u8BF7\u6C42\u5BF9\u5E94\u7684 <code>Jt808Request#header()</code> \u5B9E\u4F8B</td></tr><tr><td><code>ctx</code></td><td><code>AnnotationDecoderContext</code> \u5B9E\u4F8B\uFF0C\u4EE3\u8868\u6B63\u5728\u8FED\u4EE3\u5BF9\u8C61\u7684\u4E0A\u4E0B\u6587(msgBodyLength \u5C5E\u6027\u4EE3\u8868\u5F53\u524D\u6B63\u5728\u8FED\u4EE3\u7684\u6570\u636E\u5927\u5C0F(\u5B57\u8282\u6570))</td></tr><tr><td><code>context</code></td><td>\u540C <code>ctx</code></td></tr></tbody></table><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p><code>SpEL</code> \u7ED1\u5B9A\u7684 <code>RootObject</code> \u5C31\u662F\u5F53\u524D\u6B63\u5728\u8FED\u4EE3\u7684\u5BF9\u8C61\u3002</p><p>\u6240\u4EE5 <code>#this.someField</code> \u7B49\u4EF7\u4E8E <code>someField</code>\u3001<code>#this.someMethod()</code> \u7B49\u4EF7\u4E8E <code>someMethod()</code> (<code>#this</code> \u53EF\u4EE5\u7701\u7565)\u3002</p></div><h3 id="\u793A\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-1" aria-hidden="true">#</a> \u793A\u4F8B</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Jt808RequestBody</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BuiltinMsg0100V2019</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1. [0-2) WORD \u7701\u57DFID</span>
    <span class="token comment">// WORD \u7C7B\u578B\u56FA\u5B9A\u957F\u5EA6\u5C31\u662F2\u5B57\u8282 \u6240\u4EE5\u65E0\u9700\u6307\u5B9Alength</span>
    <span class="token annotation punctuation">@RequestField</span><span class="token punctuation">(</span>order <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> startIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> dataType <span class="token operator">=</span> WORD<span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> provinceId<span class="token punctuation">;</span>

    <span class="token comment">// 2. [2-4) WORD \u7701\u57DFID</span>
    <span class="token annotation punctuation">@RequestField</span><span class="token punctuation">(</span>order <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> startIndex <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> dataType <span class="token operator">=</span> WORD<span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> cityId<span class="token punctuation">;</span>

    <span class="token comment">// 3. [4-15) BYTE[11] \u5236\u9020\u5546ID</span>
    <span class="token annotation punctuation">@RequestField</span><span class="token punctuation">(</span>order <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> startIndex <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">,</span> dataType <span class="token operator">=</span> STRING<span class="token punctuation">,</span> length <span class="token operator">=</span> <span class="token number">11</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> manufacturerId<span class="token punctuation">;</span>

    <span class="token comment">// 4. [15-45) BYTE[30] \u7EC8\u7AEF\u578B\u53F7</span>
    <span class="token annotation punctuation">@RequestField</span><span class="token punctuation">(</span>order <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">,</span> startIndex <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">,</span> dataType <span class="token operator">=</span> STRING<span class="token punctuation">,</span> length <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> terminalType<span class="token punctuation">;</span>

    <span class="token comment">// 5. [45-75) BYTE[30] \u7EC8\u7AEFID</span>
    <span class="token annotation punctuation">@RequestField</span><span class="token punctuation">(</span>order <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span> startIndex <span class="token operator">=</span> <span class="token number">45</span><span class="token punctuation">,</span> dataType <span class="token operator">=</span> STRING<span class="token punctuation">,</span> length <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> terminalId<span class="token punctuation">;</span>

    <span class="token comment">// 6. [75]   BYTE    \u8F66\u724C\u989C\u8272</span>
    <span class="token annotation punctuation">@RequestField</span><span class="token punctuation">(</span>order <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">,</span> startIndex <span class="token operator">=</span> <span class="token number">75</span><span class="token punctuation">,</span> dataType <span class="token operator">=</span> BYTE<span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token keyword">byte</span> color<span class="token punctuation">;</span>

    <span class="token comment">// 7. [76,n)   String    \u8F66\u8F86\u6807\u8BC6</span>
    <span class="token comment">// \u4F7F\u7528 SpEL \u8BA1\u7B97\u6D88\u606F\u957F\u5EA6(\u4E0A\u4E0B\u6587\u4E2D\u7684\u6D88\u606F\u4F53\u603B\u957F\u5EA6\u51CF\u53BB\u524D\u9762\u6D88\u8D39\u6389\u7684\u5B57\u8282\u6570)</span>
    <span class="token annotation punctuation">@RequestField</span><span class="token punctuation">(</span>order <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">,</span> startIndex <span class="token operator">=</span> <span class="token number">76</span><span class="token punctuation">,</span> dataType <span class="token operator">=</span> STRING<span class="token punctuation">,</span> lengthExpression <span class="token operator">=</span> <span class="token string">&quot;#ctx.msgBodyLength() - 76&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> carIdentifier<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><div class="highlight-line">\xA0</div><br><br><br><div class="highlight-line">\xA0</div><br><br><br><div class="highlight-line">\xA0</div><br><br><br><div class="highlight-line">\xA0</div><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h2 id="slicedfrom" tabindex="-1"><a class="header-anchor" href="#slicedfrom" aria-hidden="true">#</a> @SlicedFrom</h2><div class="custom-container danger"><p class="custom-container-title">\u8B66\u544A</p><p>\u8BE5\u6CE8\u89E3\u76EE\u524D\u4EC5\u4EC5\u9002\u7528\u4E8E <code>int</code> \u3001 <code>short</code> \u3001 <code>byte</code> \u7C7B\u578B\u7684\u5B57\u6BB5\u3002</p></div><h3 id="\u5C5E\u6027-2" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027-2" aria-hidden="true">#</a> \u5C5E\u6027</h3><table><thead><tr><th><code>sourceFieldName</code></th><th>\u6E90\u5B57\u6BB5\u540D</th><th></th></tr></thead><tbody><tr><td><code>bitIndex</code></td><td>\u6E90\u5B57\u6BB5\u4E2D\u7684\u7B2C\u51E0\u4E2A<code>bit</code></td><td>0</td></tr><tr><td><code>startBitIndex</code></td><td>\u6E90\u5B57\u6BB5\u4E2D\u7684\u8D77\u59CB<code>bit</code>\u7D22\u5F15</td><td>1</td></tr><tr><td><code>endBitIndex</code></td><td>\u6E90\u5B57\u6BB5\u4E2D\u7684\u7EC8\u6B62<code>bit</code>\u7D22\u5F15</td><td>2</td></tr></tbody></table><h3 id="\u793A\u4F8B-2" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-2" aria-hidden="true">#</a> \u793A\u4F8B</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Jt808RequestBody</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BuiltinMsg0200V2013</span> <span class="token punctuation">{</span>

    <span class="token comment">// (2). byte[4,8) DWORD \u72B6\u6001</span>
    <span class="token annotation punctuation">@RequestField</span><span class="token punctuation">(</span>order <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> startIndex <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">,</span> dataType <span class="token operator">=</span> DWORD<span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> status<span class="token punctuation">;</span>

    <span class="token comment">// \u5C06\u4E0A\u9762\u7684 status \u5B57\u6BB5\u7684\u7B2C0\u4F4D\u53D6\u51FA\u8F6C\u4E3A int \u7C7B\u578B</span>
    <span class="token annotation punctuation">@SlicedFrom</span><span class="token punctuation">(</span>sourceFieldName <span class="token operator">=</span> <span class="token string">&quot;status&quot;</span><span class="token punctuation">,</span> bitIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> accIntStatus<span class="token punctuation">;</span>
    
    <span class="token comment">// \u5C06\u4E0A\u9762\u7684 status \u5B57\u6BB5\u7684\u7B2C0\u4F4D\u53D6\u51FA\u8F6C\u4E3A boolean \u7C7B\u578B</span>
    <span class="token annotation punctuation">@SlicedFrom</span><span class="token punctuation">(</span>sourceFieldName <span class="token operator">=</span> <span class="token string">&quot;status&quot;</span><span class="token punctuation">,</span> bitIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Boolean</span> accBooleanStatus<span class="token punctuation">;</span>
    
    <span class="token comment">// 0 \u5317\u7EAC;1 \u5357\u7EAC</span>
    <span class="token comment">// \u5C06\u4E0A\u9762\u7684 status \u5B57\u6BB5\u7684\u7B2C2\u4F4D\u53D6\u51FA\u8F6C\u4E3A int \u7C7B\u578B</span>
    <span class="token annotation punctuation">@SlicedFrom</span><span class="token punctuation">(</span>sourceFieldName <span class="token operator">=</span> <span class="token string">&quot;status&quot;</span><span class="token punctuation">,</span> bitIndex <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> latType<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,30);function e(p,o){return t}var r=s(a,[["render",e]]);export{r as default};
