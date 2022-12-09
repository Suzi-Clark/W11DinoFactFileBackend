import express from 'express';
import { getDinosaurs } from '../models/dinoModel';

const router = express.Router();

router.get('/', async function (req, res) {
  const data = await getDinosaurs();
  res.json({ success: true, payload: data });
});

export default router;
