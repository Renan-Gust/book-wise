import { useState, useEffect, Dispatch, SetStateAction } from 'react';

import { api } from '@/lib/axios';
import { Book } from '@/types/book';

interface CategoriesProps {
	books: Book[];
	setBooksFiltered: Dispatch<SetStateAction<Book[]>>;
}

export function Categories({ books, setBooksFiltered }: CategoriesProps) {
    const [categories, setCategories] = useState<string[]>([]);
    const [categorySelected, setCategorySelected] = useState('Tudo');

    useEffect(() => {
        (async () => {
            const response = await api.get('/categories');
            setCategories(response.data);
        })();
    }, []);

    function handleSelectCategory(categoryName: string) {
        setCategorySelected(categoryName);

        if(categoryName === 'Tudo'){
            setBooksFiltered(books);
        } else{
            const booksFiltered: Book[] = [];

            books.map((book) => {
                if(book.categories?.indexOf(categoryName) !== -1){
                    booksFiltered.push(book);
                }
            });

            setBooksFiltered(booksFiltered);
        }
    }

    return(
        <section className='my-10 gap-3 hidden lg:grid grid-cols-8'>
            <div
                className={`border-purple-100 rounded-full h-[34px] cursor-pointer flex justify-center items-center hover:bg-purple-200 hover:text-gray-100 hover:transition ${categorySelected === 'Tudo' ? 'bg-purple-200 text-gray-100' : 'border text-purple-100'}`}
                onClick={() => handleSelectCategory('Tudo')}
            >
                <span className='py-1 px-4'>Tudo</span>
            </div>

            {categories.map((category, index) => (
                <div
                    className={`border-purple-100 rounded-full h-[34px] cursor-pointer flex justify-center items-center hover:bg-purple-200 hover:text-gray-100 hover:transition ${categorySelected === category ? 'bg-purple-200 text-gray-100' : 'border text-purple-100'}`}
                    key={index}
                    onClick={() => handleSelectCategory(category)}
                >
                    <span className='py-1 px-4'>{ category }</span>
                </div>
            ))}
        </section>
    );
}