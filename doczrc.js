export default {
  title: "Dribbble design system",
  dest: "/dist",
  codeSandbox: false,
  modifyBundlerConfig: config => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"]
    });

    return config;
  }
};
