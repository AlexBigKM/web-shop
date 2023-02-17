const { buildSchema } = require('graphql');

const schema = buildSchema (`
    type User {
        username: String
    }
`);

module.exports = schema;