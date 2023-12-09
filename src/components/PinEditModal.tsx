import React, { useState } from 'react';

interface RightModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const PinEditModal: React.FC<RightModalProps> = ({ isOpen, onClose }) => {
	const [content] = useState('Modal Content');

	return (
		<div
			className={`fixed inset-0 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}
		>
			<div className="flex items-end justify-end min-h-screen pt-4 px-4 pb-20 text-center">
				<div className="fixed inset-0 transition-opacity">
					<div className="absolute inset-0 bg-gray-500 opacity-75"></div>
				</div>
				<span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
				&#8203;
				<div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
					<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
						<div className="sm:flex sm:items-start">
							<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
								<h3 className="text-lg leading-6 font-medium text-gray-900">
									Modal Title
								</h3>
								<div className="mt-2">
									<p className="text-sm text-gray-500">{content}</p>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
						<button
							onClick={onClose}
							type="button"
							className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primaryblue text-base font-medium text-white hover:bg-primarybluedark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primarybluedark sm:ml-3 sm:w-auto sm:text-sm"
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PinEditModal;
