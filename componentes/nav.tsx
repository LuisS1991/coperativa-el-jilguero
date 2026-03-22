import Link from "next/link";
import { NavLink } from "./UI/NavLink";

export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-surface/80  backdrop-blur-md">
            <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
                <div className="font-serif text-2xl font-bold text-primary-900 dark:text-primary-50">
                    Covi El Jilguero
                </div>
                <div className="hidden md:flex items-center gap-8">
                    <NavLink href="/">Inicio</NavLink>
                    <NavLink href="/sorteos">Sorteos</NavLink>
                    <NavLink href="/jornadas">Jornadas</NavLink>
                    <NavLink href="/contacto">Contacto</NavLink>
                </div>
                <Link href="/login" className="bg-primary text-on-primary px-6 py-2 rounded-xl font-semibold scale-95 active:transition-transform hover:opacity-90 transition-all">
                    Member Login
                </Link>
            </div>
        </nav>
    )
}