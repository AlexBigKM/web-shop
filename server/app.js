const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors');
const typeDefs = require('./src/schema');
const userTypeDefs = require('./src/graphql/userTypeDefs');
const db = require('./models');

// const resolvers = {
//   Query: {
//     hello: () => 'Hello ALEX!',
//   },
// };

const PORT = process.env.PORT || 5000;

async function startApolloServer(typeDefs, resolvers){
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: ({ req }) => ({ req, db })
    })
    const app = express();
    app.use(cors());
    await server.start();
    server.applyMiddleware({app, path: '/graphql'});
    
    db.sequelize.sync()
      .then(() => {
        app.listen(PORT, () => {
          console.log(`Server is listening on port ${PORT}${server.graphqlPath}`);
        })
      })
      .catch((error) => {
        console.error('Unable to connect to the database:', error);
      });
}

startApolloServer(typeDefs, resolvers);