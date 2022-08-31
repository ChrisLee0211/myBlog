import{e as u,r as d,f as _,g as v,_ as f,o as c,c as i,F as S,h as $,n as h,i as O,j as x,k as P,u as k,l as p,m as g}from"./app.e0c08043.js";const C=[{scrollSpeed:20,yOffset:0,yPosition:-50},{scrollSpeed:30,yOffset:0,yPosition:-150},{scrollSpeed:40,yOffset:0,yPosition:-200},{scrollSpeed:45,yOffset:0,yPosition:-100},{scrollSpeed:60,yOffset:0,yPosition:200},{scrollSpeed:70,yOffset:0,yPosition:50},{scrollSpeed:80,yOffset:0,yPosition:0}],w=u({name:"HomeBackground",setup(){const e=d(C),s=_(()=>e.value.map((t,r)=>({style:`
                    ${`transform: translate3d(0px, ${t.yOffset}px, 0px)`};${t.yPosition?`background-position-y:${t.yPosition}px`:""}
                    `})));return v(()=>{window.addEventListener("scroll",t=>{const r=window.pageYOffset,o=e.value.length;for(let n=0;n<o;n++){const a=e.value[n];a.yOffset=-(r*a.scrollSpeed/100)}})}),{artListRenderConfig:s}}});const H={class:"bg-wrapper"};function L(e,s,t,r,o,n){return c(),i("div",H,[(c(!0),i(S,null,$(e.artListRenderConfig,(a,l)=>(c(),i("div",{class:h(`bg-wrapper-item bg_img_${l+1}`),key:l,style:O(a.style)},null,6))),128))])}const B=f(w,[["render",L]]),E={attributes:!0,attributeFilter:["class"]},m=u({name:"HomeContent",setup(){const e=d(!1),s=d(null),t=_(()=>e.value?"#242424":"#f9f9f9");return x(()=>{const r=document.getElementsByTagName("html");let o=null;r.length&&(o=r[0],e.value=o.className.includes("dark")),s.value=new MutationObserver(function(n,a){if(n.length){const l=n[0].target;e.value=l.className.includes("dark")}}),o&&s.value&&s.value.observe(o,E)}),P(()=>{s.value&&s.value.disconnect()}),{bgColor:t}}}),y=()=>{k(e=>({"3d3f64d3":e.bgColor}))},b=m.setup;m.setup=b?(e,s)=>(y(),b(e,s)):y;const N={class:"home-body"};function j(e,s,t,r,o,n){return c(),i("div",N,"content")}const F=f(m,[["render",j]]),M=[{bgSrc:"../../assets/home_bg_1.png",scrollSpeed:20,yOffset:0,yPosition:-50},{bgSrc:"../../assets/home_bg_2.png",scrollSpeed:30,yOffset:0,yPosition:-150},{bgSrc:"../../assets/home_bg_3.png",scrollSpeed:40,yOffset:0,yPosition:-200},{bgSrc:"../../assets/home_bg_4.png",scrollSpeed:45,yOffset:0,yPosition:-100},{bgSrc:"../../assets/home_bg_5.png",scrollSpeed:60,yOffset:0,yPosition:200},{bgSrc:"../../assets/home_bg_6.png",scrollSpeed:70,yOffset:0,yPosition:50},{bgSrc:"../../assets/home_bg_7.png",scrollSpeed:80,yOffset:0,yPosition:0}],R=u({name:"Home",components:{HomeBackground:B,HomeContent:F},setup(){const e=d(M),s=_(()=>e.value.map((t,r)=>{const o=`transform: translate3d(0px, ${t.yOffset}px, 0px)`;return{style:`background-image:url(${t.bgSrc});
                    ${o};${t.yPosition?`background-position-y:${t.yPosition}px`:""}
                    `}}));return v(()=>{window.addEventListener("scroll",t=>{const r=window.pageYOffset,o=e.value.length;for(let n=0;n<o;n++){const a=e.value[n];a.yOffset=-(r*a.scrollSpeed/100)}})}),{artListRenderConfig:s}}});function V(e,s,t,r,o,n){const a=g("HomeBackground"),l=g("HomeContent");return c(),i(S,null,[p(a),p(l)],64)}const z=f(R,[["render",V]]),Y=JSON.parse('{"title":"\u9996\u9875","description":"","frontmatter":{"home":true,"layout":"page","title":"\u9996\u9875","describe":"\u9996\u9875"},"headers":[],"relativePath":"index.md","lastUpdated":1661959206000}'),D={name:"index.md"},J=Object.assign(D,{setup(e){return(s,t)=>(c(),i("div",null,[p(z)]))}});export{Y as __pageData,J as default};