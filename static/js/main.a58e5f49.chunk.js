(this["webpackJsonphacker-clone"]=this["webpackJsonphacker-clone"]||[]).push([[0],{12:function(e,a,t){e.exports=t(24)},23:function(e,a,t){},24:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(2),l=t.n(r),o=t(3),s=t(1),m=t(10);t(23);function i(e){var a="".concat("http://hn.algolia.com/api/v1/search_by_date","?page=").concat(e),t={};return fetch(a).then((function(e){if(!e.ok)throw new Error("Failed to fetch.");return e.json()})).then((function(e){console.log(e),t=e.data})).catch((function(e){console.log(e)})),{type:"FETCH_NEWS",payload:t}}var u=function(){return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"comments-section"},"Comments"),c.a.createElement("div",{className:"vote-count-section"},"Vote Count"),c.a.createElement("div",{className:"up-vote-section"},"Up Vote"),c.a.createElement("div",{className:"news-section"},"News Details"))},E=t(7),d=t.n(E),h=function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"d-flex"},c.a.createElement("div",{className:"comments-section"},"36"),c.a.createElement("div",{className:"font-orange vote-count-section"},"36"),c.a.createElement("div",{className:"up-vote-section"}," ",c.a.createElement("a",{href:"#"},c.a.createElement("img",{src:d.a,width:"20%"}))," "),c.a.createElement("div",{className:"font-weight-bold news-section"},"Seemingly Impossible Swift Program"," ",c.a.createElement("span",{className:"small-font"},c.a.createElement("a",{href:"#"},"(fewbutripe.com)")," by"," ",c.a.createElement("span",{className:"text-black"},"wool_gather")," 5 hours ago"," ",c.a.createElement("a",{href:""},"[ hide ]"))," ")),c.a.createElement("div",{className:"d-flex gray-background"},c.a.createElement("div",{className:"comments-section"},"36"),c.a.createElement("div",{className:"vote-count-section"},"36"),c.a.createElement("div",{className:"up-vote-section"}," ",c.a.createElement("a",{href:"#"},c.a.createElement("img",{src:d.a,width:"20%"}))," "),c.a.createElement("div",{className:"font-weight-bold news-section"},"Seemingly Impossible Swift Program"," ",c.a.createElement("span",{className:"small-font"},c.a.createElement("a",{href:"#"},"(fewbutripe.com)")," by"," ",c.a.createElement("span",{className:"text-black"},"wool_gather")," 5 hours ago"," ",c.a.createElement("a",{href:""},"[ hide ]"))," "))," ")},f=function(){return c.a.createElement("div",{className:"pagination"},c.a.createElement("a",{href:""},"Previous | "),c.a.createElement("a",{href:""},"Next"))},v=function(){return c.a.createElement("div",{className:"graph-container"},"Graph here")};var p=Object(o.b)(null,(function(e){return Object(s.b)({fetchNews:i},e)}))((function(){return c.a.createElement("div",null,c.a.createElement(u,null),c.a.createElement(h,null),c.a.createElement(f,null),c.a.createElement(v,null))})),N=function(){return c.a.createElement("div",null,c.a.createElement(p,null))},g=t(11),b=Object(s.c)({news:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_NEWS":var t=[a.payload.data].concat(Object(g.a)(e));return t}return e}}),w=Object(s.a)(m.a)(s.d);l.a.render(c.a.createElement(o.a,{store:w(b)},c.a.createElement(N,null)),document.querySelector(".container"))},7:function(e,a,t){e.exports=t.p+"static/media/up.aa710c73.png"}},[[12,1,2]]]);
//# sourceMappingURL=main.a58e5f49.chunk.js.map