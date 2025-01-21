import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Product  from "@/lib/models/Product";

export async function GET() {
    try {
        await dbConnect();
        const products = await Product.find({});
        return NextResponse.json(products);
    } catch (error) {
        return NextResponse.json({message: 'Failed to fetch products'}, {status: 500});
    }
}

export async function POST(request) {
    try {
        await dbConnect();
        const {title, description, price, imageUrl, stock} = await request.json();
        const newProduct = new Product({title, description, price, imageUrl, stock});
        const savedProduct = await newProduct.save();
        return NextResponse.json(savedProduct, {status: 201});
    } catch (error) {
        return NextResponse.json({message: 'Failed to create product', error: error}, {status: 500});
    }
}