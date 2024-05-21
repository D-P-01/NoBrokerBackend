// models/Post.js
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    address: { type: String, required: true },
    price: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true },
    FlatNo: { type: String, required: true },
    email: { type: String, required: true },
    mobileNo: { type: String, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    landmark: { type: String},
    roomType: { type: String, required: true },
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Post', PostSchema);
