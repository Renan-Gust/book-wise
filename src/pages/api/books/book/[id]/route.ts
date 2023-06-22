import { NextRequest, NextResponse } from "next/server"

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function GET(req: NextRequest, { params }: { params: { id: string } }){
    const id = params.id;

    const rating = await prisma.rating.findMany({
        where: {
            book_id: id
        }
    });

    const book = await prisma.book.findFirst({
        where: {
            id
        }
    });
  
    return NextResponse.json([
        {
            book,
            rating
        }
    ]);
}