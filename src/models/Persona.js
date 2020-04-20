import Sequelize from 'sequelize';
import {sequelize} from '../database/database';
import Rol from './Rol';

const Persona = sequelize.define('personas',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre:{
        type: Sequelize.TEXT
    },
    idrol: {
        type: Sequelize.INTEGER
    }
},{
    timestamps: false
});

Persona.belongsTo(Rol, {foreingKey: "idrol", sourceKey: "id"});
Rol.belongsTo(Persona, {foreingKey: "idrol", sourceKey: "id"});


export default Persona;