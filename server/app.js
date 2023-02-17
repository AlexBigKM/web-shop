const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors');
const typeDefs = require('./src/schema');

const resolvers = {
  Query: {
    hello: () => 'Hello ALEX!',
  },
};

const PORT = 5000;

async function startApolloServer(typeDefs, resolvers){
    const server = new ApolloServer({typeDefs, resolvers})
    const app = express();
    app.use(cors());
    await server.start();
    server.applyMiddleware({app, path: '/graphql'});
    
    app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}${server.graphqlPath}`);
})
}

startApolloServer(typeDefs, resolvers);