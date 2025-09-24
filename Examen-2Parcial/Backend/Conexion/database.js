const {Sequelize}=require('sequelize')

const sequelize= new Sequelize(
    'EXamn2',
    'root',
    '',
    {
        host:'localhost',
        port:3306 ,
        dialect:'mysql'
    }
)

sequelize.authenticate()
        .then(()=>console.log('Conexion exitosa'))
        .catch((error)=>console.log('Ocurrio un error al conectarse' + error));

module.exports=sequelize;