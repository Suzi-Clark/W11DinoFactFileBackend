import express from "express";
import logger from "morgan";

import dinoRouter from "./Routes/dinoRouter"

const app = express();

app.use(logger("dev"));
app.use(express.json());

app.use("/dinosaurs", dinoRouter);

export default app;