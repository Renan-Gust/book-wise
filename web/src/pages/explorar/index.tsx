import { Binoculars } from 'phosphor-react';

import { Book } from '@/components/Book';
import { Header } from '@/components/Header';
import { InputFilter } from '@/components/InputFilter';
import { Categories } from '@/components/Categories';
import Head from 'next/head';
import { Layout } from '@/components/Layout';

export default function Explorar(){
	return(
		<>
			<Head>
				<title>Book Wise - Explorar</title>
			</Head>

			<Layout>
				<div className='flex flex-wrap items-center justify-between gap-10'>
					<Header img={<Binoculars  size={32} color="#50B2C0" />} title="Explorar" />
					<InputFilter placeholder="Buscar livro ou autor" />
				</div>

				<Categories />

				<section className="grid md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-5 gap-5">
					{Array(15).fill(0).map((_: any, index: number) => (
						<Book type="large" key={index} />
					))}
				</section>
			</Layout>
		</>
	);
}