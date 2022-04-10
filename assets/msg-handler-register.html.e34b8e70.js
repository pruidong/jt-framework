import{r as p,o as c,c as l,a as n,b as a,w as o,F as u,e as s,d as i}from"./app.2cf53764.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const d={},k=n("h1",{id:"\u6D88\u606F\u5904\u7406\u5668\u6CE8\u518C",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6D88\u606F\u5904\u7406\u5668\u6CE8\u518C","aria-hidden":"true"},"#"),s(" \u6D88\u606F\u5904\u7406\u5668\u6CE8\u518C")],-1),m={class:"custom-container tip"},g=n("p",{class:"custom-container-title"},"\u4F20\u9001\u95E8",-1),b=s("\u672C\u5C0F\u8282\u7684\u793A\u4F8B\u4EE3\u7801\u53EF\u4EE5\u5728 "),h={href:"https://github.com/hylexus/jt-framework/tree/master/samples/jt-808-server-sample-annotation",target:"_blank",rel:"noopener noreferrer"},_=s("samples/jt-808-server-sample-annotation"),v=s(" \u4E0B\u627E\u5230\u5BF9\u5E94\u4EE3\u7801\u3002"),M={start:"2"},f=s("\u70B9\u51FB\u8FD9\u91CC\u4E86\u89E3 MsgHandler \u7684\u4F5C\u7528"),R=s("\u3002"),y=i(`<h2 id="jt808requestmsghandler" tabindex="-1"><a class="header-anchor" href="#jt808requestmsghandler" aria-hidden="true">#</a> @Jt808RequestMsgHandler</h2><ul><li>\u8BE5\u6CE8\u89E3\u7C7B\u4F3C\u4E8E <code>SpringMVC</code> \u7684 <code>@Controller</code>\u3002</li><li><code>@Jt808RequestMsgHandler</code> \u53EA\u80FD\u6807\u6CE8\u4E8E <code>\u7C7B</code> \u4E0A\uFF0C\u8868\u793A\u8BE5\u7C7B\u4E2D\u5B58\u5728 <code>MsgHandler</code> \u65B9\u6CD5\u3002</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Jt808RequestMsgHandler</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CommonHandler</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="jt808requestmsghandlermapping" tabindex="-1"><a class="header-anchor" href="#jt808requestmsghandlermapping" aria-hidden="true">#</a> @Jt808RequestMsgHandlerMapping</h2><ul><li>\u8BE5\u6CE8\u89E3\u7C7B\u4F3C\u4E8E <code>SpringMVC</code> \u7684 <code>@RequestMapping</code>\u3002</li><li><code>@Jt808RequestMsgHandlerMapping</code> \u53EA\u80FD\u6807\u6CE8\u4E8E <code>\u65B9\u6CD5</code> \u4E0A\uFF0C\u8868\u793A\u88AB\u6CE8\u89E3\u7684\u65B9\u6CD5\u662F\u4E00\u4E2A <code>MsgHandler</code> \u65B9\u6CD5\u3002</li><li>\u4ECE\u903B\u8F91\u4E0A\u6765\u7406\u89E3\uFF0C\u88AB\u5176\u6CE8\u89E3\u7684\u65B9\u6CD5\u76F8\u5F53\u4E8E\u4E00\u4E2A\u5B9E\u73B0\u4E86 <code>MsgHandler</code> \u63A5\u53E3\u7684\u5904\u7406\u5668\u7C7B\u3002</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Jt808RequestMsgHandler</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CommonHandler</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5904\u7406MsgId\u4E3A0x0200\u7684\u6D88\u606F</span>
    <span class="token annotation punctuation">@Jt808RequestMsgHandlerMapping</span><span class="token punctuation">(</span>msgType <span class="token operator">=</span> <span class="token number">0x0200</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">RespMsgBody</span> <span class="token function">processLocationMsg</span><span class="token punctuation">(</span>
            <span class="token class-name">Jt808Session</span> session<span class="token punctuation">,</span> <span class="token class-name">RequestMsgMetadata</span> metadata<span class="token punctuation">,</span>
            <span class="token class-name">RequestMsgHeader</span> header<span class="token punctuation">,</span> <span class="token class-name">LocationUploadMsgBody</span> msgBody<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">assert</span> header<span class="token punctuation">.</span><span class="token function">getMsgId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token class-name">BuiltinJt808MsgType</span><span class="token punctuation">.</span>CLIENT_LOCATION_INFO_UPLOAD<span class="token punctuation">.</span><span class="token function">getMsgId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">assert</span> session<span class="token punctuation">.</span><span class="token function">getTerminalId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>header<span class="token punctuation">.</span><span class="token function">getTerminalId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">assert</span> session<span class="token punctuation">.</span><span class="token function">getTerminalId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>metadata<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTerminalId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">assert</span> metadata<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> header<span class="token punctuation">;</span>

        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;\u5904\u7406\u4F4D\u7F6E\u4E0A\u62A5\u6D88\u606F terminalId = {}, msgBody = {}&quot;</span><span class="token punctuation">,</span> header<span class="token punctuation">.</span><span class="token function">getTerminalId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> msgBody<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">CommonReplyMsgBody</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>header<span class="token punctuation">.</span><span class="token function">getFlowId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">BuiltinJt808MsgType</span><span class="token punctuation">.</span>CLIENT_LOCATION_INFO_UPLOAD<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="\u53C2\u6570\u81EA\u52A8\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u81EA\u52A8\u6CE8\u5165" aria-hidden="true">#</a> \u53C2\u6570\u81EA\u52A8\u6CE8\u5165</h2><p>\u7C7B\u4F3C\u4E8E <code>SpringMVC</code> \u7684\u5904\u7406\u5668\u53C2\u6570\u6CE8\u5165\uFF0C\u7528 <code>@Jt808RequestMsgHandlerMapping</code> \u6CE8\u89E3\u7684\u65B9\u6CD5\u652F\u6301\u53C2\u6570\u81EA\u52A8\u6CE8\u5165\u3002</p><p>\u76EE\u524D\u652F\u6301\u81EA\u52A8\u6CE8\u5165\u7684\u53C2\u6570\u7C7B\u578B\u5982\u4E0B\uFF1A</p><ul><li><code>RequestMsgBody</code></li><li><code>RequestMsgHeader</code></li><li><code>RequestMsgMetadata</code></li><li><code>Jt808Session</code></li></ul><p>\u5E95\u5C42\u7531 <code>HandlerMethodArgumentResolver</code> \u6765\u5B8C\u6210\u6CE8\u5165\u3002 \u6240\u6709\u652F\u6301\u7684\u53C2\u6570\u89E3\u6790\u5668\u90FD\u59D4\u6258\u7ED9\u4E86 <code>DelegateHandlerMethodArgumentResolvers</code>\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DelegateHandlerMethodArgumentResolvers</span> <span class="token keyword">implements</span> <span class="token class-name">HandlerMethodArgumentResolver</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">addDefaultHandlerMethodArgumentResolver</span><span class="token punctuation">(</span><span class="token class-name">DelegateHandlerMethodArgumentResolvers</span> resolvers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        resolvers<span class="token punctuation">.</span><span class="token function">addResolver</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RequestMsgBodyArgumentResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        resolvers<span class="token punctuation">.</span><span class="token function">addResolver</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RequestMsgHeaderArgumentResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        resolvers<span class="token punctuation">.</span><span class="token function">addResolver</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RequestMsgMetadataArgumentResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        resolvers<span class="token punctuation">.</span><span class="token function">addResolver</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SessionArgumentResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        resolvers<span class="token punctuation">.</span><span class="token function">addResolver</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ExceptionArgumentResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">DelegateHandlerMethodArgumentResolvers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">addDefaultHandlerMethodArgumentResolver</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="msghandler\u6CE8\u5165\u5230spring\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#msghandler\u6CE8\u5165\u5230spring\u5BB9\u5668" aria-hidden="true">#</a> MsgHandler\u6CE8\u5165\u5230Spring\u5BB9\u5668</h2><p>\u4ECE <code>1.0.4-RELEASE</code> \u5F00\u59CB\uFF0C\u652F\u6301\u5C06 <code>MsgHandler</code> \u4EA4\u7ED9Spring\u6765\u7BA1\u7406\uFF0C\u4EE5\u4FBF\u4E8E\u5728 <code>MsgHandler</code> \u4E2D\u4F7F\u7528Spring\u5BB9\u5668\u7684\u5176\u4ED6bean\u3002</p><p>\u4F7F\u7528\u65B9\u6CD5\u4E5F\u5F88\u7B80\u5355\uFF0C\u7ED9\u4F60\u7684 <code>MsgHandler</code> \u52A0\u4E00\u4E2A <code>@Component</code> \u6CE8\u89E3\u5373\u53EF\u3002</p>`,15),H={class:"custom-container tip"},w=n("p",{class:"custom-container-title"},"\u4F20\u9001\u95E8",-1),j=s("\u672C\u5C0F\u8282\u7684\u793A\u4F8B\u4EE3\u7801\u53EF\u4EE5\u5728 "),q={href:"https://github.com/hylexus/jt-framework/tree/master/samples/jt-808-server-sample-annotation",target:"_blank",rel:"noopener noreferrer"},x=s("samples/jt-808-server-sample-annotation"),A=s(" \u4E0B\u627E\u5230\u5BF9\u5E94\u4EE3\u7801\u3002"),I={start:"2"},C=s("\u70B9\u51FB\u8FD9\u91CC\u4E86\u89E3 MsgHandler \u7684\u4F5C\u7528"),B=s("\u3002");function L(T,J){const e=p("ExternalLinkIcon"),t=p("RouterLink");return c(),l(u,null,[k,n("div",m,[g,n("ul",null,[n("li",null,[n("ol",null,[n("li",null,[b,n("a",h,[_,a(e)]),v])])]),n("li",null,[n("ol",M,[n("li",null,[a(t,{to:"/v1/jt-808/guide/annotation-based-dev/docs/v1/jt-808/guide/customization/msg-handler-config.html"},{default:o(()=>[f]),_:1}),R])])])])]),y,n("div",H,[w,n("ul",null,[n("li",null,[n("ol",null,[n("li",null,[j,n("a",q,[x,a(e)]),A])])]),n("li",null,[n("ol",I,[n("li",null,[a(t,{to:"/v1/jt-808/guide/annotation-based-dev/docs/v1/jt-808/guide/customization/msg-handler-config.html"},{default:o(()=>[C]),_:1}),B])])])])])],64)}var E=r(d,[["render",L]]);export{E as default};
