import pg from 'pg';

const db = {
  DATABASE_URL: process.env.DATABASE_URL,
};

export const pool = new pg.Pool({
  connectionString: db.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
