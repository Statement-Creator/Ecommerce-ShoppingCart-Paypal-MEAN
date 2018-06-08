const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    itemName:{
        type:String,
        required:true
    },
    itemPrice:{
        type:String,
        required: true
    },
    itemPicture:{
        type:String,
        required:true
    }
});

const Item = module.exports = mongoose.model('Item',ItemSchema);