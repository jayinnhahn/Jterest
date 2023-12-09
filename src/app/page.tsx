import { prisma } from '@/lib/prisma';
import PinList from '@/components/PinList';

export default async function Home() {
	return (
		<main className="max-w-full">
			<div className="w-full">
				<PinList />
			</div>
		</main>
	);
}
