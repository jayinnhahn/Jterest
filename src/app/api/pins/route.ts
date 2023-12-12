import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	const pins = await prisma.pin.findMany();
	return NextResponse.json(pins);
}

export async function POST(request: Request) {
	try {
		const json = await request.json();
		const { title, image, description } = json;

		const newPin = await prisma.pin.create({
			data: {
				title,
				image,
				description,
			},
		});

		return new NextResponse(JSON.stringify(newPin), {
			status: 201,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error: any) {
		return new NextResponse(error.message, { status: 500 });
	}
}
