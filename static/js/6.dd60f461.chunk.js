(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[6],{39:function(t,e,n){"use strict";var r=n.p+"static/media/error.42292aa1.gif",c=n(3);e.a=function(){return Object(c.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:r,alt:"Error"})}},40:function(t,e,n){"use strict";var r=n(4),c=n.n(r),a=n(7),i=n(5),s=n(0);e.a=function(){var t=function(){var t=Object(s.useState)(!1),e=Object(i.a)(t,2),n=e[0],r=e[1],o=Object(s.useState)(null),u=Object(i.a)(o,2),l=u[0],p=u[1],b=Object(s.useState)("waiting"),m=Object(i.a)(b,2),d=m[0],j=m[1];return{loading:n,request:Object(s.useCallback)(function(){var t=Object(a.a)(c.a.mark((function t(e){var n,a,i,s,o,u=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",a=u.length>2&&void 0!==u[2]?u[2]:null,i=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},r(!0),j("loading"),t.prev=5,t.next=8,fetch(e,{method:n,body:a,headers:i});case 8:if((s=t.sent).ok){t.next=11;break}throw new Error("Could not fetch ".concat(e,", status: ").concat(s.status));case 11:return t.next=13,s.json();case 13:return o=t.sent,r(!1),j("confirmed"),t.abrupt("return",o);case 19:throw t.prev=19,t.t0=t.catch(5),r(!1),p(t.t0.message),j("error"),t.t0;case 25:case"end":return t.stop()}}),t,null,[[5,19]])})));return function(e){return t.apply(this,arguments)}}(),[]),error:l,clearError:Object(s.useCallback)((function(){p(null),j("loading")}),[]),process:d}}(),e=t.loading,n=t.request,r=t.error,o=t.clearError,u="https://gateway.marvel.com:443/v1/public/",l="apikey=1b431546c9862750583ab94f838ae125",p=210,b=function(){var t=Object(a.a)(c.a.mark((function t(e){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("".concat(u,"characters?name=").concat(e.charName,"&").concat(l));case 2:return r=t.sent,t.abrupt("return",r.data.results.map(h));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(c.a.mark((function t(){var e,r,a=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:p,t.next=3,n("".concat(u,"characters?limit=9&offset=").concat(e,"&").concat(l));case 3:return r=t.sent,t.abrupt("return",r.data.results.map(v));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=Object(a.a)(c.a.mark((function t(e){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("".concat(u,"characters/").concat(e,"?&").concat(l));case 2:return r=t.sent,t.abrupt("return",v(r.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(a.a)(c.a.mark((function t(){var e,r,a=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:p,t.next=3,n("".concat(u,"comics?limit=8&offset=").concat(e,"&").concat(l));case 3:return r=t.sent,t.abrupt("return",r.data.results.map(g));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=Object(a.a)(c.a.mark((function t(e){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("".concat(u,"comics/").concat(e,"?&").concat(l));case 2:return r=t.sent,t.abrupt("return",g(r.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(t){return{name:t.name,description:t.description,thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,id:t.id}},v=function(t){return{name:t.name,description:t.description?"".concat(t.description.slice(0,181),"..."):"There is no description for this character",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,id:t.id,comics:t.comics.items}},g=function(t){var e;return{title:t.title,description:t.description||"There is no description",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,price:t.prices[0].price?"".concat(t.prices[0].price,"$"):"not avaible",id:t.id,pageCount:t.pageCount?"".concat(t.pageCount," p."):"No information about the number of pages",language:(null===(e=t.textObject)||void 0===e?void 0:e.language)||"en-us"}};return{loading:e,error:r,getAllCharacters:m,getOneCharacter:d,getCharacterByName:b,clearError:o,getAllComics:j,getComic:f}}},44:function(t,e,n){},45:function(t,e,n){"use strict";n(44);var r=n.p+"static/media/Avengers.4065c8f9.png",c=n.p+"static/media/Avengers_logo.9eaf2193.png",a=n(3);e.a=function(){return Object(a.jsxs)("div",{className:"app__banner",children:[Object(a.jsx)("img",{src:r,alt:"Avengers"}),Object(a.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(a.jsx)("br",{}),"Stay tuned!"]}),Object(a.jsx)("img",{src:c,alt:"Avengers logo"})]})}},61:function(t,e,n){},73:function(t,e,n){"use strict";n.r(e);var r=n(41),c=n(45),a=n(8),i=n(5),s=n(0),o=n(12),u=n(23),l=n(39),p=n(40),b=(n(61),n(3)),m=function(){var t=Object(s.useState)([]),e=Object(i.a)(t,2),n=e[0],r=e[1],c=Object(s.useState)(!1),m=Object(i.a)(c,2),d=m[0],j=m[1],f=Object(s.useState)(210),h=Object(i.a)(f,2),v=h[0],g=h[1],O=Object(s.useState)(!1),x=Object(i.a)(O,2),w=x[0],_=x[1],k=Object(p.a)(),y=k.loading,C=k.error,N=k.getAllComics,S=function(t,e){j(!e),N(t).then(A)},A=function(t){var e=!1;t.length<8&&(e=!0),r((function(e){return[].concat(Object(a.a)(e),Object(a.a)(t))})),j((function(t){return!1})),g((function(t){return t+8})),_((function(t){return e}))};Object(s.useEffect)((function(){S(v,!0)}),[]);var E=function(t){var e=t.map((function(t,e){return Object(b.jsx)("li",{tabIndex:0,className:"comics__item",children:Object(b.jsxs)(o.b,{to:"/marvel-react-project/comics/".concat(t.id),children:[Object(b.jsx)("img",{src:t.thumbnail,alt:t.title,className:"comics__item-img"}),Object(b.jsx)("div",{className:"comics__item-name",children:t.title}),Object(b.jsxs)("div",{className:"comics__item-price",children:[t.price,"$"]})]})},e)}));return Object(b.jsx)("ul",{className:"comics__grid",children:e})}(n),T=C?Object(b.jsx)(l.a,{}):null,q=y&&!d?Object(b.jsx)(u.a,{}):null;return Object(b.jsxs)("div",{className:"comics__list",children:[T,q,E,Object(b.jsx)("button",{className:"button button__main button__long",onClick:function(){return S(v)},disabled:d,style:{display:w?"none":"block"},children:Object(b.jsx)("div",{className:"inner",children:"load more"})})]})};e.default=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(r.a,{children:[Object(b.jsx)("meta",{name:"description",content:"Page with list of our comics"}),Object(b.jsx)("title",{children:"Comics page"})]}),Object(b.jsx)(c.a,{}),Object(b.jsx)(m,{})]})}}}]);
//# sourceMappingURL=6.dd60f461.chunk.js.map