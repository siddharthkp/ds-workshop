import React from "react";
import PropTypes from "prop-types";
import "./button.scss";
import styled from "styled-components";
// import { Icon } from "components";

const Icon = styled.i`
  width: 20px;
  height: 20px;
  background: blue;
`;

const Button = props => {
  return (
    <button
      className={`button button--${props.appearance} button--${props.size}`}
      disabled={props.disabled}
    >
      {props.icon ? (
        <span className="icon-container">
          <Icon name={props.icon} />
          {props.children}
        </span>
      ) : (
        props.children
      )}
    </button>
  );
};

Button.propTypes = {
  /** The description for myProp */
  disabled: PropTypes.bool
  // appearance: PropTypes.oneOf([
  //   "primary",
  //   "secondary",
  //   "secondary-alt",
  //   "info",
  //   "accent",
  //   "success"
  // ]),
  // size: PropTypes.oneOf(["small", "normal", "large"])
};
//
// Button.defaultProps = {
//   disabled: false,
//   appearance: "primary",
//   size: "normal"
// };

export default Button;
