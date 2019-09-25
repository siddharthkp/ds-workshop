import React from "react";
import PropTypes from "prop-types";
import { Element } from "./avatar.styles";

const Avatar = props => {
  return <Element {...props} />;
};

Avatar.propTypes = {
  size: PropTypes.oneOf(["xsmall", "small", "medium", "large", "xlarge"])
};

Avatar.defaultProps = {
  size: "small"
};

export default Avatar;
