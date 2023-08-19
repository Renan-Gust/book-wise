import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { Nunito_Sans } from 'next/font/google';

const nunitoSans = Nunito_Sans({
	weight: ['400', '700'],
	subsets: ['latin']
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={nunitoSans.className}>
			<Component {...pageProps} />
		</main>
	);
}
