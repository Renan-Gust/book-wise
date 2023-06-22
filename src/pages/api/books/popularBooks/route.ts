import { NextRequest, NextResponse } from "next/server"

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

interface popularBooks {
    book_id: string;
    rate: number;
    total: number;
    book: {
        id: string;
        name: string;
        author: string;
        summary: string;
        cover_url: string;
        total_pages: number;
    };
}

export async function GET(req: NextRequest, res: NextResponse){
    const books = await prisma.rating.findMany({
        include: {
            book: true
        }
    });

    const popularBooks = Object.values(books.reduce<{ [key: string]: popularBooks }>((acc, currentValue) => {
        const { book_id, rate, book } = currentValue;

        if (acc[book_id]) {
            acc[book_id].rate += rate;
            acc[book_id].total++;
        } else {
            acc[book_id] = { book_id, rate, book, total: 1 };
        }

        return acc;
    }, {}));

    const sortedPopularBooks = popularBooks.sort((a, b) => b.rate - a.rate);
    return NextResponse.json(sortedPopularBooks.splice(0, 3));
}