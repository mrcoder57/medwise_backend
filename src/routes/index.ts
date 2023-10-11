import express from "express";

import authRoute from "./auth.route";

const router = express.Router();

export default (): express.Router => {
  authRoute(router);

  return router;
};
