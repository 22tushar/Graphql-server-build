const { Movies } = require('../../models/movie.models');

const Movie = require('../../models/movie.models').Movies;
const Producer=require('../../models/producer.model').Producers;
const resolvers = {
    Query: {
      getMovies: (parent, args) => {
        return Movie.find({});
      },
      getMovie: (parent, args) => {
          console.log(args.id)
          return Movie.findById(args.id);
      },
      getProducer: (parent,args) => {
           return Producer.find({});
      },
      getProducerById: (parent,args) => {
        return Producer.find({"by": args.id});
      }

    },

    Movie:{
      producers : (movie)=> Producer.find({"by":movie.id})
    },


    Mutation: {
      addMovie: (parent, args) => {
        let film = new Movie({
          name: args.name,
          rating: args.rating,
        });
        return film.save();
      },
      addProducer: (parent, args) => {
        let pro = new Producer({
          name: args.name,
          by: args.by,
        });
        return pro.save();
      },
      updateMovie: (parent, args) => {
        if (!args.id) return;
          return Movie.findOneAndUpdate(
           {
             _id: args.id
           },
           {
             $set: {
               name: args.name,
               producer: args.producer,
               rating: args.rating,
             }
           }, {new: true}, (err, Movie) => {
             if (err) {
               console.log('Something went wrong when updating the movie');
             } else {
             }
           }
        );
      }
    }
  }

   module.exports = {
    'resolvers':resolvers
    }