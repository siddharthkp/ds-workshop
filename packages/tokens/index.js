const theme = {
  space: [0, 5, 10, 15, 20, 25, 30],
  radii: [0, 2, 4, 6],
  fontSizes: [0, 12, 14, 16, 20, 24, 32, 48, 64, 72],
  fonts: {
    text:
      "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Droid Sans, Helvetica Neue, sans-serif",
    code: "monospace"
  },
  fontWeights: { default: 400, medium: 500, bold: 700 },
  shadows: {
    shallow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
    deep: "0px 0px 1px rgba(102, 102, 102, 0.5)",
    inset: "inset 0px 1px 2px rgba(0, 0, 0, 0.15)"
  }
};

theme.avatarSizes = {
  xsmall: 16,
  small: 30,
  medium: 48,
  large: 80,
  xlarge: 100
};

theme.colors = {
  white: "#fff",
  grays: {
    100: "#f4f4f4",
    200: "#e1e1e7",
    300: "#ddd",
    400: "#bbb",
    500: "#999",
    600: "#777",
    700: "#666",
    800: "#444",
    900: "#333"
  },
  pinks: {
    500: "#d95988",
    700: "#df3e7b",
    900: "#c22b65"
  },
  reds: {
    300: "#ed615c",
    500: "#ea3423",
    700: "#ae2318"
  },
  blues: {
    300: "#4fb4de",
    500: "#3a8bbb",
    700: "#1e6189",
    900: "#0c3f5d"
  },
  greens: {
    500: "#7bbb5e",
    700: "#5b9540",
    900: "#3b6d25"
  }
};

export default theme;
