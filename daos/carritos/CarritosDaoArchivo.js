import ContenedorArchivo from "../../DB/contenedores/claseContenedor.js"

class CarritosDaoArchivo extends ContenedorArchivo {

    constructor() {
        super('../../DB/contenedores/carritos.json')
    }

    async guardar(carrito = { productos: [] }) {
        return super.guardar(carrito)
    }
}

export default CarritosDaoArchivo
