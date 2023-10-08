interface LoadingBookProps {
    length?: number;
}

export function LoadingBook({ length }: LoadingBookProps) {
    return (
        <>
            {Array.from({ length: length ? length : 5 }).map((_, index) => (
                <article className="p-6 bg-gray-700 rounded-lg h-[130px]" key={index}>
                    <div className="flex gap-5">
                        <div className="!h-[94px] w-16 skeleton-item"></div>
        
                        <div className="flex flex-col justify-between w-full">
                            <div>
                                <div className="w-44 skeleton-item"></div>
                                <div className="w-36 skeleton-item mt-2"></div>
                            </div>
        
                            <div className="w-24 skeleton-item"></div>
                        </div>
                    </div>
                </article>
            ))}
        </>
    );
}