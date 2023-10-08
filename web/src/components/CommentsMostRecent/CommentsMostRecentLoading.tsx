export function CommentMostRecentLoading() {
    return (
        <>
            {Array.from({ length: 2 }).map((_, index) => (
                <article className="p-6 bg-gray-700 rounded-lg min-h-[280px] h-full" key={index}>
                    <header className="flex justify-between">
                        <div className="flex gap-4">
                            <div className="skeleton-item w-10 !rounded-full !h-[40px]"></div>
                            
                            <div>
                                <div className="w-20 skeleton-item"></div>
                                <div className="w-14 mt-2 skeleton-item"></div>
                            </div>
                        </div>
                            
                        <div className="w-24 skeleton-item"></div>
                    </header>
                            
                    <div className="flex gap-5 mt-8">
                        <div className="w-28 !h-[152px] skeleton-item"></div>
                            
                        <div className="w-full h-[152px]">
                            <div className="w-20 skeleton-item"></div>
                            <div className="w-28 mt-2"></div>
                            <div className="w-full mt-5 skeleton-item"></div>
                            <div className="w-full mt-1 skeleton-item"></div>
                            <div className="w-full mt-1 skeleton-item"></div>
                        </div>
                    </div>
                </article>
            ))}
        </>
    );
}