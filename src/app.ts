import Fastify, { FastifyInstance } from 'fastify';
// import swagger from '@fastify/swagger';

type WebAppConfig = {
  name: string;
  port: number;
  host: string;
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
      await this.app.listen({ port: this.config.port, host: this.config.host });
      console.log(`Server running at http://${this.config.host}:${this.config.port}`);
    } catch (err) {
      console.log(err);
      process.exit(1);

    }
  }
}

async function createWebApp() {

  const app = new WebApp({
    name: 'base-app',
    port: Number(process.env.PORT) || 3000,
    host: process.env.HOST || '0.0.0.0',
  });
  // addRoutes(app);
  return app;
}

export default createWebApp();