(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,a){e.exports=a.p+"static/media/steam.fb6b439a.png"},135:function(e,t,a){e.exports=a(262)},140:function(e,t,a){},260:function(e,t,a){},262:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),i=a.n(o),c=a(17),l=(a(140),a(110)),m=a.n(l),s=a(69),u=a(14),d=a(40),E="store",p="library",g="about",b={activePage:E},f=Object(d.b)({name:"app",initialState:b,reducers:{SET_ACTIVE_PAGE:function(e,t){e.activePage=t.payload}}}),h=f.actions.SET_ACTIVE_PAGE,y=f.reducer,v=a(53),S=Object(u.b)(function(e){return{page:e.app.activePage}})(function(e){var t=e.page;Object(n.useEffect)(function(){!function(e){var t=document.querySelector(".nav-list"),a=document.querySelector(".toggle-nav"),n=document.querySelector(".burger"),r=document.querySelector(".overlay"),o=document.querySelectorAll(".link"),i=document.querySelector("body"),c=document.querySelector("html");function l(){t.classList.toggle("-open"),n.classList.toggle("open"),t.classList.contains("-open")?(i.classList.add("_disableScroll"),c.classList.add("_disableScroll")):(i.classList.remove("_disableScroll"),c.classList.remove("_disableScroll"))}var m=function(){t.classList.remove("-open"),n.classList.remove("open"),i.classList.remove("_disableScroll"),c.classList.remove("_disableScroll")};a.addEventListener("click",l),r.addEventListener("click",l),o.forEach(function(e){e.addEventListener("click",function(e){m()})}),function(){var e;window.addEventListener("resize",function(){e||(e=setTimeout(function(){e=null,window.innerWidth>=800&&m()},66))},!1)}()}()},[]);var a=function(e){return v({link:!0,"-active":t===e})};return r.a.createElement("header",{className:"nav-wrapper -sticky"},r.a.createElement("nav",{className:"nav"},r.a.createElement("button",{className:"toggle-nav",type:"button"},r.a.createElement("div",{className:"burger -squeeze -offset",type:"button"},r.a.createElement("span",{className:"burger-lines"}))),r.a.createElement(c.b,{className:"logo-link",to:"/"},r.a.createElement("img",{className:"logo",id:"logo",src:m.a,alt:"Logo"})),r.a.createElement("ul",{className:"nav-list",role:"navigation"},r.a.createElement("div",{className:"list -left"},r.a.createElement("li",{className:"item"},r.a.createElement(c.b,{className:a(E),to:"/"},r.a.createElement(s.a,{variant:"h6"},"Store"))),r.a.createElement("li",{className:"item"},r.a.createElement(c.b,{className:a(p),to:"/library"},r.a.createElement(s.a,{variant:"h6"},"Library"))),r.a.createElement("li",{className:"item"},r.a.createElement(c.b,{className:a(g),to:"/about"},r.a.createElement(s.a,{variant:"h6"},"About")))),r.a.createElement("div",{className:"list -right"},r.a.createElement("div",{className:"overlay"})))))}),T=a(283),O=a(304),_=a(284),j=function(){return r.a.createElement("footer",{style:{background:"#111",position:"absolute",bottom:0,left:0,width:"100%"}},r.a.createElement(T.a,null,r.a.createElement(O.a,{px:3,py:1},r.a.createElement(s.a,{color:"textPrimary"},"Create By"," ",r.a.createElement(_.a,{color:"textSecondary",href:"https://mtgdev.herokuapp.com",target:"_blank"},"Mtg")))))},x=a(290),G=a(23),A=a(16),I=a(51),L=a.n(I),w="API";function F(e){var t=e.url,a=void 0===t?"":t,n=e.method,r=void 0===n?"GET":n,o=e.data,i=void 0===o?null:o,c=e.onSuccess,l=void 0===c?function(){}:c,m=e.onFailure,s=void 0===m?null:m,u=e.label,d=void 0===u?"":u,E=e.onSuccessMeta;return{type:w,payload:{url:a,method:r,data:i,onSuccess:l,onFailure:s,label:d,onSuccessMeta:void 0===E?{}:E}}}var k,C=function(e){var t=e.dispatch;return function(e){return function(a){if(e(a),a.type===w){var n=a.payload,r=n.url,o=n.method,i=n.data,c=n.accessToken,l=n.onSuccess,m=n.onFailure,s=n.label,u=n.onSuccessMeta,d=n.headers,E=["GET","DELETE"].includes(o)?"params":"data";L.a.defaults.baseURL=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BASE_URL||"",L.a.defaults.headers.common["Content-Type"]="application/json",L.a.defaults.headers.common.Authorization="Bearer".concat(c),s&&t(function(e){return{type:"API_START",payload:e}}(s)),L.a.request(Object(G.a)({url:r,method:o,headers:d},E,i)).then(function(e){var a=e.data;t(Object(A.a)({},l(a),{meta:u}))}).catch(function(e){t(function(e){return{type:"API_ERROR",error:e}}(e)),m&&t(m(e)),e.response&&403===e.response.status&&t({type:"ACCESS_DENIED",payload:{url:window.location.pathname}})}).finally(function(){s&&t(function(e){return{type:"API_END",payload:e}}(s))})}}}},R="all",N="all but not ignored",P="whitelist",M="ignored",B={items:[],loading:!1,error:!1,visibilityFilter:R},W=Object(d.b)({name:"games",initialState:B,reducers:{SET_GAMES:function(e,t){e.items=t.payload,e.error=!1},SET_GAME:function(e,t){e.game=t.payload,e.error=!1},SET_FETCH_ERROR:function(e,t){e.error=!0},TOGGLE_IGNORE:function(e,t){e.items.map(function(e){return e.id===t.payload.id&&(e.ignored=!e.ignored),e}),e.game&&e.game.id===+t.payload.id&&(e.game.ignored=!e.game.ignored)},TOGGLE_WHITELIST:function(e,t){e.items.map(function(e){return e.id===t.payload.id&&(e.whitelisted=!e.whitelisted),e}),e.game&&e.game.id===+t.payload.id&&(e.game.whitelisted=!e.game.whitelisted)},TOGGLE_LIBRARY:function(e,t){e.items.map(function(e){return e.id===t.payload.id&&(e.inLibrary=t.payload.inLibrary),e}),e.game&&e.game.id===+t.payload.id&&(e.game.inLibrary=!e.game.inLibrary)},SET_GAMES_VISIBILITY_FILTER:function(e,t){e.visibilityFilter=t.payload}},extraReducers:(k={},Object(G.a)(k,"API_START",function(e,t){"fetch-games-label"!==t.payload&&"fetch-game-label"!==t.payload||(e.loading=!0,e.error=!1)}),Object(G.a)(k,"API_END",function(e,t){"fetch-games-label"!==t.payload&&"fetch-game-label"!==t.payload||(e.loading=!1)}),k)}),H=W.actions,Y=W.reducer,V=function(){return F({url:"/api/games",onSuccess:H.SET_GAMES,onFailure:H.SET_FETCH_ERROR,label:"fetch-games-label",onSuccessMeta:{saveGames:!0,all:!0}})},z=function(e){return F({url:"/api/games/ignore",method:"POST",data:{id:e},onSuccess:function(t){return H.TOGGLE_IGNORE(Object(A.a)({},t,{id:e}))},onSuccessMeta:{saveGames:!0}})},D=function(e){return F({url:"/api/games/whitelist",method:"POST",data:{id:e},onSuccess:function(t){return H.TOGGLE_WHITELIST(Object(A.a)({},t,{id:e}))}})},q=function(e){return F({url:"/api/games/library",method:"POST",data:{id:e},onSuccess:function(t){return H.TOGGLE_LIBRARY(Object(A.a)({},t,{id:e}))}})},U=H.SET_GAMES_VISIBILITY_FILTER,J=a(35),$=a(49),K=a(287),Q=a(288),X=a(289),Z=a(265),ee=a(285),te=Object(Z.a)({icon:function(e){return{position:"absolute",cursor:"pointer",right:20,top:20,backgroundColor:e.palette.secondary.dark,padding:"1px 5px 0",borderRadius:3,transitionDuration:".4s",opacity:e.visible?"1":"0","&:hover":{backgroundColor:e.palette.secondary.main,"& ul":{visibility:"visible",opacity:1}}}},list:function(e){return{position:"absolute",width:105,cursor:"pointer",right:0,top:2,padding:"5px 6px",listStyle:"none",backgroundColor:"#EEE",borderRadius:3,transition:"opacity .4s ease-in-out",visibility:"hidden",opacity:0,"& li":{padding:"1px 14px",marginTop:"3px",borderRadius:5,backgroundColor:"inheriet",color:"#222",border:" 2px solid  ".concat(e.palette.secondary.light),"&:hover":{backgroundColor:e.palette.secondary.main,color:"#FFF"},"&.active":{backgroundColor:e.palette.secondary.light,color:"#FFF"}}}}}),ae=function(e){var t=e.handleIgnore,a=e.ignored,n=e.handleWhitelist,o=e.whitelisted,i=e.visible,c=Object($.a)(),l=te(Object(A.a)({},c,{visible:i}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{className:l.icon},r.a.createElement(ee.a,{fontSize:"small"}),r.a.createElement(O.a,{component:"ul",className:l.list},r.a.createElement(s.a,{variant:"body2"},r.a.createElement("li",{onClick:t,className:"".concat(a?"active":"")},a?"Ignored":"Ignore")),r.a.createElement(s.a,{variant:"body2"},r.a.createElement("li",{onClick:n,className:"".concat(o?"active":"")},o?"Whitelisted":"Whitelist")))))},ne=Object(Z.a)({card:function(e){return{width:270,height:385,margin:"20px 15px 0 15px",position:"relative",background:e.palette.primary.main,boxShadow:"3px 4px 10px #112",opacity:e.ignored?.5:1}},media:{height:"70%"},content:function(e){return{height:"30%"}},title:{height:"46%"}}),re=function(e){var t=e.game,a=t.title,o=t.price,i=t.thumbnail,c=t.ignored,l=t.whitelisted,m=Object($.a)(),u=ne(Object(A.a)({},m,{ignored:c,whitelisted:l})),d=Object(n.useRef)(null),E=Object(n.useRef)(null),p=Object(n.useState)(!1),g=Object(J.a)(p,2),b=g[0],f=g[1];return Object(n.useEffect)(function(){d.current.addEventListener("mouseenter",function(){f(!0)}),d.current.addEventListener("mouseleave",function(){f(!1)})},[]),Object(n.useEffect)(function(){E.current.addEventListener("click",function(e){e.preventDefault()})},[]),r.a.createElement(K.a,{ref:d,className:u.card},r.a.createElement(Q.a,{className:u.media,image:i,title:a}),r.a.createElement(X.a,{className:u.content},r.a.createElement(s.a,{variant:"h5",component:"h6",gutterBottom:!0,className:u.title,color:"textPrimary"},a),r.a.createElement(s.a,{variant:"h6",component:"h6",align:"right",color:"textSecondary"},o," $")),r.a.createElement("div",{ref:E},r.a.createElement(ae,{visible:b,ignored:c,whitelisted:l,handleIgnore:e.handleIgnore,handleWhitelist:e.handleWhitelist})))},oe=function(e){var t=e.games,a=e.TOGGLE_IGNORE_GAME,n=e.TOGGLE_WHITELIST_GAME;return r.a.createElement(O.a,null,r.a.createElement(x.a,{container:!0,justify:"center"},t.map(function(e){return r.a.createElement(x.a,{item:!0,key:e.id},r.a.createElement(c.b,{to:"/games/".concat(e.id),style:{textDecoration:"none"}},r.a.createElement(re,{game:e,handleIgnore:function(){return a(e.id)},handleWhitelist:function(){return n(e.id)}})))})))},ie=function(e,t){var a=[];switch(t){case N:a=e.filter(function(e){return!e.ignored});break;case M:a=e.filter(function(e){return e.ignored});break;case P:a=e.filter(function(e){return e.whitelisted});break;default:a=e}return a},ce=Object(u.b)(function(e){return{games:ie(e.games.items,e.games.visibilityFilter),loading:e.games.loading,error:e.games.error}},{FETCH_GAMES:V,TOGGLE_IGNORE_GAME:z,TOGGLE_WHITELIST_GAME:D})(oe),le=a(292),me=a(307),se=a(293),ue=a(295),de=a(294),Ee=a(129),pe=a(291),ge=a(306),be=function(e){var t=e.filter,a=e.currentFilter,n=e.text,o=e.setFilter;return r.a.createElement(pe.a,{style:{width:"100%"},control:r.a.createElement(ge.a,{checked:t===a,onChange:function(){return o(t)}}),label:n})},fe=Object(le.a)({root:function(e){return{backgroundColor:e.palette.primary.dark,maxWidth:270}}}),he=Object(u.b)(function(e){return{currentFilter:e.games.visibilityFilter}},{SET_GAMES_VISIBILITY_FILTER:U})(function(e){var t=e.currentFilter,a=e.SET_GAMES_VISIBILITY_FILTER,n=Object(Ee.a)(),o=fe(Object(A.a)({},n));return r.a.createElement(me.a,{className:o.root,defaultExpanded:!0},r.a.createElement(se.a,{expandIcon:r.a.createElement(de.a,{color:"secondary"}),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(s.a,{color:"secondary"},"Filter Games")),r.a.createElement(ue.a,null,r.a.createElement(s.a,null,r.a.createElement(be,{text:"All",filter:R,currentFilter:t,setFilter:a}),r.a.createElement(be,{text:"All without ignored",filter:N,currentFilter:t,setFilter:a}),r.a.createElement(be,{text:"Whitelisted",filter:P,currentFilter:t,setFilter:a}),r.a.createElement(be,{text:"Ignored",filter:M,currentFilter:t,setFilter:a}))))}),ye=function(){return r.a.createElement(O.a,{display:"flex",justifyContent:"center",alignItems:"center",style:{height:"100vh"}},r.a.createElement(s.a,{variant:"h4",component:"h2",align:"center",color:"textPrimary"},"Some Error Happened"))},ve=a(115),Se=function(e){return r.a.createElement(O.a,{display:"flex",justifyContent:"center",alignContent:"center",style:{height:"100vh"},color:"primary.main",flexWrap:"wrap"},r.a.createElement(ve.a,e),r.a.createElement(s.a,{variant:"h6",component:"h6",color:"textSecondary",style:{width:"100%"},align:"center"},"Loading"))},Te=a(118),Oe=a.n(Te),_e=a(263),je=Object(le.a)({paper:function(e){return{backgroundColor:e.palette.primary.main}},image:{position:"relative",background:"black",width:"100%",height:0,paddingTop:"56.25%","& img":{position:"absolute",width:"100%",height:"100%",objectFit:"cover",top:0,left:0,objectPosition:"center top"}}}),xe=function(e){var t=e.title,a=e.img,n=e.description,o=Object(Ee.a)(),i=je(o);return n=n.slice(0,150)+" ... ",r.a.createElement(_e.a,{className:i.paper},r.a.createElement(x.a,{container:!0},r.a.createElement(x.a,{item:!0,xs:12,md:8},r.a.createElement("div",{className:i.image},r.a.createElement("img",{src:a,alt:t}))),r.a.createElement(x.a,{item:!0,xs:12,md:4},r.a.createElement(O.a,{px:2,py:2,pt:7},r.a.createElement(s.a,{variant:"h4",component:"h2",color:"textPrimary"},t),r.a.createElement(s.a,{variant:"h6",component:"h2",color:"textSecondary"},n)))))},Ge=a(296),Ae=a(297),Ie=Object(le.a)({container:{maxWidth:1200,margin:"0 auto"}}),Le=function(e){var t=e.games,a=Ie(),n={color:"#FFF",top:"50%"};return r.a.createElement("div",{className:a.container},r.a.createElement(Oe.a,{dots:!0,autoplay:!0,nextArrow:r.a.createElement(Ge.a,{style:n,fontSize:"large"}),prevArrow:r.a.createElement(Ae.a,{style:n,fontSize:"large"})},t.map(function(e){return r.a.createElement(c.b,{to:"/games/".concat(e.id),key:e.id},r.a.createElement(xe,{title:e.title,description:e.description,img:e.image}))})))},we=Object(u.b)(function(e){return{games:(t=e.games.items,t.filter(function(e){return e.showCarousel}))};var t})(Le),Fe=Object(u.b)(function(e){return{games:e.games.items,loading:e.games.loading,error:e.games.error}},{FETCH_GAMES:V,SET_ACTIVE_PAGE:h})(function(e){var t=e.games,a=e.loading,o=e.error,i=e.FETCH_GAMES,c=e.SET_ACTIVE_PAGE;return document.title="Steam Store",Object(n.useEffect)(function(){i()},[i]),Object(n.useEffect)(function(){c(E)},[c]),a?r.a.createElement(Se,null):o?r.a.createElement(ye,null):0===t.length?r.a.createElement(Se,null):r.a.createElement(T.a,null,r.a.createElement(we,null),r.a.createElement(x.a,{container:!0,justify:"space-between",alignItems:"flex-start"},r.a.createElement(x.a,{item:!0,xs:12,md:10},r.a.createElement(O.a,{mb:5},r.a.createElement(ce,null))),r.a.createElement(O.a,{mt:{xs:10}}),r.a.createElement(x.a,{item:!0,container:!0,justify:"center",xs:12,md:2},r.a.createElement(he,null))))}),ke=a(38),Ce=a(298),Re=Object(le.a)({image:function(e){return{height:"auto",maxHeight:720,"&>img":{width:"100%",height:"100%",objectFit:"cover"}}},btn:function(e){return{margin:"20px 20px 20px 0"}},addToLibraryBtn:{background:"#3c970a",color:"#fff",marginRight:20,"&:hover":{background:"#296b06"},"&:disabled":{background:"#245634",color:"#FFf"}}}),Ne=Object(u.b)(function(e){return{game:e.games.game,loading:e.games.loading,error:e.games.error}},{FETCH_GAME:function(e){return F({url:"/api/games/".concat(e),onSuccess:H.SET_GAME,onFailure:H.SET_FETCH_ERROR,label:"fetch-game-label"})},TOGGLE_IGNORE_GAME:z,TOGGLE_WHITELIST_GAME:D,TOGGLE_LIBRARY_GAME:q,SET_ACTIVE_PAGE:h})(function(e){var t=e.match,a=e.game,o=e.loading,i=e.error,c=e.FETCH_GAME,l=e.TOGGLE_IGNORE_GAME,m=e.TOGGLE_WHITELIST_GAME,u=e.TOGGLE_LIBRARY_GAME,d=e.SET_ACTIVE_PAGE,E=t.params.id,p=Object($.a)(),g=Re(Object(A.a)({},p)),b=Object(n.useState)(!1),f=Object(J.a)(b,2),h=f[0],y=f[1];return Object(n.useEffect)(function(){c(E),y(!0)},[c,E]),Object(n.useEffect)(function(){d("other")},[d]),o||!h?r.a.createElement(Se,null):i?r.a.createElement(ye,null):a?(document.title=a.title,r.a.createElement(T.a,null,r.a.createElement(O.a,{py:4},r.a.createElement(s.a,{variant:"h3",component:"h1",color:"textPrimary",gutterBottom:!0},a.title),r.a.createElement(x.a,{container:!0,justify:"space-between"},r.a.createElement(x.a,{item:!0,xs:12,md:8},r.a.createElement("div",{className:g.image},r.a.createElement("img",{src:a.image,alt:a.title})),r.a.createElement("div",null,r.a.createElement(Ce.a,{variant:a.whitelisted?"contained":"outlined",size:"large",color:"secondary",className:g.btn,onClick:function(){return m(E)}},a.whitelisted?"Whitelisted":"Whitelist"),r.a.createElement(Ce.a,{variant:a.ignored?"contained":"outlined",size:"large",color:"secondary",className:g.btn,onClick:function(){return l(E)}},a.ignored?"Ignored":"Ignore")),r.a.createElement(O.a,{display:"flex",justifyContent:"flex-end",alignItems:"center",pb:5},r.a.createElement(Ce.a,{variant:"contained",className:g.addToLibraryBtn,size:"large",onClick:function(){return u(E)},disabled:a.inLibrary},a.inLibrary?"In Library":"Add To Library"),r.a.createElement(s.a,{variant:"h6",component:"h6",color:"textPrimary"},a.price," $"))),r.a.createElement(x.a,{item:!0,xs:12,md:4},r.a.createElement(O.a,{px:3},r.a.createElement(s.a,{variant:"h5",color:"textPrimary",gutterBottom:!0},"About This Game"),r.a.createElement(s.a,{variant:"body1",color:"textPrimary"},a.description))))))):r.a.createElement(Se,null)}),Pe=a(305),Me=a(299),Be=a(300),We=a(301),He=a(302),Ye=function(e){var t=e.open,a=e.handleClose,n=e.title,o=Object($.a)();return r.a.createElement(Pe.a,{open:t,onClose:function(){return a(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(Me.a,{id:"alert-dialog-title",style:{background:o.palette.primary.main}},"Remove Game From Library ?"),r.a.createElement(Be.a,{style:{background:o.palette.primary.main}},r.a.createElement(We.a,{id:"alert-dialog-description",color:"textPrimary"},'Are You Sure You Want To Remove "'," ",r.a.createElement(s.a,{component:"span",color:"textSecondary"},n)," ",'" from your library PERMENANTLY ??')),r.a.createElement(He.a,{style:{background:o.palette.primary.main}},r.a.createElement(Ce.a,{onClick:function(){return a(!0)},style:{color:"#f42e2e"}},"Remove"),r.a.createElement(Ce.a,{onClick:function(){return a(!1)},style:{color:"#fff"},autoFocus:!0},"Cancel")))},Ve=Object(Z.a)({card:function(e){return Object(G.a)({width:240,margin:"20px auto",position:"relative",background:e.palette.primary.dark,boxShadow:"3px 4px 10px #112"},e.breakpoints.up("md"),{width:"100%",maxWidth:900})},content:function(e){return Object(G.a)({width:"100%",paddingTop:25},e.breakpoints.up("md"),{width:"auto",flex:3,display:"flex",justifyContent:"space-between",alignItems:"center"})},media:function(e){return Object(G.a)({width:"100%",height:240},e.breakpoints.up("sm"),{width:240,height:240})},title:{"& a":{color:"#FFF"}},downloadBtn:{color:"#FFF",background:"#3c9353",display:"block",width:128,margin:"10px auto"},removeBtn:{color:"#ca4545",display:"block",width:128,margin:"10px auto"}}),ze=function(e){var t=e.game,a=t.id,o=t.title,i=t.thumbnail,l=Object($.a)(),m=Ve(Object(A.a)({},l)),u=Object(n.useState)(!1),d=Object(J.a)(u,2),E=d[0],p=d[1];return r.a.createElement(K.a,{className:m.card},r.a.createElement(x.a,{container:!0},r.a.createElement(Q.a,{className:m.media,image:i,title:o}),r.a.createElement(X.a,{className:m.content},r.a.createElement(s.a,{variant:"h4",component:"h6",className:m.title},r.a.createElement(c.b,{to:"/games/".concat(a)},o)),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(Ce.a,{variant:"contained",color:"secondary",className:m.downloadBtn,size:"large",href:"#download"},"Download")),r.a.createElement("div",null,r.a.createElement(Ce.a,{className:m.removeBtn,size:"small",onClick:function(){return p(!0)}},r.a.createElement(s.a,null,"Remove")))))),r.a.createElement(Ye,{open:E,handleClose:function(t){t&&e.removeGame(),p(!1)},title:o}))},De=function(e){var t=e.games,a=e.removeGame;return r.a.createElement(O.a,null,r.a.createElement(x.a,{container:!0,justify:"center"},t.map(function(e){return r.a.createElement(x.a,{item:!0,xs:12,key:e.id},r.a.createElement(ze,{game:e,removeGame:function(){return a(e.id)}}))})))},qe=Object(u.b)(function(e){return{games:e.games.items.filter(function(e){return e.inLibrary}),loading:e.games.loading,error:e.games.error}},{FETCH_GAMES:V,SET_ACTIVE_PAGE:h,TOGGLE_LIBRARY_GAME:q})(function(e){var t=e.games,a=e.loading,o=e.error,i=e.FETCH_GAMES,c=e.SET_ACTIVE_PAGE,l=e.TOGGLE_LIBRARY_GAME;document.title="My Library";var m=Object(n.useState)(!1),u=Object(J.a)(m,2),d=u[0],E=u[1];return Object(n.useEffect)(function(){i(),E(!0)},[i]),Object(n.useEffect)(function(){c(p)},[c]),a||!d?r.a.createElement(Se,null):o?r.a.createElement(ye,null):0===t.length?r.a.createElement(T.a,null,r.a.createElement(x.a,{justify:"center",style:{minHeight:"100vh"}},r.a.createElement(s.a,{variant:"h3",component:"h3",color:"textPrimary",align:"center"},"You dont have any games in your library yet"))):r.a.createElement(T.a,null,r.a.createElement(s.a,{variant:"h3",component:"h1",color:"textPrimary",gutterBottom:!0},"Games You Own:"),r.a.createElement(De,{games:t,removeGame:l}))}),Ue=Object(u.b)(null,{SET_ACTIVE_PAGE:h})(function(e){var t=e.SET_ACTIVE_PAGE;return Object(n.useEffect)(function(){t(g)},[t]),r.a.createElement(T.a,null,r.a.createElement(O.a,{display:"flex",justifyContent:"center",mb:7},r.a.createElement("img",{src:"https://www.numerama.com/content/uploads/2019/03/steam-logo.jpg",alt:"Steam",style:{maxWidth:800}})),r.a.createElement(x.a,{container:!0,justify:"space-around"},r.a.createElement(x.a,{item:!0,xs:12,md:5,style:{marginBottom:55}},r.a.createElement(s.a,{variant:"h4",component:"h4",color:"textPrimary",gutterBottom:!0},"About This"," ",r.a.createElement(s.a,{variant:"h4",component:"span",color:"textSecondary"},"Site")),r.a.createElement(s.a,{variant:"h6",component:"h6",color:"textPrimary"},"This is a Web App built with React , Redux And Node.js. It replicates the famous Steam store because I found it as a good fit to try some advanced Redux functionality")),r.a.createElement(x.a,{item:!0,xs:12,md:5},r.a.createElement(s.a,{variant:"h4",component:"h4",color:"textPrimary",gutterBottom:!0},"About The"," ",r.a.createElement(s.a,{variant:"h4",component:"span",color:"textSecondary"},"Developer")),r.a.createElement(s.a,{variant:"h6",component:"h6",color:"textPrimary"},"I am A Full-Stack Web Developer Specialized At Front-End Technologies.",r.a.createElement("br",null),"You can check my portfolio here:","   ",r.a.createElement(_.a,{href:"https://mtgdev.herokuapp.com",target:"_blank",color:"textSecondary"},"Portfolio"),r.a.createElement("br",null),r.a.createElement("br",null),"And if you have a project in mind that you want to see as a reality or you just want to chat feel free to contact me at"," ",r.a.createElement(s.a,{variant:"h6",component:"span",color:"textSecondary"},"mtg0987654321@gmail.com")))))});var Je=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(S,null),r.a.createElement(O.a,{py:6}),r.a.createElement(ke.c,null,r.a.createElement(ke.a,{path:"/games/:id",component:Ne}),r.a.createElement(ke.a,{path:"/library",component:qe}),r.a.createElement(ke.a,{path:"/about",component:Ue}),r.a.createElement(ke.a,{path:"/",component:Fe})),r.a.createElement(O.a,{py:6}),r.a.createElement(j,null))},$e=a(119),Ke=a(80);$e.a.add(Ke.b,Ke.a);a(260);var Qe=a(120),Xe=a(44),Ze=a(125),et=a(121),tt=a(126),at=function(e){function t(){return Object(Qe.a)(this,t),Object(Ze.a)(this,Object(et.a)(t).apply(this,arguments))}return Object(tt.a)(t,e),Object(Xe.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(n.Component),nt=Object(ke.f)(at),rt=a(122),ot=a.n(rt);a(261);ot.a.init({offset:100,duration:700,easing:"ease-in-sine",delay:100});var it=a(303),ct=a(124),lt=Object(d.c)({serializableCheck:!1}),mt=Object(d.a)({middleware:[].concat(Object(ct.a)(lt),[C]),reducer:{games:Y,app:y}}),st=a(123),ut=Object(st.a)({typography:{fontFamily:["Titillium Web",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")},palette:{text:{primary:"#FFF",secondary:"#7cafcd"},primary:{main:"#303260"},secondary:{main:"#8bb6cb"}}}),dt=function(e){return r.a.createElement(c.a,null,r.a.createElement(it.a,{theme:ut},r.a.createElement(nt,null,r.a.createElement(u.a,{store:mt},e.children))))};i.a.render(r.a.createElement(dt,null,r.a.createElement(Je,null)),document.getElementById("root"))}},[[135,1,2]]]);
//# sourceMappingURL=main.b9e366e1.chunk.js.map