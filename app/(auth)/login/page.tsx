import Link from "next/link";

export default function Page() {
    return (
        <main className="flex-grow flex items-stretch min-h-screen">
            {/*   <!-- Editorial Content Canvas --> */}
            <div className="hidden lg:flex lg:w-3/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10"></div>
                <img className="absolute inset-0 w-full h-full object-cover" data-alt="Sun-drenched architectural detail of a community garden house" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzk5skC8XNDnt7hDoF1gMH7K4IdcwNuV9a_Ehd8BjsPCwygMdUfpxo3bVE2oO1VrbWxo3GCW003GanL0jTmwVkev2cVi0C-6S62GI9NK3C5qRSnhr4tqks5YrH35AhzhYiGxDVSeD3dcvoIzEyYoCSnNSSyF0HZ9oOuinlvIrlC-96gsgfhrcDP_7O-y_1E192vwv5qe9sLqqO4hTWVkqUWL0TeCRWrKi8xBXu-g29fbmDMT6D7e4rcKz-WkEwxqNq6CM0utU1fog" />
                {/*  <!-- Asymmetrical Pull Quote Layout --> */}
                <div className="relative z-20 flex flex-col justify-end p-20 max-w-2xl">
                    <div className="bg-tertiary-container/90 p-12 rounded-xl editorial-shadow backdrop-blur-sm">
                        <span className="material-symbols-outlined text-tertiary-fixed text-6xl mb-6">format_quote</span>
                        <h2 className="font-headline text-4xl text-on-tertiary leading-tight italic">
                            Construyendo un hogar donde la comunidad late con cada amanecer.
                        </h2>
                        <p className="mt-8 font-label text-tertiary-fixed uppercase tracking-widest text-sm font-bold">Residencial El Jilguero</p>
                    </div>
                </div>
            </div>
            {/* <!-- Focus Task: Login Form --> */}
            <div className="w-full lg:w-2/5 flex flex-col justify-center px-8 md:px-20 py-24 bg-surface">
                <div className="max-w-md w-full mx-auto">
                    <div className="mb-12">
                        <h1 className="font-headline text-5xl text-primary mb-4 tracking-tight">Bienvenido</h1>
                        <p className="text-on-surface-variant text-lg">Accede a tu panel de cooperativista para gestionar tu hogar y participar en la comunidad.</p>
                    </div>
                    <form className="space-y-6">
                        <div>
                            <label className="block font-label text-sm font-semibold text-on-surface-variant mb-2" >Correo Electrónico</label>
                            <input className="w-full bg-surface-container-highest border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all editorial-shadow outline-variant/15 outline" id="email" name="email" placeholder="nombre@ejemplo.com" required type="email" />
                        </div>
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block font-label text-sm font-semibold text-on-surface-variant"  >Contraseña</label>
                                <a className="font-label text-xs font-semibold text-tertiary hover:underline decoration-tertiary-fixed decoration-2 transition-all" href="#">¿Olvidaste tu contraseña?</a>
                            </div>
                            <input className="w-full bg-surface-container-highest border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all editorial-shadow outline-variant/15 outline" id="password" name="password" placeholder="••••••••" required type="password" />
                        </div>
                        <div className="flex items-center">
                            <input className="h-5 w-5 rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-highest" id="remember" name="remember" type="checkbox" />
                            <label className="ml-3 block text-sm font-medium text-on-surface-variant"  >Mantener sesión iniciada</label>
                        </div>
                        <div className="pt-4">
                            <button className="w-full bg-primary text-on-primary py-4 px-8 rounded-xl font-label font-bold text-lg hover:opacity-90 active:scale-95 transition-all duration-150 ease-in-out editorial-shadow" type="submit">
                                Iniciar Sesión
                            </button>
                        </div>
                    </form>
                    {/*   <!-- Signature Component Area: Community Nest --> */}
                    <div className="mt-16 pt-12 border-t border-outline-variant/20">
                        <div className="flex flex-col gap-4">
                            <p className="text-on-surface-variant text-sm">¿Aún no formas parte de nosotros?</p>
                            <Link className="inline-flex items-center text-primary font-bold group" href="/contacto">
                                <span className="underline decoration-tertiary-fixed decoration-2 underline-offset-4 mr-2">Descubre cómo unirte a la cooperativa</span>
                                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}