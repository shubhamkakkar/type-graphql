import { gql } from 'apollo-server-express';

const schema = gql`
  type Query {
    users: [User!]
    me: User
    user(id: ID!): User
  }
  type User {
    id: ID!
    username: String!
  }
`;




export default schema