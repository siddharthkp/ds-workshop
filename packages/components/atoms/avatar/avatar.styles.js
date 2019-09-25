import styled from "styled-components";
import css from "@styled-system/css";

const Element = styled.img(props => {
  return css({
    borderRadius: "50%",
    size: theme => theme.avatarSizes[props.size]
  });
});

export { Element };
