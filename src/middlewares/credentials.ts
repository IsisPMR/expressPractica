import { Request, Response, NextFunction } from 'express';
import { Credentials, CredentialsSchema } from '../models/Credentials';


export default (req: Request, res: Response, next:NextFunction) => {
    const credentials: Credentials = req.body;

    const validation = CredentialsSchema.validate(credentials);

    if (validation.error){
        return res.status(400).json(validation.error.details);
    }
 
    next();
}