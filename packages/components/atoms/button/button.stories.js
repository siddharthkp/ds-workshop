import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "./index.js";
import { Stack } from "components/_helpers";

export default {
  title: "Button"
};

export const text = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

export const appearances = () => (
  <Stack>
    <Button appearance="primary">Button Label</Button>
    <Button appearance="secondary">Button Label</Button>
    <Button appearance="secondary-alt">Button Label</Button>
    <Button appearance="info">Button Label</Button>
    <Button appearance="accent">Button Label</Button>
    <Button appearance="success">Button Label</Button>
  </Stack>
);

export const disabled = () => (
  <Stack>
    <Button disabled appearance="primary">
      Button Label
    </Button>
    <Button disabled appearance="secondary">
      Button Label
    </Button>
    <Button disabled appearance="secondary-alt">
      Button Label
    </Button>
    <Button disabled appearance="info">
      Button Label
    </Button>
    <Button disabled appearance="accent">
      Button Label
    </Button>
    <Button disabled appearance="success">
      Button Label
    </Button>
  </Stack>
);

export const sizes = () => (
  <Stack>
    <Button size="small" appearance="primary">
      Button Label
    </Button>
    <Button size="normal" appearance="primary">
      Button Label
    </Button>
    <Button size="large" appearance="primary">
      Button Label
    </Button>
  </Stack>
);
