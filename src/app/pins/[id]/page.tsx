'use client';
import React, { useEffect, useState } from 'react';
import PinViewCard from '@/components/PinViewCard';
import PinList from '@/components/PinList';
import { Pin } from '@prisma/client';
const Page = ({ params }: { params: { id: string } }) => {
	const [pin, setPin] = useState<Pin | null>(null);
	const { id } = params;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`/api/${id}`);
				const result = await response.json();
				setPin(result);
			} catch (error) {
				console.error('Error fetching pin:', error);
			}
		};

		fetchData();
	}, [id]);

	return (
		<div>
			<div className="flex flex-col">
				<div className="h-screen justify-center">
					{pin && <PinViewCard data={pin} />}
				</div>
				<h1 className="font-bold text-[4rem] text-center py-5">
					What &lsquo;s More ?
				</h1>
				<PinList />
			</div>
		</div>
	);
};

export default Page;
