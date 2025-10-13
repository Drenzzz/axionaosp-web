import { NextResponse } from 'next/server';

export const revalidate = 3600;

export async function GET() {
  const devicesUrl = 'https://raw.githubusercontent.com/AxionAOSP/official_devices/main/dinfo.json';

  try {
    const response = await fetch(devicesUrl, {
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch device data');
    }

    const data = await response.json();

    return NextResponse.json(data.devices);
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
