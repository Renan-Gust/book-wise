import Image from 'next/image';

import { User, BookOpen, Books , Users, Bookmark } from 'phosphor-react';

import { Header } from '@/components/Header';
import { InputFilter } from '@/components/InputFilter';
import { Rating } from '@/components/Rating';

import avatar from '/public/eu.webp';
import bookImg from 'public//images/books/o-hobbit.png';
import Head from 'next/head';
import { Layout } from '@/components/Layout';

export default function Profile(){
	return(
		<>
			<Head>
				<title>Book Wise - Perfil</title>
			</Head>

			<Layout>
				<Header img={<User size={32} color="#50B2C0" />} title="Perfil" />

				<section className="mt-8 flex gap-12">
					<div className='flex flex-col gap-12 flex-1'>
						<InputFilter placeholder='Buscar livro avaliado' fullWidth />

						<div className='flex flex-col gap-12'>
							<div>
								<h2 className='text-gray-300 text-sm mb-2'>Há 2 dias</h2>

								<article className='bg-gray-700 rounded-lg p-6 h-full"'>
									<div className='flex gap-6'>
										<Image
											src={bookImg}
											alt="book"
											height={134}
											width={98}
											className="h-[134px]"
										/>

										<div className='flex flex-col justify-between'>
											<div>
												<h3 className='text-gray-100 font-bold text-lg mb-1'>Entendendo Algoritmos</h3>
												<p className='text-gray-400 text-sm'>Aditya Bhargava</p>
											</div>

											<Rating rate={5} />
										</div>
									</div>

									<p className='text-gray-300 text-sm mt-6 line-clamp-3'>Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin tristique pretium quam. Mollis et luctus amet sed convallis varius massa sagittis. Proin sed proin at leo quis ac sem. Nam donec accumsan curabitur amet tortor quam sit. Bibendum enim sit dui lorem urna amet elit rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam amet integer pellentesque.</p>
								</article>
							</div>

							<div> 
								<h2 className='text-gray-300 text-sm mb-2'>Há 4 meses</h2>

								<article className='bg-gray-700 rounded-lg p-6 h-full"'>
									<div className='flex gap-6'>
										<Image
											src={bookImg}
											alt="book"
											height={134}
											width={98}
											className="h-[134px]"
										/>

										<div className='flex flex-col justify-between'>
											<div>
												<h3 className='text-gray-100 font-bold text-lg mb-1'>Entendendo Algoritmos</h3>
												<p className='text-gray-400 text-sm'>Aditya Bhargava</p>
											</div>

											<Rating rate={5} />
										</div>
									</div>

									<p className='text-gray-300 text-sm mt-6'>Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin tristique pretium quam. Mollis et luctus amet sed convallis varius massa sagittis. Proin sed proin at leo quis ac sem. Nam donec accumsan curabitur amet tortor quam sit. Bibendum enim sit dui lorem urna amet elit rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam amet integer pellentesque.</p>
								</article>
							</div>
						</div>
					</div>

					<div className='flex-1 md:border-l-[1px] md:border-gray-700 pl-16 max-h-[555px] h-full'>
						<article className='flex flex-col items-center after:content-[""] after:w-8 after:h-1 after:bg-gradient-horizontal after:rounded-full after:my-8'>
							<Image
								src={avatar}
								alt=""
								height={72}
								width={72}
								className="border border-green-100 rounded-full h-[72px]"
							/>

							<div className='mt-5 text-center'>
								<h1 className='text-gray-100 font-bold text-xl'>Cristofer Rosser</h1>
								<span className='text-gray-400  text-sm'>membro desde 2019</span>
							</div>
						</article>
                        
						<div className='flex flex-col gap-10'>
							<article className='flex items-center gap-5'>
								<BookOpen size={32} color="#50B2C0" />

								<div>
									<span className='text-gray-200 font-bold block'>3853</span>
									<span className='text-gray-300 text-sm block'>Página lidas</span>
								</div>
							</article>

							<article className='flex items-center gap-5'>
								<Books size={32} color="#50B2C0" />

								<div>
									<span className='text-gray-200 font-bold block'>10</span>
									<span className='text-gray-300 text-sm block'>Livros avaliados</span>
								</div>
							</article>

							<article className='flex items-center gap-5'>
								<Users size={32} color="#50B2C0" />

								<div>
									<span className='text-gray-200 font-bold block'>8</span>
									<span className='text-gray-300 text-sm block'>Autores lidos</span>
								</div>
							</article>

							<article className='flex items-center gap-5'>
								<Bookmark size={32} color="#50B2C0" />

								<div>
									<span className='text-gray-200 font-bold block'>Computação</span>
									<span className='text-gray-300 text-sm block'>Categoria mais lida</span>
								</div>
							</article>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
}