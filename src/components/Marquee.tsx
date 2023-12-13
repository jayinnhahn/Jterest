import React from 'react';

interface MarqueeProps {
	title: string;
	paragraph: string;
}

const Marquee: React.FC<MarqueeProps> = ({ title, paragraph }) => {
	return (
		<div className="w-full h-fit py-10 bg-primaryblue text-center text-white">
			<h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">{title}</h1>
			<p className="mt-4 text-base md:text-lg font-400">{paragraph}</p>
		</div>
	);
};

export default Marquee;
