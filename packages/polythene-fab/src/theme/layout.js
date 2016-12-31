import { mixin } from "polythene-css";
import { vars } from "polythene-config";

const createStyles = (config) => {
  return [{
    ".pe-button--fab": [
      mixin.vendorize({
        "user-select": "none"
      }, vars.prefixes_user_select), {
        display: "inline-block",
        position: "relative",
        outline: "none",
        cursor: "pointer",
        width: config.size_regular + "px",
        height: config.size_regular + "px",
        padding: config.padding_regular + "px",
        "border-radius": "50%",
        border: "none",

        "&.pe-button--fab-mini": {
          width: config.size_mini + "px",
          height: config.size_mini + "px",
          padding: ((config.size_mini - vars.unit_icon_size) / 2) + "px"
        },

        " .pe-button__content": {
          padding: 0,
          "border-radius": "inherit"
        },

        " .pe-ripple": {
          "border-radius": "inherit"
        },

        " .pe-button__wash": [
          mixin.vendorize({
            transition: "background-color " + vars.animation_duration + " ease-in-out"
          }, vars.prefixes_transition), {
            "border-radius": "inherit",
            "pointer-events": "none",
            "background-color": "transparent"
          }
        ]
      }
    ]
  }];
};

export default (config) => (mixin.createStyles(config, createStyles));