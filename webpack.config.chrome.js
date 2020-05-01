const DefinePlugin = require("webpack/lib/DefinePlugin");

const commonConfig = require("./webpack.config");
const specificConfig = Object.assign({}, commonConfig);

specificConfig.output = {
  path: __dirname + "/dist-chrome"
};

specificConfig.plugins.push(
  new DefinePlugin({
    BROWSER: JSON.stringify("CHROME"),
    DIALOG_ID: JSON.stringify("____LINA_DICTO_WEMD_b457e6d2-b211-4a41-b903-310f8ee41335")
  })
);

module.exports = specificConfig;
