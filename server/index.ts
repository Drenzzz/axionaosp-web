import { Elysia } from 'elysia';
import { staticPlugin } from '@elysiajs/static';

const isProduction = process.env.NODE_ENV === 'production';

const app = new Elysia();

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
  `🦊 Elysia.js is running at http://${app.server?.hostname}:${app.server?.port}`
);
