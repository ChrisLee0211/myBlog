import{_ as s,o as a,c as n,a as o}from"./app.e0c08043.js";const h=JSON.parse('{"title":"\u8868\u8FBE\u5F0F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8BED\u53E5","slug":"\u8BED\u53E5","link":"#\u8BED\u53E5","children":[]},{"level":2,"title":"\u8868\u8FBE\u5F0F","slug":"\u8868\u8FBE\u5F0F-1","link":"#\u8868\u8FBE\u5F0F-1","children":[]},{"level":2,"title":"\u51FD\u6570","slug":"\u51FD\u6570","link":"#\u51FD\u6570","children":[]}],"relativePath":"blog/rust/expression.md","lastUpdated":1661959206000}'),e={name:"blog/rust/expression.md"},l=o(`<h1 id="\u8868\u8FBE\u5F0F" tabindex="-1">\u8868\u8FBE\u5F0F <a class="header-anchor" href="#\u8868\u8FBE\u5F0F" aria-hidden="true">#</a></h1><p>\u4EFB\u4F55\u7F16\u7A0B\u8BED\u8A00\u7684\u51FD\u6570\u90FD\u662F\u901A\u8FC7\u5404\u79CD\u8868\u8FBE\u5F0F\u548C\u53D8\u91CF\u8D4B\u503C\u7EC4\u88C5\u5B8C\u6210\u7684\uFF0Crust\u4E5F\u4E00\u6837\u3002\u4F46\u662F\u5728rust\u4E2D\uFF0C<strong>\u8BED\u53E5</strong>\u548C<strong>\u8868\u8FBE\u5F0F</strong>\u6709\u7740\u660E\u663E\u7684\u533A\u522B\u3002</p><h2 id="\u8BED\u53E5" tabindex="-1">\u8BED\u53E5 <a class="header-anchor" href="#\u8BED\u53E5" aria-hidden="true">#</a></h2><blockquote><p>\u4EFB\u4F55\u4EE5\u5206\u53F7&quot;;&quot;\u7ED3\u5C3E\u7684\uFF0C\u800C\u4E0D\u662F\u8FD4\u56DE\u4E00\u4E2A\u503C\u7684\u64CD\u4F5C\u90FD\u662F\u8BED\u53E5\u3002\uFF08\u56E0\u6B64\u5728\u51FD\u6570\u4E2D\u7684<code>return xxx;</code>\u662F\u4E0D\u7B97\u8BED\u53E5\u7684\uFF0C\u56E0\u4E3A\u5B83\u867D\u7136\u6709\u5206\u53F7\uFF0C\u4F46\u662F\u7528\u4E86<code>return</code>\u5173\u952E\u5B57\u8FD4\u56DE\u4E86\u4E00\u4E2A\u503C\uFF09</p></blockquote><p>\u4E3E\u4F8B\uFF1A</p><div class="language-rust"><button class="copy"></button><span class="lang">rust</span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hi</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u91CC\u5C31\u662F\u4E00\u4E2A\u8BED\u53E5\uFF0C\u56E0\u4E3A\u5B83\u53EA\u662F\u5C06\u53D8\u91CF<code>&quot;hi&quot;</code>\u7ED1\u5B9A\u5230<code>x</code>\u4E0A\uFF0C\u672C\u8EAB\u5E76\u6CA1\u6709\u8FD4\u56DE\u4EFB\u4F55\u503C\u3002\u76F8\u5BF9\u800C\u8A00\uFF0C<code>&quot;hi&quot;</code>\u53CD\u800C\u662F\u4E00\u4E2A<strong>\u8868\u8FBE\u5F0F</strong>\uFF0C\u56E0\u4E3A\u5B83\u8FD4\u56DE\u4E86\u81EA\u8EAB.</p><h2 id="\u8868\u8FBE\u5F0F-1" tabindex="-1">\u8868\u8FBE\u5F0F <a class="header-anchor" href="#\u8868\u8FBE\u5F0F-1" aria-hidden="true">#</a></h2><blockquote><p>\u4EFB\u4F55\u8FD4\u56DE\u4E86\u503C\u7684\u64CD\u4F5C\u90FD\u662F\u8868\u8FBE\u5F0F \u5728rust\u4E2D\uFF0C\u4E0Ejs\u6700\u5927\u7684\u4E0D\u540C\u662F\u5206\u53F7<code>&quot;;&quot;</code>\u7684\u4F5C\u7528\u4E0D\u5355\u5355\u662F\u7528\u4E8E\u7ED3\u675F\u4E00\u4E2A\u8BED\u53E5\uFF0C\u800C\u662F\u4EE3\u8868\u7740\u5F53\u524D\u64CD\u4F5C\u662F\u4E00\u4E2A\u8868\u8FBE\u5F0For\u8BED\u53E5\u3002</p></blockquote><p>\u4E3E\u4F8B\uFF1A</p><div class="language-rust"><button class="copy"></button><span class="lang">rust</span><pre><code><span class="line"><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getNum</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">    // \u8FD9\u662F\u8868\u8FBE\u5F0F\uFF0C\u8FD4\u56DEx+2\u7684\u503C\uFF0C\u7B49\u6548\u4E8Ereturn x+2;\uFF0C</span></span>
<span class="line"><span style="color:#A6ACCD;">    x </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">// \u8FD9\u662F\u8BED\u53E5\uFF0C\u53EA\u662F\u5C06x+2\u7684\u503C\u7ED1\u5B9A\u5230y</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> y </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getNum</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span></code></pre></div><p>\u4ECE\u4E0A\u9762\u53EF\u4EE5\u770B\u5230\uFF0C\u4EFB\u4F55\u8BED\u53E5\u5FEB\u6700\u540E\u4E00\u884C\u5982\u679C\u4E0D\u52A0<code>&quot;;&quot;</code>\uFF0C\u90A3\u4E48\u5C31\u76F8\u5F53\u4E8E\u8FD4\u56DE\u4E00\u4E2A\u503C\uFF0C\u90A3\u5B83\u662F\u5C31\u662F\u4E00\u4E2A\u8868\u8FBE\u5F0F\u3002\u4F46\u662F\u5982\u679C\u52A0\u4E0A<code>&quot;;&quot;</code>\uFF0C\u4F1A\u4E0D\u4F1A\u56E0\u4E3A\u8BED\u6CD5\u7F16\u8BD1\u62A5\u9519\u5148\u4E0D\u8BF4\uFF0C\u5B83\u9996\u5148\u5DF2\u7ECF\u53D8\u6210\u4E86\u4E00\u4E2A\u8BED\u53E5\u3002</p><blockquote><p>\u5907\u6CE8\uFF1A\u5982\u679C\u4E00\u4E2A\u8868\u8FBE\u5F0F\u6700\u540E\u4EC0\u4E48\u90FD\u4E0D\u8FD4\u56DE\u5462\uFF1F\u4E0D\u5B58\u5728\u7684\uFF0C\u5C31\u8FDEmain\u51FD\u6570\u9ED8\u8BA4\u4E5F\u662F\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5355\u5143\u7C7B\u578B<code>()</code>\uFF0C\u56E0\u6B64\u4EFB\u4F55\u8868\u8FBE\u5F0F\u90FD\u4F1A\u9690\u5F0F\u8FD4\u56DE\u4E00\u4E2A\u5355\u5143\u7C7B\u578B\u3002</p></blockquote><h2 id="\u51FD\u6570" tabindex="-1">\u51FD\u6570 <a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a></h2><p>\u6709\u4E86\u8868\u8FBE\u5F0F\u548C\u8BED\u53E5\uFF0C\u52A0\u4E0A\u524D\u9762\u6240\u5B66\u7684\u53D8\u91CF\uFF0C\u90A3\u4E48\u901A\u8FC7\u4EFB\u610F\u7EC4\u5408\u5C31\u53EF\u4EE5\u53D8\u6210\u4E00\u4E2A\u51FD\u6570\u3002 \u800Crust\u4E2D\u7684\u51FD\u6570\u6709\u4EE5\u4E0B\u4E09\u4E2A\u8981\u70B9\uFF1A</p><ul><li>\u51FD\u6570\u540D\u548C\u53D8\u91CF\u540D\u4F7F\u7528\u86C7\u5F62\u547D\u540D\u6CD5(snake case)\uFF0C\u4F8B\u5982 fn add_two() -&gt; {}</li><li>\u51FD\u6570\u7684\u4F4D\u7F6E\u53EF\u4EE5\u968F\u4FBF\u653E\uFF0CRust \u4E0D\u5173\u5FC3\u6211\u4EEC\u5728\u54EA\u91CC\u5B9A\u4E49\u4E86\u51FD\u6570\uFF0C\u53EA\u8981\u6709\u5B9A\u4E49\u5373\u53EF</li><li>\u6BCF\u4E2A\u51FD\u6570\u53C2\u6570\u90FD\u9700\u8981\u6807\u6CE8\u7C7B\u578B</li></ul><blockquote><p>\u91CD\u5B66\u624D\u53D1\u73B0\uFF0C\u4E0D\u50CFts\u4F1A\u81EA\u52A8\u63A8\u5BFC\u51FD\u6570\u8FD4\u56DE\u7C7B\u578B\uFF0Crust\u7684fn\u662F\u771F\u7684\u9700\u8981\u81EA\u5DF1\u6307\u660E\u8FD4\u56DE\u7C7B\u578B\u624D\u9ED8\u8BA4\u6709\u8FD4\u56DE\uFF0C\u5426\u5219\u4E00\u5F8B\u4F1A\u5F53\u6210\u8FD4\u56DE\u4E00\u4E2A<code>()</code>\u7684\u5355\u5143\u7C7B\u578B</p></blockquote>`,17),t=[l];function p(c,r,d,i,u,y){return a(),n("div",null,t)}const C=s(e,[["render",p]]);export{h as __pageData,C as default};
