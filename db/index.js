import pg from 'pg';

const { Pool } = pg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  }
});

/** 
*  export query function - to be used by handle functions in 'models'. 
*  pool.query runs a single query to the database. This lets our JS function send SQL readable queries. 
*/
export function query(text, params) {
  return pool.query(text, params);
}