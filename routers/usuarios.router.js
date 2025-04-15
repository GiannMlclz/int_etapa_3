import express from 'express'
import usuariosController from '../controllers/usuarios.controller.js'
const routerUsuarios = express.Router()

// ! CRUD usuarios
// CRUD -> R:READ ALL -> GET ALL -> http://localhost:8080/api/v1/usuarios
routerUsuarios.get('/', usuariosController.getAll)
// CRUD -> R:READ ONE -> GET ONE -> http://localhost:8080/api/v1/usuarios/id
routerUsuarios.get('/:id', usuariosController.getOne)
  
// CRUD -> C:CREATE -> POST -> http://localhost:8080/api/v1/usuarios + productoACrear
routerUsuarios.post('/', usuariosController.create)
  
// CRUD -> U:UPDATE -> PUT -> http://localhost:8080/api/v1/usuarios/id + productoAEditar
routerUsuarios.put('/:id', usuariosController.update)
  
// CRUD -> D:DELETE -> DELETE -> http://localhost:8080/api/v1/usuarios/id
routerUsuarios.delete('/:id', usuariosController.remove)

export default routerUsuarios