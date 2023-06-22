import { X, Check, Star } from 'phosphor-react';

import { Avatar } from "../Avatar";

export function AddComment() {
    return(
        <div className='bg-gray-700 rounded-lg p-6 mb-3'>
            <header className='flex justify-between'>
                <div className="flex items-center gap-4">
                    <Avatar avatar_url="" />
                    <p className="text-gray-100 font-bold">Cristofer Rosser</p>
                </div>

                <div className="flex gap-1">
                    <Star size={28} color="#8381D9" className='cursor-pointer' />
                    <Star size={28} color="#8381D9" className='cursor-pointer' />
                    <Star size={28} color="#8381D9" className='cursor-pointer' />
                    <Star size={28} color="#8381D9" className='cursor-pointer' />
                    <Star size={28} color="#8381D9" className='cursor-pointer' />
                </div>
            </header>

            <div className='mt-6 mb-3'>
                <div className='relative'>
                    <textarea
                        name="comment"
                        id="comment"
                        placeholder='Escreva sua avaliação'
                        className='w-full h-[164px] rounded py-3.5 px-5 border border-gray-500 text-gray-400 placeholder:text-sm bg-transparent outline-0 focus:text-gray-200 focus:ring-2 focus:ring-green-200 focus:ring-inset focus:border-0 resize-none'
                    ></textarea>
                    
                    <span className='absolute text-[12px] text-[#7C7C8A] right-3 bottom-[15px]'>0/450</span>
                </div>

                <div className='text-end'>
                    <button className='bg-gray-600 rounded-md h-10 w-10 hover:bg-gray-500 hover:transition mr-2'>
                        <X size={24} color="#8391D9" className='mx-auto' />
                    </button>
                    <button className='bg-gray-600 rounded-md h-10 w-10 hover:bg-gray-500 hover:transition'>
                        <Check size={24} color="#50B2C0" className='mx-auto' />
                    </button>
                </div>
            </div>
        </div>
    )
}