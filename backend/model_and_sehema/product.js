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
        image: String,
        name: String,
        color: String
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
    images: [String],
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
    },
    tags: ["New", "Hot", "Sale"]
}, {
    timestamps: true
});

const product = mongoose.model("Product", productSchema)

module.exports = product;