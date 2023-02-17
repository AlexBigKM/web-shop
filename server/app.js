const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
// const schema = require('./schema');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
    hello: () => {
        return 'Hello world!';
    },
};

const app = express();
app.use(cors());

app.use('/graphql', graphqlHTTP({
    graphql: true,
    schema,
    rootValue: root
}));

app.listen(5000, () => console.log('Server started on port 5000'));