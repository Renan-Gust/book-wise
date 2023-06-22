import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';

import { BookDetail } from './BookDetail';
import { Comments } from './Comments';
import { LoginModal } from '../LoginModal';
import { AddComment } from './AddComment';
import { Book } from '@/types/book';

interface DetailedBookModalProps {
    book: Book;
}

export function DetailedBookModal({ book }: DetailedBookModalProps) {
    return(
        <Dialog.Portal className='h-screen'>
            <Dialog.Overlay className='fixed w-screen h-screen inset-0 mix-blend-overlay bg-black opacity-60' />

            <Dialog.Content className="max-w-[660px] w-full fixed top-0 right-0 drop-shadow-detailed-book-modal h-full overflow-y-scroll">
                <Dialog.Close asChild>
                    <button className="IconButton absolute right-9 text-white pt-6" aria-label="Close">
                        <X size={24} color="#8D95AF" />
                    </button>
                </Dialog.Close>

                <div>
                    <div className='bg-gray-800 p-8 pt-16'>
                        <BookDetail book={book} />

                        <div className='mt-10'>
                            <div className='flex justify-between mb-4'>
                                <h2 className='text-gray-200 text-sm'>Avaliações</h2>

                                <Dialog.Root>
                                    <Dialog.Trigger asChild>
                                        <button className='text-purple-100 font-bold'>Avaliar</button>
                                    </Dialog.Trigger>

                                    <LoginModal />
                                </Dialog.Root>
                            </div>

                            <AddComment />
                            <Comments />
                        </div>
                    </div>
                </div>
            </Dialog.Content>
        </Dialog.Portal>
    )
}