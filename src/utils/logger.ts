import { pino } from "pino";
import dayjs from "dayjs";
import pretty from "pino-pretty";

const stream = pretty({
  levelFirst: true,
  colorize: true,
  ignore: "time,hostname,pid",
});

const logger = pino(
  {
    name: "",
    level: process.env.NODE_ENV === "development" ? "debug" : "info",
    transport: {
      target: "pino-pretty",
      options: {
        translateTime: "UTC:yyyy-mm-dd HH:MM:ss.l o",
      },
    },
  },
  stream
);

export default logger;
