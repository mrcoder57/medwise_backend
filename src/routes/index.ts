import express from "express";

import authRoute from "./auth.route";

import medicineRoute from './medicine.route'

const router = express.Router();

export default (): express.Router => {
  authRoute(router);
 
  router.use('./medicine.route', medicineRoute);
  return router;
};

