import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Order from "@/lib/models/Order";

export async function GET(request, {params}) {
    try {
        const {id} = params;
        await dbConnect();
        const order = await Order.findById(id).populate('products.product').populate('user');

        if(!order) {
            return NextResponse.json({ message: 'Order not found'}, {status: 404})
        }

        return NextResponse.json(order, {status: 200})
    } catch (error) {
        return NextResponse.json({message: 'Failed to get order', error: error}, {status: 500});
    }
}