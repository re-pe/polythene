import { vars } from "polythene-theme";
import { rgba } from "polythene-core-css";

const touch_height = vars.unit_touch_height; // 48
const height = 36;

export default {
  general_styles:                       true,
              
  animation_duration:                   vars.animation_duration,
  border_radius:                        vars.unit_item_border_radius,
  border_width:                         1, // no border in MD, but used to correctly set the height when a theme does set a border
  dropdown_icon_size:                   24,
  font_size:                            14,
  font_weight:                          500,
  label_padding_v:                      9,
  letter_spacing:                       0.75,
  line_height:                          vars.line_height,
  min_width:                            8 * vars.grid_unit_component,
  outer_padding_v:                      (touch_height - height) / 2, // (48 - 36) / 2 = 6
  padding_h:                            2 * vars.grid_unit, // 8
  padding_h_border:                     4 * vars.grid_unit, // 16
  padding_h_extra_wide:                 6 * vars.grid_unit, // 24
  row_margin_h:                         vars.grid_unit,
  separator_width:                      1,
  text_transform:                       "uppercase",

  color_light_background:               "transparent",
  color_light_text:                     rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_wash_background:          rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  color_light_focus_background:         rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  color_light_active_background:        rgba(vars.color_light_foreground, vars.blend_light_background_active),
  color_light_disabled_background:      "transparent",
  color_light_disabled_text:            rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
  color_light_icon:                     rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_separator:                rgba(vars.color_light_foreground, vars.blend_light_border_light), 

  color_dark_background:                "transparent",
  color_dark_text:                      rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  color_dark_wash_background:           rgba(vars.color_dark_foreground, vars.blend_dark_background_hover),
  color_dark_focus_background:          rgba(vars.color_dark_foreground, vars.blend_dark_background_hover),
  color_dark_active_background:         rgba(vars.color_dark_foreground, vars.blend_dark_background_active),
  color_dark_disabled_background:       "transparent",
  color_dark_disabled_text:             rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
  color_dark_icon:                      rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_separator:                 rgba(vars.color_dark_foreground, vars.blend_dark_border_light),

  color_light_border:                   rgba(vars.color_light_foreground, vars.blend_light_border_medium), // only specify this variable to get all 4 states
  // color_light_hover_border:             "transparent",
  // color_light_active_border:            "transparent",
  // color_light_disabled_border:          "transparent",
  //
  color_dark_border:                    rgba(vars.color_dark_foreground, vars.blend_dark_border_medium), // only specify this variable to get all 4 states
  // color_dark_hover_border:              "transparent",
  // color_dark_active_border:             "transparent",
  // color_dark_disabled_border:           "transparent"

  // color_light_hover:                    rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  // color_light_hover_background:         "transparent",
  // color_light_hover_icon:               "inherit",
  //
  // color_dark_hover:                     rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  // color_dark_hover_background:          "transparent",
  // color_dark_hover_icon:                "inherit",

};