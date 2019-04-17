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
    question1: {
        type: String,
        required: true
    },
    question2: {
        type: String,
        require: true
    },
    question3: {
        type: String,
        required: true
    },

});
var register_cons = mongoose.model('register_cons', registerSchema);

module.exports = register_cons;