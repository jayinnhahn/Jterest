'use client';
import React from 'react';
import { useState } from 'react';
import PinEditModal from './PinEditModal';
import Image from 'next/image';
import PinConfirmation from './PinConfirmation';
import { useRouter } from 'next/navigation';
import PinList from '@/components/PinList';

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
	const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
		useState(false);
	const router = useRouter();

	const handleEditClick = () => {
		setIsEditModalOpen(true);
	};

	const handleDeleteClick = () => {
		setIsDeleteConfirmationOpen(true);
	};

	const handleCloseModals = () => {
		setIsEditModalOpen(false);
		setIsDeleteConfirmationOpen(false);
	};

	const handleCancelDelete = () => {
		setIsDeleteConfirmationOpen(false);
	};

	const handleConfirmDelete = async () => {
		try {
			const response = await fetch(`/api/${data.id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (response.ok) {
				window.alert('Pin deleted successfully');
				console.log('Pin deleted successfully');
				handleCloseModals();
			} else {
				window.alert('Failed to delete pin:');
				console.error('Failed to delete pin:', response.statusText);
			}
		} catch (error) {
			console.error('Error deleting pin:', error);
		}
		router.push('/');
	};

	return (
		<div className="relative">
			<div className="h-fit justify-center mb-10">
				<div className="rounded-xl border-2 border-black max-w-4xl mx-auto shadow-lg">
					<div className="grid grid-cols-1 md:grid-cols-2">
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
								<h1 className="text-[2.5rem] font-bold mb-4">{data.title}</h1>
								<p className="text-gray-600 text-[1.25rem]">
									{data.description}
								</p>
							</div>
							<div className="flex justify-end space-x-4 mt-4">
								<button
									type="button"
									onClick={handleEditClick}
									className="text-white px-6 py-2 rounded-3xl border-2 border-black bg-primaryblue hover:bg-primarygrey hover:text-black font-bold"
								>
									Edit
								</button>
								<button
									type="button"
									onClick={handleDeleteClick}
									className="text-white px-4 py-2 rounded-3xl border-2 border-black bg-primaryblue hover:bg-primaryRed  font-bold"
								>
									Delete
								</button>
							</div>
						</div>
					</div>
				</div>

				<PinEditModal
					isOpen={isEditModalOpen}
					onClose={handleCloseModals}
					id={data.id}
					data={data}
				/>
				<PinConfirmation
					isOpen={isDeleteConfirmationOpen}
					onCancel={handleCancelDelete}
					onConfirm={handleConfirmDelete}
				/>
			</div>
			<div
				className={`py-10 font-bold text-[4rem]  ${
					isEditModalOpen || isDeleteConfirmationOpen
						? 'pointer-events-none hidden'
						: ''
				}`}
			>
				<h1 className="text-center">What &lsquo;s More ?</h1>
				<PinList />
			</div>
		</div>
	);
};

export default PinViewCard;
