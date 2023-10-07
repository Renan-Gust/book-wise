import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Binoculars } from 'phosphor-react';

import { Book } from '@/components/Book';
import { Header } from '@/components/Header';
import { InputFilter } from '@/components/InputFilter';
import { Categories } from '@/components/Categories';
import { Layout } from '@/components/Layout';
import { api } from '@/lib/axios';
import { Book as BookType } from '@/types/book';

export default function Explorar(){
    const [books, setBooks] = useState<BookType[]>([]);
    const [booksFiltered, setBooksFiltered] = useState<BookType[]>([]);

    useEffect(() => {
        (async () => {
            const response = await api.get('/books');
            setBooks(response.data);
            setBooksFiltered(response.data);
        })();
    }, []);

    return(
        <>
            <Head>
                <title>Book Wise - Explorar</title>
            </Head>

            <Layout>
                <div className='flex flex-wrap items-center justify-between gap-10'>
                    <Header img={<Binoculars  size={32} color="#50B2C0" />} title="Explorar" />
                    <InputFilter placeholder="Buscar livro ou autor" returnFiltered={setBooksFiltered} />
                </div>

                <Categories books={books} setBooksFiltered={setBooksFiltered} />

                <section className="grid md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-5 gap-5">
                    <Book type="large" books={booksFiltered} />
                </section>
            </Layout>
        </>
    );
}