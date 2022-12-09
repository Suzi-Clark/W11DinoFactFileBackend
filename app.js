import express from 'express';
import morgan from 'morgan';

import dinoRouter from './routes/dinoRouter.js';

const app = express();
const PORT = process.env.port || 3000;

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/dino", dinoRouter);

app.listen(PORT, function () {
    console.log(`The server LIVES - on Port ${PORT}`);
});

export default app;