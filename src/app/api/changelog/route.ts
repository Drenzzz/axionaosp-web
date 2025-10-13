import { NextResponse } from 'next/server';

export const revalidate = 3600;

export async function GET() {
  const changelogUrl = 'https://raw.githubusercontent.com/AxionAOSP/axion_changelogs/refs/heads/lineage-22.1/README.md';

  try {
    const response = await fetch(changelogUrl, {
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch changelog from GitHub');
    }

    const markdownContent = await response.text();

    return NextResponse.json({
      content: markdownContent,
    });
  } catch (error) {
    console.error("Error fetching changelog:", error);
    return NextResponse.json(
      { message: 'Internal Server Error: Failed to fetch changelog' },
      { status: 500 }
    );
  }
}
