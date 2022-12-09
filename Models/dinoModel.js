import { query } from '../db/index.js';

async function getDinosaurs() {
  console.log("made it to model")
  const data = await query('SELECT * FROM dinosaurs');
  console.log(data)
  return data.rows;
}

export { getDinosaurs };
