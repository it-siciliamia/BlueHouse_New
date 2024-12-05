module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: ["@babel/plugin-proposal-private-property-in-object"],
  generatorOpts: {
    compact: false,
    minified: false,
    comments: false,
    shouldPrintComment: () => false,
  },
  presets: ["@babel/preset-env", "@babel/preset-react"],
};
