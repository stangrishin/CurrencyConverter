(this["webpackJsonpcurrency-converter"]=this["webpackJsonpcurrency-converter"]||[]).push([[0],{76:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var r=n(9),a=n(0),c=n.n(a),i=n(7),u=n.n(i),s=(n(76),n(127)),o=n(126),l=n(120),j=n(60),O=n.n(j),b=n(14),d=n(51),p=n.n(d),h=n(56),v="CHANGE_INIT_VALUE",f="CHANGE_DEST_VALUE",y="CHANGE_INIT_CURR",x="CHANGE_DEST_CURR",C="CHANGE_RATE",E=function(e){return{type:y,payload:e}},g=function(e){return{type:x,payload:e}},m=function(){return function(){var e=Object(h.a)(p.a.mark((function e(t,n){var r,a,c,i,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n(),a=r.initCurr,c=r.destCurr,e.next=3,fetch("https://api.exchangeratesapi.io/latest?base=".concat(a));case 3:return i=e.sent,e.next=6,i.json();case 6:u=e.sent,t({type:C,payload:[u.rates[c],Object.keys(u.rates)]});case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()};var V=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.initCurr})),n=Object(b.c)((function(e){return e.destCurr}));return Object(r.jsxs)(l.a,{onClick:function(){e(E(n)),e(g(t)),e(m())},children:[Object(r.jsx)(O.a,{})," Switch Currencies"]})},D=n(129);var I=function(e){var t=e.initOrDest,n=Object(b.b)(),a=Object(b.c)((function(e){return e["".concat(t,"Value")]}));return Object(r.jsx)(D.a,{name:"".concat(t,"ValueInput"),variant:"outlined",type:"number",placeholder:"Value here",value:""===a?"":Math.floor(1e3*a)/1e3,onChange:function(e){var t,r;"initValueInput"===e.target.name?n((r=e.target.value,{type:v,payload:r})):n((t=e.target.value,{type:f,payload:t}))}})},R=n(128),A=n(131);var N=function(e){var t=e.initOrDest,n=Object(b.b)(),a=Object(b.c)((function(e){return e["".concat(t,"Curr")]})),c=Object(b.c)((function(e){return e.allTheCurrencies}));return Object(r.jsx)(R.a,{name:"".concat(t,"CurrInput"),variant:"outlined",value:a,onChange:function(e){"initCurrInput"===e.target.name?n(E(e.target.value)):n(g(e.target.value)),n(m())},children:c.map((function(e){return Object(r.jsx)(A.a,{value:e,children:e},e)}))})};var T=function(){var e=Object(b.b)();return Object(a.useEffect)((function(){e(m())}),[]),Object(r.jsx)(o.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"100vh"},children:Object(r.jsx)(o.a,{item:!0,xs:6,children:Object(r.jsxs)(s.a,{maxWidth:"sm",children:[Object(r.jsx)("h5",{style:{textAlign:"center"},children:"THE DESIGN IS AWESOME"}),Object(r.jsx)("h2",{style:{textAlign:"center"},children:"CURRENCY CONVERTER"}),Object(r.jsxs)("div",{children:[Object(r.jsx)(I,{initOrDest:"init"}),Object(r.jsx)(N,{initOrDest:"init"})]}),Object(r.jsx)(V,{}),Object(r.jsxs)("div",{children:[Object(r.jsx)(I,{initOrDest:"dest"}),Object(r.jsx)(N,{initOrDest:"dest"})]})]})})})},S=n(30),U=n(61),_={initCurr:"USD",destCurr:"RUB",rate:10,initValue:1,destValue:1,allTheCurrencies:["USD","EUR","NOK","RUB"]},w=n(63),H=n(17);var G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(H.a)(Object(H.a)({},e),{},{initValue:t.payload,destValue:t.payload*e.rate});case f:return Object(H.a)(Object(H.a)({},e),{},{destValue:t.payload,initValue:t.payload/e.rate});case y:return Object(H.a)(Object(H.a)({},e),{},{initCurr:t.payload});case x:return Object(H.a)(Object(H.a)({},e),{},{destCurr:t.payload});case C:var n=Object(w.a)(t.payload,2),r=n[0],a=n[1];return Object(H.a)(Object(H.a)({},e),{},{rate:r,destValue:e.initValue*r,allTheCurrencies:a});default:return e}},k=n(62),M=Object(S.createStore)(G,_,Object(U.composeWithDevTools)(Object(S.applyMiddleware)(k.a)));u.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(b.a,{store:M,children:Object(r.jsx)(T,{})})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.1574ced9.chunk.js.map