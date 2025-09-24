const { DataTypes } = require('sequelize')
const sequelize= require('../Conexion/database')

const productos = sequelize.define('productos',{
    idProducto:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type:DataTypes.STRING(100)
    },
    descripcion:{
        type:DataTypes.STRING(150)
    },
    precio:{
        type:DataTypes.DECIMAL(28,5)
    },
    estado:{
        type:DataTypes.ENUM("Disponible", "No disponible"),

    },
    categoria:{
        type:DataTypes.ENUM('calzado', 'vestidos', 'accesorios')
    }
    

},{
    tableName:'productos',
    timestamps:false

});

module.export=productos;