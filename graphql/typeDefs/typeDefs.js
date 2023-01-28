const { gql } = require('apollo-server-express');

const typeDefs = gql `

   type Producer{
       name:String!
       by:ID!
   }
   type Movie {
     id: ID!
     name: String!
     producers:[Producer]
     rating: Float!
   }
   type Query {
     getMovies: [Movie]
     getMovie(id: ID!): Movie
     getProducer:[Producer]
     getProducerById(id:ID!):[Producer]
   }
   type Mutation {
     addProducer(name:String!, by:ID!):Producer
     addMovie(name: String!, rating: Float!): Movie
     updateMovie(name: String!, producer: String!, rating: Float): Movie
     deleteMovie(id: ID!): Movie
   }`

   module.exports = {
    'typeDefs':typeDefs
    }