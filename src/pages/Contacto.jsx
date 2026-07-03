import { useState } from "react"

function Contacto() {
    const [formulario, setFormulario] = useState({
        nombre: "",
        email: "",
        telefono: "",
        producto: "",
        edad: "",
        mensaje: "",
    })

    const [errores, setErrores] = useState({})
    const [enviado, setEnviado] = useState(false)

    function manejarCambio(e) {
        const { name, value } = e.target

        setFormulario({
            ...formulario,
            [name]: value,
        })
    }

    function validarFormulario() {
        const nuevosErrores = {}

        if (formulario.nombre.trim() === "") {
            nuevosErrores.nombre = "El nombre es obligatorio."
        }

        if (formulario.email.trim() === "") {
            nuevosErrores.email = "El correo es obligatorio."
        } else if (!formulario.email.includes("@")) {
            nuevosErrores.email = "Ingresa un correo válido."
        }

        if (formulario.telefono.trim() === "") {
            nuevosErrores.telefono = "El teléfono es obligatorio."
        }

        if (formulario.producto === "") {
            nuevosErrores.producto = "Selecciona un producto de interés."
        }

        if (formulario.edad === "") {
            nuevosErrores.edad = "La edad es obligatoria."
        } else if (Number(formulario.edad) < 18) {
            nuevosErrores.edad = "Debes ser mayor de 18 años."
        }

        if (formulario.mensaje.trim().length < 10) {
            nuevosErrores.mensaje = "El mensaje debe tener al menos 10 caracteres."
        }

        return nuevosErrores
    }

    function manejarEnvio(e) {
        e.preventDefault()

        const erroresValidados = validarFormulario()

        if (Object.keys(erroresValidados).length > 0) {
            setErrores(erroresValidados)
            setEnviado(false)
            return
        }

        setErrores({})
        setEnviado(true)

        setFormulario({
            nombre: "",
            email: "",
            telefono: "",
            producto: "",
            edad: "",
            mensaje: "",
        })
    }

    return (
        <section className="mx-auto max-w-5xl rounded-3xl border-4 border-gray-900 bg-white p-8 shadow-2xl md:p-12">
            <div className="mb-8 text-center">
                <span className="inline-block rounded-full bg-red-600 px-5 py-2 text-sm font-black uppercase text-white">
                    Atención al cliente
                </span>

                <h1 className="mt-4 text-4xl font-black text-blue-700 md:text-5xl">
                    Contacta con La Taberna de Moe
                </h1>

                <p className="mt-4 text-lg text-gray-700">
                    Completa el formulario para consultar por productos, promociones o pedidos.
                </p>
            </div>

            {enviado && (
                <div className="mb-6 rounded-2xl border-4 border-gray-900 bg-yellow-300 p-5 text-center font-black text-gray-900">
                    Tu mensaje fue enviado correctamente. Nos comunicaremos contigo pronto.
                </div>
            )}

            <form onSubmit={manejarEnvio} className="grid gap-6">
                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block font-black text-gray-900">
                            Nombre completo
                        </label>
                        <input
                            type="text"
                            name="nombre"
                            value={formulario.nombre}
                            onChange={manejarCambio}
                            placeholder="Ejemplo: Juan Pérez"
                            className="w-full rounded-2xl border-4 border-gray-900 px-4 py-3 outline-none focus:border-blue-600"
                        />
                        {errores.nombre && (
                            <p className="mt-2 font-bold text-red-600">{errores.nombre}</p>
                        )}
                    </div>

                    <div>
                        <label className="mb-2 block font-black text-gray-900">
                            Correo electrónico
                        </label>
                        <input
                            type="text"
                            name="email"
                            value={formulario.email}
                            onChange={manejarCambio}
                            placeholder="correo@ejemplo.com"
                            className="w-full rounded-2xl border-4 border-gray-900 px-4 py-3 outline-none focus:border-blue-600"
                        />
                        {errores.email && (
                            <p className="mt-2 font-bold text-red-600">{errores.email}</p>
                        )}
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block font-black text-gray-900">
                            Teléfono
                        </label>
                        <input
                            type="text"
                            name="telefono"
                            value={formulario.telefono}
                            onChange={manejarCambio}
                            placeholder="Ejemplo: 987654321"
                            className="w-full rounded-2xl border-4 border-gray-900 px-4 py-3 outline-none focus:border-blue-600"
                        />
                        {errores.telefono && (
                            <p className="mt-2 font-bold text-red-600">{errores.telefono}</p>
                        )}
                    </div>

                    <div>
                        <label className="mb-2 block font-black text-gray-900">
                            Edad
                        </label>
                        <input
                            type="number"
                            name="edad"
                            value={formulario.edad}
                            onChange={manejarCambio}
                            placeholder="Debes ser mayor de 18"
                            className="w-full rounded-2xl border-4 border-gray-900 px-4 py-3 outline-none focus:border-blue-600"
                        />
                        {errores.edad && (
                            <p className="mt-2 font-bold text-red-600">{errores.edad}</p>
                        )}
                    </div>
                </div>

                <div>
                    <label className="mb-2 block font-black text-gray-900">
                        Producto de interés
                    </label>
                    <select
                        name="producto"
                        value={formulario.producto}
                        onChange={manejarCambio}
                        className="w-full rounded-2xl border-4 border-gray-900 px-4 py-3 outline-none focus:border-blue-600"
                    >
                        <option value="">Selecciona una opción</option>
                        <option value="Cerveza Duff">Cerveza Duff</option>
                        <option value="Vino Tinto Don Moe">Vino Tinto Don Moe</option>
                        <option value="Pisco Springfield">Pisco Springfield</option>
                        <option value="Whisky Nuclear">Whisky Nuclear</option>
                        <option value="Pack Taberna Familiar">Pack Taberna Familiar</option>
                        <option value="Ron Krusty Gold">Ron Krusty Gold</option>
                    </select>
                    {errores.producto && (
                        <p className="mt-2 font-bold text-red-600">{errores.producto}</p>
                    )}
                </div>

                <div>
                    <label className="mb-2 block font-black text-gray-900">
                        Mensaje
                    </label>
                    <textarea
                        name="mensaje"
                        value={formulario.mensaje}
                        onChange={manejarCambio}
                        placeholder="Escribe tu consulta..."
                        rows="5"
                        className="w-full resize-none rounded-2xl border-4 border-gray-900 px-4 py-3 outline-none focus:border-blue-600"
                    ></textarea>
                    {errores.mensaje && (
                        <p className="mt-2 font-bold text-red-600">{errores.mensaje}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="rounded-full bg-blue-600 px-8 py-4 text-lg font-black text-white shadow-lg transition hover:bg-red-600"
                >
                    Enviar consulta
                </button>
            </form>
        </section>
    )
}

export default Contacto