const Dotenv = require('dotenv-webpack')
const asyncPlugin = require('preact-cli-plugin-async')
const BundleTracker = require('webpack-bundle-tracker')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {object} env - options passed to CLI.
 * @param {WebpackConfigHelpers} helpers - object with useful helpers when working with config.
 **/
export default function(config, env, helpers) {
  config.resolve.unsafeCache = false
  config.plugins.unshift(new Dotenv({ path: '../.env' }))

  // Check if isBuild
  let isBuild = false
  for (let i = 0; i < config.plugins.length; i++) {
    if (config.plugins[i].definitions) {
      if (
        config.plugins[i].definitions['process.env.NODE_ENV'] === '"production"'
      ) {
        isBuild = true
        break
      }
    }
  }

  // Serve with settings.STATIC_URL
  if (isBuild) {
    // config.output.publicPath = '/static/'
    config.plugins.unshift(
      new BundleTracker({ filename: './webpack-stats.json' })
    )
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
      })
    )
  }

  asyncPlugin(config)
  if (config.module.loaders) {
    for (let i = 0; i < config.module.loaders.length; i++) {
      if (config.module.loaders[i].loader) {
        for (let j = 0; j < config.module.loaders[i].loader.length; j++) {
          if (config.module.loaders[i].loader[j].loader === 'css-loader') {
            config.module.loaders[i].loader[j].options.localIdentName =
              '[local]'
          }
        }
      }
    }
  }
}
