import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PinConfirmation from '../src/components/PinConfirmation';

describe('PinConfirmation', () => {
	it('renders PinConfirmation component with proper content', () => {
		const onCancelMock = jest.fn();
		const onConfirmMock = jest.fn();

		render(
			<PinConfirmation
				isOpen={true}
				onCancel={onCancelMock}
				onConfirm={onConfirmMock}
			/>
		);

		expect(screen.getByText('Are you sure?')).toBeInTheDocument();
		expect(
			screen.getByText(
				"If you delete this Pin, it'll be gone for good and those who've saved it won't be able to view it. This action is irreversible."
			)
		).toBeInTheDocument();

		expect(screen.getByText('Cancel')).toBeInTheDocument();
		expect(screen.getByText('Delete')).toBeInTheDocument();
	});

	it('calls onCancel and onConfirm callbacks when corresponding buttons are clicked', () => {
		const onCancelMock = jest.fn();
		const onConfirmMock = jest.fn();

		render(
			<PinConfirmation
				isOpen={true}
				onCancel={onCancelMock}
				onConfirm={onConfirmMock}
			/>
		);

		fireEvent.click(screen.getByText('Cancel'));
		expect(onCancelMock).toHaveBeenCalledTimes(1);

		fireEvent.click(screen.getByText('Delete'));
		expect(onConfirmMock).toHaveBeenCalledTimes(1);
	});
});
