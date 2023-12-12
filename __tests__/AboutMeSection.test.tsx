import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutMeSection from '../src/components/AboutMeSection';

describe('AboutMeSection', () => {
	it('renders AboutMeSection component with title and paragraph', () => {
		// Arrange
		const title = 'Click here to go to the Pins Section';
		const paragraph =
			'I was going to try and create a pinterest application that has incorporate many users pero gitamad ko sa daghan users kay daghan kayg pins buhaton so mini blog pinterest inspired layout nlg';

		render(<AboutMeSection />);

		// Assert
		const titleElement = screen.getByText('What is Jayterest?');
		const marqueeParagraphElement = screen.getByText(paragraph, {
			selector: 'p',
		});

		expect(titleElement).toBeInTheDocument();
		expect(marqueeParagraphElement).toBeInTheDocument();
	});
});
