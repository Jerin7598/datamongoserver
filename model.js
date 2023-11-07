// Schema for AddressBook
const mongoose = require('mongoose');
const addressSchema = mongoose.Schema({
    name: {
     type: String,
     required: true
    },
    email: {
     type: String,
     required: true
    },
    phone: {
     type: Number,
     required: true
    },
    place: {
     type: String,
     required: true
    }
   })
   //Creating the collection Address
   const Address = mongoose.model('Address', addressSchema)

   module.exports = Address;

   mongodb + srv : //jerins750:OqPPBFbTw56yD9xO@cluster0.6r9al8r.mongodb.net/?retryWrites=true&w=majority