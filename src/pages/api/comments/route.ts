import { NextRequest, NextResponse } from "next/server"

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function GET(req: NextRequest, res: NextResponse){
    const comments = await prisma.rating.findMany({
        orderBy:[
            {
                created_at: 'desc'
            }
        ],
        include: {
            user: true,
            book: true
        },
        take: 3
    });
  
    return NextResponse.json(comments)
}