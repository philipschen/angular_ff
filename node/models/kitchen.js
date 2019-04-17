var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Create Schema
var registerSchema = new Schema({
    workingdays: {
        "monday": {
            type: Boolean,
            default: false,
        },
        "tuesday": {
            type: Boolean,
            default: false,
        },
        "wednesday": {
            type: Boolean,
            default: false,
        },
        "thursday": {
            type: Boolean,
            default: false,
        },
        "friday": {
            type: Boolean,
            default: false,
        },
        "saturday": {
            type: Boolean,
            default: false,
        },
        "sunday": {
            type: Boolean,
            default: false,
        },
    },
    starttime: {
        type: String,
        required: true
    },
    endtime: {
        type: String,
        required: true
    },
    img: { data: Buffer, contentType: String }

});
var kitchens = mongoose.model('kitchens', registerSchema);

module.exports = kitchens;