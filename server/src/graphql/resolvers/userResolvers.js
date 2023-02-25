const { User } = require('../../models/index');
const { Op } = require('sequelize');

const userResolvers = {
  Query: {
    // user: async (parent, { id }, context, info) => {
    //   return await User.findByPk(id);
    // },
    // users: async (parent, args, context, info) => {
    //   return await User.findAll();
    // }
  },
  // Mutation: {
    // createUser: async (parent, { name, email }, context, info) => {
    //   const user = await User.create({ name, email });
    //   return user;
    // },
    // updateUser: async (parent, { id, name, email }, context, info) => {
    //   await User.update({ name, email }, { where: { id } });
    //   return await User.findByPk(id);
    // },
    // deleteUser: async (parent, { id }, context, info) => {
    //   const deleted = await User.destroy({ where: { id } });
    //   return deleted ? true : false;
    // }
  // }
};

module.exports = userResolvers;
