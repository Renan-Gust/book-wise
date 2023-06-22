import Image from 'next/image';

import { Rating } from './Rating';
import { Avatar } from './Avatar';
import { Book } from '@/types/book';
import { User } from '@/types/user';
import { dateFormatter } from '@/utils/formatter';

interface ShowComments {
    comments: {
        id: string;
        description: string;
        created_at: string;
        rate: number;
        book: Book;
        user: User;
    }[];
}

export function CommentsMostRecent({ comments }: ShowComments) {
    return(
        <section className="grid 2xl:grid-cols-2 3xl:grid-cols-comments gap-3">
            {comments.map(comment => (
                <article
                    className="p-6 bg-gray-700 rounded-lg min-h-[280px] h-full"
                    key={comment.id}
                >
                    <header className="flex justify-between">
                        <div className="flex gap-4">
                            <Avatar avatar_url={comment.user.avatar_url} />

                            <div>
                                <p className="text-gray-100">
                                    { comment.user.name }
                                </p>
                                <span className="text-gray-400 text-sm">
                                    { dateFormatter(comment.created_at) }
                                </span>
                            </div>
                        </div>

                        <Rating rate={comment.rate} />
                    </header>

                    <div className="flex gap-5 mt-8">
                        <Image
                            src={comment.book.cover_url}
                            alt="uma capa de livro"
                            height={152}
                            width={108}
                            className="h-[152px]"
                        />

                        <div>
                            <h3 className="text-gray-100 font-bold">
                                { comment.book.name }
                            </h3>
                            <span className="text-gray-400 text-sm">
                                { comment.book.author }
                            </span>
                            <p className="mt-5 text-sm text-gray-300">
                                { comment.book.summary }
                            </p>
                        </div>
                    </div>
                </article>
            ))}
        </section>
    );
}