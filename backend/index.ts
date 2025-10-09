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
  .group('/api', (app) =>
    app
      .use(cors({
          origin: /https:\/\/axionaosp\.netlify\.app$/,
          methods: ['GET', 'OPTIONS'],
          allowedHeaders: ['Content-Type'],
          credentials: true,
          preflight: true
      }))
      .get('/devices', async () => {
        const devicesUrl = 'https://raw.githubusercontent.com/AxionAOSP/official_devices/main/dinfo.json';
        const response = await fetch(devicesUrl);
        const data = await response.json();
        return data.devices;
      })
      .get('/team', async () => {
        const now = Date.now();
        if (cachedTeamData && now - lastFetchTime < 3600000) {
          return cachedTeamData;
        }
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
      })
      .get('/devices/:codename', async ({ params, query }) => {
        const { codename } = params;
        const supportGroup = query.support_group;
        const baseUrl = 'https://raw.githubusercontent.com/AxionAOSP/official_devices/main/OTA';
        const [gmsRes, vanillaRes, changelogRes] = await Promise.all([
          fetch(`${baseUrl}/GMS/${codename}.json`),
          fetch(`${baseUrl}/VANILLA/${codename}.json`),
          fetch(`${baseUrl}/CHANGELOG/${codename}.txt`)
        ]);
        const gmsData = gmsRes.ok ? await gmsRes.json() : null;
        const vanillaData = vanillaRes.ok ? await vanillaRes.json() : null;
        const changelogData = changelogRes.ok ? await changelogRes.text() : null;
        return {
          gms: gmsData?.response[0] || null,
          vanilla: vanillaData?.response[0] || null,
          changelog: changelogData,
          support_group: supportGroup || null
        };
      })
  );

if (isProduction) {
  app.use(staticPlugin({ assets: '../frontend/dist', prefix: '' }))
    .get('/*', ({ set }) => {
      set.headers['Content-Type'] = 'text/html';
      return Bun.file('../frontend/dist/index.html');
    });
}

app.listen(3001);

console.log(
  `🦊 Elysia server is running at http://${app.server?.hostname}:${app.server?.port}`
);
