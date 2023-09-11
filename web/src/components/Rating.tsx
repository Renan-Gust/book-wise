import { Star } from 'phosphor-react';

interface RatingProps {
    totalRating?: number;
    rate: number;
}

export function Rating({ totalRating, rate }: RatingProps) {
    return(
        <div>
            <div className="flex gap-1">
                {Array.from({ length: rate }).map((_, index) => (
                    <Star
                        size={16}
                        color="#8381D9"
                        weight="fill"
                        key={index}
                    />
                ))}
                {Array.from({ length: 5 - rate }).map((_, index) => (
                    <Star size={16} color="#8381D9" key={index} />
                ))}   
            </div>

            {totalRating && <span className='text-gray-400 text-sm'>{totalRating} avaliações</span>}
        </div>
    );
}