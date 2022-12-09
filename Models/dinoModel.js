import { pool } from '../db/index';

export async function getDinosaurs() {
  const data = await pool.query('SELECT * FROM dinosaurs');
  console.log('Dinosaurs', data.rows);
  return data.rows;
}

// export { getDinosaurs };
