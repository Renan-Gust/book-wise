import Image from 'next/image';

import { Rating } from './Rating';
import { Avatar } from './Avatar';
import { Book } from '@/types/book';
import { User } from '@/types/user';
import { dateFormatter } from '@/utils/formatter';

import bookImg from 'public//images/books/o-hobbit.png';

interface ShowComments {
    comments?: {
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
			<article
				className="p-6 bg-gray-700 rounded-lg min-h-[280px] h-full"
			>
				<header className="flex justify-between">
					<div className="flex gap-4">
						<Avatar />

						<div>
							<p className="text-gray-100">
                                Renan Gustavo
							</p>
							<span className="text-gray-400 text-sm">
                                Hoje
							</span>
						</div>
					</div>

					<Rating rate={5} />
				</header>

				<div className="flex gap-5 mt-8">
					<Image
						src={bookImg}
						alt="uma capa de livro"
						height={152}
						width={108}
						className="h-[152px]"
					/>

					<div>
						<h3 className="text-gray-100 font-bold">
                            O Hobbit
						</h3>
						<span className="text-gray-400 text-sm">
                            J.R.R Tolkien
						</span>
						<p className="mt-5 text-sm text-gray-300">
                            Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh...
						</p>
					</div>
				</div>
			</article>

			<article
				className="p-6 bg-gray-700 rounded-lg min-h-[280px] h-full"
			>
				<header className="flex justify-between">
					<div className="flex gap-4">
						<Avatar />

						<div>
							<p className="text-gray-100">
                                Renan Gustavo
							</p>
							<span className="text-gray-400 text-sm">
                                Hoje
							</span>
						</div>
					</div>

					<Rating rate={5} />
				</header>

				<div className="flex gap-5 mt-8">
					<Image
						src={bookImg}
						alt="uma capa de livro"
						height={152}
						width={108}
						className="h-[152px]"
					/>

					<div>
						<h3 className="text-gray-100 font-bold">
                            O Hobbit
						</h3>
						<span className="text-gray-400 text-sm">
                            J.R.R Tolkien
						</span>
						<p className="mt-5 text-sm text-gray-300">
                            Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh...
						</p>
					</div>
				</div>
			</article>

			<article
				className="p-6 bg-gray-700 rounded-lg min-h-[280px] h-full"
			>
				<header className="flex justify-between">
					<div className="flex gap-4">
						<Avatar />

						<div>
							<p className="text-gray-100">
                                Renan Gustavo
							</p>
							<span className="text-gray-400 text-sm">
                                Hoje
							</span>
						</div>
					</div>

					<Rating rate={5} />
				</header>

				<div className="flex gap-5 mt-8">
					<Image
						src={bookImg}
						alt="uma capa de livro"
						height={152}
						width={108}
						className="h-[152px]"
					/>

					<div>
						<h3 className="text-gray-100 font-bold">
                            O Hobbit
						</h3>
						<span className="text-gray-400 text-sm">
                            J.R.R Tolkien
						</span>
						<p className="mt-5 text-sm text-gray-300">
                            Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh...
						</p>
					</div>
				</div>
			</article>
		</section>
	);
}