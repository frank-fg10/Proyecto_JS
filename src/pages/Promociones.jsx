import { useEffect, useState } from "react"
import ProductoCard from "../components/ProductoCard"
import { obtenerProductos } from "../services/productoService"

function Promociones() {
    const [promociones, setPromociones] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        async function cargarPromociones() {
            const productos = await obtenerProductos()

            const productosEnPromocion = productos.filter(
                (producto) => producto.promocion === true
            )

            setPromociones(productosEnPromocion)
            setCargando(false)
        }

        cargarPromociones()
    }, [])

    return (
        <section className="mx-auto max-w-7xl">
            <div className="mb-10 rounded-3xl border-4 border-gray-900 bg-white p-8 text-center shadow-xl">
                <span className="inline-block rounded-full bg-red-600 px-5 py-2 text-sm font-black uppercase text-white">
                    Ofertas especiales
                </span>

                <h1 className="mt-4 text-4xl font-black text-blue-700 md:text-5xl">
                    Promociones de La Taberna de Moe
                </h1>

                <p className="mt-4 text-lg text-gray-700">
                    Aquí encontrarás los productos que están en promoción.
                </p>

                <p className="mt-3 inline-block rounded-full bg-yellow-300 px-4 py-2 font-bold text-gray-900">
                    Solo para mayores de 18 años
                </p>
            </div>

            {cargando ? (
                <p className="text-center text-2xl font-black text-gray-900">
                    Cargando promociones...
                </p>
            ) : promociones.length > 0 ? (
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {promociones.map((producto) => (
                        <ProductoCard key={producto.id} producto={producto} />
                    ))}
                </div>
            ) : (
                <div className="rounded-3xl border-4 border-gray-900 bg-white p-8 text-center shadow-xl">
                    <h2 className="text-3xl font-black text-red-600">
                        No hay promociones disponibles
                    </h2>

                    <p className="mt-4 text-gray-700">
                        Vuelve pronto para revisar nuevas ofertas.
                    </p>
                </div>
            )}
        </section>
    )
}

export default Promociones