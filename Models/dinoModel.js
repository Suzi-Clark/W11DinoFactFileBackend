import { query } from '../db/index';

async function getDinosaurs() {
  const data = await query('SELECT * FROM dinosaurs;');
  return data.rows;
}

export { getDinosaurs };
