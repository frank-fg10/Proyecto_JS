import { Link } from "react-router-dom"

function NotFound() {
    return (
        <section className="mx-auto flex max-w-4xl flex-col items-center rounded-3xl border-4 border-gray-900 bg-white p-10 text-center shadow-2xl">
            <div className="text-8xl">😵</div>

            <h1 className="mt-6 text-6xl font-black text-red-600">
                Error 404
            </h1>

            <p className="mt-4 text-xl font-bold text-gray-700">
                Ups... esta ruta no existe en La Taberna de Moe.
            </p>

            <p className="mt-3 text-gray-600">
                Puede que hayas escrito mal la dirección o que la página haya sido movida.
            </p>

            <Link
                to="/"
                className="mt-8 rounded-full bg-blue-600 px-8 py-4 font-black text-white shadow-lg transition hover:bg-red-600"
            >
                Volver al inicio
            </Link>
        </section>
    )
}

export default NotFound