import React from "react";
import PropTypes from "prop-types";
import { Element } from "./icon.styles";
import icons from "./icons-list";

const Icon = props => {
  return <Element {...props}>{icons[props.name]}</Element>;
};

Icon.propTypes = {
  name: PropTypes.oneOf([
    "check",
    "heart",
    "link",
    "list",
    "paperclip",
    "comment",
    "view"
  ]),
  color: PropTypes.string
};

Icon.defaultProps = {
  color: "grays.500"
};

export default Icon;
