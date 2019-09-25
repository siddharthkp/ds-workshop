import React from "react";
import PropTypes from "prop-types";
import { Element } from "./badge.styles";
import css from "@styled-system/css";

const Badge = props => {
  return <Element {...props} />;
};

Badge.propTypes = {
  color: PropTypes.string
};

Badge.defaultProps = {
  color: "#bbb"
};

export default Badge;
