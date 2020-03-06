//Solo importaciones de las rutas y el controller
import express, { Application } from 'express';
import bodyParser from "body-parser";
import usersRouters from './routes/userRoutes'

const app: Application = express();

// body parser
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());

// user routes
app.use('/users', usersRouters);

export default app;