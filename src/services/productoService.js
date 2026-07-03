const API_URL = "http://localhost:3001/productos"

export async function obtenerProductos() {
    try {
        const respuesta = await fetch(API_URL)

        if (!respuesta.ok) {
            throw new Error("Error al obtener los productos")
        }

        const datos = await respuesta.json()
        return datos
    } catch (error) {
        console.error("Error en el servicio:", error)
        return []
    }
}