import Sequelize from 'sequelize'
import {sequelize} from '../database/database'; //cadena de conexion

//Definicion de modelo
const Rol = sequelize.define('roles',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    actor:{
        type: Sequelize.BOOLEAN
    },
    director:{
        type: Sequelize.BOOLEAN
    }
},{
    timestamps: false //AgregarCUando se usen Datos tipo DATATME
});
export default Rol;