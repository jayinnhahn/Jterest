'use client';
import React from 'react';
import { useState } from 'react';
import PinEditModal from './PinEditModal';
import Image from 'next/image';
import PinConfirmation from './PinConfirmation';
interface PinItemProps {
	data: {
		id: string;
		title: string;
		description: string;
		image: string;
		createdAt: Date;
	};
}

const PinViewCard: React.FC<PinItemProps> = ({ data }) => {
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

	const handleEditClick = () => {
		setIsEditModalOpen(true);
	};

	const handleDeleteClick = () => {
		setIsDeleteModalOpen(true);
	};

	const handleCloseModals = () => {
		setIsEditModalOpen(false);
		setIsDeleteModalOpen(false);
	};

	return (
		<div className="rounded-xl border-2 border-black max-w-4xl mx-auto shadow-lg">
			<div className="grid grid-cols-2">
				<div className="relative flex items-center">
					<Image
						src={data.image}
						alt="picture"
						className="object-cover w-full rounded-l-xl"
						width={500}
						height={300}
					/>
				</div>
				<div className="flex flex-col justify-between p-10">
					<div>
						<h1 className="text-2xl font-bold mb-4">{data.title}</h1>
						<p className="text-gray-600">{data.description}</p>
					</div>
					<div className="flex justify-end space-x-4 mt-4">
						<button
							type="button"
							onClick={handleEditClick}
							className="text-white px-6 py-2 rounded-3xl border-2 border-black bg-primaryblue font-bold"
						>
							Edit
						</button>
						<button
							type="button"
							onClick={handleDeleteClick}
							className="text-white px-6 py-2 rounded-3xl border-2 border-black bg-primaryblue font-bold"
						>
							Delete
						</button>
					</div>
				</div>
			</div>

			<PinEditModal isOpen={isEditModalOpen} onClose={handleCloseModals} />
			<PinConfirmation
				isOpen={isDeleteModalOpen}
				onCancel={handleCloseModals}
				onDelete={() => {
					console.log('Deleting pin:', data.id);
					handleCloseModals();
				}}
			/>
		</div>
	);
};

export default PinViewCard;
