const path = require("path");
const fs = require("fs");
const { override, fixBabelImports, addLessLoader, addWebpackPlugin } = require('customize-cra');
const AntDesignThemePlugin = require("antd-theme-webpack-plugin");
const { getLessVars } = require('antd-theme-generator');
const themeVariables = getLessVars(path.join(__dirname, './src/themes/vars.less'))

const darkVars = {
  ...getLessVars('./node_modules/antd/lib/style/themes/dark.less')
};
const lightVars = {
  ...getLessVars('./node_modules/antd/lib/style/themes/compact.less')
};

fs.writeFileSync('./src/themes/dark.json', JSON.stringify(darkVars));
fs.writeFileSync('./src/themes/light.json', JSON.stringify(lightVars));
fs.writeFileSync('./src/themes/theme.json', JSON.stringify(themeVariables));

const options = {
  stylesDir: path.join(__dirname, './src'),
  antDir: path.join(__dirname, './node_modules/antd'),
  varFile: path.join(__dirname, './src/themes/vars.less'),
  lessUrl: "https://cdnjs.cloudflare.com/ajax/libs/less.js/2.7.3/less.min.js",
  themeVariables: Array.from(new Set([
    ...Object.keys(darkVars),
    ...Object.keys(lightVars),
    ...Object.keys(themeVariables),
  ])),
  generateOnce: true,
}

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addWebpackPlugin(new AntDesignThemePlugin(options)),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true
    }
  })
);
