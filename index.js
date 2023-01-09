import express from 'express'
const {Router} = express
import handlebars from 'express-handlebars'
import upload from './multer.js'

import {
    productosDao as productosApi,
    carritosDao as carritosApi
} from './daos/index.js'

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = new Router()

import Contenedor from './DB/contenedores/claseContenedor.js'

const app = express()

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`);
})

server.on ("error", error => console.log(`Error de conexión: ${error}`))

app.use('/api', router)
// app.use(express.static('public'))

router.use(express.json())
router.use(express.urlencoded({extended: true}))

// Configuración de Handlebars
app.engine('hbs', handlebars({
    extname: 'hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
}))

app.set ("view engine", "hbs")
app.set ("views", "./views")




// MIDDLEWARA ADMINISTRADORES ----------------------------------------------------------------------------   
const esAdmin  = true

const enviarErrorAuth = (url, metodo)  =>{
    const error ={
        error: -1
    }
    if(url && metodo){
        error.descripcion = `No tiene las credenciales para acceder a la ruta ${url} con el método ${metodo}`
    }
    else{
        error.descripcion = "No autorizado"
    }
    return error
}

const soloAdmins = (req, res, next) =>{
    if (!esAdmin){
        res.json((enviarErrorAuth(req.url, req.method)))
    }
    else{
        next()
    }
}


// PRODUCTOS ----------------------------------------------------------------------------

// GET '/api/productos'
router.get('/productos', async (req, res) => {
    const respuesta =  await productosApi.getAll()
    res.render('main', {respuesta})
})

// GET producto by id por parámetro
router.get('/productos/:id', async (req, res) => {
    const respuesta = await productosApi.getById(parseInt(req.params.id))
    res.send(!respuesta ? {error: "producto no encontrado"} : respuesta)
    })

// POST. Agrega un producto y devuelve su id
router.post('/productos', soloAdmins, async (req, res) => {
    const prod = await req.body
    console.log("prod: ", prod)
    const producto = {
        ...prod,
    }
    productosApi.save(producto)
    .then( respuesta => {
    res.render('formulario', {respuesta, registrado: true})
    })
})

// PUT. Recibe y actualiza un producto según id
router.put('/productos/:id', soloAdmins, (req, res) => {
    const cambio = req.body
    console.log("cambio: ", cambio)
    const pos = parseInt(req.params.id)
    productosApi.modifyById(pos, cambio)
})

// DELETE. Elimina según id
router.delete('/productos/:id', soloAdmins, (req, res) => {
    const pos = parseInt(req.params.id)
    productosApi.deleteById(pos)
    res.send({"Producto eliminado. ID": pos})
})


// Renderiza el index.html
app.get('/', (req, res, next) => {
    res.render('formulario', {home: true})
})


// CARRITO --------------------------------------------

// POST. Crea un carrito y asigna un id
router.post('/carrito', async (req, res) => {
    let timestamp = Date.now()
    let productos = await req.body
    let nuevoCarrito = {
        items: productos,
        cart_timestamp: timestamp
    }
    carritosApi.save(nuevoCarrito)
    .then(id => res.send(`Carrito creado con el id ${id}`))
})
// Para probarlo, se manda un array de objetos (cada objeto un producto).

// DELETE ID. Elimina un carrito
router.delete('/carrito/:id', (req, res) => {
    const pos = parseInt(req.params.id)
    carritosApi.deleteById(pos)
    res.send({"Carrito eliminado. ID": pos})
})

// GET. Listar todos los productos de un carrito
router.get('/carrito/:id', async (req, res) => {
    const respuesta = await carritosApi.getById(parseInt(req.params.id))
    res.send(!respuesta ? {error: "carrito no encontrado"} : respuesta)
    })

// GET ALL
router.get('/carrito', async (req, res) => {
    const resp = await carritosApi.getAll()
    res.send(resp)
})

// POST. Incorporar productos al carrito por su id
router.post('/carrito/:id', (req, res) => {
    const idCarrito = parseInt(req.params.id)
    const prod = req.body
    carritosApi.getById(idCarrito)
    .then(r => {
        let timestamp = Date.now()
        const nuevoCarro = {
            items: prod,
            // cart_timestamp: timestamp,
            // id: idCarrito
        }
        carritosApi.modifyCarritoById(idCarrito, nuevoCarro)
        res.send("Producto incorporado al carrito")
    })
})

// DELETE. Elimina un producto del carrito por id de producto y id de carrito
router.delete('/carrito/:id/productos/:id_prod', (req, res) => {
    let id = parseInt(req.params.id)
    let id_prod = parseInt(req.params.id_prod)
    carritosApi.getById(id)
    .then((carrito)=>{
        console.log("ITEMS: ", carrito[0].items)
        let productos = carrito[0].items
        let index = productos.findIndex((el) => el.id === id_prod)
        if (index === -1){
            res.send(`Error: Este producto no se encuentra en el carrito`)
            return
        }
        productos.splice(index, 1)
        let cart_timestamp = Date.now()
        carritosApi.modifyCarritoById(id, {"items": productos, cart_timestamp, "id": id})
        res.send("Producto eliminado")
    })
})



