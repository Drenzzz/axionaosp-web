import { Elysia } from 'elysia';
import { staticPlugin } from '@elysiajs/static';
import { cors } from '@elysiajs/cors';

const isProduction = process.env.NODE_ENV === 'production';

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
