import express from 'express'
import 'dotenv/config'
import path from 'node:path'

import routerProductos from './routers/productos.router.js'
import routerUpload from './routers/upload.router.js'
import conectarMongo from './config/conectarMongo.js'

// ! CONFIGURACIONES
const app = express()
const PORT = process.env.PORT || 3000

// ! CONEXIÓN MONGODB
conectarMongo()

// ! MIDDLEWARES
app.use(express.static(path.join('public'))) // Disponibilizo la carpeta public para que justamente sea de acceso público
app.use(express.urlencoded({extended: true})) // Decodifica el body enviado desde un form
app.use(express.json()) // Decodificar el body enviado desde un json

// ! ROUTES
app.use('/api/productos', routerProductos)
app.use('/api/upload', routerUpload)


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})