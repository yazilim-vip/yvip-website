/*! For license information please see main.9e61a200.chunk.js.LICENSE.txt */
(this["webpackJsonpyvip-website"]=this["webpackJsonpyvip-website"]||[]).push([[0],{102:function(e,t,a){e.exports=a(215)},111:function(e,t,a){},112:function(e,t,a){},203:function(e,t,a){},204:function(e,t,a){},206:function(e,t,a){},212:function(e,t,a){},215:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"HowToArchive",(function(){return k})),a.d(n,"createSearchIndex",(function(){return N})),a.d(n,"parsePathAndSetContent",(function(){return C})),a.d(n,"searchArchive",(function(){return H})),a.d(n,"json2CategoryMapper",(function(){return j})),a.d(n,"Category",(function(){return V})),a.d(n,"HowTo",(function(){return x})),a.d(n,"FileManager",(function(){return D})),a.d(n,"HowToPanel",(function(){return Y})),a.d(n,"PathBreadcrumb",(function(){return B})),a.d(n,"ViewModeChanger",(function(){return X})),a.d(n,"HOWTO_VIEW_MODE_LIST_VIEW",(function(){return K})),a.d(n,"HOWTO_VIEW_MODE_GRID_VIEW",(function(){return Q})),a.d(n,"HOWTO_DEFAULT_VIEW_MODE",(function(){return Z})),a.d(n,"HOWTO_ITEM_TYPE",(function(){return $}));var r=a(0),o=a.n(r),l=a(15),i=a.n(l),c=a(39),m=a(6),s=a(222),u=a(221),d=a(230),E=a(30),p=a(97),h=a(9),f=a(98),v=a(8),g=(a(111),a(31)),b=a(10),w=a(220),y=a(233),O=a(223),_=a(88),T=a(231),k=(a(112),function(e){var t,a=e.rootCategory,l=e.requestedPath,i=e.viewMode,c=e.viewModeToggleEventHandler,m=Object(r.useState)(null),d=Object(g.a)(m,2),E=d[0],p=d[1],f=n.createSearchIndex(a),k=i||n.HOWTO_DEFAULT_VIEW_MODE,N=n.parsePathAndSetContent(a,l);if(!N.categoryFoundFlag){var I=N.folderPath.replace("/howto/","");return t=o.a.createElement(o.a.Fragment,null,"Category ",o.a.createElement("b",null,I+" "),"not found in path.",o.a.createElement("br",null),o.a.createElement(b.a,{to:"/howto"},"Go to root directory")),o.a.createElement(w.a,null,o.a.createElement(y.a,{key:1,variant:"danger"},t))}var W=N.parsedContent.selectedCategory;return o.a.createElement("div",null,o.a.createElement(u.a,null,o.a.createElement(s.a,{md:"7"},o.a.createElement(n.PathBreadcrumb,{items:N.categoryNames}),null!==E&&o.a.createElement("div",{className:"search-result-div"},o.a.createElement("span",{className:"mr-3"},"Search Result for :"),o.a.createElement(O.a,{pill:!0,variant:"dark"},E.query))),o.a.createElement(s.a,{md:"2",sm:"3",className:"mb-2 mb-sm-0"},o.a.createElement("div",{className:"d-flex bd-highlight mb-3"},o.a.createElement("div",{className:"ml-auto mr-4"},o.a.createElement(me,{placement:"bottom",tooltipElement:o.a.createElement(o.a.Fragment,null,"List favorited contents ",o.a.createElement("br",null)," (not supported yet)")},o.a.createElement("span",{className:"d-inline-block"},o.a.createElement(_.a,{variant:"secondary",disabled:!0,style:{pointerEvents:"none"}},o.a.createElement(v.a,{icon:h.g}))))),o.a.createElement(n.ViewModeChanger,{viewMode:k,viewModeToggleEventHandler:c}))),o.a.createElement(s.a,{md:"3",sm:"9"},o.a.createElement(T.a,{type:"search",placeholder:"Search...","aria-label":"Search",value:null===E?"":E.query,onChange:function(e){var t=e.target.value;if(t){var a=n.searchArchive(f,t);p(a)}else p(null)}}))),o.a.createElement("hr",null),null===E&&N.howToNotFoundFlag&&o.a.createElement(y.a,{key:1,variant:"danger"},o.a.createElement("b",null,"Whopps ",N.selectedHowtoName)," not found in"," ",o.a.createElement("b",null,W.name)," folder.",o.a.createElement("br",null),o.a.createElement(b.a,{to:N.folderPath},"Go to ",W.name," category")),o.a.createElement(n.FileManager,{viewMode:k,categoryList:null!==E?E.categoryHits:function(){var e=W.subCategoryList;return Object.keys(e).map((function(t){var a=e[t];return{name:a.name,path:"".concat(N.folderPath,"/").concat(a.name),type:n.HOWTO_ITEM_TYPE.CATEGORY}}))}(),howToList:null!==E?E.howtoHits:function(){var e=W.howtoList;return Object.keys(e).map((function(t){var a=e[t];return{name:a.label,path:"".concat(N.folderPath,"/").concat(a.label),type:n.HOWTO_ITEM_TYPE.HOWTO}}))}()}),N.howToFoundFlag&&o.a.createElement(n.HowToPanel,{howTo:N.parsedContent.selectedHowto}))}),N=function(e){return I(e,[],"/howto")},I=function e(t,a,r){var o=t.howtoList,l=t.subCategoryList;return Object.keys(o).forEach((function(e){var t=o[e].label,l={path:r+"/"+t,type:n.HOWTO_ITEM_TYPE.HOWTO,name:t.toLowerCase()};a.push(l)})),Object.keys(l).forEach((function(t){var o=l[t],i=o.name,c=r+"/"+i,m={path:c,type:n.HOWTO_ITEM_TYPE.CATEGORY,name:i.toLowerCase()};a.push(m),e(o,a,c)})),a},W=a(89),C=function(e,t){var a="/howto"===t,n=t.slice(1).split("/"),r=t.endsWith(".howto")||t.endsWith(".md"),o=r?n.pop():null,l=n[n.length-1],i="/"+n.join("/"),c=M(e,n,o);return{folderPath:i,categoryNames:n,selectedCategoryName:l,selectedHowtoName:o,howtoSelectedFlag:r,rootCategorySelectedFlag:a,parsedContent:c,categoryFoundFlag:c.selectedCategory&&!0,howToFoundFlag:r&&c.selectedHowto&&!0,howToNotFoundFlag:r&&!c.selectedHowto&&!0}},M=function(e,t,a){var n=e;t.shift();var r,o=Object(W.a)(t);try{for(o.s();!(r=o.n()).done;){var l=r.value;if(!n.subCategoryList[l]){n=null;break}n=n.subCategoryList[l]}}catch(m){o.e(m)}finally{o.f()}var i=n,c=null;return a&&i&&i.howtoList.hasOwnProperty(a)&&(c=i.howtoList[a]),{selectedCategory:i,selectedHowto:c,categoryHits:null,howtoHits:null}},H=function(e,t){if(!t)return{query:"",categoryHits:null,howtoHits:null};var a=e.filter((function(e){return e.name.includes(t.toLowerCase())}));if(!a)return{query:t,categoryHits:null,howtoHits:null};var r=[],o=[];return a.forEach((function(e){e.type===n.HOWTO_ITEM_TYPE.CATEGORY?r.push(e):e.type===n.HOWTO_ITEM_TYPE.HOWTO&&o.push(e)})),{query:t,categoryHits:r,howtoHits:o}},j=function e(t){var a=JSON.parse(JSON.stringify(t)),r=new n.Category;r.name=a.name;var o=a.subCategoryList,l=a.howtoList;return Object.keys(o).forEach((function(t){r.addSubCategory(e(o[t]))})),Object.keys(l).forEach((function(e){var t=new n.HowTo;t.categoryList=l[e].categoryList,t.label=l[e].label,t.filePath=l[e].filePath,t.markdownContent=l[e].markdownContent,r.addHowTo(t)})),r},L=a(50),S=a(90),V=function(){function e(){Object(L.a)(this,e),this.name="",this.subCategoryList={},this.howtoList={}}return Object(S.a)(e,[{key:"addSubCategory",value:function(e){this.subCategoryList[e.name]=e}},{key:"addHowTo",value:function(e){this.howtoList[e.label]=e}}]),e}(),x=function e(){Object(L.a)(this,e),this.categoryList=[],this.label="",this.filePath="",this.markdownContent=""},P=a(234),D=function(e){var t=e.viewMode,a=e.categoryList,r=e.howToList,l=function(e){return e?Object.keys(e).map((function(a){var r=e[a],l=r.type,i=l===n.HOWTO_ITEM_TYPE.CATEGORY?h.e:h.d,c=l===n.HOWTO_ITEM_TYPE.CATEGORY?"#50a4d4":"#494d52",m=r.name,u=r.path;return t===n.HOWTO_VIEW_MODE_LIST_VIEW?o.a.createElement(b.a,{to:u,className:"link",key:u},o.a.createElement(P.a.Item,null,o.a.createElement(v.a,{icon:i,className:"mr-3",color:c}),m)):t===n.HOWTO_VIEW_MODE_GRID_VIEW?o.a.createElement(s.a,{xs:4,sm:3,md:3,lg:2,className:"py-4 text-center",key:u},o.a.createElement(me,{placement:"bottom-end",tooltipElement:u},o.a.createElement(b.a,{to:u,className:"link"},o.a.createElement(v.a,{icon:i,className:"pb-1",size:"4x",color:c}),o.a.createElement("br",null),m))):null})):null},i=l(a),c=l(r);return o.a.createElement(w.a,{fluid:!0},t===n.HOWTO_VIEW_MODE_LIST_VIEW&&o.a.createElement(P.a,null,i,c),t===n.HOWTO_VIEW_MODE_GRID_VIEW&&o.a.createElement(u.a,null,i,c))},F=a(101),A=a(91),z=a.n(A),R=a(92),G=a.n(R),Y=function(e){var t=e.howTo,a=0===t.categoryList.length?"/howto":"/howto/".concat(t.categoryList.join("/")),r=o.a.createElement("div",null,o.a.createElement(n.PathBreadcrumb,{items:[].concat(Object(F.a)(t.categoryList),[t.label])}));return o.a.createElement(z.a,{className:"howto-sliding-pane",overlayClassName:"howto-sliding-pane-overlay",isOpen:!0,children:o.a.createElement(G.a,{source:t.markdownContent}),title:r,width:"100",from:"bottom",closeIcon:o.a.createElement(b.a,{to:a,className:"link"},o.a.createElement(v.a,{icon:h.a,size:"2x"})),onRequestClose:function(){}})},q=a(235),B=function(e){var t=e.items,a=function(e){return"/howto/"+t.slice(0,e).join("/")},n=t.map((function(e,n){return o.a.createElement(q.a.Item,{key:e,active:n+1===t.length,linkAs:b.a,linkProps:{to:a(n+1),className:"link"}},e)}));return o.a.createElement(q.a,null,o.a.createElement(q.a.Item,{key:"root",linkAs:b.a,linkProps:{to:"/howto",className:"link"}},o.a.createElement("span",null,o.a.createElement(v.a,{icon:h.f}))),n)},U=a(224),J=a(225),X=function(e){var t=e.viewMode,a=e.viewModeToggleEventHandler;return o.a.createElement(U.a,{toggle:!0,className:"float-right"},o.a.createElement(me,{placement:"bottom",tooltipElement:"Grid View Mode"},o.a.createElement(J.a,{type:"radio",variant:"secondary",name:"radio",value:t===n.HOWTO_VIEW_MODE_GRID_VIEW,checked:t===n.HOWTO_VIEW_MODE_GRID_VIEW,onChange:function(){return a()}},o.a.createElement(v.a,{icon:h.h}))),o.a.createElement(me,{placement:"bottom",tooltipElement:"List View Mode"},o.a.createElement(J.a,{type:"radio",variant:"secondary",name:"radio",value:t===n.HOWTO_VIEW_MODE_LIST_VIEW,checked:t===n.HOWTO_VIEW_MODE_LIST_VIEW,onChange:function(){return a()}},o.a.createElement(v.a,{icon:h.i}))))},K="list-view",Q="grid-view",Z=Q,$={HOWTO:"howto_hit",CATEGORY:"category_hit"},ee=a(232),te=(a(203),function(){return o.a.createElement(d.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",className:"text-center"},o.a.createElement("div",{className:"animate__animated animate__flipInX"},o.a.createElement(d.a.Brand,{className:"my-2"},o.a.createElement("a",{href:"/"},o.a.createElement("img",{alt:"",src:"/logo.svg",width:"220"})))),o.a.createElement(d.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),o.a.createElement(d.a.Collapse,{id:"responsive-navbar-nav"},o.a.createElement(ee.a,{className:"mx-auto page-nav"},o.a.createElement(b.b,{exact:!0,activeClassName:"active",className:"text-light nav-link",to:"/"},"Home"),o.a.createElement(b.b,{activeClassName:"active",className:"text-light nav-link",to:"/portfolio"},"Portfolio"),o.a.createElement(b.b,{activeClassName:"active",className:"text-light nav-link",to:"/howto"},"HowTo"),o.a.createElement(b.b,{activeClassName:"active",className:"text-light nav-link",to:"/about"},"About")),o.a.createElement(ee.a,null,o.a.createElement("span",{className:"text-light nav-link"},o.a.createElement(oe,{iconCode:"gitlab",className:"animate__animated animate__zoomInLeft",link:"https://gitlab.com/yazilim.vip"}),o.a.createElement(oe,{iconCode:"github",className:"animate__animated animate__zoomInLeft",link:"https://github.com/yazilim-vip"}),o.a.createElement(oe,{iconCode:"bitbucket",className:"animate__animated animate__zoomInLeft",link:"https://bitbucket.org/yazilimvip/"}),o.a.createElement(oe,{iconCode:"docker",className:"animate__animated animate__zoomInLeft",link:"https://hub.docker.com/orgs/yazilimvip/repositories"}),o.a.createElement(oe,{iconCode:"linkedin",className:"animate__animated animate__zoomInLeft",link:"https://www.linkedin.com/company/yazilimvip"}),o.a.createElement(oe,{iconCode:"medium",className:"animate__animated animate__zoomInLeft",link:"https://medium.com/yazilim-vip"}),o.a.createElement(oe,{iconCode:"discord",className:"animate__animated animate__zoomInLeft",link:""})))))}),ae=a(236),ne=function(e){var t=e.name,a=e.title,n=e.description,r=e.imageSource,l=e.links,i=e.cvSource;return o.a.createElement(ae.a,{className:"portfolio-card shadow"},r&&o.a.createElement(ae.a.Img,{className:"mx-auto mt-2 border border-secondary",style:{width:"70%"},variant:"top",src:"".concat(r)}),o.a.createElement(ae.a.Body,null,o.a.createElement("div",{className:"text-center mb-3"},o.a.createElement(ae.a.Title,null,t),o.a.createElement(ae.a.Subtitle,{className:"text-muted"},a)),o.a.createElement("div",{id:"example-collapse-text"},o.a.createElement(ae.a.Text,{className:"border-top pt-3"},n)),i&&o.a.createElement("div",{className:"text-center"},o.a.createElement("hr",null),o.a.createElement(_.a,{className:"d-block",variant:"outline-primary",href:i,target:"_blank"},o.a.createElement(v.a,{icon:h.c,className:"mr-3"}),"Curriculum Vitae"))),l&&o.a.createElement(ae.a.Footer,{className:"text-center"},Object.entries(l).map((function(e){var t=e[0],a=e[1];return o.a.createElement("span",{className:"text-muted portfolio-link"},o.a.createElement(oe,{iconCode:t,link:a,className:"null"}))}))))},re=function(e){var t=e.name,a=e.description,n=e.imageSource,r=e.links;return o.a.createElement(ae.a,{className:"mb-4 portfolio-card shadow"},n&&o.a.createElement(ae.a.Img,{variant:"top",src:"".concat(n)}),o.a.createElement(ae.a.Body,null,o.a.createElement(ae.a.Title,null,t),o.a.createElement(ae.a.Subtitle,{className:"mb-4 text-muted"},t),o.a.createElement(ae.a.Text,null,a)),r&&o.a.createElement(ae.a.Footer,{className:"text-center"},Object.entries(r).map((function(e){var t=e[0],a=e[1];return o.a.createElement("span",{className:"text-muted portfolio-link"},o.a.createElement(oe,{iconCode:t,link:a,className:"null"}))}))))},oe=(a(204),function(e){var t=e.iconCode,a=e.className,n=e.link,r="d-inline-block yvip-icon ".concat(t," ").concat(a);return o.a.createElement("div",{className:r},o.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},o.a.createElement(v.a,{icon:["fab",t],className:"mr-3"})))}),le=function(e){return o.a.createElement(s.a,{md:e.span,style:{height:"100%"}},o.a.createElement(u.a,null,o.a.createElement(s.a,{md:"12"},e.children)))};le.defaultProps={span:{span:8,offset:2}};var ie=a(229),ce=a(226),me=function(e){var t=e.placement,a=e.tooltipElement,n=e.children;return o.a.createElement(ie.a,{placement:t,overlay:o.a.createElement(ce.a,{id:"tooltip-disabled"},a)},n)},se=(a(206),function(e){return o.a.createElement(le,null,o.a.createElement(ae.a,{className:"mb-4 portfolio-card shadow yvip-card"},o.a.createElement("div",{className:"yvip-card-img img-responsive img-fluid"}),o.a.createElement(ae.a.Body,null,o.a.createElement(ae.a.Title,null,o.a.createElement("h1",{className:"text-center display-4 pb-2"},"Do the right, not the easy.")),o.a.createElement(ae.a.Text,null,"To keep this platform open to everyone who is competent and willing to share what we call an open source world. A platform aimed at presenting our competencies to the open source world without waiting for a response."))))}),ue=a(227),de=[{name:"Mehmet Arif Emre Sen",description:o.a.createElement(o.a.Fragment,null,o.a.createElement("a",{className:"d-block text-center",href:"https://maemresen.github.io",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("b",null,"Personal Website")),o.a.createElement("hr",null),o.a.createElement("a",{className:"d-block text-center",href:"https://maemresen.github.io/curriculum-vitae/cv_mehmet_arif_emre_sen.pdf",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("b",null,"CV Link"))),imageSource:"/img/emre_portrait_cropped.jpeg",cvSource:void 0,title:"Major Contributor",links:{gitlab:"https://gitlab.com/emresen",github:"https://github.com/maemresen",medium:"https://medium.com/@maemresen",linkedin:"https://www.linkedin.com/in/maemresen"}},{name:"Burak Erkan",description:o.a.createElement("div",null,o.a.createElement("span",null,"yazilim.vip patriot"),o.a.createElement("ul",null,o.a.createElement("li",null,"2008 - now (software developer & team lead & manager)"),o.a.createElement("li",null,"2000 - now (still a software amateur)"))),imageSource:"/img/burak.jpeg",cvSource:void 0,title:"Major Contributor",links:void 0},{name:"Mustafa Arif Sisman",title:"Major Contributor",description:o.a.createElement(o.a.Fragment,null,o.a.createElement("ul",null,o.a.createElement("li",null,"I aim to achieve the most automated and optimized result possible, following the principles of agile software development and analytical thinking."),o.a.createElement("li",null,"I work in the field of artificial intelligence and web technologies, I am an active learner."))),imageSource:"/img/arif.jpeg",cvSource:"https://arifsisman.github.io",links:{gitlab:"https://gitlab.com/arifsisman",github:"https://github.com/arifsisman",medium:"https://medium.com/@arifsisman",linkedin:"https://www.linkedin.com/in/mustafaarifsisman"}}],Ee=[{name:"Play2Gether",description:"The Play2Gether app is a music listening platform to listen to Spotify with your friends or other people. Listen to the same song at the same time with other people, queue and vote the songs, chat together, discover and share new music!",imageSource:"/img/project-p2g.jpeg",links:void 0},{name:"TimeCountdown",description:"A visual studio code extension and this extension takes care of the time countdown tasks. It is very easy to use, just type the time to count down in an allowed format, and the application will count down the given time by 1 sec in an interval.",imageSource:void 0,links:{bitbucket:"https://bitbucket.org/yazilimvip/time-countdown/src/master/",microsoft:"https://marketplace.visualstudio.com/items?itemName=yazilim-vip.time-countdown&ssr=false#overview"}},{name:"maescript",description:"Contains useful functions with autocomplete feauteres and comes with useful set of shell scripts",imageSource:void 0,links:{gitlab:"https://gitlab.com/yazilim.vip/projects/maescript/maescript"}},{name:"SpringVIP",description:"A Java Spring Library that provides helpful generic and utility classes. Some of features provided by library are generic CRUD Service and Rest controllers. See more from documentation",imageSource:void 0,links:{gitlab:"https://gitlab.com/yazilim.vip/projects/spring-vip/spring-vip"}}],pe=function(){return o.a.createElement(le,null,o.a.createElement(ue.a,null,Ee.map((function(e){return o.a.createElement(re,e)}))))},he=a(32),fe=a(228),ve=a(29),ge=a(94),be=a.n(ge),we=(a(208),be.a.initializeApp({databaseURL:"https://yvip-howto.firebaseio.com",projectId:"yvip-howto"})),ye="TOGGLE_FM_VIEW_MODE",Oe={toggleFmViewMode:function(){return{type:ye}}},_e=a(13),Te=a(18),ke=a(86),Ne=a(95),Ie=a(70),We=a(96),Ce={key:"root",storage:a.n(We).a,whitelist:["fileManagerViewMode"]},Me=Object(_e.a)(),He=function(e){return Object(Te.combineReducers)({router:Object(c.b)(e),howtoReducer:Object(Ie.a)(Ce,Le)})};var je=a(11),Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case je.b:return Object(he.a)(Object(he.a)({},e),{},{requestedPath:t.payload.location.pathname});case ye:var a,r=e.fileManagerViewMode||n.HOWTO_DEFAULT_VIEW_MODE;return a=r===n.HOWTO_VIEW_MODE_GRID_VIEW?n.HOWTO_VIEW_MODE_LIST_VIEW:r===n.HOWTO_VIEW_MODE_LIST_VIEW?n.HOWTO_VIEW_MODE_GRID_VIEW:n.HOWTO_DEFAULT_VIEW_MODE,Object(he.a)(Object(he.a)({},e),{},{fileManagerViewMode:a});default:return e}},Se=Object(he.a)({},Oe),Ve=Object(ve.c)((function(e){var t=e.howtoReducer;return{fileManagerViewMode:t.fileManagerViewMode,requestedPath:t.requestedPath}}),Se)((function(e){var t=e.requestedPath,a=e.fileManagerViewMode,l=e.toggleFmViewMode,i=Object(r.useState)(null),c=Object(g.a)(i,2),m=c[0],s=c[1],u=Object(r.useState)(!1),d=Object(g.a)(u,2),E=d[0],p=d[1],h=Object(r.useState)(null),f=Object(g.a)(h,2),v=f[0],b=f[1],w=Object(r.useState)(!1),O=Object(g.a)(w,2),_=O[0],T=O[1];Object(r.useEffect)((function(){_||k()}));var k=function(){we.database().ref("howto").on("value",(function(e){if(e.exists()){var t=e.val(),a=JSON.parse(t);s(j(a)),T(!0),p(!1)}else T(!0),p(!0),b("Snapshot can not found on firebase.")}),(function(e){T(!0),p(!0),b("".concat(e))}))},N=function(e){return o.a.createElement(le,null,o.a.createElement("div",{className:"row h-100 text-center"},o.a.createElement("div",{className:"col-sm-12 my-auto"},e)))};return _?!m||E?N(o.a.createElement(y.a,{key:1,variant:"danger"},v)):o.a.createElement(le,{span:{span:12}},o.a.createElement(n.HowToArchive,{key:"".concat(t,"-").concat(new Date),rootCategory:m,requestedPath:t,viewMode:a,viewModeToggleEventHandler:function(){l()}})):N(o.a.createElement(fe.a,{animation:"border"}))})),xe=function(e){return o.a.createElement(s.a,{key:e.name,lg:{span:4},md:{span:12}},o.a.createElement(ne,e))},Pe=function(){return o.a.createElement(le,null,o.a.createElement(u.a,null,de.map(xe)))},De=(a(212),function(){return o.a.createElement(le,null,o.a.createElement("div",{className:"row h-100 text-center"},o.a.createElement("div",{className:"col-sm-12 my-auto"},o.a.createElement("div",{className:"glitch","data-text":"NOT FOUND"},"NOT FOUND"))))});E.b.add(p.a),E.b.add(h.j),E.b.add(f.a);var Fe=function(){return o.a.createElement(c.a,{history:Me},o.a.createElement("header",null,o.a.createElement(te,null)),o.a.createElement("main",{className:"py-4"},o.a.createElement(s.a,{md:"12"},o.a.createElement(u.a,null,o.a.createElement(m.d,null,o.a.createElement(m.a,{from:"/:url*(/+)",to:Me.location.pathname.slice(0,-1)}),o.a.createElement(m.b,{exact:!0,path:"/",component:se}),o.a.createElement(m.b,{path:"/portfolio",component:pe}),o.a.createElement(m.b,{path:"/howto",component:Ve}),o.a.createElement(m.b,{path:"/about",component:Pe}),o.a.createElement(m.b,{path:"/404",component:De}),o.a.createElement(m.a,{to:"/404"}))))),o.a.createElement("footer",{className:"text-white-50"},o.a.createElement(d.a,{bg:"dark"},o.a.createElement(s.a,{md:{span:8,offset:2}},o.a.createElement(u.a,null,o.a.createElement(s.a,{md:"12"},o.a.createElement("span",null,o.a.createElement(v.a,{icon:h.b,className:"ml-3"})),o.a.createElement("span",null," : info@yazilim.vip")),o.a.createElement(s.a,{md:"12"},"\xa9 yazilim.vip All Rights Reserved"))))))},Ae=a(99),ze=a.n(Ae),Re=(a(213),a(214),a(100)),Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,t=[Object(ke.a)(Me)],a=Te.applyMiddleware.apply(void 0,t),n=[a],r=Ne.composeWithDevTools.apply(void 0,n),o=He(Me),l=Object(Te.createStore)(o,e,r),i=Object(Ie.b)(l);return{store:l,persistor:i}}(),Ye=Ge.store,qe=Ge.persistor;i.a.render(o.a.createElement(ve.a,{store:Ye},o.a.createElement(Re.a,{loading:null,persistor:qe},o.a.createElement(Fe,null))),document.getElementById("root")),ze.a.load({google:{families:["Lato","Ubuntu"]}})}},[[102,1,2]]]);
//# sourceMappingURL=main.9e61a200.chunk.js.map