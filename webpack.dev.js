import { merge } from 'webpack-merge'
import common from './webpack.common.js'

const config = {
  mode: 'development',
  optimization: {
    usedExports: true
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    port: 8081,
    host: '0.0.0.0',
    client: {
      overlay: {
        warnings: false,
        errors: true
      }
    },
    proxy: {
      context: ['/api', '/auth', '/ws', '/favicon.ico'],
      target: 'http://0.0.0.0:8080'
    }
  }
}

export default merge(common, config)
