import React from 'react';
import Image from 'next/image';
import Marquee from './Marquee';
const LandingPageSection = () => {
	const title = 'My Final Fullstack Project';
	const paragraph =
		'Made by Jay Innhahn Y. Tan using NextJS, Typescript, TailwindCSS, Prisma, SQLite';

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<div>
				<Image
					src="/landingpage.jpg"
					alt="404 picture"
					className="object-cover w-full h-full"
					width={1000}
					height={1100}
				/>
			</div>
			<Marquee title={title} paragraph={paragraph} />
		</div>
	);
};

export default LandingPageSection;
