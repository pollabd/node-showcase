import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import dotenv from "dotenv";

dotenv.config();

import connect from "./utils/connect";
import logger from "./utils/logger";

import routes from "./routes";

const port = process.env.port;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, async () => {
  logger.info(`App is running at http://localhost:${port}`);

  await connect();

  routes(app);
});

export default app;
