function Inicio() {
    return (
        <section className="mx-auto max-w-6xl overflow-hidden rounded-3xl border-4 border-gray-900 bg-white shadow-2xl">
            <div className="grid gap-8 p-8 md:grid-cols-2 md:p-12">
                <div className="flex flex-col justify-center">
                    <span className="mb-4 inline-block w-fit rounded-full bg-red-600 px-4 py-2 text-sm font-black uppercase text-white">
                        Licorería ficticia online
                    </span>

                    <h1 className="text-4xl font-black leading-tight text-blue-700 md:text-6xl">
                        Bienvenido a La Taberna de Moe
                    </h1>

                    <p className="mt-5 text-lg leading-8 text-gray-700">
                        Una tienda web académica donde podrás explorar bebidas, promociones
                        y productos destacados usando React, Tailwind CSS y datos dinámicos.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="/productos"
                            className="rounded-full bg-blue-600 px-6 py-3 font-black text-white shadow-md transition hover:bg-red-600"
                        >
                            Ver productos
                        </a>

                        <a
                            href="/promociones"
                            className="rounded-full bg-yellow-300 px-6 py-3 font-black text-gray-900 shadow-md transition hover:bg-yellow-400"
                        >
                            Ver promociones
                        </a>
                    </div>
                </div>

                <div className="flex items-center justify-center rounded-3xl bg-yellow-300 p-8">
                    <div className="rounded-3xl border-4 border-gray-900 bg-blue-500 p-8 text-center shadow-xl">
                        <p className="text-7xl">🍺</p>
                        <h2 className="mt-4 text-3xl font-black text-yellow-300">
                            Moe's Style
                        </h2>
                        <p className="mt-3 font-semibold text-white">
                            Catálogo dinámico, promociones y formulario de contacto.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Inicio