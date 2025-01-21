import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Product from "@/lib/models/Product";

export async function GET(request, {params}) {
    try {
        const {id} = params;
        await dbConnect();
        const product = await Product.findById(id);
        if(!product) {
            return NextResponse.json({message: 'Product not found'}, {status: 404});
        }
        return NextResponse.json(product);

    } catch (error) {
        return NextResponse.json({message: 'Failed to fetch product'}, {status: 500});
    }
}

export async function PUT(request, {params}) {
    try {
        const {id} = params;
        await dbConnect();
        const {title, description, price, imageUrl, stock} = await request.json();
        const updatedProduct = await Product.findByIdAndUpdate(id, {title, description, price, imageUrl, stock}, {new:true});
        if(!updatedProduct) {
            return NextResponse.json({message:'Product not found'}, {status: 404});
        }
        return NextResponse.json(updatedProduct, {status: 200});
    } catch (error) {
        return NextResponse.json({message: 'Failed to update product', error: error}, {status: 500});
    }
}

export async function DELETE(request, {params}) {
    try {
        const { id } = params;
        await dbConnect();
        const deletedProduct = await Product.findByIdAndDelete(id);
        if(!deletedProduct) {
            return NextResponse.json({message: 'Product not found'}, {status: 404});
        }

        return NextResponse.json({message: 'Product deleted successfully'}, {status: 200});
    } catch (error) {
        return NextResponse.json({ message: 'Failed to delete product', error: error}, {status: 500});
    }
}