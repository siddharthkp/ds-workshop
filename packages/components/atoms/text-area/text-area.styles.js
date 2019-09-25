import styled from "styled-components";
import css from "@styled-system/css";
import { Element as Input } from "../text-input/text-input.styles";

const Element = styled(Input).attrs({ as: "textarea" })(props => {
  return css({
    fontSize: 2
  });
});

export { Element };
