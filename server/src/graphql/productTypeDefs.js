const { gql } = require('apollo-server-express');

const productTypeDefs = gql`
  type Product {
    id: ID!
    name: String!
    price: Float!
  }

  type Query {
    product(id: ID!): Product
    products: [Product]!
  }

  type Mutation {
    createProduct(name: String!, price: Float!): Product!
    updateProduct(id: ID!, name: String!, price: Float!): Product!
    deleteProduct(id: ID!): Boolean!
  }
`;

module.exports = productTypeDefs;