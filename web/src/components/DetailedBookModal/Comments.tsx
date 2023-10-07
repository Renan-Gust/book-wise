import { useEffect, useState } from 'react';

import { Rating } from '../Rating';
import { Avatar } from '../Avatar';
import { api } from '@/lib/axios';
import { dateFormatter } from '@/utils/formatter';

interface CommentsProps {
	bookId: string;
}

interface Comments {
	name: string;
	avatar_url: string;
	description: string;
	rate: number;
	created_at: string;
}

export function Comments({ bookId }: CommentsProps) {
    const [comments, setComments] = useState<Comments[]>([]);

    useEffect(() => {
        (async () => {
            const response = await api.get(`/book/${bookId}/comments`);
            setComments(response.data);
        })();
    }, []);

    return(
        <div className='flex flex-col gap-3'>
            {comments ?
                comments.map((comment, index) => (
                    <div className='bg-gray-700 rounded-lg p-6' key={index}>
                        <header className='flex justify-between'>
                            <div className="flex gap-4">
                                <Avatar avatar_url={comment.avatar_url} />
        
                                <div>
                                    <p className="text-gray-100 font-bold">{comment.name}</p>
                                    <span className="text-gray-400 text-sm">{dateFormatter(comment.created_at)}</span>
                                </div>
                            </div>
        
                            <Rating rate={comment.rate} />
                        </header>
        
                        <p className='text-sm text-gray-300 mt-5'>{comment.description}</p>
                    </div>
                ))
                :
                <span className='text-gray-300 text-lg text-center mt-4'>Sem comentários</span>
            }
        </div>
    );
}