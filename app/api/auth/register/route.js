
import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/lib/models/User";

export async function POST(request) {
    try{
        await dbConnect();
        const {username, password} = await request.json();

        const existingUser = await User.findOne({username});

        if(existingUser) {
            return NextResponse.json({message: 'Username already exists'}, {status: 400});
        }

        const newUser = new User({ username, password});
        const savedUser = await newUser.save();

        return NextResponse.json(savedUser, {status: 201});
    } catch (error) {
        return NextResponse.json({message: 'Failed to create user'}, {status: 500});
    }
}