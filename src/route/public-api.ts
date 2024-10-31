import express from "express"
import { UserController } from "../controller/user-controller";
import { UserService } from "../service/user-service";
import { Request, Response, NextFunction } from "express";
import { ContactController } from "../controller/contact-controller";

export const publicRouter = express.Router();

publicRouter.post("/api/users", UserController.register);
publicRouter.get("/testis", UserController.tes);
publicRouter.post("/login", UserController.login);
publicRouter.get("/get-user", UserController.getUser);

publicRouter.get("/get-all-contact", ContactController.getAllContact);