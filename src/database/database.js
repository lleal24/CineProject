//modulo de sequalize para conexion
import Sequelize from 'sequelize';

//cadena de conexion
export const sequelize = new Sequelize(
    'postgres', //db
    'postgres', //user
    '', //pwd
    {
        host: 'localhost',
        dialect: 'postgres',
        pool:{
            max:5,
            min:0,
            require: 300000,
            idle: 10000 
        },
        logging: false
    }
)
