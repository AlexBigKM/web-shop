const { merge } = require("lodash");

const typeDef1 = require("./orderTypeDefs");
const typeDef2 = require("./productTypeDefs");
const typeDef3 = require("./userTypeDefs");

module.exports = [typeDef1, typeDef2, typeDef3];
