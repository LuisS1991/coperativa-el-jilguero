export default function Sorteos() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
                {/*    <!-- Navigation --> */}
                <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 backdrop-blur-md dark:bg-background-dark/80">
                    <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                                <span className="material-symbols-outlined">confirmation_number</span>
                            </div>
                            <h2 className="text-xl font-bold tracking-tight">Covi El Jilguero</h2>
                        </div>
                        <nav className="hidden md:flex items-center gap-8">
                            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Inicio</a>
                            <a className="text-sm font-semibold text-primary" href="#">Sorteos</a>
                            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Ganadores</a>
                            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Reglas</a>
                        </nav>
                        <div className="flex items-center gap-3">
                            <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                                <span className="material-symbols-outlined">search</span>
                            </button>
                            <button className="flex h-10 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                                <span className="material-symbols-outlined text-[20px]">account_circle</span>
                                <span>Mi Cuenta</span>
                            </button>
                        </div>
                    </div>
                </header>
                <main className="mx-auto w-full max-w-[1200px] flex-1 px-6 py-8">
                    {/*  <!-- Hero Section: Gran Sorteo Anual --> */}
                    <section className="mb-12">
                        <div className="relative overflow-hidden rounded-3xl bg-slate-900 shadow-2xl">
                            <div className="absolute inset-0 opacity-60">
                                <img className="h-full w-full object-cover" data-alt="Luxury modern car driving on a coastal road at sunset" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJvXbzlsz8P86QjEg3OLkksZdZWZrgddmlZIptUfgwHpwhxFePbXrMInXXVVd1Bvcsh-pv27J16NzGDakbG9R6r7R-oR73mxf7xQoKjZj25D4Rema4RfaD9mLx12v648dOsur6XSPyQmJxcVIvxQqBcAcoiboEf8h3JfHEK_IwcPXyAMa0RyAaA4p2CrHPQk0aZpeh98XhyMhKgErg_f7X0mvw46hM2eRR6bfrrUAsbtd9k8idjTf-lTTKhqPLh6MvAXfYVDcltjHQ" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent"></div>
                            <div className="relative flex flex-col justify-end p-8 md:p-16 min-h-[500px]">
                                <div className="max-w-2xl">
                                    <span className="mb-4 inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-primary/30">
                                        Evento Principal 2024
                                    </span>
                                    <h1 className="mb-4 text-5xl font-black leading-tight text-white md:text-7xl">
                                        Gran Sorteo Anual
                                    </h1>
                                    <p className="mb-8 text-lg text-slate-200 md:text-xl">
                                        ¡Participa y gana increíbles premios! No pierdas la oportunidad de cambiar tu vida. El sorteo se realizará en vivo ante escribano público.
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        <button className="flex h-14 items-center justify-center gap-3 rounded-2xl bg-primary px-8 text-lg font-black text-white shadow-xl shadow-primary/40 hover:scale-105 active:scale-95 transition-all">
                                            <span className="material-symbols-outlined">shopping_cart</span>
                                            COMPRAR TICKETS
                                        </button>
                                        <div className="flex flex-col justify-center rounded-2xl bg-white/10 px-6 py-2 backdrop-blur-md border border-white/20">
                                            <span className="text-[10px] uppercase tracking-wider text-slate-300">Fecha del Sorteo</span>
                                            <span className="text-xl font-bold text-white">15 de Diciembre</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*    <!-- Featured Prizes Grid --> */}
                    <section className="mb-16">
                        <div className="mb-8 flex items-end justify-between">
                            <div>
                                <h2 className="text-3xl font-black tracking-tight">Premios Destacados</h2>
                                <p className="text-slate-500 dark:text-slate-400">Descubre lo que podrías llevarte a casa este año</p>
                            </div>
                            <span className="material-symbols-outlined text-4xl text-primary/30">stars</span>
                        </div>
                        <div className="grid gap-8 md:grid-cols-3">
                            {/*   <!-- 1st Prize --> */}
                            <div className="group flex flex-col overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-sm transition-all hover:shadow-xl dark:bg-slate-900">
                                <div className="relative h-64 overflow-hidden">
                                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Modern shiny white SUV car in showroom" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxK0C3-loKdgiA6pov5xvkFWgnXml6lwIZrAd3hxRQsqBdMzATPIULidBPkulz4QgV4LmhcGsd9VsdwVCdBwQalUo9kV7VUgwg-SYVS4XJaUWRH3iy5iJJqU0_G0ajlb-FJsamS__IF66Bla2tntW1K-qEEHz44UXdAfkEZVkW5DPkc6o0rT0PprL2puLCnQqHiWYOrs2iJmGwCZxThl0DZ0V7WpG35c8YBp6XNk2BYI3utFMkufG7cT0xvMbaMDBuGkuEhIqNLE6C" />
                                    <div className="absolute left-4 top-4 rounded-lg bg-primary px-3 py-1 text-sm font-bold text-white">
                                        1° PREMIO
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col p-6">
                                    <h3 className="mb-2 text-2xl font-bold">Auto 0km</h3>
                                    <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                                        Último modelo full equipo, transmisión automática, techo solar y la máxima seguridad para tu familia.
                                    </p>
                                    <div className="flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
                                        <span className="text-sm font-medium text-slate-400 uppercase tracking-tighter">Valor Est. $25k+</span>
                                        <span className="material-symbols-outlined text-primary">directions_car</span>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 2nd Prize --> */}
                            <div className="group flex flex-col overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-sm transition-all hover:shadow-xl dark:bg-slate-900">
                                <div className="relative h-64 overflow-hidden">
                                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Black sleek sports motorcycle parked on urban street" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp8UOv82d6DNl2FLhw_LSwAtK2ustDGLeWlblnJ96zyDOa0PE-x2sbkgaDGUVbmnLYyUpgr2ZedMj2ddt4AGfvmZkiyoE3XaUCAxSOMzpbgQW4Ql-ryEa3J71HdlBb6MO67VgbstYtyWlXEN3CljxGK-BimIYw8SMU22FPT6eQ9R7A7JkIfWpDzR82WM4jljrL4bG27f10EDXZyvOygvuMk8dzKt1nJUMfw84dkOU4SJp8Yny6kud7f8CrK_ipCvTOrTvs3f9x9gVj" />
                                    <div className="absolute left-4 top-4 rounded-lg bg-slate-800 px-3 py-1 text-sm font-bold text-white">
                                        2° PREMIO
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col p-6">
                                    <h3 className="mb-2 text-2xl font-bold">Moto Deportiva</h3>
                                    <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                                        Potencia y agilidad en dos ruedas. Ideal para la ciudad y escapadas de fin de semana.
                                    </p>
                                    <div className="flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
                                        <span className="text-sm font-medium text-slate-400 uppercase tracking-tighter">Valor Est. $5k+</span>
                                        <span className="material-symbols-outlined text-primary">two_wheeler</span>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 3rd Prize --> */}
                            <div className="group flex flex-col overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-sm transition-all hover:shadow-xl dark:bg-slate-900">
                                <div className="relative h-64 overflow-hidden">
                                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Modern electric scooter on a sidewalk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjyp2H2VyRwls0QGN95V1b8hJGHcSQz3pBvQba4y8gvWCJKDBnNJWZTVrfg_y270_cAcBi3WhvKHUi4ByJMih16wMxH-4UJdqYSJaK5jZekRWIm3X6N_wXkVYuI6tpPCdZkTL4QgmW08b3sPI5Fq_yxaWEO7rrJEq61iEnXZc7BvwR3UJjFNcU6-gYcFn9fW4QsfNAaMbmijQjeLCbPdsxFxoY3ko-fADKfU315WyxUXMwTGwEpwODIR2dmbp36UOV773uRsjr6Lnv" />
                                    <div className="absolute left-4 top-4 rounded-lg bg-slate-800 px-3 py-1 text-sm font-bold text-white">
                                        3° PREMIO
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col p-6">
                                    <h3 className="mb-2 text-2xl font-bold">Monopatín Eléctrico</h3>
                                    <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                                        Movilidad sustentable con autonomía extendida y diseño plegable de alta gama.
                                    </p>
                                    <div className="flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
                                        <span className="text-sm font-medium text-slate-400 uppercase tracking-tighter">Valor Est. $800+</span>
                                        <span className="material-symbols-outlined text-primary">electric_scooter</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*      <!-- Rules & Info Section --> */}
                    <section className="grid gap-8 lg:grid-cols-2">
                        <div className="rounded-3xl bg-primary/5 p-8 dark:bg-primary/10">
                            <div className="mb-6 flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                                    <span className="material-symbols-outlined">gavel</span>
                                </div>
                                <h2 className="text-2xl font-bold">Reglas del Sorteo</h2>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex gap-4">
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-[12px] font-bold text-white">1</span>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Podrán participar todas las personas mayores de 18 años residentes en el país.</p>
                                </li>
                                <li className="flex gap-4">
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-[12px] font-bold text-white">2</span>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Cada ticket comprado otorga una (1) oportunidad única para todos los premios del sorteo.</p>
                                </li>
                                <li className="flex gap-4">
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-[12px] font-bold text-white">3</span>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">El sorteo se realizará mediante bolillero electrónico certificado el día 15/12 a las 20:00hs.</p>
                                </li>
                                <li className="flex gap-4">
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-[12px] font-bold text-white">4</span>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Los ganadores serán notificados vía email y teléfono, y publicados en nuestro sitio web.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col justify-center rounded-3xl bg-slate-900 p-8 text-white shadow-xl dark:bg-black/40">
                            <h3 className="mb-2 text-lg font-bold text-primary">¿Tienes dudas?</h3>
                            <h2 className="mb-6 text-3xl font-black">Estamos para ayudarte</h2>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                                        <span className="material-symbols-outlined text-primary">mail</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400">Email de Soporte</p>
                                        <p className="font-semibold">ayuda@covieljilguero.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                                        <span className="material-symbols-outlined text-primary">phone_in_talk</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400">Atención al Cliente</p>
                                        <p className="font-semibold">0800-444-COVI (2684)</p>
                                    </div>
                                </div>
                                <button className="w-full rounded-2xl bg-white/10 py-4 text-center text-sm font-bold hover:bg-white/20 transition-colors">
                                    Ver Bases y Condiciones Completas
                                </button>
                            </div>
                        </div>
                    </section>
                </main>
                {/* <!-- Simple Footer --> */}
                <footer className="border-t border-primary/10 bg-white py-12 dark:bg-slate-900">
                    <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 px-6 md:flex-row">
                        <div className="flex items-center gap-3">
                            <div className="size-4 text-primary">
                                <svg fill="currentColor"  xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"></path>
                                </svg>
                            </div>
                            <h2 className="text-lg font-bold">Covi El Jilguero</h2>
                        </div>
                        <p className="text-sm text-slate-500">© 2024 Covi El Jilguero. Todos los derechos reservados.</p>
                        <div className="flex gap-6">
                            <a className="text-slate-400 hover:text-primary" href="#"><span className="material-symbols-outlined">public</span></a>
                            <a className="text-slate-400 hover:text-primary" href="#"><span className="material-symbols-outlined">share</span></a>
                            <a className="text-slate-400 hover:text-primary" href="#"><span className="material-symbols-outlined">mail</span></a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>

    )
}