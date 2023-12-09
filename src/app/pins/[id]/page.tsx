import React from 'react';
import { getPinById } from '@/lib/crudUtils';
import PinViewCard from '@/components/PinViewCard';

interface PageProps {
	dataid: string;
}

const Page: React.FC<PageProps> = async ({ dataid }) => {
	const pins = await getPinById(dataid);

	if (!pins) {
		return <div>Pin not found {dataid}</div>;
	}

	return (
		<div>
			<div className="flex items-center justify-center h-screen">
				<PinViewCard data={pins} />
			</div>
		</div>
	);
};

export default Page;
