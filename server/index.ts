import { Elysia } from 'elysia';

const app = new Elysia()
  .get('/', () => 'Hello World!')
  .listen(3001);

console.log(
  `🦊 Elysia.js is running at http://${app.server?.hostname}:${app.server?.port}`
);
