import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(
	request: Request,
	{ params }: { params: { id: string } }
) {
	const id = params.id;
	const pin = await prisma.pin.findUnique({
		where: {
			id,
		},
	});

	if (!pin) {
		return new NextResponse(JSON.stringify({ error: 'No pin with ID found' }), {
			status: 404,
			headers: { 'Content-Type': 'application/json' },
		});
	}

	return NextResponse.json(pin);
}

export async function PATCH(
	request: Request,
	{ params }: { params: { id: string } }
) {
	const id = params.id;
	let json = await request.json();

	try {
		const updated_pin = await prisma.pin.update({
			where: { id },
			data: json,
		});

		if (!updated_pin) {
			return new NextResponse('No pin with ID found', { status: 404 });
		}

		return NextResponse.json(updated_pin);
	} catch (error: any) {
		// Handle the case where the update fails
		return new NextResponse(error.message, { status: 500 });
	}
}

export async function DELETE(
	request: Request,
	{ params }: { params: { id: string } }
) {
	try {
		const id = params.id;
		await prisma.pin.delete({
			where: { id },
		});

		return new NextResponse(null, { status: 204 });
	} catch (error: any) {
		if (error.code === 'P2025') {
			return new NextResponse('No pin with ID found', { status: 404 });
		}

		return new NextResponse(error.message, { status: 500 });
	}
}
