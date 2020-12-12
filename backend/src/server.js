import { GraphQLServer } from "graphql-yoga";
import resolvers from './graphql/resolvers'
import path from 'path'

// import graphqlSchema from '../graphql/schema.graphql'



export const server = new GraphQLServer({
    typeDefs: path.join(__dirname, 'graphql/schema.graphql'), //necesita la ruta absoluta
    resolvers
})
