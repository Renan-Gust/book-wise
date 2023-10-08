import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { ChartLineUp, ArrowRight } from 'phosphor-react';

import { CommentsMostRecent } from '@/components/CommentsMostRecent';
import { Book } from '@/components/Book';
import { LoadingBook } from '@/components/Book/LoadingBook';
import { Header } from '@/components/Header';
import { Layout } from '@/components/Layout';
import { api } from '@/lib/axios';

export default function Home(){
    const [popularBooks, setPopularBooks] = useState([]);
    const [popularBooksLoading, setPopularBooksLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setPopularBooksLoading(true);

            const response = await api.get('/popular-books');
            setPopularBooks(response.data);

            setPopularBooksLoading(false);
        })();
    }, []);

    return(
        <>
            <Head>
                <title>Book Wise - Início</title>
            </Head>

            <Layout>
                <Header img={<ChartLineUp size={32} color="#50B2C0" />} title="Início" />

                <section className="mt-10 flex flex-col md:flex-row md:gap-x-2 lg:gap-x-12">
                    <article className="w-full md:max-w-[608px] 2lg:max-w-[674px] 2xl:max-w-[748px] 3xl:max-w-[1228px] md:flex-1 lg:flex-initial">
                        <h2 className="text-gray-100 text-sm mb-4">Avaliações mais recentes</h2>

                        <CommentsMostRecent />
                    </article>

                    <article className="w-full md:w-[324px] mt-10 md:mt-0">
                        <div className="flex justify-between mb-4">
                            <h2 className="text-gray-100 text-sm">Livros populares</h2>

                            <Link href="/explorar" className="text-purple-100 font-bold text-sm flex items-center gap-2">
                                Ver todos
                                <ArrowRight size={16} color="#8391D9" />
                            </Link>
                        </div>

                        <section className="flex flex-col gap-3">
                            {popularBooksLoading ?
                                <LoadingBook />
                                :
                                <Book type='small' books={popularBooks} />
                            }
                        </section>
                    </article>
                </section>
            </Layout>
        </>
    );
}