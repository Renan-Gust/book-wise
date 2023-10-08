import Head from 'next/head';
import Image from 'next/image';

import { Button } from '@/components/Button';

import bgImg from 'public/images/bg-login.webp';

export default function Home() {
    return(
        <>
            <Head>
                <title>Book Wise - Login</title>
            </Head>

            <section className="h-screen p-5 flex flex-wrap">
                <article className="w-full h-80 mb-5 lg:w-auto lg:h-full lg:mb-0">
                    <Image
                        src={bgImg}
                        alt="Foto de background"
                        height={912}
                        width={598}
                        className="h-full w-full object-cover rounded-[10px]"
                    />
                </article>

                <article className="flex flex-col justify-center items-center flex-1">
                    <h1 className="text-gray-100 mb-0.5 text-2xl font-bold">Boas vindas!</h1>
                    <p className="text-gray-200">Faça seu login ou acesse como visitante.</p>

                    <div className="mt-10 flex flex-col items-center gap-y-4 w-full">
                        <Button text="Entrar com Goggle" type="google" />
                        <Button text="Entrar com GitHub" type="github" />
                        <Button text="Acessar como visitante" type="guest" />
                    </div>
                </article>
            </section>
        </>
    );
}