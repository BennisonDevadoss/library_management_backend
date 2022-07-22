import dotenv from 'dotenv';
import build from './application';

dotenv.config({ path: `${__dirname}/../.env` });

const options = {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 3000
};

const fastify = build();
const start = async () => {
  try {
    await fastify.listen(options);
  } catch (error) {
    fastify.log.error(error);
  }
};
start();
