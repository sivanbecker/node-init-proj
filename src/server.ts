import Fastify from 'fastify';
// import swagger from '@fastify/swagger';
import run from './app';

// server.register(swagger, {
//   swagger: {
//     info: { title: 'My API', version: '1.0.0' },
//   },
//   exposeRoute: true,
// });

// server.get('/ping', async () => {
//   return { pong: 'it worked!' };
// });

async function start() {
  try {
    const app = await run;
    await app.start();
  } catch (err: any) {
    // handleError(err);
    console.log(err);
  }
}

start();
