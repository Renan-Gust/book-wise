interface HeaderProps {
    img: React.ReactNode;
    title: string;
}

export function Header({ img, title }: HeaderProps) {
	return(
		<header className="flex gap-3">
			{ img }
			<h1 className="text-gray-100 font-bold text-2xl">{ title }</h1>
		</header>
	);
}