import React from "react";
import PropTypes from "prop-types";
import { Element } from "./text-area.styles";

const TextArea = props => {
  return <Element {...props} />;
};

TextArea.propTypes = {
  hasError: PropTypes.bool,
  disabled: PropTypes.bool
};

TextArea.defaultProps = {
  hasError: false,
  disabled: false
};

export default TextArea;
