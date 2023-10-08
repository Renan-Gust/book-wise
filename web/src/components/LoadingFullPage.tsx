import { createPortal } from 'react-dom';

export function LoadingFullPage(){
    return(
        <>
            {createPortal(
                <div className="w-full h-full fixed top-0 left-0 bg-gray-700 bg-opacity-50 z-50">
                    <div className="flex justify-center items-center mt-[50vh]">
                        <svg fill='#F8F9FC' className="w-36 h-36 animate-spin" viewBox="0 0 32 32" xmlns='http://www.w3.org/2000/svg'>
                            <path clipRule='evenodd'
                                d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z'
                                fill='#F8F9FC' fillRule='evenodd' />
                        </svg>
                    </div>
                </div>,
                document.querySelector('#__next')!
            )}
        </>
    );
}