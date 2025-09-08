import Fastify, { FastifyInstance } from 'fastify';
// import swagger from '@fastify/swagger';

type WebAppConfig = {
  name: string;
  port: number;
};

class WebApp {
  private readonly app: FastifyInstance;
  private readonly config: WebAppConfig;

  constructor(config: WebAppConfig) {
    this.config = config;
    this.app = Fastify({
      logger: true,
    });
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.app.get('/', async (request, reply) => {
      return { message: 'Hello World!', status: 'Server is running' };
    });
    
    this.app.get('/ping', async (request, reply) => {
      return { pong: 'it worked!' };
    });
  }

  async start(): Promise<void> {
    try {
      await this.app.listen({ port: this.config.port });
      console.log('Server running at http://localhost:3000');
    } catch (err) {
      console.log(err);
      process.exit(1);

    }
  }
}

async function createWebApp() {

  const app = new WebApp({
    name: 'base-app',
    port: 3000,
  });
  // addRoutes(app);
  return app;
}

export default createWebApp();