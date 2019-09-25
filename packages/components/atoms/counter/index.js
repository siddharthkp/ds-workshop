import React from "react";
import PropTypes from "prop-types";
import { Icon } from "components";
import { Element } from "./counter.styles";

const Counter = props => {
  return (
    <Element className="counter" {...props}>
      {props.icon ? <Icon name={props.icon} /> : null}
      {props.value}
    </Element>
  );
};

export default Counter;
