import { NextRequest, NextResponse } from "next/server"
import { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function handler(req: NextApiRequest, res: NextApiResponse){
    const comments = await prisma.rating.findMany({
        orderBy: [
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

    console.log(comments, 'r')
  
    return res.status(200).json({r: 'rn'});
}