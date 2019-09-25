import styled from "styled-components";
import css from "@styled-system/css";

const Element = styled.span(props =>
  css({
    display: "inline-block",
    backgroundColor: props.color,
    color: "white",
    borderRadius: 2,
    textTransform: "uppercase",
    fontWeight: "bold",
    paddingX: 1,

    paddingY: "2px", // magic number
    fontSize: "10px" // magic number
  })
);

export { Element };
