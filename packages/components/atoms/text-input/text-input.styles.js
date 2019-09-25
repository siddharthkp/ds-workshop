import styled from "styled-components";
import css from "@styled-system/css";

const styles = {
  width: "100%",
  color: "grays.800",
  fontFamily: "text",
  fontSize: 3,
  paddingX: 3,
  paddingY: 2,
  border: "2px solid",
  borderRadius: 2,

  backgroundColor: "white",
  borderColor: "grays.300",

  "&:hover": {
    borderColor: "grays.400"
  },
  "&:focus": {
    backgroundColor: "white",
    borderColor: "grays.300"
  },

  "&:disabled": {
    opacity: 0.5,
    backgroundColor: "grays.300",
    cursor: "pointer"
  }
};

const Element = styled.input(props => {
  if (props.hasError) return css({ ...styles, borderColor: "reds.300" });
  return css(styles);
});

export { Element };
