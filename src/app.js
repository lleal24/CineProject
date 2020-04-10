/* Codigo para la configuracion del servidor */
import express, {json} from 'express';
import morgan from 'morgan';

//Importing route
import projectRoutes from './routes/projects';
import taskRoutes from './routes/tasks';


//Initializations
const app = express();


//middleware
app.use(morgan('dev')); //visualizar peticiones al servidor
app.use(json()); //entiene los archivos en formato json

//routes
app.use('api/projects' ,projectRoutes);
app.use('api/tasks' ,taskRoutes);

export default app;
 