(this["webpackJsonpbooks-shelf"]=this["webpackJsonpbooks-shelf"]||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/error-404.cf72433f.png"},30:function(e,t,a){e.exports=a(41)},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),c=a.n(l),o=a(6),i=a(11),m=a(13),s=a(8),u=a(2),d="BOOKS_ADDED",b="BOOKS_EDIT",p="BOOKS_REMOVE",f="ALERT_VISIBLE",E="ALERT_HIDE",v="ALL_ALERT_HIDE",g="SEARCH_BOOKS",h=[{id:1,title:"Production-Ready Microservices",author:"Susan J. Fowler",year:2018,coverImage:"https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg"},{id:2,title:"Release It!",author:"Michael T. Nygard",year:2017,coverImage:"https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg"},{id:3,title:"React \u0438 Redux. \u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430",author:"\u0411\u044d\u043d\u043a\u0441 \u0410\u043b\u0435\u043a\u0441, \u041f\u043e\u0440\u0441\u0435\u043b\u043b\u043e \u0415\u0432\u0430",year:2018,coverImage:"https://cdn1.ozone.ru/multimedia/c650/1021367273.jpg"}],O=function(e){return localStorage.setItem("books",JSON.stringify(e))},j=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"@@INIT":var n=localStorage.getItem("books");return null===n?(localStorage.clear(),O(t),t):JSON.parse(n);case d:var r=a.payload;r=void 0===(null===(e=t[0])||void 0===e?void 0:e.id)?Object(u.a)(Object(u.a)({},r),{},{id:1}):Object(u.a)(Object(u.a)({},r),{},{id:t[t.length-1].id+1});var l=[].concat(Object(s.a)(t),[r]);return O(l),l;case b:var c=a.payload,o=t.findIndex((function(e){return e.id===c.id})),i=[].concat(Object(s.a)(t.slice(0,o)),[c],Object(s.a)(t.slice(o+1)));return O(i),i;case p:var m=a.payload,f=t.findIndex((function(e){return e.id===m})),E=[].concat(Object(s.a)(t.slice(0,f)),Object(s.a)(t.slice(f+1)));return O(E),E;default:return t}},N={title:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435",visible:!1},_=[Object(u.a)(Object(u.a)({},N),{},{field:"name",text:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043c\u0435\u043d\u044c\u0448\u0435 3 \u0431\u0443\u043a\u0432"}),Object(u.a)(Object(u.a)({},N),{},{field:"author",text:"\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u044b \u0430\u0432\u0442\u043e\u0440\u0430 \u043d\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043c\u0435\u043d\u044c\u0448\u0435 3 \u0431\u0443\u043a\u0432"}),Object(u.a)(Object(u.a)({},N),{},{field:"year",text:"\u0418\u0437\u0434\u0430\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043d\u0435 \u0440\u0430\u043d\u044c\u0448\u0435 2017 \u0433\u043e\u0434\u0430"}),Object(u.a)(Object(u.a)({},N),{},{field:"images",text:"\u0422\u0438\u043f \u043f\u043e\u043b\u044f \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u043e\u0439 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"})],k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:var a=t.payload,n=e.findIndex((function(e){return e.field===a})),r=Object(u.a)(Object(u.a)({},e[n]),{},{visible:!0});return[].concat(Object(s.a)(e.slice(0,n)),[r],Object(s.a)(e.slice(n+1)));case E:var l=t.payload,c=e.findIndex((function(e){return e.field===l})),o=Object(u.a)(Object(u.a)({},e[c]),{},{visible:!1});return[].concat(Object(s.a)(e.slice(0,c)),[o],Object(s.a)(e.slice(c+1)));case v:return Object(s.a)(e.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{visible:!1})})));default:return e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return t.payload;default:return e}},x=Object(m.b)({books:j,alert:k,term:y}),I=function(){return Object(m.c)(x,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())},S=a(3),w=a(42),C=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header-title"},"\u041a\u043d\u0438\u0436\u043d\u0430\u044f \u043f\u043e\u043b\u043a\u0430"))},L=function(){return r.a.createElement(i.b,{className:"btn-add-book",to:"/books-shelf/form/"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043d\u0438\u0433\u0443")},R=function(e){return{type:f,payload:e}},D=function(){var e=Object(o.c)((function(e){return e.term})),t=Object(o.b)();return r.a.createElement("div",{className:"search"},r.a.createElement("input",{className:"search-input",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438",value:e,onChange:function(e){return t(function(e){return{type:g,payload:e}}(e.target.value))}}))},T=a(43),B=function(e){var t=e.id,a=e.title,n=e.author,l=e.year,c=e.coverImage,i=e.history,m=Object(o.b)();return r.a.createElement("tr",{className:"list-item__row"},r.a.createElement("td",{className:"list-item__col"},r.a.createElement("div",{className:"item-img"},r.a.createElement("img",{src:c,alt:"book-img"})),r.a.createElement("div",{className:"item-desc"},r.a.createElement("div",{className:"item-desc-name"},r.a.createElement("a",{href:"https://www.google.com/search?q=".concat(a.split(" ").join("+"),"&oq=").concat(a.split(" ").join("+")),target:"_blank",rel:"noopener noreferrer"},a)),r.a.createElement("div",{className:"item-desc-author"},n),r.a.createElement("div",{className:"item-desc-year"},l," \u0433.")),r.a.createElement("div",{className:"item-panel"},r.a.createElement("button",{className:"item-panel-edit panel-btn",onClick:function(){return i.push("/books-shelf/form/".concat(t))}},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),r.a.createElement("button",{className:"item-panel-delete panel-btn",onClick:function(){return m(function(e){return{type:p,payload:e}}(t))}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))))};B.defaultProps={id:1,title:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432 \u043a\u043d\u0438\u0433\u0438",author:"\u0410\u0432\u0442\u043e\u0440 \u043a\u043d\u0438\u0433\u0438",year:"\u0413\u043e\u0434 \u0432\u044b\u043f\u0443\u0441\u043a\u0430 \u043a\u043d\u0438\u0433\u0438",coverImage:"https://cdn1.ozone.ru/multimedia/1031049553.jpg"};var z=Object(S.e)(B),F=function(){var e=Object(o.c)((function(e){return e.books})),t=Object(o.c)((function(e){return e.term})),a=e.filter((function(e){return-1!==e.title.toLowerCase().indexOf(t.toLowerCase())})).map((function(e){return r.a.createElement(w.a,{key:e.id,timeout:750,classNames:"list-item-animation"},r.a.createElement(z,e))}));return r.a.createElement("table",{className:"table-books"},r.a.createElement("tbody",{className:"table-books__body"},0===a.length?r.a.createElement("tr",{className:"list-empty__row"},r.a.createElement("td",{className:"list-empty__col"},"\u041f\u043e\u043b\u043a\u0430 \u043a\u043d\u0438\u0433 \u043f\u0443\u0441\u0442\u0430")):r.a.createElement(T.a,{enter:!0,exit:!0,component:null},a)))},A=function(){return r.a.createElement("div",{className:"page-books"},r.a.createElement(L,null),r.a.createElement(D,null),r.a.createElement(F,null))},J=a(15),X=function(e){var t=e.title,a=e.text,n=e.visible,l=e.field,c=Object(o.b)();return r.a.createElement(w.a,{in:n,timeout:500,classNames:"alert-animation",unmountOnExit:!0},r.a.createElement("div",{className:"alert"},r.a.createElement("div",{className:"alert-title"},t,"!"),r.a.createElement("div",{className:"alert-text"},a),r.a.createElement("div",{className:"alert-close",onClick:function(){return c({type:E,payload:l})}})))};X.defaultProps={title:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435",text:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0442\u0438\u043f \u043f\u043e\u043b\u044f",visible:!1};var K=X,V=Object(S.e)((function(e){var t,a=e.match,l=e.history,c=null===a||void 0===a||null===(t=a.params)||void 0===t?void 0:t.id,i=Object(o.c)((function(e){return e.alert})),m=Object(o.c)((function(e){return e.books.find((function(e){var t=e.id;return+c===t}))})),s=Object(o.b)(),p=Object(n.useState)("\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435"),f=Object(J.a)(p,2),E=f[0],g=f[1],h=Object(n.useState)(""),O=Object(J.a)(h,2),j=O[0],N=O[1],_=Object(n.useState)(""),k=Object(J.a)(_,2),y=k[0],x=k[1],I=Object(n.useState)(""),S=Object(J.a)(I,2),w=S[0],C=S[1],L=Object(n.useState)(""),D=Object(J.a)(L,2),T=D[0],B=D[1];Object(n.useEffect)((function(){void 0!==m&&(g("\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"),N(m.title),x(m.author),C(m.year),B(m.coverImage))}),[]);var z=function(){N(""),x(""),C(""),B(""),l.push("/books-shelf/"),s({type:v})};return r.a.createElement("form",{className:"form-book",onSubmit:function(e){if(e.preventDefault(),function(){var e=!0;return j.length<3&&(s(R("name")),e=!1),y.length<3&&(s(R("author")),e=!1),+w<2017&&(s(R("year")),e=!1),/\.(png|jpe?g|gif)$/i.test(T)||/^https?:\/\//i.test(T)||(s(R("images")),e=!1),e}())if(void 0===m){s({type:d,payload:{title:j,author:y,year:w,coverImage:T}}),z()}else{var t=Object(u.a)(Object(u.a)({},m),{},{title:j,author:y,year:w,coverImage:T});s(function(e){return{type:b,payload:e}}(t)),z()}}},r.a.createElement("h3",{className:"form-book__title"},E," \u043a\u043d\u0438\u0433\u0438"),r.a.createElement("div",{className:"form-book__name"},r.a.createElement(K,i[0]),r.a.createElement("label",{htmlFor:"book-name"},"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435"),r.a.createElement("input",{id:"book-name",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438",value:j,onChange:function(e){return N(e.target.value)}})),r.a.createElement("div",{className:"form-book__author"},r.a.createElement(K,i[1]),r.a.createElement("label",{htmlFor:"book-author"},"\u0410\u0432\u0442\u043e\u0440"),r.a.createElement("input",{id:"book-author",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0432\u0442\u043e\u0440\u0430 \u043a\u043d\u0438\u0433\u0438",value:y,onChange:function(e){return x(e.target.value)}})),r.a.createElement("div",{className:"form-book__year"},r.a.createElement(K,i[2]),r.a.createElement("label",{htmlFor:"book-year"},"\u0413\u043e\u0434 \u0432\u044b\u043f\u0443\u0441\u043a\u0430"),r.a.createElement("input",{id:"book-year",type:"number",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043e\u0434 \u0432\u044b\u043f\u0443\u0441\u043a\u0430 \u043a\u043d\u0438\u0433\u0438",value:w,onChange:function(e){return C(e.target.value)}})),r.a.createElement("div",{className:"form-book__images"},r.a.createElement(K,i[3]),r.a.createElement("label",{htmlFor:"book-images"},"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"),r.a.createElement("input",{id:"book-images",type:"text",placeholder:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",value:T,onChange:function(e){return B(e.target.value)}})),r.a.createElement("div",{className:"form-book__buttons"},r.a.createElement("button",{type:"submit",className:"save"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),r.a.createElement("button",{type:"button",className:"cancel",onClick:z},"\u041e\u0442\u043c\u0435\u043d\u0430")))})),H=function(){return r.a.createElement("div",{className:"page-form-books"},r.a.createElement(V,null))},M=a(28),P=a.n(M),q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"title"},"\u041f\u043e \u0434\u0430\u043d\u043d\u043e\u043c\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"),r.a.createElement("div",{className:"home"},r.a.createElement("img",{src:P.a,alt:"error-img"}),r.a.createElement(i.b,{to:"/books-shelf/"},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e")))},U=function(){return r.a.createElement("div",{className:"page-not-found"},r.a.createElement(q,null))},$=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"footer-box"},r.a.createElement("div",{className:"footer-box__author",title:"\u0410\u0432\u0442\u043e\u0440 \u043f\u0440\u043e\u0435\u043a\u0442\u0430"},"\u041a\u0438\u0440\u0438\u043b\u043b \u041c\u043e\u0440\u043e\u0437\u043e\u0432"),r.a.createElement("div",{className:"footer-box__contacts"},r.a.createElement("div",{className:"icon icon-github"},r.a.createElement("a",{href:"https://github.com/kirillmorozov1994",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"https://img.icons8.com/ios-filled/50/000000/github.png",alt:"github-img"}))),r.a.createElement("div",{className:"icon icon-telegramm"},r.a.createElement("a",{href:"https://t.me/Kirll_1994",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"https://img.icons8.com/ios-filled/50/000000/telegram-app.png",alt:"telegramm-img"}))),r.a.createElement("div",{className:"icon icon-vk"},r.a.createElement("a",{href:"https://vk.com/kirson.morozov",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"https://img.icons8.com/ios-filled/50/000000/vk-circled.png",alt:"vk-img"}))),r.a.createElement("div",{className:"icon icon-mail"},r.a.createElement("a",{href:"mailto:kirill.morozov_1994@mail.ru",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"https://img.icons8.com/ios-filled/50/000000/important-mail.png",alt:"mail-img"}))))))},G=function(){var e=[{path:"/books-shelf/",Component:A},{path:"/books-shelf/form/:id?",Component:H},{path:"/books-shelf/:error404",Component:U}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null),r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app-box"},r.a.createElement("div",{className:"page"},e.map((function(e){var t=e.path,a=e.Component;return"/books-shelf/:error404"===t?r.a.createElement(S.a,{key:t,path:t},(function(e){var t=e.match;return r.a.createElement(w.a,{in:null!==t&&"form"!==t.params.error404,timeout:1e3,classNames:"page",appear:!0,unmountOnExit:!0},r.a.createElement(a,null))})):r.a.createElement(S.a,{key:t,path:t,exact:!0},(function(e){var t=e.match;return r.a.createElement(w.a,{in:null!==t,timeout:1e3,classNames:"page",appear:!0,unmountOnExit:!0},r.a.createElement(a,null))}))}))))),r.a.createElement($,null))},Q=(a(40),I());c.a.render(r.a.createElement(o.a,{store:Q},r.a.createElement(i.a,null,r.a.createElement(G,null))),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.19129067.chunk.js.map