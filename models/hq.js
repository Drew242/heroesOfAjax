var mongoose = require('mongoose');

var hqSchema = mongoose.Schema({
    name      : {type: String},
    ameneties : {type: Array},
    butler    : {type: Boolean},
    moatType  : {type: String},

    // address   : {
    //   street1 : String,
    //   street2 : String,
    //   city    : String,
    //   state   : String,
    //   zip     : String
    // }
});

module.exports = mongoose.model('HQ', hqSchema);
