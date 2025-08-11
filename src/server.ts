import fastify from 'fastify';
import swagger from '@fastify/swagger';

const server = fastify({ logger: true });

// server.register(swagger, {
//   swagger: {
//     info: { title: 'My API', version: '1.0.0' },
//   },
//   exposeRoute: true,
// });

server.get('/ping', async () => {
  return { pong: 'it worked!' };
});

const start = async () => {
  try {
    await server.listen({ port: 3000 });
    console.log('Server running at http://localhost:3000');
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
