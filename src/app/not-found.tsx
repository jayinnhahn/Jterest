import Image from 'next/image';
export default function NotFound() {
	return (
		<div className="flex items-center justify-center h-screen">
			<div>
				<Image
					src="/404pic.jpg"
					alt="404 picture"
					className="object-cover w-full h-full"
					width={1100}
					height={1100}
				/>
			</div>
		</div>
	);
}
