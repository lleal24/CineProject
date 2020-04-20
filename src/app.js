/* Codigo para la configuracion del servidor */
import express, {json} from 'express';
import morgan from 'morgan';

//Importing route
import personaRoutes from './routes/personas';
import rolRoutes from './routes/roles';


//Initializations
const app = express();


//middleware
app.use(morgan('dev')); //visualizar peticiones al servidor
app.use(json()); //entiene los archivos en formato json

//routes
app.use('/api/personas' ,personaRoutes);
app.use('/api/roles' ,rolRoutes);

export default app;
 