import { gql } from 'apollo-server-express';
const schema = gql`
    type Query {
    users: [User!]
    me: User
    user(id: ID!): User
    messages: [Message!]!
    message(id: ID!): Message!
  }
  type User {
    id: ID!
    username: String!
    messages: [Message!]
  }
  type Message {
    id: ID!
    text: String!
    user: User!
  }
`;



export default schema