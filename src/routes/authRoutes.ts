import express, { Router } from 'express';
import login from '../controllers/auth/login';

const router: Router = express.Router();

//Login route
router.post('/login', login);


export default router;