import React from "react";
import PropTypes from "prop-types";
import "./text-input.scss";
import { Element } from "./text-input.styles";

const TextInput = props => {
  return <Element {...props} />;
};

TextInput.propTypes = {
  hasError: PropTypes.bool,
  disabled: PropTypes.bool
};

TextInput.defaultProps = {
  hasError: false,
  disabled: false
};

export default TextInput;
