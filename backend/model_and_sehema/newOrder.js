const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

    orderId: {
        type: String,
        required: true,
        unique: true
    },

    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    products: [
        {
            productId: String,
            productName: String,
            quantity: Number,
            price: Number,
            images: [String]
        }
    ],

    totalAmount: Number,

    paymentMethod: String,

    address: {
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        pincode: {
            type: String,
            required: true
        }
    },

    status: {
        type: String,
        default: 'Pending'
    }

}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);