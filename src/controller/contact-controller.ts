import { Response, NextFunction } from "express";
import { UserRequest } from "../type/user-request";
import { CreateContactRequest, SearchContactRequest, UpdateContactRequest } from "../model/contact-model";
import { ContactService } from "../service/contact-service";

export class ContactController {

    static async create(req: UserRequest, res: Response, next: NextFunction) {
        try {
            console.log("Request Body:", req.body);       // Body dari request
            console.log("Request Params:", req.params);   // Parameters dari URL
            console.log("Request Query:", req.query);     // Query string dari URL
            console.log("Request Headers:", req.headers); // Headers dari request
            const request: CreateContactRequest = req.body as CreateContactRequest
            console.log("Request:", request); // Headers dari request
            const response = await ContactService.create(req.user!, request)
            console.log("Response:", response); // Headers dari request
            res.status(200).json({
                data: response
            })
        } catch (e) {
            next(e)
        }
    }

    static async get(req: UserRequest, res: Response, next: NextFunction) {
        try {
            const contactId = Number(req.params.contactId)
            const response = await ContactService.get(req.user!, contactId)
            res.status(200).json({
                data: response
            })
        } catch (e) {
            next(e)
        }
    }

    static async getAllContact(req: UserRequest,res: Response, next: NextFunction) {
        try {
            const response = await ContactService.getAllContact();
            res.status(200).json({
                data: response
            })
        } catch (e) {
            next(e);
        }
    }

    static async update(req: UserRequest, res: Response, next: NextFunction) {
        try {
            const request: UpdateContactRequest = req.body as UpdateContactRequest
            request.id = Number(req.params.contactId)
            
            const response = await ContactService.update(req.user!, request)
            res.status(200).json({
                data: response
            })
        } catch (e) {
            next(e)
        }
    }

    static async remove(req: UserRequest, res: Response, next: NextFunction) {
        try {
            const contactId = Number(req.params.contactId)
            
            const response = await ContactService.remove(req.user!, contactId)
            res.status(200).json({
                data: response
            })
        } catch (e) {
            next(e)
        }
    }

    static async search(req: UserRequest, res: Response, next: NextFunction) {
        try {
            const request: SearchContactRequest = {
                name: req.query.name as string,
                email: req.query.email as string,
                phone: req.query.phone as string,
                page: req.query.page ? Number(req.query.page) : 1,
                size: req.query.size ? Number(req.query.size) : 10,
            }

            const response = await ContactService.search(req.user!, request)
            res.status(200).json(response)
        } catch (e) {
            next(e)
        }
    }
}