(this["webpackJsonpgif-app"]=this["webpackJsonpgif-app"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),u=a(1),l=a(8),o=function(e){var t=e.setcategorias,a=Object(n.useState)(""),c=Object(u.a)(a,2),i=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){console.log("submit Hecho"),e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(l.a)(e))})),o(""))}},r.a.createElement("input",{type:"text",value:i,onChange:function(e){return o(e.target.value)}}))},m=function(e){var t=e.id,a=e.title,n=e.url;return r.a.createElement("div",{className:"card animate__animated animate__fadeIn"},r.a.createElement("img",{src:n,alt:a}),r.a.createElement("p",{key:t},a))},s=a(4),f=a.n(s),p=a(7),d=function(){var e=Object(p.a)(f.a.mark((function e(t){var a,n,r,c,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=goqwrx305mrNlGQl6xNyApt7LDSQM7as"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.categorie,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(u.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){d(e).then((function(e){return setTimeout((function(){c({data:e,loading:!1})}),3e3)}))}),[e]),r}(t),c=a.data,i=a.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"animate__animated animate__bounce"},t),i&&r.a.createElement("p",null,"Loading"),r.a.createElement("div",{className:"card-grid animate__animated animate__fadeIn"},c.map((function(e){return r.a.createElement(m,Object.assign({key:e.id},e))}))))},E=function(){var e=Object(n.useState)(["One Punch"]),t=Object(u.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"GifExpertApp"),r.a.createElement(o,{setcategorias:c}),r.a.createElement("hr",null),r.a.createElement("ol",null,a.map((function(e){return r.a.createElement(g,{key:e,categorie:e})}))))};a(15);i.a.render(r.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.e7b02c9e.chunk.js.map