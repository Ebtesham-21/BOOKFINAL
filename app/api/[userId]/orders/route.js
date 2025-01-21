import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Order from "@/lib/models/Order";

export async function GET(request, {params}) {
    try {
        const {userId} = params;
        await dbConnect();
        const orders = await Order.find({ user: userId}).populate('products.product').populate('user');
        return NextResponse.json(orders, {status: 200})
    } catch (error) {
        return NextResponse.json({ message: 'Failed to get orders', error: error}, {status: 500});
    }
}

