'use client';
import React, { useEffect, useState, useCallback } from 'react';
import PinViewCard from '@/components/PinViewCard';
import { Pin } from '@prisma/client';

const Page = ({ params }: { params: { id: string } }) => {
	const [pin, setPin] = useState<Pin | null>(null);
	const { id } = params;
	console.log(id);

	const fetchPin = useCallback(async () => {
		try {
			const response = await fetch(`/api/${id}`);

			if (!response.ok) {
				throw new Error(`Failed to fetch pin. Status: ${response.status}`);
			}
			const result = await response.json();
			setPin(result);
		} catch (error) {
			console.error('Error fetching pin:', error);
		}
	}, [id]);

	useEffect(() => {
		fetchPin();
		const intervalId = setInterval(fetchPin, 500);
		return () => clearInterval(intervalId);
	}, [fetchPin]);

	return (
		<div className="flex flex-col">{pin && <PinViewCard data={pin} />}</div>
	);
};

export default Page;
