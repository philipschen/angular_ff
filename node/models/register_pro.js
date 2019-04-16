var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Create Schema
var registerSchema = new Schema({
    service_provider_name: {
        type: String,
        require: true
    },
    Email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    reenter_password: {
        type: String,
        require: true
    }

});
var register_pro = mongoose.model('register_pro', registerSchema);

module.exports = register_pro;