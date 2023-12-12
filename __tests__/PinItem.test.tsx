// PinItem.test.js
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import PinItem from '../src/components/PinItems';

const mockData = {
	id: '1',
	title: 'Test Pin',
	description: 'Test description',
	image: '/test-image.jpg',
	createdAt: new Date(),
};

test('renders PinItem component with correct data', () => {
	render(React.createElement(PinItem, { data: mockData }));

	const imageAltText = screen.getByAltText(mockData.title);
	expect(imageAltText).toBeInTheDocument();

	const linkElement = screen.getByRole('link', { name: mockData.title });
	expect(linkElement).toHaveAttribute('href', `/pins/${mockData.id}`);
});
