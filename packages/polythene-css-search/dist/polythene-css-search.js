!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core-css"),require("polythene-core-search"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-core-search","polythene-theme"],t):t(e.polythene={},e["polythene-core-css"],e["polythene-core-search"],e["polythene-theme"])}(this,function(e,t,i,n){"use strict";function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var p=function(e,i){var l=(i.inset_height-i.line_height_input)/2,p=(i.full_width_height-i.line_height_input)/2,o=n.vars.unit_indent-i.full_width_side_padding-n.vars.grid_unit_icon_button;return[r({},e,[t.flex.flex(),{position:"relative"," .pe-textfield":[t.flex.flex(),{alignItems:"center",padding:0,position:"relative",zIndex:1," .pe-textfield__input-area":{padding:0,":after":{display:"none"}}," .pe-textfield__input, .pe-textfield__label":{fontSize:i.font_size_input+"px",lineHeight:i.line_height_input+"px"}," .pe-textfield__input":{border:"none"}," .pe-textfield__label":{top:0,bottom:0}}]," .pe-search__content":{"&, .pe-textfield":t.flex.layoutHorizontal,"&, .pe-textfield__input-area":{flexGrow:1}}," .pe-search__content > *":[t.flex.layoutVertical,t.flex.selfCenter],".pe-search--inset":{"border-radius":i.inset_border_radius+"px",padding:"0 "+i.inset_side_padding+"px","&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label":{padding:0,height:i.inset_height+"px"}," .pe-textfield__input, .pe-textfield__label":{paddingTop:l+"px",paddingBottom:l+"px",paddingLeft:i.inset_input_indent+"px",paddingRight:i.inset_input_right_padding+"px"}},".pe-search--full-width":{borderRadius:i.full_width_border_radius+"px",padding:"0 "+i.full_width_side_padding+"px","&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label":{height:i.full_width_height+"px"}," .pe-textfield__input, .pe-textfield__label":{paddingTop:p+"px",paddingBottom:p+"px",paddingLeft:o+"px",paddingRight:i.full_width_input_right_padding+"px"}}}])]},o=function(e,t,i,n){return[l({},e.map(function(e){return e+t}).join(","),{backgroundColor:i["color_"+n+"_background"]," .pe-textfield":{" .pe-textfield__label":{color:i["color_"+n+"_label_text"]}," .pe-textfield__input":{color:i["color_"+n+"_input_text"]}," .pe-textfield__input-area":{backgroundColor:"transparent"}}})]},d=function(e,t){return[o([".pe-dark-tone",".pe-dark-tone "],e,t,"dark"),o(["",".pe-light-tone",".pe-light-tone "],e,t,"light")]},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},_=[p,d],u="."+i.classes.component,f=function(e,n){return t.styler.generateStyles([e,u],a({},i.vars,n),_)},s=function(){return t.styler.createStyleSheets([u],i.vars,_)},h=function(e,n){return t.styler.createStyleSheets([e,u],a({},i.vars,n),_)};t.styler.generateStyles([u],i.vars,_),e.addStyle=f,e.styles=s,e.themeStyles=h,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css-search.js.map
