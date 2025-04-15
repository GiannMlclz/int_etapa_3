import mongoose from "mongoose"

// ! Creamos el esquema (La descripción de como va a ser el documento mongo)

const ProductoEsquema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        nombre: String,
        precio: Number,
        stock: Number,
        marca: String,
        categoria: String,
        detalles: String,
        foto: String,
        envio: Boolean
    },
    {
        timestamps: true, // createAt | updatedAt
        versionKey: false
    }

)

// ! Creamos el modelo a partir del esquema, Definir la colección donde se van a guardar los ocumentos

// ProductoModelo -> Es el que me va a permitir interacturar con la base de datos.
const ProductoModelo = mongoose.model('productos', ProductoEsquema)

// ! Métodos para interactuar con la BD

const obtenerTodosLosProductos = async () => {

    try {
        const productos = await ProductoModelo.find()
        return(productos)
    } catch (error) {
        throw error
    }
}

const obtenerUnProducto = async (id) => {
    
    try {
    const producto = await ProductoModelo.findById(id)
    return producto
    } catch (error) {
        throw error
    }
}

const crearProducto = async (productoNuevo) => {
    try {
        const productoAGuardar = new ProductoModelo(productoNuevo)
        const productoGuardado = await productoAGuardar.save()
        return productoGuardado

    } catch (error) {
        throw error
    }
}

const editarUnProducto = async (productoAEditar) => {
    try {
        const options = { new: true}
        const productoEditado = await ProductoModelo.findByIdAndUpdate(productoAEditar.id, productoAEditar, options)
        return productoEditado
    } catch (error) {
        throw error
    }
}

const eliminarUnProducto = async (id) => {
    try {
    const productoELiminado = await ProductoModelo.findByIdAndDelete(id)
    return productoELiminado
    } catch (error) {
       throw error 
    }
}

export default {
    obtenerTodosLosProductos,
    obtenerUnProducto,
    crearProducto,
    editarUnProducto,
    eliminarUnProducto
}