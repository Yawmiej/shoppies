(this.webpackJsonpshoppies=this.webpackJsonpshoppies||[]).push([[0],{202:function(e,t,n){},203:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(0),a=n.n(c),i=n(41),s=n.n(i),o=n(208),u=n(4),j=n(216),l=n(206),b=n(51),d=n.n(b),O=n(63),h=n(207),m=n(39),p=function(){var e=Object(c.useRef)({});return{fetchData:function(){var t=Object(O.a)(d.a.mark((function t(n){var r,c,a,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r="".concat("http://www.omdbapi.com/","?apikey=").concat("b8494e06","&type=").concat("movie","&").concat(n),n){t.next=3;break}return t.abrupt("return");case 3:if(!e.current[n]){t.next=6;break}return c=e.current[n],t.abrupt("return",[null,c]);case 6:return t.prev=6,t.next=9,fetch(r);case 9:if((a=t.sent).ok){t.next=14;break}return t.next=13,a.json();case 13:throw t.sent;case 14:return t.next=16,a.json();case 16:return i=t.sent,e.current[n]=i,t.abrupt("return",[null,i]);case 21:return t.prev=21,t.t0=t.catch(6),t.abrupt("return",[t.t0]);case 24:case"end":return t.stop()}}),t,null,[[6,21]])})));return function(e){return t.apply(this,arguments)}}()}},x=a.a.createContext(),v="SET_PAGE_LOADING",f="SET_MOVIES_LIST",g="ADD_TO_NOMINATION",y="REMOVE_NOMINATION",S="SET_ERROR";function w(e){return{type:f,payload:e}}function N(e){return{type:S,payload:e}}var k=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),s=Object(u.a)(i,2),o=s[0],j=s[1],l=p().fetchData,b=Object(c.useContext)(x).dispatch,f=Object(c.useCallback)((function(e){j(e),a(e.length>0)}),[]),g=Object(r.jsx)(h.a.SearchField,{onChange:f,value:o,placeholder:"Search for movies",showFocusBorder:!0}),y=Object(c.useCallback)(Object(O.a)(d.a.mark((function e(){var t,n,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o){e.next=2;break}return e.abrupt("return");case 2:return a(!1),b({type:v,payload:!0}),e.next=6,l("s=".concat(o));case 6:t=e.sent,n=Object(u.a)(t,2),r=n[0],c=n[1],r||c.Error?b(N({title:r?r.Error:c.Error,body:""})):b(w(c));case 11:case"end":return e.stop()}}),e)}))),[o]),S=Object(r.jsx)(m.a,{items:[{content:"Search: ".concat(o),onAction:y}]}),k=Object(c.useCallback)((function(){a(!1)}),[]);return Object(r.jsx)(h.a,{searchResultsVisible:n,searchField:g,searchResults:S,onSearchResultsDismiss:k})},D=n(210),C=n(92),E=n(209);var I=function(){var e=Object(c.useContext)(x),t=e.state,n=e.dispatch;return t.error?Object(r.jsx)("div",{className:"error-banner",children:Object(r.jsx)(E.a,{title:t.error.title,status:"warning",onDismiss:function(){return n(N(null))},children:Object(r.jsx)("p",{children:t.error.body})})}):null},A=n(44),L=n(212),R=n(213),M=n(214);var T=function(){return Object(r.jsx)("div",{className:"center-flex",children:Object(r.jsx)("div",{className:"flex-row",children:["cardA","cardB","cardC","cardD","cardE","cardF","cardG","cardH"].map((function(e){return Object(r.jsx)("div",{className:"movie-card",children:Object(r.jsx)(C.a,{sectioned:!0,children:Object(r.jsxs)(A.a,{children:[Object(r.jsx)(L.a,{size:"large"}),Object(r.jsx)(R.a,{size:"small"}),Object(r.jsx)(M.a,{lines:"3"}),Object(r.jsx)(R.a,{size:"large"})]})})},e)}))})})},F=n(215),_=n(211);var B=function(){var e,t,n=Object(c.useContext)(x),a=n.state,i=n.dispatch,s=Object(r.jsx)(F.a,{heading:"Search a movie to nominate",image:"https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png",children:Object(r.jsx)("p",{children:"All your nominated movies will appear here"})}),o=Object(c.useCallback)((function(e){i({type:g,payload:e})}),[]);return a.movies.Search?Object(r.jsx)("div",{className:"center-flex",children:Object(r.jsx)("div",{className:"flex-row media",children:null===(e=a.movies)||void 0===e||null===(t=e.Search)||void 0===t?void 0:t.map((function(e){return Object(r.jsx)("div",{className:"movie-card media",children:Object(r.jsx)(_.a,{portrait:!0,title:e.Title,description:"(".concat(e.Year,")"),primaryAction:{content:"Nominate",onAction:function(){return o(e)},disabled:!!a.nominations[e.imdbID]},children:Object(r.jsx)("img",{src:e.Poster,alt:e.Title,height:"150px",width:"100%",style:{objectFit:"cover",objectPosition:"center"}})})},e.imdbID)}))})}):s};var P=function(){var e=Object(c.useContext)(x).state.pageLoading?Object(r.jsx)(T,{}):Object(r.jsx)(B,{});return Object(r.jsx)(D.a.Section,{children:Object(r.jsxs)(C.a,{title:"All Movies",sectioned:!0,children:[Object(r.jsx)(I,{}),e]})})},Y=n.p+"static/media/empty-state1.6621840e.png",z=function(e){return Object.keys(e).length};var G=function(){var e=Object(c.useContext)(x),t=e.state,n=e.dispatch,a=function(e){return n({type:y,payload:e})};return Object(r.jsx)("div",{className:"nominations",children:Object.values(t.nominations).map((function(e){return Object(r.jsx)(C.a.Section,{title:e.Title,actions:[{content:"Remove",destructive:!0,onAction:function(){return a(e)}}],children:Object(r.jsx)("p",{children:"(".concat(e.Year,")")})},e.imdbID)}))})};var V=function(){var e=Object(c.useContext)(x).state,t=Object(r.jsx)(C.a.Section,{children:Object(r.jsx)(F.a,{heading:"No Nominated Movies Yet",image:Y,children:Object(r.jsx)("p",{children:"All your nominated movies will appear here"})})}),n=0===z(e.nominations)?t:Object(r.jsx)(G,{});return Object(r.jsx)(D.a.Section,{secondary:!0,children:Object(r.jsx)(C.a,{title:"Nominated Movies",sectioned:!0,children:n})})};function J(){return Object(r.jsx)("div",{style:{padding:"2rem"},children:Object(r.jsxs)(D.a,{children:[Object(r.jsx)(P,{}),Object(r.jsx)(V,{})]})})}var H=function(){var e=Object(c.useContext)(x).state.pageLoading?Object(r.jsx)(j.a,{}):null;return Object(r.jsxs)(l.a,{children:[Object(r.jsx)(k,{}),e,Object(r.jsx)(J,{})]})},q=n(42),K=n(14),Q={pageLoading:!1,movies:{},nominations:{},error:null},U=function(e,t){return Object(K.a)(Object(K.a)({},e),{},{pageLoading:t})},W=function(e,t){return Object(K.a)(Object(K.a)({},e),{},{movies:t,pageLoading:!1,error:null})},X=function(e,t){return 5===z(e.nominations)?Object(K.a)(Object(K.a)({},e),{},{error:{title:"Maximum Nominations",body:"You have a maximum of 5 movie nominations. Remove nominated movies to add more."}}):Object(K.a)(Object(K.a)({},e),{},{nominations:Object(K.a)(Object(K.a)({},e.nominations),{},Object(q.a)({},t.imdbID,t))})},Z=function(e,t){var n=Object(K.a)({},e.nominations);return delete n[t.imdbID],Object(K.a)(Object(K.a)({},e),{},{nominations:Object(K.a)({},n),error:null})},$=function(e,t){return Object(K.a)(Object(K.a)({},e),{},{error:t,pageLoading:!1})};function ee(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case v:return U(e,r);case S:return $(e,r);case f:return W(e,r);case g:return X(e,r);case y:return Z(e,r);default:return e}}var te=function(){var e=Object(c.useReducer)(ee,Q),t=Object(u.a)(e,2),n=t[0],a=t[1],i=Object(c.useMemo)((function(){return{state:n,dispatch:a}}),[n,a]);return Object(r.jsx)(x.Provider,{value:i,children:Object(r.jsx)(H,{})})},ne=n.p+"static/media/Inner.ba5b1634.svg",re=(n(201),n(202),{colors:{primary:"#008060",topBar:{background:"#fff",backgroundLighter:"#F4F6F8",backgroundDarker:"#DFE3E8",border:"#C4CDD5",color:"#212B36"}},logo:{width:180,topBarSource:ne,url:"/",accessibilityLabel:"Shoppies"}}),ce=Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(o.a,{features:{newDesignLanguage:!0},theme:re,children:Object(r.jsx)(te,{})})});s.a.render(ce,document.getElementById("root"))}},[[203,1,2]]]);
//# sourceMappingURL=main.bf79915d.chunk.js.map