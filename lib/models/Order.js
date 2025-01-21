import mongoose from "mongoose";
import Product from "./Product";

const orderSchema = new mongoose.Schema({
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                min: 1
            }
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    totalAmount: {
        type: Number,
        required: true,
        min: 0
    },
    shippingAddress: {
        type: Object,
        required: true,
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['pending', 'processing', 'shipped', 'delivered'],
        default: 'pending'
    }
});

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

export default Order;