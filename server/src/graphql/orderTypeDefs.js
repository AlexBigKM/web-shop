const { gql } = require('apollo-server-express');

const orderTypeDefs = gql`
  type Order {
    id: ID!
    status: OrderStatus!
    total: Float!
  }

  enum OrderStatus {
    PENDING
    PAID
    SHIPPED
    DELIVERED
  }

  extend type Query {
    getOrderById(id: ID!): Order
  }

  extend type Mutation {
    createOrder(userId: ID!, products: [ID!]!): Order!
    updateOrderStatus(id: ID!, status: OrderStatus!): Order
  }
`;

module.exports = orderTypeDefs;
