!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-react-base"),require("polythene-core-list"),require("polythene-react-list-tile")):"function"==typeof define&&define.amd?define(["exports","polythene-react-base","polythene-core-list","polythene-react-list-tile"],t):t(e.polythene={},e["polythene-react-base"],e["polythene-core-list"],e["polythene-react-list-tile"])}(this,function(e,t,r,o){"use strict";var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n=t.StateComponent(i({},r.coreList,{createProps:function(e,t){return r.coreList.createProps(e,i(t,{ListTile:o.ListTile}))},createContent:function(e,t){return r.coreList.createContent(e,i(t,{ListTile:o.ListTile}))}}));n.displayName="List",e.List=n,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-react-list.js.map
