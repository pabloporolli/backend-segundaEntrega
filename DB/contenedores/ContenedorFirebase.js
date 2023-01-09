import admin from "firebase-admin"
import config from '../../config.js'

admin.initializeApp({
    credential: admin.credential.cert(config.firebase)
})

const db = admin.firestore();

class ContenedorFirebase {

    constructor(nombreColeccion) {
        this.coleccion = db.collection(nombreColeccion)
    }

    async getById(id) {
        const doc = this.coleccion.doc(`${id}`)
        const item = await doc.get()
        const response = item.data()
        console.log(response);
        return response
    }

    async getAll() {
        const lectura = await this.coleccion.get()
        let docus = lectura.docs
        const resp = docus.map((doc) => ({
            id: doc.id,
            price: doc.data().price,
            title: doc.data().title,
            thumbnail: doc.data().thumbnail
        }))
        console.log(resp);
        return resp
    }

    async save(nuevoElem) {
        let id = 1
            const cantidadRegistros = await this.coleccion.count().get()
            if(cantidadRegistros.data().count > 0){
                id = (cantidadRegistros.data().count) +1
            }          
            let nuevoDoc= this.coleccion.doc(`${id}`)
            nuevoElem = {
                ...nuevoElem,
                id: id
            }
            await nuevoDoc.create(nuevoElem)
            return id
    }

    async modifyById(id, nuevoElem) {
        const doc = this.coleccion.doc(`${id}`)
        // Método update. Le pasamos por parámetro qué vamos a updetear
        const item = await doc.update({productos: nuevoElem})
        console.log(item);
    }

    async modifyCarritoById (id, nuevaInfo) {
        const doc = this.coleccion.doc(`${id}`)
        // Método update. Le pasamos por parámetro qué vamos a updetear
        const item = await doc.update({productos: nuevaInfo})
        console.log(item);
    }

    async deleteById(id) {
        const doc = this.coleccion.doc(`${id}`)
        const item = await doc.delete()
        console.log(item);
    }

    async deleteAll() {
        const doc = this.coleccion.doc
        const item = await doc.delete()
    }

    async desconectar() {
    }
}

export default ContenedorFirebase