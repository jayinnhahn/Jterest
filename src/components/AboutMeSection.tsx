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
			<div className="grid grid-cols-2 items-center">
				<div className="text-primaryblue justify-center ml-20">
					<h1 className="text-[4rem] font-bold uppercase">
						What is Jayterest?
					</h1>
					<p>
						Jayterest is a semi blog app using the Pinterest layout as cover for
						the application it is done using Typescript, TailwindCSS, NextJS,
						Prisma and SQLite the Data may not be really that perfect and some
						certain features are still not included in the application such as
						the search feature and the user authentication per app and the save
						pin but will be added on a later data
					</p>
				</div>
				<div>
					<Image
						src="/aboutus.jpg"
						alt="about us picture"
						className="object-cover w-full h-full"
						width={1000}
						height={1100}
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
