const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');

const app = express();
app.use(cors());

const root = {
    hello: () => {
        return 'Hello world!';
    },
};

app.use('/graphql', graphqlHTTP({
    graphql: true,
    schema,
    rootValue: root
}));

app.listen(5000, () => console.log('Server started on port 5000'));