import React, { useState } from 'react';
import { useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';

interface RightModalProps {
	isOpen: boolean;
	onClose: () => void;
	id: string;
	data: {
		id: string;
		title: string;
		description: string;
		image: string;
		createdAt: Date;
	};
}
const PinEditModal: React.FC<RightModalProps> = ({
	isOpen,
	onClose,
	id,
	data,
}) => {
	const [title, setTitle] = useState(
		data.title !== undefined ? data.title : ''
	);
	const [image, setImageUrl] = useState(
		data.image !== undefined ? data.image : ''
	);
	const [description, setDescription] = useState(
		data.description !== undefined ? data.description : ''
	);

	useEffect(() => {
		const body = document.body;

		if (isOpen) {
			body.style.overflow = 'hidden';
		} else {
			body.style.overflow = 'visible';
		}
		return () => {
			body.style.overflow = 'visible';
		};
	}, [isOpen]);

	const handleSaveClick = async () => {
		const updatedData = {
			title,
			image,
			description,
		};

		try {
			const response = await fetch(`/api/${id}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(updatedData),
			});

			if (response.ok) {
				onClose();
			} else {
				console.error('Failed to update pin:', response.statusText);
				console.log(id);
			}
		} catch (error) {
			console.error('Error updating pin:', error);
		}
	};
	return (
		<div className={`fixed inset-0 ${isOpen ? 'block' : 'hidden'}`}>
			<div className="flex items-end justify-end min-h-screen text-center">
				<div className="fixed inset-0 transition-opacity">
					<div className="absolute inset-0 bg-gray-500 opacity-75"></div>
				</div>
				<span className="hidden sm:inline-block sm:align-middle sm:h-full"></span>
				<div className="inline-block h-screen top-0 right-0 overflow-hidden bg-white text-left shadow-xl transform transition-all sm:max-w-3xl sm:w-full">
					<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
						<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left flex flex-col content-between">
							<div className="w-full mt-4  flex justify-between">
								<h3 className="leading-6 text-[2rem] font-bold text-black">
									Edit Pin
								</h3>
								<IoMdClose
									className="leading-6 text-[1.5rem] font-bold hover:text-primaryRed text-black"
									onClick={onClose}
								/>
							</div>
							<div className="mt-2 w-full">
								<div className="my-10">
									<label className="block mb-2 text-[1.5rem] font-medium text-gray-900 dark:text-white">
										Title
									</label>
									<input
										type="text"
										id="title"
										value={title}
										className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
										placeholder="Add a title"
										onChange={(e) => setTitle(e.target.value)}
										required
									/>
								</div>
								<div className="my-10">
									<label className="block mb-2 text-[1.5rem] font-medium text-gray-900 dark:text-white">
										Image Url
									</label>
									<input
										type="text"
										id="image"
										value={image}
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
										placeholder="Add a link of the image you are going to use"
										onChange={(e) => setImageUrl(e.target.value)}
										required
									/>
								</div>
								<div className="my-10">
									<label className="block mb-2 text-[1.5rem] font-medium text-gray-900 dark:text-white">
										Description
									</label>
									<textarea
										id="description"
										value={description}
										onChange={(e) => setDescription(e.target.value)}
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 pb-20"
										placeholder="Add a detailed description"
										required
									/>
								</div>
								<div className="flex justify-end content-end space-x-4 mt-4">
									<button
										type="button"
										onClick={onClose}
										className="text-white px-6 py-2 rounded-3xl border-2 border-black hover:bg-primarygrey hover:text-black bg-primaryblue font-bold"
									>
										Cancel
									</button>
									<button
										type="button"
										onClick={handleSaveClick}
										className="text-white px-6 py-2 rounded-3xl border-2 border-black hover:bg-primaryRed bg-primaryblue font-bold"
									>
										Save
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PinEditModal;
