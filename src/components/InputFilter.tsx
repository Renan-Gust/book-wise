import { InputHTMLAttributes } from 'react';

import { Search } from 'lucide-react';

interface InputFilterProps extends InputHTMLAttributes<HTMLElement> {}

export function InputFilter(props: InputFilterProps) {
    return(
        <div className='w-[433px] h-12 relative'>
            <input
                {...props}
                type="text"
                className='w-full h-full rounded py-3.5 px-5 border border-gray-500 text-gray-400 placeholder:text-sm bg-transparent outline-0 focus:text-gray-200 focus:ring-2 focus:ring-green-200 focus:ring-inset focus:border-0'
            />

            <Search size={20} color="#303F73" className="h-5 absolute top-3.5 right-3.5" />
        </div>
    );
}