const { merge } = require("lodash");

const resolver1 = require('./userResolvers');

module.exports = merge({}, resolver1);
