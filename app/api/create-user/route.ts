import {PrismaClient} from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {``
        const data = await req.json();
        const user = prisma.user.create({
            data: {
                email: data.email,
                password: data.password
            }
        });
        if (user != null) {
            return NextResponse.json(user);
        } else {
            return NextResponse.error();
        }
    } catch (error) {
        console.log(error);
    }
}