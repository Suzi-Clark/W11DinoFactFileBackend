import {router} from 'express';

import { getDinosaurs } from '../Models/dinoModel';

const dinoRouter = Router();

router.get('/', async function (req, res) {
  const data = await getDinosaurs();
  res.json({ success: true, payload: data });
});

export default dinoRouter;
