import dotenv from 'dotenv';
import pgPromise from 'pg-promise';

import logger from './logger';

dotenv.config();

const pgp = pgPromise({
  capSQL: true,
  query: (e) => logger.info(e.query, 'DB Query'),
  error: (err) => {
    logger.error(err, 'DB Error');
    process.exit(1);
  },
});

const db = pgp({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  max: 20,
  allowExitOnIdle: true,
});

db.connect().then(() => {
  logger.info(' Connected to the database');
});

export default db;
