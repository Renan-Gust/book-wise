'use client';

import { MouseEvent, useState } from 'react';

const categories: string[] = ['Tudo', 'Computação', 'Educação', 'Fantasia', 'Ficção científica', 'Horror', 'HQs', 'Suspense'];

export function Categories() {
	const [categoriesSelected, setCategoriesSelected] = useState<string[]>(['Tudo']);

	function handleSelectCategory(event: MouseEvent) {
		const target = event.currentTarget.classList;
		const categoryName = event.currentTarget.children[0].textContent;

		// Verificar se a categoria é diferente de 'tudo' se sim(desmarcar a 'tudo' e marcar a selecionada), se não acontece nada
		// Se uma outra categoria estiver selecionada não sendo a 'tudo', quando ele clicar na 'tudo' desmarcar todas e selecionar a 'tudo'

		if(categoriesSelected.find(element => element === categoryName)){
			console.log('tem');
		} else{
			console.log('não tem');
		}

		target.add('bg-purple-200');
		target.add('text-gray-100');
		target.remove('text-purple-100');
		target.remove('border');

		target.add('selected');
	}

	return(
		<section className='my-10 flex gap-3 hidden lg:flex'>
			{categories.map((category, index) => (
				<div
					className={'border border-purple-100 rounded-full h-[34px] cursor-pointer flex justify-center items-center hover:bg-purple-200 text-purple-100 hover:text-gray-100 hover:transition'}
					key={index}
					onClick={(event) => handleSelectCategory(event)}
				>
					<span className='py-1 px-4'>{ category }</span>
				</div>
			))}
		</section>
	);
}