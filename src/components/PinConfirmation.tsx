import React from 'react';

interface PinConfirmationProps {
	isOpen: boolean;
	onCancel: () => void;
	onConfirm: () => void;
}

const PinConfirmation: React.FC<PinConfirmationProps> = ({
	isOpen,
	onCancel,
	onConfirm,
}) => {
	return (
		<div
			className={`fixed inset-0 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}
		>
			<div className="flex items-center justify-center min-h-screen">
				<div className="fixed inset-0 transition-opacity">
					<div className="absolute inset-0 bg-gray-500 opacity-75"></div>
				</div>
				<div className="bg-white p-6 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
					<h2 className="text-xl font-bold mb-4">Are you sure?</h2>
					<p className="text-sm text-gray-500">
						If you delete this Pin, it&apos;ll be gone for good and those
						who&apos;ve saved it won&apos;t be able to view it. This action is
						irreversible.
					</p>
					<div className="mt-4 flex justify-end space-x-4">
						<button
							type="button"
							className="text-white px-4 py-2 rounded-3xl border-2 border-black bg-primaryblue hover:bg-primarygrey hover:text-black font-bold"
							onClick={() => onCancel()}
						>
							Cancel
						</button>
						<button
							type="button"
							className="text-white px-4 py-2 rounded-3xl border-2 border-black bg-primaryblue hover:bg-primaryRed font-bold"
							onClick={() => onConfirm()}
						>
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PinConfirmation;
