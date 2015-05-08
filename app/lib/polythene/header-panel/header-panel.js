define(["polythene/polythene/polythene","mithril","polythene/toolbar/toolbar","css!./header-panel"],function(e,a,o){"use strict";var r,n,t,l,d,i=6,s=192,c=s/3;return r={shadowAfterScroll:{waterfall:1,"waterfall-tall":1},alwaysShadow:{standard:1,tall:1},noShadow:{seamed:1,cover:1,scroll:1},tallMode:{tall:!0,"waterfall-tall":!0},outerScroll:{scroll:1}},t=void 0!==document.documentElement.style.transform?function(e,a){e.transform=a}:function(e,a){e.webkitTransform=a},n=function(e,a){var o=null===a?"":"translate3d(0, "+a+"px, 0)";t(e,o)},d=function(e){var r,n;return e=e||{},r=e.tall||!1,n=e.tallClass||"",e.toolbar?(e.toolbar["class"]=[e.toolbar["class"]||null,r?n:null].join(" "),a.component(o,e.toolbar)):e.content?a([".header",e.animated?" .animate":""].join(" "),{"class":[e["class"]||null,r?n:null].join(" ")},e.content):a("div",e)},l=function(o,n){var t,l,i,s,c,h,m,u,f,p,g;return n=n||{},n.header=n.header||{},n.configs=n.configs||[],s=o.mode(),f=r.outerScroll[s]?"outer":"main",p={},g=o.handleScroll.bind(o),p[f]=g,h=function(e,a){if(!a){var r,t;r=e.querySelector(".header")||e.querySelector(".toolbar"),o.headerElem(r),o.outerContainerElem(e),n.animated||(t=e.querySelector(".headerContainer"),o.setHeight(t.clientHeight)),p.outer&&o.scrollerElem(e),g()}},m=function(e,a){if(!a){o.headerContainerElem(e);var r=e.querySelector(".topBar");o.headerTopBarElem(r)}},u=function(e,a){a||p.main&&o.scrollerElem(e)},c=n.header?d(Object.assign({},n.header,o.headerConfig)):null,t=n.tag||"div",l=Object.assign({},{mode:s,"class":["header-panel",n["class"]].join(" "),config:n.config},n.animated?n.animated:null,o.fixed()?o.fixed():null),i=a(".outerContainer[vertical][layout]",{config:h,onscroll:p.outer},[a(".headerContainer",{config:m},[c,"seamed"===s||o.shadow()===!1?null:a(".dropShadow")]),a(".mainContainer[flex]",{config:u,onscroll:p.main},n.content?n.content:null)]),a(t,l,e.insertContent(i,n))},{controller:function(e){var o,t,l,d,h,m,u,f,p,g,v,w,S,y,E,C,b;return e=e||{},e.mode?o=e.mode:e.header.toolbar?o=e.header.toolbar.mode:e.header.content&&(o=e.header.mode),o=o||"standard",t=r.tallMode[o]||!1,l=e.tallClass||"tall",d=e.animated||!1,h=e.fixed||!1,m=e.condenses||!1,u=e.scrollAwayTopbar||!1,f=e.noReveal||!1,p=e.keepCondensedHeader||!1,g=0,v=!1,w=0,S=i,E=(e.headerHeight||s)+S,C=(e.condensedHeaderHeight||c)+S,y=E-C,b={standard:function(){},fixed:function(){var e,a;e=this.scrollerElem().scrollTop,a=0!==e,this.toggleShadow(a),v=a},animated:function(){var e,a,o;e=this.scrollerElem().scrollTop,a=0!==e,a!==v&&(o=this.headerElem(),o&&t&&o.classList[a?"remove":"add"](l),this.toggleShadow(a),v=a)},dynamicHeader:function(){var a,o,n;n=!1,o=this.scrollerElem().scrollTop,y>o?a=o:(a=Math.min(p?y:E,Math.max(0,f||p?o:g+o-w)),m&&w>=o&&o>y&&(a=Math.max(a,y))),a!==g&&this.transformHeader(a),f||r.noShadow[e.mode]||(o>a&&a>0&&(n=!0),this.toggleShadow(n)),g=a,w=Math.max(o,0)}},{view:a.prop(),scrollerElem:a.prop(),outerContainerElem:a.prop(),headerContainerElem:a.prop(),headerTopBarElem:a.prop(),headerElem:a.prop(),mode:a.prop(o),fixed:a.prop(h),shadow:a.prop(void 0===e.shadow||e.shadow?!0:!1),prevScrollTop:a.prop(0),isTop:a.prop(),headerConfig:{tall:t,tallClass:l,animated:d,fixed:h},setHeight:function(a){var o;void 0===e.headerHeight&&(E=a+S,y=E-C),h||(o=this.outerContainerElem().querySelector(".mainContainer"),o.style.paddingTop=a+"px")},handleScroll:function(a){var n;r.alwaysShadow[o]&&this.toggleShadow(!0),d&&(n=b.animated,n.bind(this).call()),n="standard"===o?b.standard:h?b.fixed:b.dynamicHeader,n.bind(this).call(),a&&e.scroll&&e.scroll(a)},condenseHeader:function(e){u||n(this.headerTopBarElem().style,Math.min(e,y))},transformHeader:function(a){n(this.headerContainerElem().style,-a),m&&this.condenseHeader(a),e.transform&&e.transform({y:a,height:E,condensedHeight:C})},toggleShadow:function(e){r.alwaysShadow[o]&&(e=!0),this.outerContainerElem().classList[e?"add":"remove"]("cascaded")}}},view:function(e,a){var o=e.view();return(!o||a.refresh)&&(o=l(e,a),e.view(o)),o}}});