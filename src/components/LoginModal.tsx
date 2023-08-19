import * as Dialog from '@radix-ui/react-dialog';

import { X } from 'phosphor-react';

import { Button } from './Button';

export function LoginModal() {
	return(
		<Dialog.Portal className='flex justify-center items-center'>
			<Dialog.Overlay className='fixed w-screen h-screen inset-0 bg-black opacity-60' />

			<Dialog.Content className="max-w-[516px] w-full fixed top-2/4 left-2/4 z-50 -translate-y-2/4 -translate-x-2/4 bg-gray-700 rounded-lg py-14 px-4">
				<Dialog.Close asChild>
					<button className="IconButton absolute top-0 right-4 text-white pt-4" aria-label="Close">
						<X size={24} color="#8D95AF" />
					</button>
				</Dialog.Close>

				<div>
					<h1 className='text-gray-200 font-bold mb-10 text-center'>Faça login para deixar sua avaliação</h1>

					<div className='flex flex-col gap-4 items-center'>
						<Button text="Entrar com Goggle" type="google" />
						<Button text="Entrar com GitHub" type="github" />
					</div>
				</div>
			</Dialog.Content>
		</Dialog.Portal>
	);
}