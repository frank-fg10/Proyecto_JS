function Nosotros() {
    return (
        <section className="mx-auto max-w-6xl rounded-3xl border-4 border-gray-900 bg-white p-8 shadow-2xl md:p-12">
            <div className="text-center">
                <span className="inline-block rounded-full bg-red-600 px-5 py-2 text-sm font-black uppercase text-white">
                    Nuestra historia
                </span>

                <h1 className="mt-4 text-4xl font-black text-blue-700 md:text-5xl">
                    Bienvenido a La Taberna de Moe
                </h1>

                <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-700">
                    En La Taberna de Moe ofrecemos una experiencia diferente para quienes
                    buscan bebidas seleccionadas, promociones atractivas y una atención
                    rápida. Nuestro catálogo reúne cervezas, vinos, piscos, whiskys, rones
                    y packs especiales para distintas ocasiones.
                </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
                <div className="rounded-3xl border-4 border-gray-900 bg-yellow-300 p-6 shadow-lg">
                    <div className="text-5xl">🍺</div>

                    <h2 className="mt-4 text-2xl font-black text-gray-900">
                        Variedad de productos
                    </h2>

                    <p className="mt-3 leading-7 text-gray-800">
                        Contamos con una selección de bebidas para reuniones, celebraciones,
                        regalos y momentos especiales. Cada producto se presenta con su
                        categoría, precio, descripción y disponibilidad.
                    </p>
                </div>

                <div className="rounded-3xl border-4 border-gray-900 bg-blue-500 p-6 shadow-lg">
                    <div className="text-5xl">⚡</div>

                    <h2 className="mt-4 text-2xl font-black text-yellow-300">
                        Atención rápida
                    </h2>

                    <p className="mt-3 leading-7 text-white">
                        Nuestro servicio está pensado para que el cliente encuentre
                        fácilmente lo que busca, revise promociones y pueda contactarnos de
                        manera sencilla para realizar consultas o pedidos.
                    </p>
                </div>

                <div className="rounded-3xl border-4 border-gray-900 bg-red-600 p-6 shadow-lg">
                    <div className="text-5xl">🎁</div>

                    <h2 className="mt-4 text-2xl font-black text-white">
                        Promociones especiales
                    </h2>

                    <p className="mt-3 leading-7 text-white">
                        Tenemos ofertas, packs y productos destacados para que nuestros
                        clientes encuentren buenas opciones según su presupuesto y ocasión.
                    </p>
                </div>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
                <div className="rounded-3xl border-4 border-gray-900 bg-gray-950 p-8 text-white shadow-xl">
                    <h2 className="text-3xl font-black text-yellow-300">
                        Nuestra misión
                    </h2>

                    <p className="mt-4 leading-8">
                        Brindar una experiencia de compra simple, entretenida y confiable,
                        ofreciendo bebidas seleccionadas, información clara de cada producto
                        y una atención cercana para cada cliente.
                    </p>
                </div>

                <div className="rounded-3xl border-4 border-gray-900 bg-yellow-300 p-8 shadow-xl">
                    <h2 className="text-3xl font-black text-gray-900">
                        Nuestra visión
                    </h2>

                    <p className="mt-4 leading-8 text-gray-800">
                        Ser una taberna reconocida por su estilo original, promociones
                        llamativas y facilidad para encontrar bebidas ideales para cada tipo
                        de reunión o celebración.
                    </p>
                </div>
            </div>

            <div className="mt-10 rounded-3xl border-4 border-gray-900 bg-white p-8 text-center shadow-xl">
                <h2 className="text-3xl font-black text-blue-700">
                    Compra responsable
                </h2>

                <p className="mx-auto mt-4 max-w-3xl leading-8 text-gray-700">
                    En La Taberna de Moe promovemos el consumo responsable. La venta de
                    bebidas alcohólicas está dirigida únicamente a personas mayores de
                    edad.
                </p>

                <p className="mt-5 inline-block rounded-full bg-red-600 px-6 py-3 font-black text-white">
                    Prohibida la venta a menores de 18 años
                </p>
            </div>
        </section>
    )
}

export default Nosotros