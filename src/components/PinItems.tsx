import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PinItemProps {
	data: {
		id: string;
		title: string;
		description: string;
		image: string;
		createdAt: Date;
	};
}

const getRandomHeight = () => {
	return Math.floor(Math.random() * (300 - 200 + 1) + 200);
};

const Pinitems: React.FC<PinItemProps> = ({ data }) => {
	const height = getRandomHeight();
	console.log(data.id);

	return (
		<Link href={`/pins/${data.id}`}>
			<div className="relative group cursor-pointer">
				<Image
					src={data.image}
					alt={data.title}
					className="object-cover w-full h-full mb-5 rounded-md overflow-hidden shadow-md break-inside-avoid"
					width={500}
					height={height}
				/>
				<div className="absolute inset-0 bg-gray-800 opacity-0 rounded-md group-hover:opacity-50 transition-opacity"></div>
			</div>
		</Link>
	);
};

export default Pinitems;
