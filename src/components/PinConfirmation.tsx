import React from 'react';

const PinConfirmation = () => {
	return (
		<div>
			<h2> Are you sure? </h2>
			<p>
				If you delete this Pin, it&apos;ll be gone for good and those
				who&apos;ve saved it won&apos;t be able to view it. This action is
				irreversible.
			</p>
			<button
				type="submit"
				className="text-white px-4 py-2 rounded-3xl bg-primaryblue font-bold"
			>
				Cancel
			</button>
			<button
				type="submit"
				className="text-white px-4 py-2 rounded-3xl bg-primaryblue font-bold"
			>
				Delete
			</button>
		</div>
	);
};

export default PinConfirmation;
