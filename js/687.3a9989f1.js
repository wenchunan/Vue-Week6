"use strict";(self["webpackChunkweek6_homework"]=self["webpackChunkweek6_homework"]||[]).push([[687],{1530:function(a,t,n){function e(a){return{all:a=a||new Map,on:function(t,n){var e=a.get(t);e?e.push(n):a.set(t,[n])},off:function(t,n){var e=a.get(t);e&&(n?e.splice(e.indexOf(n)>>>0,1):a.set(t,[]))},emit:function(t,n){var e=a.get(t);e&&e.slice().map((function(a){a(n)})),(e=a.get("*"))&&e.slice().map((function(a){a(t,n)}))}}}n.d(t,{Z:function(){return s}});const r=e();var s=r},4687:function(a,t,n){n.r(t),n.d(t,{default:function(){return F}});var e=n(6252);function r(a,t,n,r,s,o){const l=(0,e.up)("FrontNavbar"),c=(0,e.up)("router-view");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(l),(0,e.Wm)(c)],64)}var s=n(3577);const o={class:"navbar navbar-expand-lg navbar-light bg-light"},l={class:"container-fluid"},c=(0,e.Uk)("Anna's ACC"),i=(0,e._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,e._)("span",{class:"navbar-toggler-icon"})],-1),u={class:"collapse navbar-collapse",id:"navbarSupportedContent"},v={class:"navbar-nav me-auto mb-2 mb-lg-0"},d={class:"nav-item"},p=(0,e.Uk)("首頁"),b={class:"nav-item"},g=(0,e.Uk)("產品列表"),f={class:"nav-item"},m=(0,e.Uk)("購物車"),h={class:"nav-item"},k=(0,e.Uk)("後台"),_={type:"button",class:"btn btn-primary"},w=(0,e.Uk)("結帳 "),C={class:"badge rounded-pill bg-danger"};function W(a,t,n,r,W,U){const D=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("nav",o,[(0,e._)("div",l,[(0,e.Wm)(D,{class:"navbar-brand",to:"/"},{default:(0,e.w5)((()=>[c])),_:1}),i,(0,e._)("div",u,[(0,e._)("ul",v,[(0,e._)("li",d,[(0,e.Wm)(D,{class:"nav-link",to:"/"},{default:(0,e.w5)((()=>[p])),_:1})]),(0,e._)("li",b,[(0,e.Wm)(D,{class:"nav-link",to:"/products"},{default:(0,e.w5)((()=>[g])),_:1})]),(0,e._)("li",f,[(0,e.Wm)(D,{class:"nav-link",to:"/cart"},{default:(0,e.w5)((()=>[m])),_:1})]),(0,e._)("li",h,[(0,e.Wm)(D,{class:"nav-link",to:"/admin"},{default:(0,e.w5)((()=>[k])),_:1})])])]),(0,e._)("button",_,[w,(0,e._)("span",C,(0,s.zw)(W.cartData.carts.length),1)])])])}var U=n(1530),D={data(){return{cartData:{carts:[]}}},methods:{getCart(){this.$http.get("https://vue3-course-api.hexschool.io/v2//api/annawen/cart").then((a=>{this.cartData=a.data.data}))}},mounted(){this.getCart(),U.Z.on("get-cart",(()=>{this.getCart()}))}},x=n(3744);const Z=(0,x.Z)(D,[["render",W]]);var y=Z,S={components:{FrontNavbar:y}};const A=(0,x.Z)(S,[["render",r]]);var F=A}}]);
//# sourceMappingURL=687.3a9989f1.js.map