import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Rating } from '../Rating';
import { Avatar } from '../Avatar';
import { dateFormatter } from '@/utils/formatter';
import { api } from '@/lib/axios';
import { CommentMostRecentLoading } from './CommentsMostRecentLoading';

interface Comments {
	name: string;
	avatar_url: string;
	rate: number;
	book_name: string;
	cover_url: string;
	author: string;
	summary: string;
	created_at: string;
}

export function CommentsMostRecent() {
    const [comments, setComments] = useState<Comments[]>([]);
    const [commentsLoading, setCommentsLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setCommentsLoading(true);

            const commentsResponse = await api.get('/comments-most-recent');
            setComments(commentsResponse.data);

            setCommentsLoading(false);
        })();
    }, []);

    return(
        <section className="grid 2xl:grid-cols-2 3xl:grid-cols-comments gap-3">
            {commentsLoading ?
                <CommentMostRecentLoading />
                :
                comments.length > 0 && comments.map((comment, index) => (
                    <article
                        className="p-6 bg-gray-700 rounded-lg min-h-[280px] h-full"
                        key={index}
                    >
                        <header className="flex justify-between">
                            <div className="flex gap-4">
                                <Avatar avatar_url={comment.avatar_url} />

                                <div>
                                    <p className="text-gray-100">
                                        {comment.name}
                                    </p>
                                    <span className="text-gray-400 text-sm">
                                        {dateFormatter(comment.created_at)}
                                    </span>
                                </div>
                            </div>

                            <Rating rate={comment.rate} />
                        </header>

                        <div className="flex gap-5 mt-8">
                            <Image
                                src={comment.cover_url}
                                alt={comment.book_name}
                                height={152}
                                width={108}
                                className="h-[152px]"
                            />

                            <div>
                                <h3 className="text-gray-100 font-bold">
                                    {comment.book_name}
                                </h3>
                                <span className="text-gray-400 text-sm">
                                    {comment.author}
                                </span>
                                <p className="mt-5 text-sm text-gray-300">
                                    {comment.summary}
                                </p>
                            </div>
                        </div>
                    </article>
                ))
            }
        </section>
    );
}