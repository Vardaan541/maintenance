import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { apartmentId, flatNumber } = body;

    // API stub - In production, this would update the database
    
    console.log('Marking bill as paid:', {
      apartmentId,
      flatNumber,
      paidDate: new Date().toISOString(),
    });

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({
      success: true,
      message: `Bill for flat ${flatNumber} marked as paid`,
      paidDate: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to mark as paid' },
      { status: 500 }
    );
  }
}

