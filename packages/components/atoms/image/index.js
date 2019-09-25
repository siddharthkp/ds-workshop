import React from "react";
import PropTypes from "prop-types";
import "./image.scss";
import { Element } from "./image.styles";

const Image = props => {
  return <Element className="image" {...props} />;
};

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

export default Image;
