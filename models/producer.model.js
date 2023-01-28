

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProducerSchema = new Schema({
    
     name: {
         type:String,
     },
     by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Movie'
     },
}, {
    timestamps: true
});
var Producers = mongoose.model('producer', ProducerSchema);
module.exports = {Producers, ProducerSchema}