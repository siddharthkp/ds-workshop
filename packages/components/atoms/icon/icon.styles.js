import styled from "styled-components";
import css from "@styled-system/css";

const Element = styled.i(props =>
  css({
    color: props.color,
    size: 11
  })
);

export { Element };
