import express from 'express';
import logger from 'morgan';
const PORT = process.env.port || 3000;

import router from './routes/dinoRouter.js';

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use('/dinosaurs', router);

app.listen(PORT, function () {
  console.log('Server listening on Port', PORT);
});

export default app;
