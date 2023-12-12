import React from 'react';
import { render, screen } from '@testing-library/react';
import Marquee from '../src/components/Marquee';

test('renders Marquee component with title and paragraph', () => {
	const title = 'Test Title';
	const paragraph = 'Test Paragraph';

	render(<Marquee title={title} paragraph={paragraph} />);

	const titleElement = screen.getByText(title);
	const paragraphElement = screen.getByText(paragraph);

	expect(titleElement).toBeInTheDocument();
	expect(paragraphElement).toBeInTheDocument();
});
