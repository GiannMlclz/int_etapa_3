import mongoose from "mongoose";

const UsuarioEsquema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        apellido: String,
        correo: {
            type: String,
            required: true,
            unique: true
        },
        dni: String,
        nacionalidad: String,
        password: {
            type: String,
            required: true
        },
    },
    {
    timestamps: true,
    versionKey: false
    }
)

const UsuarioModelo = mongoose.model('usuarios', UsuarioEsquema)

// Métodos para interactuar con la db

const obtenerTodosLosUsuarios = () => {

}
const obtenerUnUsuario = () => {

}
const crearUnUsuario = async (nuevoUsuario) => {

    try {

        const usuarioCreado = new UsuarioModelo(nuevoUsuario)
        const usuarioGuardado = await usuarioCreado.save()
        return usuarioGuardado
    } catch (error) {
        throw error
    }
}
const editarUnUsuario = () => {

}
const eliminarUnUsuario = () => {

}

export default {
    obtenerTodosLosUsuarios,
    obtenerUnUsuario,
    crearUnUsuario,
    editarUnUsuario,
    eliminarUnUsuario
}