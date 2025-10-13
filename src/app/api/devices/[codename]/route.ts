import { NextRequest, NextResponse } from 'next/server';

export const revalidate = 3600;

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ codename: string }> }
) => {
  const { codename } = await params;
  const { searchParams } = new URL(req.url);
  const supportGroup = searchParams.get('support_group');

  const baseUrl = 'https://raw.githubusercontent.com/AxionAOSP/official_devices/main/OTA';

  try {
    const [gmsRes, vanillaRes, changelogRes] = await Promise.all([
      fetch(`${baseUrl}/GMS/${codename}.json`, { next: { revalidate: 3600 } }),
      fetch(`${baseUrl}/VANILLA/${codename}.json`, { next: { revalidate: 3600 } }),
      fetch(`${baseUrl}/CHANGELOG/${codename}.txt`, { next: { revalidate: 3600 } })
    ]);

    const gmsData = gmsRes.ok ? await gmsRes.json() : null;
    const vanillaData = vanillaRes.ok ? await vanillaRes.json() : null;
    const changelogData = changelogRes.ok ? await changelogRes.text() : null;

    return NextResponse.json({
      gms: gmsData?.response[0] || null,
      vanilla: vanillaData?.response[0] || null,
      changelog: changelogData,
      support_group: supportGroup || null
    });
  } catch (error) {
    return NextResponse.json(
      { message: `Failed to fetch details for ${codename}` },
      { status: 500 }
    );
  }
}
