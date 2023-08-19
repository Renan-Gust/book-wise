import Image from 'next/image';

interface AvatarProps {
    avatar_url?: string;
}

import avatar from '/public/eu.webp';

export function Avatar({ avatar_url }: AvatarProps) {
	return(
		<Image
			src={avatar}
			alt="avatar"
			height={40}
			width={40}
			className="border border-green-100 rounded-full h-[40px]"
		/>
	);
}