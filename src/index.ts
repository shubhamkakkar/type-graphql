import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { resolvers } from './resolvers';
import typeDefs from './schema/temp';

const server = new ApolloServer({ resolvers, typeDefs });
const app = express();
app.use(cors(), bodyParser.json());

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
