import React from "react";

import Stack from "./stack";
import Preview from "./preview";
import Box from "./box";
import Boxes from "./boxes";

import { ThemeProvider } from "styled-components";
import tokens from "tokens";

function ThemeWrapper(props) {
  return <ThemeProvider theme={tokens} {...props} />;
}

export { ThemeWrapper, Stack, Preview, Box, Boxes };
