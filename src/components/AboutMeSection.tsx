import React from 'react';
import Image from 'next/image';
import Marquee from './Marquee';
import Link from 'next/link';

const AboutMeSection = () => {
	const title = 'Click here to go to the Pins Section';
	const paragraph =
		'I was going to try and create a pinterest application that has incorporate many users pero gitamad ko sa daghan users kay daghan kayg pins buhaton so mini blog pinterest inspired layout nlg';

	return (
		<div className="flex flex-col h-fit">
			<div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-8 p-8 lg:p-16">
				<div className="text-primaryblue">
					<h1 className="text-6xl font-bold uppercase mb-4">
						What is Jayterest?
					</h1>
					<p className="text-sm lg:text-base">
						Jayterest is a semi blog app using the Pinterest layout as cover for
						the application. It is done using Typescript, TailwindCSS, NextJS,
						Prisma, and SQLite. The data may not be perfect, and some certain
						features are still not included in the application, such as the
						search feature, user authentication, and save pin, but will be added
						at a later date.
					</p>
				</div>
				<div className="flex justify-center">
					<Image
						src="/aboutus.jpg"
						alt="about us picture"
						className="object-cover w-full h-full"
						width={500}
						height={550}
					/>
				</div>
			</div>
			<Link href="/">
				<Marquee title={title} paragraph={paragraph} />
			</Link>
		</div>
	);
};

export default AboutMeSection;
