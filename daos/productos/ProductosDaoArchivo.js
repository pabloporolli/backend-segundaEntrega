import claseContenedor from "../../DB/contenedores/claseContenedor.js"

class ProductosDaoArchivo extends claseContenedor {

    constructor() {
        super('contenedores/productosNuevo.json')
    }
}

export default ProductosDaoArchivo
