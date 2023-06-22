import { use } from 'react';
import Image from 'next/image';

import { Bookmark, BookOpen } from 'phosphor-react';

import { Rating } from '../Rating';
import { api } from '@/lib/axios';
import { Book } from '@/types/book';

interface BookDetailProps {
    book: Book;
}

interface Rating {
    id: string;
    description: string;
    created_at: string;
    rate: number;
}

async function getBook(id: string){
    const data = await api.get(`/books/book/${id}`);
    return data.data;
}

export function BookDetail({ book }: BookDetailProps) {
    // const response = use(getBook(bookId));
    // console.log(response);
    // const rate = response.rating.reduce((acc: number, rating: Rating) => {
    //     acc += rating.rate
    // }, 0);

    // console.log(rate)

    return(
        <div className="bg-gray-700 rounded-lg p-6">
            <div className='flex flex-col md:flex-row gap-8'>
                <Image
                    src={book.cover_url}
                    alt="uma capa de livro"
                    height={242}
                    width={172}
                    className="h-[242px]"
                />

                <div className="flex flex-col justify-between w-full">
                    <div className='mb-4 md:mb-0'>
                        <h1 className="text-gray-100 font-bold md:text-lg mb-2">{book.name}</h1>
                        <span className="text-gray-300 text">{book.author}</span>
                    </div>

                    {/* <Rating rate={rate} ratingTotal={response.rating.lenght} /> */}
                </div>
            </div>

            <div className='mt-10'>
                <div className='py-6 border-t-[1px] border-gray-600 flex gap-1 md:gap-14'>
                    <div className='flex gap-4 items-center'>
                        <Bookmark size={24} color="#50B2C0" />

                        <div>
                            <h2 className='text-gray-300 text-sm'>Categoria</h2>
                            <span className='text-gray-200 font-bold'>Computação, educação</span>
                        </div>
                    </div>

                    <div className='flex gap-4 items-center'>
                        <BookOpen size={24} color="#50B2C0" />

                        <div>
                            <h2 className='text-gray-300 text-sm'>Páginas</h2>
                            <span className='text-gray-200 font-bold'>{book.total_pages}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}