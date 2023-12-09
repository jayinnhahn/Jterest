import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiSearch } from 'react-icons/hi';

const Header = () => {
	return (
		<div className="flex justify-between gap-3 md:gap-2 items-center p-6 l">
			<Link href="/">
				<Image
					src="/iconlogo.png"
					alt="jayterestlogo"
					width={60}
					height={60}
					className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
				/>
			</Link>
			<Link href="/">
				<p className="bg-primaryblue text-white p-3 px-6 rounded-full text-[16px] hidden md:block">
					Home
				</p>
			</Link>
			<Link href="/create">
				<p className="font-semibold p-3 px-6 rounded-full text-[16px]">
					Create
				</p>
			</Link>
			<div className="bg-[#e9e9e9] p-3 px-6 gap-3 items-center rounded-full w-full hidden md:flex">
				<HiSearch className="text-[16px] text-gray-500" />
				<input
					type="text"
					placeholder="Search"
					className="bg-transparent outline-none w-full text-[16px]"
				/>
			</div>
			<HiSearch className="text-[16px] text-gray-500 md:hidden" />
			<Image
				src="/pic.jpg"
				alt="user-image"
				width={60}
				height={60}
				className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
			/>
		</div>
	);
};

export default Header;
