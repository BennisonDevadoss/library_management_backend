import dotenv from 'dotenv';
import logger from './logger';

import { Sequelize } from 'sequelize';

dotenv.config();
const env = process.env.NODE_ENV || 'development';
/*eslint-disable */
const config = require(`${__dirname}/../../db/config.json`)[env];

const db = new Sequelize(process.env[config.use_env_variable] as string, {
  logging: logger.debug.bind(logger)
});

export default db;
