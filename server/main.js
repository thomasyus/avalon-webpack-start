const base          = require('../config/webpack/base/base'),
      files         = require('../config/webpack/base/files'),
      webpackConfig = require('../config/webpack/webpack.dev'),
      express       = require('express'),
      webpack       = require('webpack');

const app = express();
// Apply gzip compression
//const compress      = require('compression')
//app.use(compress());
const proxy = require('express-http-proxy');
const proxyConfig = require('./proxy');
/** -----------------------------------
 * Apply Webpack HMR Middleware
 * */
if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(webpackConfig);
  
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: files.cdnPath,
    quiet     : true,
    stats     : {colors: true}
  }));
  console.log('实现代理转发');
  for (var i in proxyConfig) {
    app.use(i,proxy(proxyConfig[i]))
  }
  // app.use('/proxy', proxy('www.163.com'));
  app.use(require('webpack-hot-middleware')(compiler));
  
  app.use('/', express.static(files.buildPath));
  app.listen(base.devPort, () => {
    console.log(`open localhost:${base.devPort}`);
  });
}
else {
  console.log(
    `Server not being run of live development mode,
      Please use the NODE_ENV=development mode to run`
  );
}

module.exports = app;
