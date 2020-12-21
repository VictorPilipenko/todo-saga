const path = require("path");
const fs = require("fs");
const { override, fixBabelImports, addLessLoader, addWebpackPlugin } = require('customize-cra');
const AntDesignThemePlugin = require("antd-theme-webpack-plugin");
const { getLessVars } = require('antd-theme-generator');

const lightThemeVariables = getLessVars(path.join(__dirname, './src/styles/light.less'))
const darkThemeVariables = getLessVars(path.join(__dirname, './src/styles/dark.less'))

const darkVars = {
  ...getLessVars('./node_modules/antd/lib/style/themes/dark.less'),
  ...darkThemeVariables
};

const lightVars = {
  ...getLessVars('./node_modules/antd/lib/style/themes/compact.less'),
  ...lightThemeVariables
};

fs.writeFileSync('./src/themes/dark.json', JSON.stringify(darkVars));
fs.writeFileSync('./src/themes/light.json', JSON.stringify(lightVars));
fs.writeFileSync('./src/themes/light-overrides.json', JSON.stringify(lightThemeVariables));
fs.writeFileSync('./src/themes/dark-overrides.json', JSON.stringify(darkThemeVariables));

const options = {
  stylesDir: path.join(__dirname, './src'),
  antDir: path.join(__dirname, './node_modules/antd'),
  varFile: path.join(__dirname, './src/styles/light.less'),
  lessUrl: "https://cdnjs.cloudflare.com/ajax/libs/less.js/2.7.3/less.min.js",
  themeVariables: Array.from(new Set([
    ...Object.keys(darkVars),
    ...Object.keys(lightVars),
    ...Object.keys(lightThemeVariables),
    ...Object.keys(darkThemeVariables),
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



// '@border-radius-base': '4px;',
// '@border-color-base': '#919191;',
// '@border-color-split': '#919191;',
// '@border-color-inverse': '#919191;',

// '@primary-color': '#32475c;',
// '@link-color': '#1890ff;',

// '@success-color': '#52c41a;',
// '@warning-color': '#faad14;',
// '@error-color': '#f5222d;',

// '@font-size-base': '16px;',
// '@heading-color': 'rgba(0, 0, 0, 0.85);',

// '@text-color': 'rgba(0, 0, 0, 0.65);',
// '@text-color-secondary': 'rgba(0, 0, 0, 0.45);',

// '@disabled-color': 'rgba(0, 0, 0, 0.25);',






// @primary-color: #32475c;
// @link-color: #1890ff;

// @success-color: #52c41a;
// @warning-color: #faad14;
// @error-color: #f5222d;

// @font-size-base: 16px;
// @heading-color: rgba(0, 0, 0, 0.85);

// @text-color: rgba(0, 0, 0, 0.65);
// @text-color-secondary: rgba(0, 0, 0, 0.45);

// @disabled-color: rgba(0, 0, 0, 0.25);
