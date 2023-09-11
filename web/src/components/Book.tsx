import Image from 'next/image';
import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import { Rating } from './Rating';
import { DetailedBookModal } from './DetailedBookModal/index';
import { Book as BookType } from '@/types/book';

interface BookProps {
    type: 'small' | 'large';
    books: BookType[];
}

export function Book({ type, books }: BookProps) {
    const [currentBook, setCurrentBook] = useState({} as BookType);

    return(
        <>
            <Dialog.Root>
                {books.map((book, index) => (
                    <Dialog.Trigger asChild key={index} onClick={() => setCurrentBook(book)}>
                        <article className={`p-6 border-[2px] border-transparent bg-gray-700 hover:border-[2px] hover:border-gray-600 hover:transition rounded-lg cursor-pointer ${type === 'small' ? 'h-[130px]' : 'h-[184px]'}`}>
                            <div className="flex gap-5">
                                <Image
                                    src={book.cover_url}
                                    alt="uma capa de livro"
                                    height={type === 'small' ? 94 : 152}
                                    width={type === 'small' ? 64 : 108}
                                    className={`${type === 'small' ? 'h-[94px]' : 'h-[152px]'}`}
                                />
        
                                <div className="flex flex-col justify-between w-full">
                                    <div>
                                        <h3 className="text-gray-100 font-bold">{book.name}</h3>
                                        <span className="text-gray-400 text-sm">{book.author}</span>
                                    </div>
        
                                    <Rating rate={book.rate!} />
                                </div>
                            </div>
                        </article>
                    </Dialog.Trigger>
                ))}

                <DetailedBookModal book={currentBook} />
            </Dialog.Root>
        </>
    );
}