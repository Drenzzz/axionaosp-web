import { NextResponse } from 'next/server';

export const revalidate = 3600;

const teamMembers = [
    { username: 'rmp22', group: 'Core', position: 'Project Founder/Developer' },
    { username: 'Saikrishna1504', group: 'Management', position: 'Project Manager' },
    { username: 'manidweep', group: 'Management', position: 'Project Administrator' },
    { username: 'rmuxnet', group: 'Contributors', position: 'AxionAOSP Channel/Chat Bot' },
    { username: 'not-ayan', group: 'Contributors', position: 'Designer' },
    { username: 'alecxtra', group: 'Contributors', position: 'Designer' },
];

export async function GET() {
  try {
    const teamWithAvatars = await Promise.all(
      teamMembers.map(async (member) => {
        const res = await fetch(`https://api.github.com/users/${member.username}`, {
          next: { revalidate: 3600 }
        });

        if (!res.ok) {
          return { ...member, avatar_url: `https://github.com/${member.username}.png` };
        }

        const userData = await res.json();
        return { ...member, avatar_url: userData.avatar_url };
      })
    );

    return NextResponse.json(teamWithAvatars);
  } catch (error) {
    console.error("Error fetching team data:", error);
    const fallbackData = teamMembers.map(member => ({
      ...member,
      avatar_url: `https://github.com/${member.username}.png`
    }));
    return NextResponse.json(fallbackData);
  }
}
