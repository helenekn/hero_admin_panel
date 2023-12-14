(this.webpackJsonphero_admin_panel=this.webpackJsonphero_admin_panel||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(4),s=n.n(r),l=n(3),o=n(2),i=n(11),d=n(8),b=n.n(d),j=n(9),u=n(0),h=function(e){var t,n=e.name,c=e.description,a=e.element,r=e.onDelete;switch(a){case"fire":t="bg-danger bg-gradient";break;case"water":t="bg-primary bg-gradient";break;case"wind":t="bg-success bg-gradient";break;case"earth":t="bg-secondary bg-gradient";break;default:t="bg-warning bg-gradient"}return Object(u.jsxs)("li",{className:"card flex-row mb-4 shadow-lg text-white ".concat(t),children:[Object(u.jsx)("img",{src:"http://www.stpaulsteinbach.org/wp-content/uploads/2014/09/unknown-hero.jpg",className:"img-fluid w-25 d-inline",alt:"unknown hero",style:{objectFit:"cover"}}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("h3",{className:"card-title",children:n}),Object(u.jsx)("p",{className:"card-text",children:c})]}),Object(u.jsx)("span",{className:"position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light",children:Object(u.jsx)("button",{onClick:r,type:"button",className:"btn-close btn-close","aria-label":"Close"})})]})},O=function(){return Object(u.jsx)("div",{className:"spinner-border mx-auto mt-5",role:"status",children:Object(u.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},m=function(){var e=Object(l.c)((function(e){return e})),t=e.heroes,n=e.heroesLoadingStatus,a=Object(l.b)(),r={request:Object(c.useCallback)(function(){var e=Object(j.a)(b.a.mark((function e(t){var n,c,a,r,s,l=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]?l[1]:"GET",c=l.length>2&&void 0!==l[2]?l[2]:null,a=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},e.prev=3,e.next=6,fetch(t,{method:n,body:c,headers:a});case 6:if((r=e.sent).ok){e.next=9;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(r.status));case 9:return e.next=11,r.json();case 11:return s=e.sent,e.abrupt("return",s);case 15:throw e.prev=15,e.t0=e.catch(3),e.t0;case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}(),[])}.request;Object(c.useEffect)((function(){a({type:"HEROES_FETCHING"}),r("http://localhost:3001/heroes").then((function(e){return a(function(e){return{type:"HEROES_FETCHED",payload:e}}(e))})).catch((function(){return a({type:"HEROES_FETCHING_ERROR"})}))}),[]);var s=Object(c.useCallback)((function(e){r("http://localhost:3001/heroes/".concat(e),"DELETE").then((function(e){return console.log(e,"Deleted")})).then(a(function(e){return{type:"HERO_DELETED",payload:e}}(e))).catch((function(e){return console.log(e)}))}),[r]);if("loading"===n)return Object(u.jsx)(O,{});if("error"===n)return Object(u.jsx)("h5",{className:"text-center mt-5",children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"});var d,m=0===(d=t).length?Object(u.jsx)("h5",{className:"text-center mt-5",children:"\u0413\u0435\u0440\u043e\u0435\u0432 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442"}):d.map((function(e){var t=e.id,n=Object(i.a)(e,["id"]);return Object(u.jsx)(h,Object(o.a)({onDelete:function(){return s(t)}},n),t)}));return Object(u.jsx)("ul",{children:m})},x=function(){return Object(u.jsxs)("form",{className:"border p-4 shadow-lg rounded",children:[Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"name",className:"form-label fs-4",children:"\u0418\u043c\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u0433\u0435\u0440\u043e\u044f"}),Object(u.jsx)("input",{required:!0,type:"text",name:"name",className:"form-control",id:"name",placeholder:"\u041a\u0430\u043a \u043c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442?"})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"text",className:"form-label fs-4",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(u.jsx)("textarea",{required:!0,name:"text",className:"form-control",id:"text",placeholder:"\u0427\u0442\u043e \u044f \u0443\u043c\u0435\u044e?",style:{height:"130px"}})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"element",className:"form-label",children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0433\u0435\u0440\u043e\u044f"}),Object(u.jsxs)("select",{required:!0,className:"form-select",id:"element",name:"element",children:[Object(u.jsx)("option",{children:"\u042f \u0432\u043b\u0430\u0434\u0435\u044e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u043c..."}),Object(u.jsx)("option",{value:"fire",children:"\u041e\u0433\u043e\u043d\u044c"}),Object(u.jsx)("option",{value:"water",children:"\u0412\u043e\u0434\u0430"}),Object(u.jsx)("option",{value:"wind",children:"\u0412\u0435\u0442\u0435\u0440"}),Object(u.jsx)("option",{value:"earth",children:"\u0417\u0435\u043c\u043b\u044f"})]})]}),Object(u.jsx)("button",{type:"submit",className:"btn btn-primary",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})},p=function(){return Object(u.jsx)("div",{className:"card shadow-lg mt-4",children:Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("p",{className:"card-text",children:"\u041e\u0442\u0444\u0438\u043b\u044c\u0442\u0440\u0443\u0439\u0442\u0435 \u0433\u0435\u0440\u043e\u0435\u0432 \u043f\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c"}),Object(u.jsxs)("div",{className:"btn-group",children:[Object(u.jsx)("button",{className:"btn btn-outline-dark active",children:"\u0412\u0441\u0435"}),Object(u.jsx)("button",{className:"btn btn-danger",children:"\u041e\u0433\u043e\u043d\u044c"}),Object(u.jsx)("button",{className:"btn btn-primary",children:"\u0412\u043e\u0434\u0430"}),Object(u.jsx)("button",{className:"btn btn-success",children:"\u0412\u0435\u0442\u0435\u0440"}),Object(u.jsx)("button",{className:"btn btn-secondary",children:"\u0417\u0435\u043c\u043b\u044f"})]})]})})},f=(n(22),function(){return Object(u.jsx)("main",{className:"app",children:Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)(m,{}),Object(u.jsxs)("div",{className:"content__interactive",children:[Object(u.jsx)(x,{}),Object(u.jsx)(p,{})]})]})})}),g=n(10),E={heroes:[],heroesLoadingStatus:"idle",filters:[]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HEROES_FETCHING":return Object(o.a)(Object(o.a)({},e),{},{heroesLoadingStatus:"loading"});case"HEROES_FETCHED":return Object(o.a)(Object(o.a)({},e),{},{heroes:t.payload,heroesLoadingStatus:"idle"});case"HEROES_FETCHING_ERROR":return Object(o.a)(Object(o.a)({},e),{},{heroesLoadingStatus:"error"});case"HERO_DELETED":return Object(o.a)(Object(o.a)({},e),{},{heroes:e.heroes.filter((function(e){return e.id!==t.payload}))});default:return e}},v=Object(g.a)(N,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());n(23);s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(l.a,{store:v,children:Object(u.jsx)(f,{})})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.a494a67f.chunk.js.map