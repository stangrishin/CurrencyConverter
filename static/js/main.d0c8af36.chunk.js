(this["webpackJsonpcurrency-converter"]=this["webpackJsonpcurrency-converter"]||[]).push([[0],{76:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a(0),c=a.n(r),u=a(7),i=a.n(u),l=(a(76),a(127)),s=a(126),o=a(120),d=a(57),j=a.n(d);var h=function(e){var t=e.handleSwitchCurrency;return Object(n.jsxs)(o.a,{onClick:t,children:[Object(n.jsx)(j.a,{})," Switch Currencies"]})},p=a(129),b=a(128),O=a(131),C=a(27);var v=function(e){var t=e.initOrDest,a=e.handleValueChange,r=e.handleCurrChange,c=Object(C.c)((function(e){return e}));return Object(n.jsxs)("div",{children:[Object(n.jsx)(p.a,{name:"".concat(t,"ValueInput"),variant:"outlined",type:"number",placeholder:"Value here",value:""===c["".concat(t,"Value")]?"":Math.floor(1e3*c["".concat(t,"Value")])/1e3,onChange:a}),Object(n.jsx)(b.a,{name:"".concat(t,"CurrInput"),variant:"outlined",value:c["".concat(t,"Curr")],onChange:r,children:c.allTheCurrencies.map((function(e){return Object(n.jsx)(O.a,{value:e,children:e},e)}))})]})},y=a(51),f=a.n(y),g=a(59),x="CHANGE_INIT_VALUE",V="CHANGE_DEST_VALUE",m="CHANGE_INIT_CURR",E="CHANGE_DEST_CURR",I="CHANGE_RATE",w=function(e){return{type:m,payload:e}},S=function(e){return{type:E,payload:e}},T=function(){return function(){var e=Object(g.a)(f.a.mark((function e(t,a){var n,r,c,u,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a(),r=n.initCurr,c=n.destCurr,e.next=3,fetch("https://api.exchangeratesapi.io/latest?base=".concat(r));case 3:return u=e.sent,e.next=6,u.json();case 6:i=e.sent,t({type:I,payload:[i.rates[c],Object.keys(i.rates)]});case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()};var U=function(){var e=Object(C.b)(),t=Object(C.c)((function(e){return e})),a=t.initCurr,c=t.destCurr;Object(r.useEffect)((function(){e(T())}),[a,c]);var u=function(t){var a,n;"initValueInput"===t.target.name?e((n=t.target.value,{type:x,payload:n})):e((a=t.target.value,{type:V,payload:a}))},i=function(t){"initCurrInput"===t.target.name?e(w(t.target.value)):e(S(t.target.value))};return Object(n.jsx)(s.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"100vh"},children:Object(n.jsx)(s.a,{item:!0,xs:6,children:Object(n.jsxs)(l.a,{maxWidth:"sm",children:[Object(n.jsx)(v,{initOrDest:"init",handleValueChange:u,handleCurrChange:i}),Object(n.jsx)(h,{handleSwitchCurrency:function(){e(w(c)),e(S(a)),e(T())}}),Object(n.jsx)(v,{initOrDest:"dest",handleValueChange:u,handleCurrChange:i})]})})})},_=a(30),A=a(60),D={initCurr:"USD",destCurr:"RUB",rate:10,initValue:1,destValue:1,allTheCurrencies:["USD","EUR","RUB","NOK"]},N=a(62),R=a(16);var H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(R.a)(Object(R.a)({},e),{},{initValue:t.payload,destValue:t.payload*e.rate});case V:return Object(R.a)(Object(R.a)({},e),{},{destValue:t.payload,initValue:t.payload/e.rate});case m:return Object(R.a)(Object(R.a)({},e),{},{initCurr:t.payload});case E:return Object(R.a)(Object(R.a)({},e),{},{destCurr:t.payload});case I:var a=Object(N.a)(t.payload,2),n=a[0],r=a[1];return Object(R.a)(Object(R.a)({},e),{},{rate:n,destValue:e.initValue*n,allTheCurrencies:r});default:return e}},k=a(61),G=Object(_.createStore)(H,D,Object(A.composeWithDevTools)(Object(_.applyMiddleware)(k.a)));i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(C.a,{store:G,children:Object(n.jsx)(U,{})})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.d0c8af36.chunk.js.map