const DefinePlugin = require("webpack/lib/DefinePlugin");

const commonConfig = require("./webpack.config");
const specificConfig = Object.assign({}, commonConfig);

specificConfig.output = {
  path: __dirname + "/dist-chrome-beta"
};

specificConfig.plugins.push(
  new DefinePlugin({
    BROWSER: JSON.stringify("CHROME"),
    DIALOG_ID: JSON.stringify("____LINA_DICTO_WEMD_c6739031-55ae-490b-bc85-2ddb54ddf2fa")
  })
);

module.exports = specificConfig;
