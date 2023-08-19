import { ReactNode } from 'react';

import { BookProvider } from '@/contexts/BookContext';
import { Menu } from './Menu';

interface LayoutProps {
    children: ReactNode;   
}

export function Layout({ children }: LayoutProps) {
	return(
		<section className="p-5 flex gap-x-12 flex-col xl:flex-row">
			<Menu />

			<article className="mt-[52px] flex-1">
				<BookProvider>
					{ children }
				</BookProvider>
			</article>
		</section>
	);
}