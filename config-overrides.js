const { override, addWebpackAlias, addWebpackModuleRule } = require('customize-cra');
const path = require('path');
module.exports = override(
  addWebpackAlias({
    "myact": path.resolve(__dirname, "src/myact"),
    "@cp": path.resolve(__dirname, "src/components"),
    "@pg": path.resolve(__dirname, "src/pages"),
    "@api": path.resolve(__dirname, "src/httpApi"),
    "@svg": path.resolve(__dirname, "src/icons/svg"),
    "@u": path.resolve(__dirname, "src/utils"),
  }),
  addWebpackModuleRule({
    test: /\.svg$/,
    loader: "svg-sprite-loader",
    include: path.resolve(__dirname, "src/icons/svg"), //只处理指定svg的文件(所有使用的svg文件放到该文件夹下)
  })
)