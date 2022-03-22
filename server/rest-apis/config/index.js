const merge = require("lodash/merge");
const env = process.env.NODE_ENV || "development";

const baseConfig = {
  env,
  isDev: env === "development",
  isTest: env === "testing",
  // port: process.env.PORT || 8080,
  // secrets: {
  //   jwt: process.env.JWT_SECRET,
  //   jwtExp: '100d',
  // },
};

let envConfig = {};

switch (env) {
  // case 'dev':
  // case 'development':
  //   envConfig = require('./dev');
  //   break;
  // case 'test':
  // case 'testing':
  //   envConfig = require('./testing');
  //   break;
  // case 'prod':
  // case 'production':
  //   envConfig = require('./prod');
  //   break;
  default:
    envConfig = require("./dev");
}

const config = merge(baseConfig, envConfig);

module.exports = config;
