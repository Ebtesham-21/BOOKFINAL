import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Order from "@/lib/models/Order";
import jwt from 'jsonwebtoken';

export async function POST(request) {
    try {
        await dbConnect();
        const {products, totalAmount, shippingAddress, token} = await request.json();

        if(!token) {
            return NextResponse.json({ message: 'Unauthorized'}, {status: 401})
        }
        const decodedToken = jwt.verify(token, 'secretkey');

        const userId = decodedToken.userId;

        const newOrder = new Order({ products, user: userId, totalAmount, shippingAddress});
        const savedOrder = await newOrder.save();
        return NextResponse.json(savedOrder, {status: 201});
    } catch (error) {
        return NextResponse.json({message: 'Failed to create order',  error: error}, {status: 500});
    }
}