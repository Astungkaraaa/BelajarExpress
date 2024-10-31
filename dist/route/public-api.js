"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controller/user-controller");
const contact_controller_1 = require("../controller/contact-controller");
exports.publicRouter = express_1.default.Router();
exports.publicRouter.post("/api/users", user_controller_1.UserController.register);
exports.publicRouter.get("/testis", user_controller_1.UserController.tes);
exports.publicRouter.post("/login", user_controller_1.UserController.login);
exports.publicRouter.get("/get-user", user_controller_1.UserController.getUser);
exports.publicRouter.get("/get-all-contact", contact_controller_1.ContactController.getAllContact);
