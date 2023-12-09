import React from 'react';

interface MarqueeProps {
	title: string;
	paragraph: string;
}

const Marquee: React.FC<MarqueeProps> = ({ title, paragraph }) => {
	return (
		<div className="w-full py-10 bg-primaryblue text-center text-white">
			<h1 className="font-bold text-[2.5rem]">{title}</h1>
			<p className=" flex flex-wrap text-center justify-center text-[1rem] font-400">
				{paragraph}
			</p>
		</div>
	);
};

export default Marquee;
