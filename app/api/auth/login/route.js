import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/lib/models/User";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function POST(request) {
    try { 
        await dbConnect();
        const {username, password} = await request.json();

        const user = await User.findOne({username});
        if(!user) {
            return NextResponse.json({message: 'Invalid credentials'}, {status: 401});
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid) {
            return NextResponse.json({ message: 'Invalid credentials'}, {status: 401});
        }

        const token = jwt.sign({userId: user._id, isAdmin: user.isAdmin}, 'secretkey', {expiresIn: '1h'})

        return NextResponse.json({message: 'Logged IN Successfully', token, isAdmin: user.isAdmin}, {status: 200});


    }
    catch (error) {
        return NextResponse.json({message: 'Login Failed', error: error}, {status: 500});
    }
}