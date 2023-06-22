export default function Loading() {
    return (
        <section className="mt-10 flex flex-col md:flex-row md:gap-x-2 lg:gap-x-12">
            <article className="w-full md:max-w-[608px] 2lg:max-w-[674px] 2xl:max-w-[748px] 3xl:max-w-[1228px] md:flex-1 lg:flex-initial">
                <h2 className="bg-gray-700 w-full h-5 rounded-lg mb-4 skeleton-item ms2000"></h2>

                <section className="grid 2xl:grid-cols-2 3xl:grid-cols-comments gap-3">
                    {Array.from({ length: 2 }).map((_, index) => (
                        <article className="bg-gray-700 rounded-lg min-h-[280px] h-full skeleton-item" key={index}></article>
                    ))}
                </section>
            </article>

            <article className="w-full md:w-[324px] mt-10 md:mt-0">
                <div className="flex justify-between mb-4">
                    <h2 className="bg-gray-700 w-full h-5 rounded-lg skeleton-item ms2000"></h2>
                </div>

                <section className="flex flex-col gap-3">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <article className="rounded-lg bg-gray-700 h-[130px] skeleton-item" key={index}></article>
                    ))}
                </section>
            </article>
        </section>
    );
}