const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true,
        unique: true
    },
    productName: {
        type: String,
        required: true
    },

    category: {
        type: String

    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    unit: {
        type: String
    },
    brand: {
        type: String
    },
    stock: {
        type: Number,
        default: 0
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    image: {
        type: String
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    reviews: {
        type: Number,
        default: 0
    },
    discount: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

const testProduct = mongoose.model("testProduct", productSchema)

module.exports = testProduct;