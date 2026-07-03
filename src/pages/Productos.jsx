import { useEffect, useState } from "react"
import ProductoCard from "../components/ProductoCard"
import { obtenerProductos } from "../services/productoService"

function Productos() {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        async function cargarProductos() {
            const datos = await obtenerProductos()
            setProductos(datos)
            setCargando(false)
        }

        cargarProductos()
    }, [])

    return (
        <section className="mx-auto max-w-7xl">
            <div className="mb-10 rounded-3xl border-4 border-gray-900 bg-white p-8 text-center shadow-xl">
                <h1 className="text-4xl font-black text-blue-700 md:text-5xl">
                    Catálogo de Productos
                </h1>

                <p className="mt-4 text-lg text-gray-700">
                    Explora las bebidas disponibles en La Taberna de Moe.
                </p>

                <p className="mt-3 rounded-full bg-red-600 px-4 py-2 font-bold text-white inline-block">
                    Venta solo para mayores de 18 años
                </p>
            </div>

            {cargando ? (
                <p className="text-center text-2xl font-black text-gray-900">
                    Cargando productos...
                </p>
            ) : (
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {productos.map((producto) => (
                        <ProductoCard key={producto.id} producto={producto} />
                    ))}
                </div>
            )}
        </section>
    )
}

export default Productos