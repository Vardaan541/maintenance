import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { apartmentId, flatNumber, tenantPhone } = body;

    // API stub - In production, this would integrate with WhatsApp API
    
    console.log('Sending reminder via WhatsApp:', {
      apartmentId,
      flatNumber,
      tenantPhone,
    });

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({
      success: true,
      message: `Reminder sent to ${tenantPhone} via WhatsApp`,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to send reminder' },
      { status: 500 }
    );
  }
}

