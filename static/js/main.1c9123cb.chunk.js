(this["webpackJsonpresearch-task"]=this["webpackJsonpresearch-task"]||[]).push([[0],{35:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n(17),s=n.n(r),o=n(16),i=n(15),u=n(5),b=n(78),l=n(77),j=n(75),h=n(74),p=n(73),d=n(72),f=(n(35),function(e){var t=e.book,n=e.images,c=+t.url.split("/").slice(-1)[0];return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(b.a,{className:"book",children:[Object(a.jsx)(d.a,{className:"book__author",component:"p",children:t.authors[0]}),Object(a.jsxs)(l.a,{children:[Object(a.jsx)(p.a,{className:"book__media",image:n,title:"Contemplative Reptile"}),Object(a.jsxs)(h.a,{children:[Object(a.jsx)(d.a,{className:"book__name",gutterBottom:!0,variant:"h5",component:"h2",children:t.name}),Object(a.jsx)(d.a,{variant:"body2",color:"textSecondary",component:"p",children:"Books form a worldview - by reading the right books, a person forms a worldview, expands and deepens his view of the world."})]})]}),Object(a.jsxs)(j.a,{className:"book__info",children:[Object(a.jsx)(o.b,{className:"book__read-more",to:"/books/".concat(c),children:"Learn More"}),Object(a.jsxs)(d.a,{className:"book__number-pages",variant:"body2",color:"textSecondary",component:"p",children:["Number of pages ",t.numberOfPages]})]})]})})}),m=["https://cdn.recyclemag.ru/main/e/e83f28ba5366ad6efd406e74f58ae8ca.jpeg","https://u.livelib.ru/reader/Miss_Acacia/o/fci2pp1t/o-o.jpeg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRESW6YleoK1wM0WbJc_-0i8b-a9df6LbvwSw&usqp=CAU","https://www.molnet.ru/mos/image?objectId=722529&trim_x=590","https://i.pinimg.com/originals/35/8d/0a/358d0a5416c575672e087c29069fdfbb.jpg","https://retail-loyalty.org/upload/iblock/1d4/4eb7af6a50fa411c41ee2ee5fcda2098.jpg","https://investgazeta.ua/images/easyblog_articles/3083/b2ap3_large_EF4AA2F5-44F2-42DC-87F6-C6BC210E8594_cx2_cy1_cw87_w1200_r1_s.jpg","https://cdn.pixabay.com/photo/2016/08/24/03/26/book-1616087__340.jpg","https://99px.ru/sstorage/53/2017/10/tmb_210143_5963.jpg","https://99px.ru/sstorage/53/2018/06/tmb_231566_464290.jpg"],x=(n(44),function(e){var t=e.books;return Object(a.jsx)("div",{className:"books",children:t.map((function(e,t){return Object(a.jsx)(f,{book:e,images:m[t]},t)}))})}),O=n(76),_=n(14),g=n.n(_),v=n(22);function k(){return(k=Object(v.a)(g.a.mark((function e(t){var n,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(46);var y=function(e){var t=e.characters;return 0===t.length?Object(a.jsx)("h4",{children:"No characters"}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h4",{className:"sidebar__heading",children:"Characters"}),Object(a.jsx)("ul",{className:"characters",children:t.map((function(e,t){return Object(a.jsx)("li",{className:"character",children:e.name},t)}))})]})},w=(n(47),function(e){var t=e.povCharacters,n=Object(c.useState)([]),r=Object(i.a)(n,2),s=r[0],o=r[1],u=Object(c.useState)(!1),b=Object(i.a)(u,2),l=b[0],j=b[1];return Object(c.useEffect)((function(){var e=t.map((function(e){return function(e){return k.apply(this,arguments)}(e)}));j(!0),Promise.all(e).then((function(e){o(e),j(!1)}))}),[]),Object(a.jsx)("div",{className:"sidebar",children:l?Object(a.jsx)(O.a,{className:"sidebar__color"}):Object(a.jsx)(y,{characters:s})})}),N=(n(48),function(e){var t=e.currentBook,n=t.name,c=t.country,r=t.authors,s=t.publisher,o=t.mediaType,i=t.povCharacters;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"info",children:[Object(a.jsx)("h3",{className:"info__name-book",children:n}),Object(a.jsxs)("div",{className:"info__content",children:[Object(a.jsx)("h4",{children:"Summary"}),Object(a.jsx)("p",{className:"info__summary-book",children:"The Book in Three Sentences: The United States is engaging in a modern form of slavery by using the World Bank and other international organizations to offer huge loans to developing nations for construction projects and oil production. On the surface this appears to be generous, but the money is only awarded to a country if it agrees to hire US construction firms, which ensures a select few people get rich. Furthermore, the loans are intentionally too big for any developing nation to repay and this debt burden virtually guarantees the developing nation will support the political interests of the United States."})]}),Object(a.jsxs)("div",{className:"info__footer-book",children:[Object(a.jsx)("div",{className:"info__author",children:r}),Object(a.jsxs)("div",{className:"info__company",children:[Object(a.jsxs)("p",{className:"info__country",children:["\u0421ountry: ",c]}),Object(a.jsxs)("span",{className:"info__publisher",children:["Publisher: ",s]}),Object(a.jsxs)("span",{className:"info__type",children:["Media Type: ",o]})]})]})]}),Object(a.jsx)(w,{povCharacters:i})]})}),S="https://www.anapioficeandfire.com/api/books";function B(){return(B=Object(v.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(S));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(v.a)(g.a.mark((function e(t){var n,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(S,"/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(49);var F=function(){var e=Object(c.useState)(),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(u.g)().bookId;return Object(c.useEffect)((function(){(function(e){return C.apply(this,arguments)})(+s).then((function(e){return r(e)}))}),[]),Object(a.jsx)("div",{className:"currentBook",children:(null===n||void 0===n?void 0:n.name)?Object(a.jsx)(N,{currentBook:n}):Object(a.jsx)(O.a,{})})},E=(n(50),function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){(function(){return B.apply(this,arguments)})().then((function(e){return r(e)}))}),[]),Object(a.jsx)("div",{className:"app",children:Object(a.jsxs)(u.d,{children:[Object(a.jsx)(u.b,{path:"/",exact:!0,children:Object(a.jsx)(u.a,{to:"/books/"})}),Object(a.jsx)(u.b,{path:"/books/",component:function(){return Object(a.jsx)(x,{books:n})},exact:!0}),Object(a.jsx)(u.b,{path:"/books/:bookId",component:F})]})})});s.a.render(Object(a.jsx)(o.a,{children:Object(a.jsx)(E,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.1c9123cb.chunk.js.map