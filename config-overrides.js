const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');
module.exports = override(
  addWebpackAlias({
    ["myact"]: path.resolve(__dirname, "src/myact"),
    ["@cp"]: path.resolve(__dirname, "src/components"),
    ["@pg"]: path.resolve(__dirname, "src/pages")
  })
)