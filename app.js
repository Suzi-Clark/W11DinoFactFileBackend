import express from 'express';
import morgan from 'morgan';

import dinoRouter from './Routes/dinoRouter.js';

const app = express();
const PORT = process.env.port || 3000;

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/dinosaurs", dinoRouter);

app.listen(PORT, function () {
  console.log('Server listening on Port', PORT);
});

