'use strict';

const httpProxy = require('http-proxy');
const lodash = require('lodash');
const logger = require('../../logger').gateway;

const ConfigurationError = require('../../errors').ConfigurationError;

module.exports = function (params, config, getApps) {
  let serviceEndpoints = lodash.get(config.gatewayConfig, ['serviceEndpoints',
    params.serviceEndpoint, 'urls']);

  let proxies = serviceEndpoints.map((serviceEndpoint) => {
    const proxy = httpProxy.createProxyServer({
      target: serviceEndpoint,
      changeOrigin: params.changeOrigin || false
    });

    proxy.on('error', (err, _req, res) => {
      logger.warn(err);

      if (!res.headersSent) {
        res.status(502).send('Bad gateway.');
      } else {
        res.end();
      }
    });

    return proxy;
  });

  let index = 0;
  if (getApps) {
    getApps((apps) => {
      apps.httpApp.on('upgrade', (req, socket, head) => {
        const proxy = proxies[index];
        proxy.ws(req, socket, head);
      });
    });
  }

  return function proxyHandler (req, res, _next) {
    const proxy = proxies[index];
    proxy.web(req, res);

    if (++index >= proxies.length) {
      index = 0;
    }
  };
};
