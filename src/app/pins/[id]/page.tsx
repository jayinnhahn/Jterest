import React from 'react';
import { getPinById } from '@/lib/crudUtils';
import PinViewCard from '@/components/PinViewCard';
import PinList from '@/components/PinList';
interface PageProps {
	dataid: string;
}

const Page: React.FC<PageProps> = async ({ dataid }) => {
	console.log(dataid);
	const pins = await getPinById(dataid);

	if (!pins) {
		return <div>Pin not found {dataid}</div>;
	}

	return (
		<div>
			<div className="flex flex-col">
				<div className="h-screen justify-center">
					<PinViewCard data={pins} />
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
