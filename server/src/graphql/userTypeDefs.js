const { gql } = require('apollo-server-express');

const userTypeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
  }

  type Query {
    user(id: ID!): User
    users: [User]!
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!): User!
    updateUser(id: ID!, firstName: String!, lastName: String!): User!
    deleteUser(id: ID!): Boolean!
  }
`;

module.exports = userTypeDefs;