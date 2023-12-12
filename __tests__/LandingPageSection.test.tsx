import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPageSection from '../src/components/LandingPageSection';

test('renders LandingPageSection component with title and paragraph', () => {
	const title = 'My Final Fullstack Project';
	const paragraph =
		'Made by Jay Innhahn Y. Tan using NextJS, Typescript, TailwindCSS, Prisma, SQLite';

	render(<LandingPageSection />);

	const titleElement = screen.getByText(title);
	const paragraphElement = screen.getByText(paragraph);

	expect(titleElement).toBeInTheDocument();
	expect(paragraphElement).toBeInTheDocument();
});
