//Enrutador de express
import {Router} from 'express';
import {createPersonas, getPersonas} from '../controllers/persona.controller' 

const router = Router();

// /api/personas/
router.post('/' ,createPersonas);
router.get('/',getPersonas);

export default router;
