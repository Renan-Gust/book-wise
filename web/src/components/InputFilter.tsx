import { InputHTMLAttributes, useState, useEffect, SetStateAction, Dispatch } from 'react';

import { MagnifyingGlass } from 'phosphor-react';
import { api } from '@/lib/axios';
import { Book } from '@/types/book';

interface InputFilterProps extends InputHTMLAttributes<HTMLElement> {
    fullWidth?: boolean;
    returnFiltered: Dispatch<SetStateAction<Book[]>>;
}

let searchTimer: any = null;

export function InputFilter({ fullWidth, returnFiltered, ...props }: InputFilterProps) {
    const [search, setSearch] = useState('');

    useEffect(() => {
        clearTimeout(searchTimer);

        searchTimer = setTimeout(() => {
            searchBooks();
        }, 2000);
    }, [search]);

    async function searchBooks(){
        const response = await api.get(`/books?search=${search}`);
        returnFiltered(response.data);
    }

    return(
        <div className={`${ fullWidth ? 'w-full' : 'w-[433px]' } h-12 relative `}>
            <input
                {...props}
                type="text"
                className='w-full h-full rounded py-3.5 px-5 border border-gray-500 text-gray-400 placeholder:text-sm bg-transparent outline-0 focus:text-gray-200 focus:ring-2 focus:ring-green-200 focus:ring-inset focus:border-0'
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />

            <MagnifyingGlass size={20} color="#303F73" className="h-5 absolute top-3.5 right-3.5" />
        </div>
    );
}