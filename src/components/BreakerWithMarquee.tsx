import React from 'react';
import Image from 'next/image';
const BreakerWithMarquee: React.FC = () => {
	return (
		<div className="w-full h-20 overflow-hidden bg-primaryblue">
			<div className="relative flex overflow-x-hidden">
				<div className="py-12 animate-marquee whitespace-nowrap">
					<Image src="/Gifdog.gif" alt="Example GIF" width={16} height={16} />{' '}
					<Image src="/Gifdog.gif" alt="Example GIF" width={16} height={16} />{' '}
				</div>

				<div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
					<Image src="/Gifdog.gif" alt="Example GIF" width={16} height={16} />{' '}
					<Image src="/Gifdog.gif" alt="Example GIF" width={16} height={16} />{' '}
				</div>
			</div>
		</div>
	);
};

export default BreakerWithMarquee;
