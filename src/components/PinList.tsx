import React, { cache, use } from 'react';
import { Pin } from '@prisma/client';
import Image from 'next/image';
import Pinitems from './PinItems';

const getPins = cache(() =>
	fetch('http://localhost:3000/api').then((res) => res.json())
);

interface PinData {
	id: string;
	title: string;
	description: string;
	image: string;
	createdAt: Date;
}

export default function PinList() {
	let pins = use<Pin[]>(getPins());
	return (
		<section className="mx-10 max-w-full">
			<div className="columns-7 gap-3 mx-auto space-y-3">
				{pins.map((pin: PinData) => (
					<Pinitems key={pin.id} data={pin} />
				))}
			</div>
		</section>
	);
}
