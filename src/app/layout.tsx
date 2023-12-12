import type { Metadata } from 'next';
import './globals.css';
import localFont from '@next/font/local';
import Header from '@/components/Header';
// import Head from 'next/head';

const NueHas = localFont({
	src: [
		{
			path: '../../public/fonts/NHaasGroteskTXPro-55Rg.ttf',
			weight: '400',
		},
		{
			path: '../../public/fonts/NHaasGroteskTXPro-65Md.ttf',
			weight: '500',
		},
		{
			path: '../../public/fonts/NHaasGroteskTXPro-75Bd.ttf',
			weight: '700',
		},
	],
	variable: '--NueHas',
});
export const metadata: Metadata = {
	title: 'Jayterest',
	description: 'A semi pins fullstack application',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			{/* <Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/favicon.ico" />
			</Head> */}
			<body className={`${NueHas.variable} font-sans`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
