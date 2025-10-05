import { Elysia } from 'elysia';
import { staticPlugin } from '@elysiajs/static';
import { cors } from '@elysiajs/cors';

const isProduction = process.env.NODE_ENV === 'production';

const teamMembers = [
    { username: 'rmp22', group: 'Core', position: 'Project Founder/Developer' },
    { username: 'Saikrishna1504', group: 'Management', position: 'Project Manager' },
    { username: 'manidweep', group: 'Management', position: 'Project Administrator' },
    { username: 'rmuxnet', group: 'Contributors', position: 'AxionAOSP Channel/Chat Bot' },
    { username: 'not-ayan', group: 'Contributors', position: 'Designer' },
    { username: 'alecxtra', group: 'Contributors', position: 'Designer' },
];

let cachedTeamData: any[] | null = null;
let lastFetchTime: number = 0;

const app = new Elysia()
  .use(cors())
  .group('/api', (app) =>
    app
      .get('/devices', async () => {
        const devicesUrl = 'https://raw.githubusercontent.com/AxionAOSP/official_devices/main/dinfo.json';
        
        try {
          const response = await fetch(devicesUrl);
          if (!response.ok) {
            return new Response('Failed to fetch real device data', { status: 500 });
          }
          const data = await response.json();
          // Langsung kembalikan data.devices
          return data.devices; 
        } catch (error) {
          console.error("Error fetching real device data:", error);
          return new Response('Internal server error', { status: 500 });
        }
      })
      .get('/devices/:codename', async ({ params }) => {
        const { codename } = params;
        const baseUrl = 'https://raw.githubusercontent.com/AxionAOSP/official_devices/main/OTA';

        try {
          const [gmsRes, vanillaRes] = await Promise.all([
            fetch(`${baseUrl}/GMS/${codename}.json`),
            fetch(`${baseUrl}/VANILLA/${codename}.json`)
          ]);

          const gmsData = gmsRes.ok ? await gmsRes.json() : null;
          const vanillaData = vanillaRes.ok ? await vanillaRes.json() : null;

          return {
            gms: gmsData?.response[0] || null,
            vanilla: vanillaData?.response[0] || null,
          };
        } catch (error) {
          console.error(`Error fetching details for ${codename}:`, error);
          return new Response('Internal server error', { status: 500 });
        }
      })
      .get('/changelog', async () => {
        const changelogUrl = 'https://raw.githubusercontent.com/AxionAOSP/axion_changelogs/refs/heads/lineage-22.1/README.md';

        try {
          const response = await fetch(changelogUrl);
          if (!response.ok) {
            return new Response('Failed to fetch changelog', { status: 500 });
          }

          const markdownContent = await response.text();
          
          return {
            content: markdownContent
          };

        } catch (error) {
          console.error("Error fetching changelog:", error);
          return new Response('Internal server error', { status: 500 });
        }
      })
      .get('/team', async () => {
        const now = Date.now();
        if (cachedTeamData && now - lastFetchTime < 3600000) {
          return cachedTeamData;
        }

        try {
          const teamWithAvatars = await Promise.all(
            teamMembers.map(async (member) => {
              const res = await fetch(`https://api.github.com/users/${member.username}`);
              if (!res.ok) return { ...member, avatar_url: `https://github.com/${member.username}.png` };
              const userData = await res.json();
              return { ...member, avatar_url: userData.avatar_url };
            })
          );
          
          cachedTeamData = teamWithAvatars;
          lastFetchTime = now;
          return teamWithAvatars;

        } catch (error) {
          console.error("Error fetching team data:", error);
          return teamMembers.map(m => ({ ...m, avatar_url: `https://github.com/${m.username}.png` }));
        }
      })

  );

if (isProduction) {
  app
    .use(
      staticPlugin({
        assets: '../dist',
        prefix: '',
      })
    )
    .get('/*', ({ set }) => {
      set.headers['Content-Type'] = 'text/html';
      return Bun.file('../dist/index.html');
    });
}

app.listen(3001);

console.log(
  `🦊 Elysia server is running at http://${app.server?.hostname}:${
    app.server?.port
  }`
);
