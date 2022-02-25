(function(){"use strict";var n={3769:function(n,e,t){var o=t(9963),r=(t(7244),t(9669)),i=t.n(r),u=t(2346),c=t(7398),a=t.n(c),f=t(2954),d=t(6391),s=t(2387),l=t(2389),p=t(6252);function h(n,e){const t=(0,p.up)("router-view");return(0,p.wg)(),(0,p.j4)(t)}var m=t(3744);const b={},v=(0,m.Z)(b,[["render",h]]);var g=v,y=t(2119);const w={class:"container"},k=(0,p._)("h2",null,"首頁",-1),O=[k];function j(n,e){return(0,p.wg)(),(0,p.iD)("div",w,O)}const E={},x=(0,m.Z)(E,[["render",j]]);var _=x;const P=[{path:"/",component:()=>t.e(687).then(t.bind(t,4687)),children:[{path:"",name:"home",component:_},{path:"products",component:()=>t.e(970).then(t.bind(t,6970))},{path:"product/:id",component:()=>t.e(314).then(t.bind(t,1314))},{path:"cart",component:()=>t.e(873).then(t.bind(t,7873))}]},{path:"/login",component:()=>t.e(0).then(t.bind(t,5e3))},{path:"/admin",component:()=>t.e(773).then(t.bind(t,6773)),children:[{path:"products",component:()=>t.e(535).then(t.bind(t,4535))},{path:"coupon",component:()=>t.e(95).then(t.bind(t,1095))}]}],T=(0,y.p7)({history:(0,y.r5)(),routes:P,linkActiveClass:"active"});var C=T;Object.keys(s.ZP).forEach((n=>{(0,f.aH)(n,s.ZP[n])})),(0,f.jQ)({generateMessage:(0,d.NC)({zh_TW:l})}),(0,d.i_)("zh_TW");const M=(0,o.ri)(g);M.use(C),M.use(u.Z,i()),M.component("VueLoading",a()),M.component("VueForm",f.l0),M.component("VueField",f.gN),M.component("ErrorMessage",f.Bc),M.mount("#app")}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,loaded:!1,exports:{}};return n[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=n,function(){t.amdO={}}(),function(){var n=[];t.O=function(e,o,r,i){if(!o){var u=1/0;for(d=0;d<n.length;d++){o=n[d][0],r=n[d][1],i=n[d][2];for(var c=!0,a=0;a<o.length;a++)(!1&i||u>=i)&&Object.keys(t.O).every((function(n){return t.O[n](o[a])}))?o.splice(a--,1):(c=!1,i<u&&(u=i));if(c){n.splice(d--,1);var f=r();void 0!==f&&(e=f)}}return e}i=i||0;for(var d=n.length;d>0&&n[d-1][2]>i;d--)n[d]=n[d-1];n[d]=[o,r,i]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})}}(),function(){t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(e,o){return t.f[o](n,e),e}),[]))}}(),function(){t.u=function(n){return"js/"+n+"."+{0:"12b6aa11",95:"dfb2997a",314:"079d50bc",535:"07a12c93",687:"3a9989f1",773:"2134ff6a",873:"bc2b00aa",970:"cceed854"}[n]+".js"}}(),function(){t.miniCssF=function(n){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(n){return n=Object.create(n),n.children||(n.children=[]),Object.defineProperty(n,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+n.id)}}),n}}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={},e="week6-homework:";t.l=function(o,r,i,u){if(n[o])n[o].push(r);else{var c,a;if(void 0!==i)for(var f=document.getElementsByTagName("script"),d=0;d<f.length;d++){var s=f[d];if(s.getAttribute("src")==o||s.getAttribute("data-webpack")==e+i){c=s;break}}c||(a=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",e+i),c.src=o),n[o]=[r];var l=function(e,t){c.onerror=c.onload=null,clearTimeout(p);var r=n[o];if(delete n[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(n){return n(t)})),e)return e(t)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),a&&document.head.appendChild(c)}}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){t.p="/Vue-Week6/"}(),function(){var n={143:0};t.f.j=function(e,o){var r=t.o(n,e)?n[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(t,o){r=n[e]=[t,o]}));o.push(r[2]=i);var u=t.p+t.u(e),c=new Error,a=function(o){if(t.o(n,e)&&(r=n[e],0!==r&&(n[e]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;c.message="Loading chunk "+e+" failed.\n("+i+": "+u+")",c.name="ChunkLoadError",c.type=i,c.request=u,r[1](c)}};t.l(u,a,"chunk-"+e,e)}},t.O.j=function(e){return 0===n[e]};var e=function(e,o){var r,i,u=o[0],c=o[1],a=o[2],f=0;if(u.some((function(e){return 0!==n[e]}))){for(r in c)t.o(c,r)&&(t.m[r]=c[r]);if(a)var d=a(t)}for(e&&e(o);f<u.length;f++)i=u[f],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(d)},o=self["webpackChunkweek6_homework"]=self["webpackChunkweek6_homework"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(3769)}));o=t.O(o)})();
//# sourceMappingURL=app.2505949a.js.map