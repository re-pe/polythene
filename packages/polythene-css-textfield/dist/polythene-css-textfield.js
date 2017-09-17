!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core-css"),require("polythene-core-textfield"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-core-textfield","polythene-theme"],t):t(e.polythene={},e["polythene-core-css"],e["polythene-core-textfield"],e["polythene-theme"])}(this,function(e,t,i,n){"use strict";function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var _=function(e,i){return[l({},e,[t.mixin.clearfix(),{position:"relative",lineHeight:n.vars.line_height,display:"inline-block",boxSizing:"border-box",margin:0,overflow:"visible",paddingBottom:i.vertical_spacing_bottom+"px",width:"100%",maxWidth:"100%"," .pe-textfield__input-area":{position:"relative",paddingTop:i.vertical_spacing_top+"px","&:after":[t.mixin.defaultTransition("opacity",i.input_focus_border_animation_duration),{position:"absolute",content:'""',bottom:0,left:0,height:i.input_focus_border_width+"px",width:"100%",opacity:0}]},".pe-textfield--focused .pe-textfield__input-area:after":{opacity:1}," .pe-textfield__input":{display:"block",fontSize:i.font_size_input+"px",lineHeight:i.line_height_input+"px",width:"100%",background:"none",textAlign:"left",color:"inherit",borderWidth:i.input_border_width+"px",borderStyle:"none none solid none",borderRadius:0,margin:0,padding:i.input_padding_v+"px "+i.input_padding_h+"px","&:textfield--invalid":{boxShadow:"none"},":invalid":{boxShadow:"none"}}," textarea.pe-textfield__input":{margin:i.input_padding_v+"px "+i.input_padding_h+"px",padding:0,display:"block"}," textfield__input:focus, &.pe-textfield--focused .pe-textfield__input":{"border-width":i.input_border_width+"px",outline:"none"}," .pe-textfield__label":{position:"absolute",display:"block",top:i.vertical_spacing_top+i.input_padding_v+"px",bottom:0,left:i.input_padding_h+"px",right:i.input_padding_h+"px",fontSize:i.font_size_input+"px",lineHeight:i.line_height_input+"px",pointerEvents:"none",whiteSpace:"nowrap",textAlign:"left",cursor:"text"},".pe-textfield--dirty .pe-textfield__label":{visibility:"hidden"},"&:not(.pe-textfield--no-char)":{" .pe-textfield__required-indicator, .pe-textfield__optional-indicator":{padding:"0 0 0 .25em"}},".pe-textfield--floating-label":{paddingBottom:i.floating_label_vertical_spacing_bottom+"px"," .pe-textfield__input-area":{paddingTop:i.floating_label_vertical_spacing_top+"px"}," .pe-textfield__label":[t.mixin.defaultTransition("all",i.floating_label_animation_duration),{top:i.floating_label_vertical_spacing_top+i.input_padding_v+"px"}],".pe-textfield--focused, &.pe-textfield--dirty":{" .pe-textfield__label":{fontSize:i.font_size_floating_label+"px",top:i.floating_label_top+"px",visibility:"visible"}},".pe-textfield--dense":{fontSize:i.dense_font_size_input+"px",paddingBottom:i.dense_floating_label_vertical_spacing_bottom+"px"," .pe-textfield__input-area":{paddingTop:i.dense_floating_label_vertical_spacing_top+"px"}," .pe-textfield__input":{fontSize:i.dense_font_size_input+"px"}," .pe-textfield__label":{fontSize:i.dense_font_size_input+"px",top:i.dense_floating_label_vertical_spacing_top+i.input_padding_v+"px"},".pe-textfield--focused, &.pe-textfield--dirty":{" .pe-textfield__label":{fontSize:i.dense_font_size_floating_label+"px",top:i.dense_floating_label_top+"px"}}}},".pe-textfield--disabled, &.pe-textfield--readonly":{" .pe-textfield__label":{cursor:"auto"}," .pe-textfield__input":{"border-bottom":"none"}," .pe-textfield__input-area:after":{opacity:1,height:"1px",bottom:"-1px",backgroundPosition:"top",backgroundSize:"4px 1px",backgroundRepeat:"repeat-x"}}," .pe-textfield__error, .pe-textfield__error-placeholder, .pe-textfield__help, .pe-textfield__counter":{marginTop:i.margin_top_error_message+"px",fontSize:i.font_size_error+"px",lineHeight:n.vars.line_height,minHeight:i.font_size_error*n.vars.line_height+"px"}," .pe-textfield__counter":{textAlign:"right",float:"right",padding:"0 0 0 16px"}," .pe-textfield__help-focus":[t.mixin.defaultTransition("opacity"),{opacity:0}],".pe-textfield--focused .pe-textfield__help-focus, &.pe-textfield--dirty .pe-textfield__help-focus":{opacity:1},".pe-textfield--hide-clear":{" .pe-textfield__input::-ms-clear":{display:"none"}},".pe-textfield--hide-spinner":{" input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button":{"-webkit-appearance":"none",margin:0}," input[type=number]":{"-moz-appearance":"textfield"}}},{".pe-textfield--full-width":{width:"100%",padding:0," .pe-textfield__input-area":{padding:0}," .pe-textfield__input":{padding:i.full_width_input_padding_v+"px "+i.full_width_input_padding_h+"px"}," .pe-textfield__error, .pe-textfield__help, .pe-textfield__counter":{paddingLeft:i.full_width_input_padding_h+"px",paddingRight:i.full_width_input_padding_h+"px"}," .pe-textfield__label":{top:i.full_width_input_padding_v+"px",left:i.full_width_input_padding_h+"px",right:i.full_width_input_padding_h+"px"},".pe-textfield--dense":{" .pe-textfield__input":{fontSize:i.dense_full_width_font_size_input+"px",padding:i.dense_full_width_input_padding_v+"px "+i.dense_full_width_input_padding_h+"px"}," .pe-textfield__label":{fontSize:i.dense_full_width_font_size_input+"px",top:i.dense_full_width_input_padding_v+"px",left:i.dense_full_width_input_padding_h+"px",right:i.dense_full_width_input_padding_h+"px"}}}}])]},p=function(e,t,i,n){return[o({},e.map(function(e){return e+t}).join(","),{color:i["color_"+n+"_focus_border"]," .pe-textfield__input-area":{color:"inherit",backgroundColor:i["color_"+n+"_input_background"],"&:after":{backgroundColor:"currentcolor"}},"&.pe-textfield--counter ":{" .pe-textfield__input-area:after":{backgroundColor:i["color_"+n+"_counter_ok_border"]}}," .pe-textfield__input":{color:i["color_"+n+"_input_text"],borderColor:i["color_"+n+"_input_bottom_border"]}," .pe-textfield__label":{color:i["color_"+n+"_label_text"]},"&.pe-textfield--disabled, &.pe-textfield--readonly":{" .pe-textfield__input-area:after":{backgroundColor:"transparent",backgroundImage:"linear-gradient(to right, "+i["color_"+n+"_disabled_label_text"]+" 20%, rgba(255, 255, 255, 0) 0%)"}},"&.pe-textfield--disabled":{" .pe-textfield__input, .pe-textfield__label":{color:i["color_"+n+"_disabled_label_text"]}},"&.pe-textfield--readonly":{" .pe-textfield__input, .pe-textfield__label":{color:i["color_"+n+"_readonly_label_text"]}},"&.pe-textfield--focused":{"&.pe-textfield--floating-label .pe-textfield__label":{color:i["color_"+n+"_highlight_text"]},"&.pe-textfield--required.pe-textfield--floating-label":{" .pe-textfield__required-indicator":{color:i["color_"+n+"_required_symbol"]}}}," .pe-textfield__help, .pe-textfield__counter":{color:i["color_"+n+"_help_text"]},"&.pe-textfield--invalid:not(.pe-textfield--hide-validation)":{" .pe-textfield__input":{borderColor:i["color_"+n+"_input_error_border"],boxShadow:"none"}," .pe-textfield__label":{color:i["color_"+n+"_input_error_text"]}," .pe-textfield__error, .pe-textfield__counter, .pe-textfield__help":{color:i["color_"+n+"_input_error_text"]},"&.pe-textfield--required .pe-textfield__label":{color:i["color_"+n+"_input_error_text"]},"&, &.pe-textfield--counter":{" .pe-textfield__input-area:after":{backgroundColor:i["color_"+n+"_input_error_border"]}}}," .pe-textfield__input:-webkit-autofill":{"-webkit-box-shadow":"0 0 0px 1000px "+i["color_"+n+"_input_background"]+" inset",color:i["color_"+n+"_input_text"]+" !important"}})]},d=function(e,t){return[p([".pe-dark-tone",".pe-dark-tone "],e,t,"dark"),p(["",".pe-light-tone",".pe-light-tone "],e,t,"light")]},r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},a=[_,d],f="."+i.classes.component,u=function(e,n){return t.styler.generateStyles([e,f],r({},i.vars,n),a)},x=function(){return t.styler.createStyleSheets([f],i.vars,a)},c=function(e,n){return t.styler.createStyleSheets([e,f],r({},i.vars,n),a)};t.styler.generateStyles([f],i.vars,a),e.addStyle=u,e.styles=x,e.themeStyles=c,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css-textfield.js.map
