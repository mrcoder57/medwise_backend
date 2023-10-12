import dotenv from "dotenv";
dotenv.config();

import express from "express";
import http from "http";
import bodyParser from "body-parser";
import config from "config";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";

import logger from "./utils/logger";
import connect from "./utils/connect";
import routes from "./routes";

const port = config.get<number>("port");
const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(port, async () => {
  logger.info(`Server running on http://localhost:${port}/`);

  await connect();

  app.use("/", routes());
});

