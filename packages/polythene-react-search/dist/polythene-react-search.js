!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-react-base"),require("polythene-core-search"),require("polythene-react-textfield")):"function"==typeof define&&define.amd?define(["exports","polythene-react-base","polythene-core-search","polythene-react-textfield"],t):t(e.polythene={},e["polythene-react-base"],e["polythene-core-search"],e["polythene-react-textfield"])}(this,function(e,t,r,o){"use strict";var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},c=t.StateComponent(n({},r.coreSearch,{createContent:function(e,t){return r.coreSearch.createContent(e,n(t,{TextField:o.TextField}))}}));c.displayName="Search",e.Search=c,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-react-search.js.map
