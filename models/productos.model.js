import mongoose from 'mongoose'

// ! CREAMOS EL ESQUEMA
const productosSchema = mongoose.Schema({
    nombre: String,
    precio: Number,
    stock: Number,
    marca: String,
    categoria: String,
    detalles: String,
    foto: String,
    envio: Boolean
})

// ! CREAMOS EL MODELO
const ProductoModel = mongoose.model('productos', productosSchema)

/* ------------------------------------------------------------------- */
/* Métodos que nos van a servir de interfaz para interactuar con la DB */
/* ------------------------------------------------------------------- */

// ------------------------------------------------- Obtener todos los productos de Mongo

const leerProductos = async () => {
    try {
        const productos = await ProductoModel.find({})
        return productos
    } catch (error) {
        console.log('[leerProductos]: Algo no salío bien...', error)
    }
}
// ------------------------------------------------- Obtener el producto basdado en el id
const leerProducto = async (id) => {
    try {
        const producto = await ProductoModel.findById(id)
        return producto
    } catch (error) {
        console.log('[leerProducto]: Algo no salío bien...', error)
    }
}
// ------------------------------------------------- Guardar en la base de datos el producto recibido
const guardarProducto = async (productoNuevo) => {

    try {
        const productoCreado = new ProductoModel(productoNuevo)
        await productoCreado.save()
        return productoCreado
    } catch (error) {
        console.log('[guardarProducto]: No se pudo guardar el producto en la DB', error)
    }
}

// ------------------------------------------------- Actualizar el producto basado en el id y el producto a editar

const modificarProducto = async (id, productoAEditar) => {

    try {
        const productoModificado = await ProductoModel.findByIdAndUpdate(id, productoAEditar)
        return productoModificado
    } catch (error) {
        console.log('[modificarProducto]: No se pudo actualizar el producto', error)
    }

}

// ------------------------------------------------- Eliminar el producto basado en el id

const eliminarProducto = async (id) => {

    try {
        const productoBorrado = await ProductoModel.findByIdAndDelete(id)
        return productoBorrado
    } catch (error) {
        console.log('[eliminarProducto]: No se pudo eliminar el producto de la DB', error)
    }

}

export default {
    leerProductos,
    leerProducto,
    guardarProducto,
    modificarProducto,
    eliminarProducto
}



