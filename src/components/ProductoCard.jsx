function ProductoCard({ producto }) {
    return (
        <article className="group overflow-hidden rounded-3xl border-4 border-gray-900 bg-white shadow-xl transition hover:-translate-y-2 hover:shadow-2xl">
            <div className="relative bg-yellow-300 p-5">
                <div className="absolute right-4 top-4 z-10 rounded-full border-4 border-gray-900 bg-red-600 px-4 py-1 text-sm font-black text-white">
                    {producto.categoria}
                </div>

                <div className="flex h-72 items-center justify-center overflow-hidden rounded-3xl border-4 border-gray-900 bg-white shadow-lg">
                    <img
                        src={producto.imagenUrl}
                        alt={producto.nombre}
                        className="h-full w-full object-contain p-6 transition duration-300 group-hover:scale-110"
                        onError={(e) => {
                            e.currentTarget.src =
                                "https://placehold.co/600x400/facc15/111827?text=Producto"
                        }}
                    />
                </div>
            </div>

            <div className="p-6">
                <div className="mb-4 rounded-2xl border-4 border-gray-900 bg-yellow-300 p-4">
                    <p className="text-center font-black italic text-gray-900">
                        “{producto.frase}”
                    </p>
                </div>

                <h2 className="text-2xl font-black text-blue-700">
                    {producto.nombre}
                </h2>

                <p className="mt-3 leading-7 text-gray-700">
                    {producto.descripcion}
                </p>

                <div className="mt-5 flex items-center justify-between rounded-2xl bg-gray-100 p-4">
                    <p className="text-2xl font-black text-red-600">
                        S/ {producto.precio.toFixed(2)}
                    </p>

                    <p className="font-black text-gray-800">
                        Existencias: {producto.stock}
                    </p>
                </div>

                {producto.promocion && (
                    <p className="mt-4 rounded-2xl border-4 border-gray-900 bg-red-600 px-4 py-3 text-center font-black text-white">
                        Producto en promoción
                    </p>
                )}

                <button className="mt-5 w-full rounded-full border-4 border-gray-900 bg-blue-600 px-5 py-3 font-black text-white shadow-md transition hover:bg-red-600">
                    Ver producto
                </button>
            </div>
        </article>
    )
}

export default ProductoCard 