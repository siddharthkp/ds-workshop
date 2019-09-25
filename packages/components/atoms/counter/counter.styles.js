import styled from "styled-components";
import css from "@styled-system/css";

const Element = styled.span(
  css({
    fontSize: 1,
    color: "grays.600",
    display: "flex",
    alignItems: "center",
    "& > i": {
      color: "grays.400",
      marginRight: 1
    }
  })
);

export { Element };
