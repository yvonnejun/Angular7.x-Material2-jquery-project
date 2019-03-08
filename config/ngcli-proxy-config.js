const anyParse = require('co-body');
const apiMock = require('@lzwme/simple-mock');
const chalk = require('chalk');
const apiProxyList = {
 '/users/**': 'https://api.github.com/',
};
/**
 * 详细配置参考：https://www.npmjs.com/package/http-proxy-middleware
 */
const proxyCfg = Object.keys(apiProxyList).reduce((pCfg, key) => {
 const proxyTarget = apiProxyList[key];
 pCfg[key] = {
 target: proxyTarget,
 changeOrigin: true,
 onProxyRes(proxyRes, req, res) {
  apiMock.saveApi(req, res, proxyRes.headers['content-encoding']);
 },
 async onProxyReq(proxyReq, req, res) {
  // 尝试解码 post 请求参数至 req.body
  if (!req.body && proxyReq.getHeader('content-type')) {
  try {
   req.body = await anyParse({req});
  } catch(err) {
   // console.log(err);
  }
  }
  apiMock.render(req, res).then(isMocked => {
  if (!isMocked) {
   console.log(chalk.cyan('[apiProxy]'), req._parsedUrl.pathname, '\t', chalk.yellow(proxyTarget));
  }
  });
 },
 };
 return pCfg;
}, {});
module.exports = proxyCfg;