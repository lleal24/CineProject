import Persona from '../models/Persona';

export async function getPersonas(req, res){
    const personas = await Persona.findAll({
        attributes: ["nombre", "idrol"]
    });
    res.json({
        data: personas
    });
}

export async function createPersonas(req, res) {
    //console.log(req.body); //sirve para visualizar por consola el cuerpo de la peticion
    //res.send('OK')
    const { nombre, idrol } = req.body;
    try {
        let nuevaPersona = await Persona.create({
            nombre,
            idrol
        }, {
            fields: ["nombre", "idrol"]
        });
        if (nuevaPersona) {
            return res.json({
                "mensaje": "Persona creada",
                "data": nuevaPersona
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            "mensaje": "Lo siento algo ha ocurrido",
            "data": {}
        })
    }
}


