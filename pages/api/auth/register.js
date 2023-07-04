import bcrypt from 'bcrypt'
import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export default async function register(req) {
    
    const { first_name, email, password, confirm_password } = await req.body;

    if (!first_name || !email || !password || !confirm_password) {
        return NextResponse({ status: 400, body: { message: 'Please fill all fields' } })
    };

    if (password !== confirm_password) {
        return NextResponse({ status: 400, body: { message: 'Passwords do not match' } })
    };

    const existingUser = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (existingUser) {
        return NextResponse({ status: 400, body: { message: 'User already exists' } })
    };

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await prisma.user.create({
        data: {
            email,
            password: hashedPassword,
        },
    });


    return NextResponse.json({ message: 'User created successfully', user })

}
