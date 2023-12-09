import React from 'react';

const PinCreateCard = () => {
	return (
		<div className="rounded-xl border-2 border-black p-10 w-full mx-20">
			<div className="my-10">
				<label className="block mb-2 text-[1.5rem] font-medium text-gray-900 dark:text-white">
					Title
				</label>
				<input
					type="text"
					id="first_name"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					placeholder="Add a title"
					required
				/>
			</div>
			<div className="my-10">
				<label className="block mb-2 text-[1.5rem] font-medium text-gray-900 dark:text-white">
					Image Url
				</label>
				<input
					type="text"
					id="first_name"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					placeholder="Add a link of the image you are going to use"
					required
				/>
			</div>
			<div className="my-10">
				<label className="block mb-2 text-[1.5rem] font-medium text-gray-900 dark:text-white">
					Description
				</label>
				<input
					type="text"
					id="first_name"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 pb-20"
					placeholder="Add a detailed description"
					required
				/>
			</div>
			<div className="flex justify-end">
				<button
					type="submit"
					className="text-white px-4 py-2 rounded-3xl bg-primaryblue font-bold"
				>
					Submit
				</button>
			</div>
		</div>
	);
};

export default PinCreateCard;
