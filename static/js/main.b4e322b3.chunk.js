(this.webpackJsonphanyu=this.webpackJsonphanyu||[]).push([[0],{100:function(n,e,t){},118:function(n,e,t){},121:function(n,e,t){},122:function(n,e,t){"use strict";t.r(e);var a=t(0),c=t.n(a),i=t(9),r=t.n(i),o=(t(99),t(33)),s=t(82),j=t(65),h=t(35),l=function(n,e,t,a){return{characters:n,pinyin:e,meaning:t,type:a}},d=[{name:"unit8a",characters:[l("\u91d1\u878d","j\u012bnr\xf3ng","finance","n."),l("\u8d38\u6613","m\xe0oy\xec","trade","n."),l("\u5916\u8d38","w\xe0im\xe0o","foreign trade","n."),l("\u5e02\u573a","sh\xecch\u01ceng","market","n."),l("\u9886\u5bfc","l\u01d0ngd\u01ceo","leader; to lead","v./n."),l("\u7ecf\u7406","j\u012bngl\u01d0 ","manager","n."),l("\u624b\u673a","sh\u01d2uj\u012b","cellphone","n."),l("\u77ed\u4fe1","du\u01cenx\xecn","instant message","n."),l("\u63a5","ji\u0113","pick up (the phone)","v."),l("\u901a","t\u014dng","get through","v."),l("\u63a8\u8fdf","tu\u012bch\xed","postpone","v."),l("\u5b89\u6392","\u0101np\xe1i","arrange;arrangement","v./n."),l("\u8bbf\u95ee","f\u01cengw\xe8n","visit","v./n."),l("\u53c2\u52a0","c\u0101nji\u0101","attend; take part in","v."),l("\u822a\u73ed","h\xe1ngb\u0101n","flight","n."),l("\u9a6c\u4e0a","m\u01cesh\xe0ng","at once; soonad","v."),l("\u8fd9\u6837","zh\xe8y\xe0ng","like this, in this way, thus","pron.")]},{name:"unit8b",characters:[l("\u600e\u4e48\u56de\u4e8b","z\u011bnmehu\xedsh\xec","what\u2019s the matter?",""),l("\u4e0a\u73ed","sh\xe0ngb\u0101n","go to work ","v.o."),l("\u53d1\u751f","f\u0101sh\u0113ng","happen; take place","v."),l("\u4e8b\u6545","sh\xecg\xf9","accident","n."),l("\u8b66\u5bdf","j\u01d0ngch\xe1","police; policeman","n."),l("\u96e8\u8863","y\u01d4y\u012b","raincoat","n."),l("\u96e8\u4f1e","y\u01d4s\u01cen","umbrella","n."),l("\u624b","sh\u01d2u","hand","n."),l("\u80cc","b\xe8i","back","n."),l("\u7ed3\u679c","ji\xe9gu\u01d2","result","n."),l("\u68c0\u67e5","ji\u01cench\xe1","check","v."),l("\u4fee","xi\u016b","repair","v."),l("\u649e","zhu\xe0ng","bump against; collide","v."),l("\u6454","shu\u0101i","fall","v."),l("\u5012 ","d\u01ceo","fall down","v."),l("\u4f24","sh\u0101ng","to hurt; injury, wound","v./n."),l("\u574f","hu\xe0i","bad; broken","adj."),l("\u7834","p\xf2","broken","adj."),l("\u7740","zhe","used to indicate the continuation of a state","part.")]}],u=t(50),b={characters:!1,pinyin:!1,meaning:!1,type:!1},p=t(140),m=t(144),O=t(44),x=(t(100),t(3)),g=function(n){var e=n.characters,t=n.pinyin,a=n.meaning,c=n.type,i=n.elementIndex,r=n.totalCount,o=n.hide,s=void 0===o?b:o;return Object(x.jsx)(p.a,{variant:"outlined",className:"card-container",children:Object(x.jsxs)(m.a,{children:[Object(x.jsxs)(O.a,{color:"textSecondary",children:[i,"/",r]}),Object(x.jsx)(O.a,{variant:"h1",component:"h1",color:"textPrimary",className:s.characters?"opacity-text":"",children:e}),Object(x.jsx)(O.a,{variant:"h4",component:"h3",color:"textSecondary",className:s.pinyin?"opacity-text":"",children:t}),Object(x.jsxs)(O.a,{variant:"h4",component:"h4",className:s.meaning?"opacity-text":"",children:[a,Object(x.jsx)("br",{}),c]})]})})},y=t(81),f=t.n(y),v=t(145),k=t(161),C=(t(118),function(n){var e=n.cardList,t=(n.carouselOptions,e.length),a=c.a.useState(b),i=Object(o.a)(a,2),r=i[0],s=i[1],j=function(n){s(Object(h.a)(Object(h.a)({},r),{},Object(u.a)({},n.target.name,n.target.checked)))};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(p.a,{variant:"outlined",children:["Should Hide:",Object(x.jsxs)(m.a,{children:[Object(x.jsx)(v.a,{control:Object(x.jsx)(k.a,{checked:r.characters,onChange:j,name:"characters",color:"primary"}),label:"Characters"}),Object(x.jsx)(v.a,{control:Object(x.jsx)(k.a,{checked:r.pinyin,onChange:j,name:"pinyin",color:"primary"}),label:"Pinyin"}),Object(x.jsx)(v.a,{control:Object(x.jsx)(k.a,{checked:r.meaning,onChange:j,name:"meaning",color:"primary"}),label:"Meaning"}),Object(x.jsx)(v.a,{control:Object(x.jsx)(k.a,{checked:r.type,onChange:j,name:"type",color:"primary"}),label:"Type"})]})]}),Object(x.jsx)(f.a,{indicators:!1,autoPlay:!1,animation:"slide",navButtonsAlwaysVisible:!0,children:e.map((function(n,e){return Object(x.jsx)(g,{characters:n.characters,pinyin:n.pinyin,meaning:n.meaning,type:n.type,hide:r,totalCount:t,elementIndex:e+1},e)}))})]})}),w=t(162),S=t(163),z=t(146),F=function(n){var e=n.units,t=n.handleChange;return Object(x.jsxs)(w.a,{component:"fieldset",children:[Object(x.jsx)(S.a,{component:"legend",children:"Units"}),Object(x.jsx)(z.a,{children:e.map((function(n){return Object(x.jsx)(v.a,{control:Object(x.jsx)(k.a,{checked:n.include,onChange:t,name:n.name}),label:n.name},n.name)}))})]})},N=t(147),P=[{path:"/recognize",component:function(){var n=d.map((function(n){return Object(h.a)(Object(h.a)({},n),{},{include:!1})})),e=Object(a.useState)(n),t=Object(o.a)(e,2),c=t[0],i=t[1],r=c.reduce((function(n,e){return e.include?[].concat(Object(j.a)(n),Object(j.a)(e.characters)):n}),[]).sort((function(){return Math.random()-.5}));return Object(x.jsxs)(N.a,{container:!0,spacing:1,children:[Object(x.jsx)(N.a,{item:!0,xs:3,children:Object(x.jsx)(F,{units:c,handleChange:function(n){var e=c.map((function(e){return e.name===n.target.name&&(e.include=n.target.checked),e}));i(e)}})}),Object(x.jsx)(N.a,{item:!0,xs:6,children:Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(C,{cardList:r})})})]})}}],I=t(159),L=t(148),T=t(149),B=t(150),M=t(152),A=t(154),D=t(151),J=t(153),E=function(n){var e=n.open,t=n.setState,a=Object(s.d)(),c=function(n){return function(e){a.push(n)}};return Object(x.jsx)(I.a,{anchor:"left",open:e,onClose:t(!1),children:Object(x.jsxs)("div",{role:"presentation",onClick:t(!1),onKeyDown:t(!1),children:[Object(x.jsxs)(L.a,{children:[Object(x.jsxs)(T.a,{button:!0,onClick:c("/recognize"),children:[Object(x.jsx)(B.a,{children:Object(x.jsx)(D.a,{})}),Object(x.jsx)(M.a,{primary:"Recognize"})]}),Object(x.jsxs)(T.a,{button:!0,onClick:c("/grid"),children:[Object(x.jsx)(B.a,{children:Object(x.jsx)(J.a,{})}),Object(x.jsx)(M.a,{primary:"Grid"})]})]}),Object(x.jsx)(A.a,{})]})})},G=t(155),H=t(156),K=t(75),R=t(158),U=t(157);t(121);var V=function(){var n=Object(a.useState)(!1),e=Object(o.a)(n,2),t=e[0],c=e[1],i=function(n){return function(e){("keydown"!==e.type||"Tab"!==e.key&&"Shift"!==e.key)&&c(n)}};return Object(x.jsxs)(s.a,{children:[Object(x.jsx)(G.a,{position:"static",children:Object(x.jsx)(H.a,{children:Object(x.jsx)(K.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(x.jsx)(U.a,{onClick:i(!0)})})})}),Object(x.jsx)(E,{open:t,setState:i}),Object(x.jsx)(R.a,{children:Object(x.jsx)(s.c,{children:P.map((function(n,e){return Object(x.jsx)(s.b,{path:n.path,component:n.component},e)}))})})]})},q=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,164)).then((function(e){var t=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;t(n),a(n),c(n),i(n),r(n)}))};r.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(V,{})}),document.getElementById("root")),q()},99:function(n,e,t){}},[[122,1,2]]]);
//# sourceMappingURL=main.b4e322b3.chunk.js.map