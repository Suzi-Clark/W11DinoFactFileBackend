import { Router } from 'express';

import getDinosaurs  from '../models/dinoModel.js';

const dinoRouter = Router();

dinoRouter.get('/', async function (req, res) {
  console.log('made it to route')
  const data = await getDinosaurs();
  res.json({ success: true, payload: data });
});

export default dinoRouter;
