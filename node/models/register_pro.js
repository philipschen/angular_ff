var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Create Schema
var registerSchema = new Schema({
    service_provider_name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    reenter_password: {
        type: String,
        required: true
    },


});
var register_pro = mongoose.model('register_pro', registerSchema);

module.exports = register_pro;