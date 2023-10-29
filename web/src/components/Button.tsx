import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Rocket } from 'phosphor-react';

interface ButtonProps {
    text: string;
	href: string;
    type: 'google' | 'github' | 'guest';
}

export function Button({ text, href, type }: ButtonProps) {
    return(
        <Link href={href} className="rounded-lg h-[72px] max-w-[372px] w-full py-5 px-6 flex items-center gap-x-5 bg-gray-600 hover:bg-gray-500 hover:transition font-bold text-lg text-gray-200">
            {type === 'google' && <Icon icon="flat-color-icons:google" width="32" height="32" />}
            {type === 'github' && <Icon icon="mdi:github" width="32" height="32" />}
            {type === 'guest' && <Rocket size={32} color="#8381D9" />}

            {text}
        </Link>
    );
}