import { Glasses } from 'lucide-react';

import { Book } from '@/components/Book';
import { Header } from '@/components/Header';
import { InputFilter } from '@/components/InputFilter';
import { Categories } from '@/components/Categories';

export const metadata = {
    title: 'Explorar'
};

export default function Explorar(){
    return(
        <>
            <div className='flex flex-wrap items-center justify-between gap-10'>
                <Header img={<Glasses  size={32} color="#50B2C0" />} title="Explorar" />
                <InputFilter placeholder="Buscar livro ou autor" />
            </div>

            <Categories />

            <section className="grid md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-5 gap-5">
                {Array(15).fill(0).map((_: any, index: number) => (
                    <Book type="large" key={index} />
                ))}
            </section>
        </>
    );
}