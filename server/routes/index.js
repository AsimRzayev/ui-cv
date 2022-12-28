import {Router} from "express";
import { UserRouter } from "./UserRouter.js";

export const MockRoutes=Router()

MockRoutes.use("/user",UserRouter)