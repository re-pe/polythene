!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-mithril-base"),require("polythene-core-icon"),require("polythene-mithril-svg")):"function"==typeof define&&define.amd?define(["exports","polythene-mithril-base","polythene-core-icon","polythene-mithril-svg"],t):t(e.polythene={},e["polythene-mithril-base"],e["polythene-core-icon"],e["polythene-mithril-svg"])}(this,function(e,t,o,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},i=t.ViewComponent(r({},o.coreIcon,{createProps:function(e,t){return o.coreIcon.createProps(e,r(t,{SVG:n.SVG}))},createContent:function(e,t){return o.coreIcon.createContent(e,r(t,{SVG:n.SVG}))}}));i.displayName="Icon",e.Icon=i,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-mithril-icon.js.map
