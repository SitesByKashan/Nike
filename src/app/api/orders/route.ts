import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@sanity/client';

type OrderData = {
  orderId: string;
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
  };
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
  totalAmount: number;
};

export async function POST(req: NextRequest) {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    useCdn: false,
    token: process.env.SANITY_API_TOKEN!,
    apiVersion: '2021-08-31',
  });

  try {
    const data: OrderData = await req.json();

    // Define the order document structure
    const newOrder = {
      _type: 'order',
      orderId: data.orderId,
      customer: {
        _type: 'customer',
        firstName: data.customer.firstName,
        lastName: data.customer.lastName,
        email: data.customer.email,
        address: data.customer.address,
      },
      items: data.items.map((item) => ({
        _type: 'orderItem',
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      totalAmount: data.totalAmount,
    };

    // Create the order in Sanity
    await client.create(newOrder);

    return NextResponse.json({ message: 'Order created successfully!' });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { error: 'Failed to create order. Please try again.' },
      { status: 500 }
    );
  }
}
