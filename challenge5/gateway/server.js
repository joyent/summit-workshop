'use strict';

process.env.EG_CONFIG_DIR = __dirname;
const EG = require('./lib/gateway');


EG().then(() => {
  console.log('gateway started');
});
