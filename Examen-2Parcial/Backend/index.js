const express = require('express')
const Productos = require('./Modelos/Productos')

const app= express()

app.use(express.json());


app.get('/productos', async (req, resp) => {
    try {


        const respuesta = await Productos.findAll();

        if (respuesta.length > 0) {
            resp.status(200).json(respuesta)
        }
        else {
            resp.status(400).json(respuesta);
        }

    } catch (error) {
        resp.status(500).json({ 'mensjae': 'Ocurrio un errr', 'detalle': error })
    }
})


app.post('/productos', async (req, resp) => {
    try {

        console.log(req.body);

        
        const respuesta = await Productos.create(req.body);

        if (respuesta != null) {
            resp.status(200).json(respuesta)
        }
        else {
            resp.status(400).json(respuesta);
        }

    } catch (error) {
        resp.status(500).json({ 'mensjae': 'Ocurrio un errr', 'detalle': error })
    }
});



app.delete('/items/:id', async(req,resp) =>{
    
    try {

        const deleted= await Alumno.destroy({
            where: {idProducto: req.params.idProducto}
        })

          if (deleted) {
            resp.status(200).json({'mensaje':'Eliminado correctamente'})
        }
        else {
            resp.status(400).json({'mensaje':'No existe el registro'})
        }
        
    } catch (error) {
             resp.status(500).json({ 'mensjae': 'Ocurrio un errr', 'detalle': error })
    }
})


app.listen(5000, () => {
    console.log('Aplicacion ejecutando en puerto 5000')
})
