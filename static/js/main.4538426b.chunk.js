(this["webpackJsonphacker-clone"]=this["webpackJsonphacker-clone"]||[]).push([[0],{35:function(e,t,a){e.exports=a.p+"static/media/up.aa710c73.png"},37:function(e,t,a){e.exports=a(73)},50:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(12),l=a.n(r),o=a(9),s=a(5),i=a(18),u=a(32),m=a(33),f=a.n(m),E=(a(50),a(2));a(51);function p(e){return console.log(" news for page",e),function(t){var a="".concat("https://hn.algolia.com/api/v1/search_by_date","?tags=story&page=").concat(e);console.log("fetchCallto url",e),fetch(a).then((function(e){if(!e.ok)throw new Error("Failed to fetch.");return e.json()})).then((function(e){t(function(e){return{type:"FETCH_NEWS",payload:e}}(e))})).catch((function(e){var a;t({type:"FETCH_NEWS",payload:a})}))}}var d=function(){return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"comments-section"},"Comments"),c.a.createElement("div",{className:"vote-count-section"},"Vote Count"),c.a.createElement("div",{className:"up-vote-section"},"Up Vote"),c.a.createElement("div",{className:"news-section"},"News Details"))},h=a(34),v=a.n(h),b=a(35),g=a.n(b);var w=Object(o.b)((function(e){return{news:e.news}}))((function(e){var t=c.a.createElement("div",null);e.news&&e.news.length>0&&(t=e.news[0].hits.map((function(e){return c.a.createElement("div",{key:e.objectID,className:"d-flex gray-background"},c.a.createElement("div",{className:"comments-section"},e.num_comments||0," "),c.a.createElement("div",{className:"vote-count-section"},"36"),c.a.createElement("div",{className:"up-vote-section"}," ",c.a.createElement("a",{href:"#"},c.a.createElement("img",{src:g.a,width:"20%"}))," "),c.a.createElement("div",{className:"font-weight-bold news-section"},e.title," ",c.a.createElement("span",{className:"small-font"},c.a.createElement("a",{href:e.url,target:"_blank"},"(",(t=e.url)?new URL(t).hostname:"",")")," ","by ",c.a.createElement("span",{className:"text-black"},e.author)," ",c.a.createElement(v.a,{date:e.created_at})," ",c.a.createElement("a",{href:""},"[ hide ]"))," "));var t})));return c.a.createElement("ul",null,t)}));var N=Object(o.b)(null,(function(e){return Object(s.bindActionCreators)({fetchNews:p},e)}))((function(e){console.log(e);var t=e.currPage;t=parseInt(t);return c.a.createElement("div",{className:"pagination"},c.a.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),p(t-=1)}},"Previous |"," "),c.a.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),p(t+=1)}},"Next"))})),y=a(36),j=a.n(y),x=(a(71),function(){return c.a.createElement("div",{className:"graph-container"},c.a.createElement(j.a,{width:400,height:200,xLabel:"ID",yLabel:"Votes",data:[{color:"steelblue",points:[{x:10,y:20},{x:20,y:40},{x:30,y:10},{x:35,y:54},{x:70,y:-30}]}]}))});var k=Object(o.b)(null,(function(e){return Object(s.bindActionCreators)({fetchNews:p},e)}))((function(e){var t=e.fetchNews,a=Object(E.g)().pagination;return console.log("page",a),Object(n.useEffect)((function(){t(a)}),[a]),c.a.createElement("div",null,c.a.createElement(d,null),c.a.createElement(w,null),c.a.createElement(N,{currPage:a}),c.a.createElement(x,null))})),C=a(14),O=function(){return c.a.createElement(C.a,null,c.a.createElement(E.d,null,c.a.createElement(E.b,{path:"/:pagination"},c.a.createElement(k,null)),c.a.createElement(E.b,{exact:!0,path:"/",render:function(){return c.a.createElement(E.a,{to:"/1"})}})))},_=a(21),D=Object(s.combineReducers)({news:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_NEWS":case"UPDATE_PAGE_NUM":return[t.payload].concat(Object(_.a)(e))}return e}}),T=[f.a,u.a],P="undefined"!==typeof i.composeWithDevTools?i.composeWithDevTools:s.compose,S=Object(s.createStore)(D,{},P(s.applyMiddleware.apply(void 0,T)));l.a.render(c.a.createElement(o.a,{store:S},c.a.createElement(O,null)),document.querySelector(".container"))}},[[37,1,2]]]);
//# sourceMappingURL=main.4538426b.chunk.js.map