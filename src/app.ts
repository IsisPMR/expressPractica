//Solo importaciones de las rutas y el controller
import express, { Application } from 'express';
import bodyParser from "body-parser";
import usersRouters from './routes/userRoutes';
import authRouters from './routes/authRoutes';

const app: Application = express();

// body parser
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());

// User routes
app.use('/users', usersRouters);

// Auth routes
app.use('/auth', authRouters);

export default app;