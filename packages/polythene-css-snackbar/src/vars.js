import { rgba } from "polythene-core-css";
import { vars as notificationVars } from "polythene-css-notification";
import { vars } from "polythene-theme";

export default Object.assign(
  {},
  notificationVars,
  {
    animation_hide_css:    "",
    animation_show_css:    "",
    border_radius:         0,
    max_width:             568,
    min_height:            0,
    min_width:             288,
          
    color_dark_background: rgba(vars.color_dark_background)
  }
);