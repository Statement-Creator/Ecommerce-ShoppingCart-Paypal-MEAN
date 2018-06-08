const mongoose = require('mongoose');

const cartItemSchema = mongoose.Schema({
    itemDetails:{
        type: String,
        required: true
    }
})

const cartItem = module.exports = mongoose.model('cartItem',cartItemSchema);