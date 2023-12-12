// Header.test.js
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../src/components/Header';

test('renders Header component with correct elements', () => {
	render(<Header />);

	// Check if the logo is rendered
	const logo = screen.getByAltText('jayterestlogo');
	expect(logo).toBeInTheDocument();

	// Check if the Home link is rendered
	const homeLink = screen.getByRole('link', { name: /Home/i });
	expect(homeLink).toBeInTheDocument();

	// Check if the Create link is rendered
	const createLink = screen.getByRole('link', { name: /Create/i });
	expect(createLink).toBeInTheDocument();

	// Check if the search input is rendered
	const searchInput = screen.getByPlaceholderText('Search');
	expect(searchInput).toBeInTheDocument();

	// Check if the user image is rendered
	const userImage = screen.getByAltText('user-image');
	expect(userImage).toBeInTheDocument();
});
