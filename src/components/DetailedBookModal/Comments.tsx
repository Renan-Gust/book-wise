import { Rating } from '../Rating';
import { Avatar } from '../Avatar';

export function Comments() {
    return(
        <div className='flex flex-col gap-3'>
            {Array.from({ length: 10 }).map((_, index) => (
                <div className='bg-gray-700 rounded-lg p-6' key={index}>
                    <header className='flex justify-between'>
                        <div className="flex gap-4">
                            <Avatar />
    
                            <div>
                                <p className="text-gray-100 font-bold">Jaxson Dias</p>
                                <span className="text-gray-400 text-sm">Hoje</span>
                            </div>
                        </div>
    
                        <Rating />
                    </header>
    
                    <p className='text-sm text-gray-300 mt-5'>Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget</p>
                </div>
            ))}
        </div>
    )
}