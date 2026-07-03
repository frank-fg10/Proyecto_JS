import { useState } from "react"
import { NavLink } from "react-router-dom"

function Navbar() {
    const [menuAbierto, setMenuAbierto] = useState(false)

    const enlaces = [
        { nombre: "Inicio", ruta: "/" },
        { nombre: "Nosotros", ruta: "/nosotros" },
        { nombre: "Productos", ruta: "/productos" },
        { nombre: "Promociones", ruta: "/promociones" },
        { nombre: "Contacto", ruta: "/contacto" },
    ]

    function cerrarMenu() {
        setMenuAbierto(false)
    }

    function estilosEnlace({ isActive }) {
        return `rounded-full border-4 border-gray-900 px-4 py-2 font-black transition hover:-translate-y-1 hover:bg-white hover:text-gray-900 ${isActive
            ? "bg-red-600 text-white shadow-lg"
            : "bg-yellow-300 text-gray-900"
            }`
    }

    return (
        <header className="sticky top-0 z-50 border-b-4 border-gray-900 bg-blue-500 shadow-xl">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <NavLink to="/" onClick={cerrarMenu} className="flex items-center gap-3">
                    <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-4 border-gray-900 bg-yellow-300 shadow-md">
                        <img
                            src="https://pbs.twimg.com/profile_images/1288590495095107586/nG2BdZYN_400x400.jpg"
                            alt="Moe"
                            className="h-full w-full scale-101 object-cover"
                        />

                    </div>

                    <div>
                        <h1 className="text-2xl font-black leading-6 text-yellow-300 drop-shadow-md md:text-3xl">
                            La Taberna
                        </h1>
                        <p className="text-sm font-black uppercase tracking-widest text-white">
                            de Moe
                        </p>
                    </div>
                </NavLink>

                <button
                    onClick={() => setMenuAbierto(!menuAbierto)}
                    className="rounded-xl border-4 border-gray-900 bg-yellow-300 px-4 py-2 font-black text-gray-900 shadow-md md:hidden"
                >
                    {menuAbierto ? "Cerrar" : "Menú"}
                </button>

                <div className="hidden items-center gap-3 md:flex">
                    {enlaces.map((enlace) => (
                        <NavLink
                            key={enlace.ruta}
                            to={enlace.ruta}
                            end={enlace.ruta === "/"}
                            className={estilosEnlace}
                        >
                            {enlace.nombre}
                        </NavLink>
                    ))}
                </div>
            </nav>

            {menuAbierto && (
                <div className="border-t-4 border-gray-900 bg-blue-600 px-6 py-5 md:hidden">
                    <div className="flex flex-col gap-3">
                        {enlaces.map((enlace) => (
                            <NavLink
                                key={enlace.ruta}
                                to={enlace.ruta}
                                end={enlace.ruta === "/"}
                                onClick={cerrarMenu}
                                className={estilosEnlace}
                            >
                                {enlace.nombre}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar