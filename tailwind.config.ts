import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/twin.macro/**/*.js',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			fontFamily: {
				NueHas: ['var(--NueHas)'],
			},
			colors: {
				primaryblue: '#263A8D',
				primarygrey: '#F5F5F5',
				primarywhite: 'FFFF',
				primaryblack: '000000',
			},
		},
	},
	plugins: [require('tailwindcss'), require('autoprefixer')],
};
export default config;
