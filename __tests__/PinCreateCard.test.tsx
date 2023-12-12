import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PinCreateCard from '../src/components/PinCreateCard';

test('renders PinCreateCard component with correct labels and button', () => {
	render(<PinCreateCard />);

	expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
	expect(screen.getByLabelText(/image url/i)).toBeInTheDocument();
	expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
	expect(screen.getByText(/submit/i)).toBeInTheDocument();
});

test('initial form values are empty', () => {
	render(<PinCreateCard />);

	expect(screen.getByLabelText(/title/i)).toHaveValue('');
	expect(screen.getByLabelText(/image url/i)).toHaveValue('');
	expect(screen.getByLabelText(/description/i)).toHaveValue('');
});

test('updates form values on input change', () => {
	render(<PinCreateCard />);

	fireEvent.change(screen.getByLabelText(/title/i), {
		target: { value: 'Test Title' },
	});
	fireEvent.change(screen.getByLabelText(/image url/i), {
		target: { value: 'https://example.com/image.jpg' },
	});
	fireEvent.change(screen.getByLabelText(/description/i), {
		target: { value: 'Test Description' },
	});

	expect(screen.getByLabelText(/title/i)).toHaveValue('Test Title');
	expect(screen.getByLabelText(/image url/i)).toHaveValue(
		'https://example.com/image.jpg'
	);
	expect(screen.getByLabelText(/description/i)).toHaveValue('Test Description');
});
