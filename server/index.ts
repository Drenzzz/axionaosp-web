import { Elysia } from 'elysia';
import { staticPlugin } from '@elysiajs/static';
import { cors } from '@elysiajs/cors';

import devicesData from './db/devices.json';

const isProduction = process.env.NODE_ENV === 'production';

const app = new Elysia()
  .use(cors())
  
  .group('/api', (app) =>
    app.get('/devices', () => {
      return devicesData;
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
