import express, { Application } from 'express';
import entryPoint from './src/app';

const app: Application = express();
const port: number = 9000;

// entry point
app.use(entryPoint);

//Se levanta el servidor
app.listen(port, () => {
    console.log("Servidor Iniciado " + port);
});