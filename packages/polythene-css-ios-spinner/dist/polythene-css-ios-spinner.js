!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("polythene-core-css"),require("polythene-core-ios-spinner")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-core-ios-spinner"],n):n(e.polythene={},e["polythene-core-css"],e["polythene-core-ios-spinner"])}(this,function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var i=function(e){return[0,1,2,3,4,5,6,7,8,9,10,11].map(function(n){var t=-1/12*n*e.animation_duration;return r({}," .pe-ios-spinner__blade:nth-of-type("+(n+1)+")",{transform:"rotate("+(360-30*n)+"deg) translate3d(0,-140%,0)",animation:"iosSpinnerFade "+e.animation_duration+"s "+t+"s linear infinite"})})},a=function(e,n){return[r({},e,{" .pe-ios-spinner__blades":[i(n),{transform:"translate3d(0,0,0)",position:"relative",width:"100%",height:"100%"}]," .pe-ios-spinner__blade":{position:"absolute",width:"9%",height:"28%",left:"45.5%",top:"36%",opacity:0,borderRadius:"50px"},"@keyframes iosSpinnerFade":{" 0%":{opacity:.64}," 100%":{opacity:.035}}})]},s=function(e,n,t,r){return[o({},e.map(function(e){return e+n}).join(","),{color:t["color_"+r]," .pe-ios-spinner__blade":{background:"currentcolor"}})]},l=function(e,n){return[s([".pe-dark-tone",".pe-dark-tone "],e,n,"dark"),s(["",".pe-light-tone",".pe-light-tone "],e,n,"light")]},p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c=[a,l],u="."+t.classes.component,f=function(e,r){return n.styler.generateStyles([e,u],p({},t.vars,r),c)},d=function(){return n.styler.createStyleSheets([u],t.vars,c)},y=function(e,r){return n.styler.createStyleSheets([e,u],p({},t.vars,r),c)};n.styler.generateStyles([u],t.vars,c),e.addStyle=f,e.styles=d,e.themeStyles=y,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css-ios-spinner.js.map
