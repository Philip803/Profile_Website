module.exports = {
  extends: "airbnb-base",
  plugins: ["react", "jsx-a11y", "import"],
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  }
};
