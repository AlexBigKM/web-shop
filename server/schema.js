const { buildSchema  } = require('graphql');

const schema = buildSchema (`
    type User {
        id: ID
        username: String
        age: Int
    }
`);

module.exports = schema;