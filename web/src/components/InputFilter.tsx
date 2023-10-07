import { InputHTMLAttributes, useState, useEffect } from 'react';

import { MagnifyingGlass } from 'phosphor-react';

interface InputFilterProps extends InputHTMLAttributes<HTMLElement> {
    fullWidth?: boolean;
}

let searchTimer: any = null;

export function InputFilter({ fullWidth, ...props }: InputFilterProps) {
    const [search, setSearch] = useState('');

    useEffect(() => {
        clearTimeout(searchTimer);

        searchTimer = setTimeout(() => {
            searchBooks();
        }, 2000);
    }, [search]);

    function searchBooks(){
        console.log(search);
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