import { Router } from "express";
import RiderValidation from "../validators/RiderValidation";
import RiderController from "../Controllers/RiderController";
import { authenticateJwt, requestValidationMiddleware } from "../middlewares";




const router = Router()
  router.post("/" , RiderValidation ,authenticateJwt,requestValidationMiddleware, RiderController.bookRide)

export default router