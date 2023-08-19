import { Star } from 'phosphor-react';

interface RatingProps {
    ratingTotal?: number;
    rate: number;
}

export function Rating({ ratingTotal, rate }: RatingProps) {
	return(
		<div>
			<div className="flex gap-1">
				{Array.from({ length: rate }).map((_, index) => (
					<Star
						size={16}
						color="#8381D9"
						style={{ fill: '#8381D9' }}
						key={index}
					/>
				))}
				{Array.from({ length: 5 - rate }).map((_, index) => (
					<Star size={16} color="#8381D9" key={index} />
				))}   
			</div>

			{ratingTotal && <span className='text-gray-400 text-sm'>{ratingTotal} avaliações</span>}
		</div>
	);
}