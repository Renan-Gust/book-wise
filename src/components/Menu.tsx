import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { ChartLineUp, SignIn, User, Binoculars } from 'phosphor-react';

import logoImg from '../../public/images/logo.svg';
import euImg from '../../public/eu.webp';

export function Menu() {
	const pathname = usePathname();

	const [currentItemActive, setCurrentItemActive] = useState<'inicio' | 'explorar' | 'perfil' | string>('inicio');

	useEffect(() => {
		setCurrentItemActive(pathname.split('/')[1]);
	}, []);

	const activeClass = 'font-bold before:content-[""] before:w-1 before:h-6 before:bg-gradient-vertical before:absolute before:-left-4 before:rounded-full';

	return(
		<article className="w-[232px] h-[95.5vh] bg-gray-700 rounded-xl hidden xl:block">
			<div className="py-[52px] px-[24px] h-full">
				<div className="h-32">
					<Image
						src={logoImg}
						alt="book wise logo"
						height={32}
						width={128}
						className="mx-auto"
					/>
				</div>

				<nav className="h-[calc(100%-128px)] flex flex-col justify-between items-center">
					<ul className="flex flex-col gap-4 justify-center">
						<li
							className={`${currentItemActive === 'inicio' ? 'text-gray-100' : 'text-gray-400'} cursor-pointer relative hover:text-gray-100 hover:transition ${currentItemActive === 'inicio' && activeClass}`}
							onClick={() => setCurrentItemActive('inicio')}
						>
							<Link href='/inicio' className='flex gap-3'>
								<ChartLineUp size={24} color="#F8F9FC" />
                                Início
							</Link>
						</li>

						<li
							className={`${currentItemActive === 'explorar' ? 'text-gray-100' : 'text-gray-400'} cursor-pointer relative hover:text-gray-100 hover:transition ${currentItemActive === 'explorar' && activeClass}`} 
							onClick={() => setCurrentItemActive('explorar')}
						>
							<Link href='/explorar' className='flex gap-3'>
								<Binoculars size={24} color="#F8F9FC" />
                                Explorar
							</Link>
						</li>

						<li
							className={`${currentItemActive === 'perfil' ? 'text-gray-100' : 'text-gray-400'} cursor-pointer relative hover:text-gray-100 hover:transition ${currentItemActive === 'perfil' && activeClass}`}
							onClick={() => setCurrentItemActive('perfil')}
						>
							<Link href='/perfil' className='flex gap-3'>
								<User size={24} color="#F8F9FC" />
                                Perfil
							</Link>
						</li>
					</ul>

					<ul>
						<li className="text-gray-200 font-bold items-center cursor-pointer">
							{/* <Image
                                src={euImg}
                                alt=""
                                height={32}
                                width={32}
                                className="border border-green-100 rounded-full h-[32px]"
                            /> */}

							<Link href='/' className='flex gap-3'>
                                Fazer login
								<SignIn size={24} color="#50B2C0" />
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</article>
	);
}