const themeConfig = require('./src/configs/theme.json')
const CracoLessPlugin = require('craco-less')
const themeConfig = require('./src/configs/theme.json')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': themeConfig.palette.primary,
              '@card-shadow': themeConfig.card.shadow
            },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
}
