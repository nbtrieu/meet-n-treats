const { Schema, model} = require("mongoose");

const playdateSchema = new Schema({
    pet1: {
        type: Schema.Types.ObjectId,
        ref: 'Pet'
    },
    pet2: {
        type: Schema.Types.ObjectId,
        ref: 'Pet'
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    activity: {
        type: String, 
        required: true,
        trim: true
    },
    date: {
        type: String, 
        required: true,
        trim: true
    },
});

const Playdate = model('Playdate', playdateSchema);
module.exports = Playdate;