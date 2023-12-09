import { prisma } from './prisma';

import { Pin } from '@prisma/client';

export const getPinById = async (id: string): Promise<Pin | null> => {
	try {
		const pin = await prisma.pin.findFirst({
			where: {
				id: id,
			},
		});
		console.log(pin);
		return pin;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

// export const createNewPin = async (newData: string): Promise<Pin | null> => {
// 	console.log('new fish data: ', newData);
// 	try {
// 		const newPin = await prisma.pin.create({
// 			data: newData,
// 		});
// 		return newPin;
// 	} catch (error) {
// 		console.log(error);
// 		throw error;
// 	}
// };
