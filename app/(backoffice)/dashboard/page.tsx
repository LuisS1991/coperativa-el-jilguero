import ProgressRifa from "@/componentes/admin/ProgressRifa";
import RowActions from "@/componentes/admin/RowActions";

export default async function page() {

    /*   const supabase = await createClient() // <--- IMPORTANTE: await aquí
    
      const { data, error } = await supabase.from('coperativa_referentes').select('*')
    
      if (error) {
        console.log("Error de Supabase:", error)
      }
    
      console.log(data)
    
     */

    const actual = 250;
    const total = 1000;

    const percent = Math.min((actual / total) * 100, 100);
    return (
        <div className="bg-background text-on-surface selection:bg-tertiary-fixed">
            <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                {/*     <!-- Page Header & Summary Section --> */}
                <section className="mb-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <span className="text-tertiary font-medium tracking-widest text-xs uppercase mb-2 block">Referente de Ventas</span>
                            <h1 className="text-5xl font-serif font-bold text-primary tracking-tight leading-none">Gestión de Números</h1>
                        </div>
                        <div className="bg-surface-container-low p-6 rounded-xl flex gap-8 items-center">
                            <div className="flex flex-col">
                                <span className="text-on-surface-variant text-xs font-semibold">Mi Perfil</span>
                                <span className="text-primary font-bold">Martín J. Morales</span>
                            </div>
                            <div className="h-10 w-[1px] bg-outline-variant/30"></div>
                            <button className="flex items-center gap-2 text-primary hover:text-tertiary transition-colors">
                                <span className="material-symbols-outlined">logout</span>
                                <span className="text-sm font-bold">Cerrar Sesión</span>
                            </button>
                        </div>
                    </div>
                    {/*    <!-- Bento Summary Grid --> */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12">
                        <div className="md:col-span-2 bg-primary text-on-primary p-8 rounded-xl flex flex-col justify-between overflow-hidden relative">
                            <div className="z-10">
                                <h3 className="font-serif text-2xl mb-1">Progreso de la Rifa</h3>
                                <p className="text-on-primary/70 text-sm">Objetivo comunitario: 1,000 números</p>
                            </div>
                            <ProgressRifa actual={actual} total={total} />
                            {/*       <!-- Decorative Element --> */}
                            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-primary-container/30 rounded-full blur-3xl"></div>
                        </div>
                        <div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col justify-center items-center text-center border border-outline-variant/10">
                            <span className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-2">Vendidos</span>
                            <span className="text-5xl font-serif text-primary font-bold">42</span>
                            <span className="text-tertiary text-xs mt-2 font-medium">+12 esta semana</span>
                        </div>
                        <div className="bg-tertiary-fixed p-8 rounded-xl flex flex-col justify-center items-center text-center">
                            <span className="text-on-tertiary-fixed-variant text-xs font-bold uppercase tracking-widest mb-2">Pendientes</span>
                            <span className="text-5xl font-serif text-on-tertiary-fixed font-bold">08</span>
                            <div className="mt-3 flex items-center gap-1 text-on-tertiary-fixed-variant/70 text-[10px] font-bold">
                                <span className="material-symbols-outlined text-sm">schedule</span>
                                REQUIERE ACCIÓN
                            </div>
                        </div>
                    </div>
                </section>
                {/*     <!-- Main Data Table Section --> */}
                <section className="bg-surface-container-low rounded-[2rem] p-1 overflow-hidden">
                    <div className="bg-surface-container-lowest rounded-[1.9rem] shadow-sm overflow-hidden">
                        {/*   <!-- Table Controls --> */}
                        <div className="px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                            <h2 className="font-serif text-2xl text-primary">Solicitudes Recientes</h2>
                            <div className="flex gap-3">
                                <div className="relative group">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60">search</span>
                                    <input className="pl-10 pr-4 py-2 bg-surface-container-highest/50 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary w-64 transition-all" placeholder="Buscar comprador o número..." type="text" />
                                </div>
                                <button className="p-2 bg-surface-container-high rounded-xl hover:bg-surface-dim transition-colors">
                                    <span className="material-symbols-outlined text-on-surface-variant">filter_list</span>
                                </button>
                            </div>
                        </div>
                        {/*   <!-- Table Content --> <SolicitudesTable data={solicitudes} /> */}
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-surface-container-high/50 text-on-surface-variant text-xs font-bold uppercase tracking-tighter">
                                        <th className="px-8 py-4">Solicitante</th>
                                        <th className="px-8 py-4">Número</th>
                                        <th className="px-8 py-4">Fecha</th>
                                        <th className="px-8 py-4 text-center">Estado</th>
                                        <th className="px-8 py-4 text-right">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-outline-variant/10">
                                    {/*    <!-- Row 1: Pending --> */}
                                    <tr className="group hover:bg-surface-container-low/40 transition-colors">
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center font-serif text-on-tertiary-fixed font-bold">RC</div>
                                                <div>
                                                    <p className="font-bold text-on-surface text-sm">Ricardo Casanova</p>
                                                    <p className="text-xs text-on-surface-variant">ricardo.c@email.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className="font-serif text-lg text-primary font-bold">#482</span>
                                        </td>
                                        <td className="px-8 py-6 text-sm text-on-surface-variant">12 Oct, 2024</td>
                                        <td className="px-8 py-6 text-center">
                                            <span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-extrabold uppercase tracking-widest rounded-full">Pendiente</span>
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <div className="relative inline-block text-left">
                                                <button className="bg-primary text-on-primary px-4 py-2 rounded-xl text-xs font-bold hover:bg-primary-container transition-all flex items-center gap-2 ml-auto">
                                                    <span>Gestionar</span>
                                                    <span className="material-symbols-outlined text-sm">expand_more</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    {/*    <!-- Row 2: Reserved --> */}
                                    <tr className="group hover:bg-surface-container-low/40 transition-colors">
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center font-serif text-on-secondary-container font-bold">LM</div>
                                                <div>
                                                    <p className="font-bold text-on-surface text-sm">Lucía Méndez</p>
                                                    <p className="text-xs text-on-surface-variant">lu.mendez@prov.es</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className="font-serif text-lg text-primary font-bold">#015</span>
                                        </td>
                                        <td className="px-8 py-6 text-sm text-on-surface-variant">10 Oct, 2024</td>
                                        <td className="px-8 py-6 text-center">
                                            <span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-extrabold uppercase tracking-widest rounded-full">Reservado</span>
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <button className="bg-surface-container-highest text-primary px-4 py-2 rounded-xl text-xs font-bold hover:bg-outline-variant transition-all ml-auto">
                                                Confirmar Pago
                                            </button>
                                        </td>
                                    </tr>
                                    {/*    <!-- Row 3: Sold --> */}
                                    <tr className="group hover:bg-surface-container-low/40 transition-colors">
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center font-serif text-on-primary-container font-bold">AF</div>
                                                <div>
                                                    <p className="font-bold text-on-surface text-sm">Andrés Figueroa</p>
                                                    <p className="text-xs text-on-surface-variant">a.figue@digital.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className="font-serif text-lg text-primary font-bold">#992</span>
                                        </td>
                                        <td className="px-8 py-6 text-sm text-on-surface-variant">08 Oct, 2024</td>
                                        <td className="px-8 py-6 text-center">
                                            <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-extrabold uppercase tracking-widest rounded-full">Vendido</span>
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <button className="p-2 text-on-surface-variant hover:text-primary transition-colors ml-auto">
                                                <span className="material-symbols-outlined">receipt_long</span>
                                            </button>
                                        </td>
                                    </tr>
                                    {/*      <!-- Row 4: Sold --> */}
                                    <tr className="group hover:bg-surface-container-low/40 transition-colors">
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center font-serif text-on-primary-container font-bold">SM</div>
                                                <div>
                                                    <p className="font-bold text-on-surface text-sm">Sofía Márquez</p>
                                                    <p className="text-xs text-on-surface-variant">sofia.m@gmail.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className="font-serif text-lg text-primary font-bold">#224</span>
                                        </td>
                                        <td className="px-8 py-6 text-sm text-on-surface-variant">05 Oct, 2024</td>
                                        <td className="px-8 py-6 text-center">
                                            <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-extrabold uppercase tracking-widest rounded-full">Vendido</span>
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <button className="p-2 text-on-surface-variant hover:text-primary transition-colors ml-auto">
                                                <span className="material-symbols-outlined">receipt_long</span>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/*   <!-- Footer Pagination-like state --> */}
                        <div className="px-8 py-6 bg-surface-container-high/20 border-t border-outline-variant/5 flex justify-between items-center">
                            <p className="text-xs font-semibold text-on-surface-variant">Mostrando 1-4 de 42 solicitudes</p>
                            <div className="flex gap-2">
                                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-surface-container-high opacity-50 cursor-not-allowed">
                                    <span className="material-symbols-outlined text-sm">chevron_left</span>
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-on-primary text-xs font-bold">1</button>
                                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors text-xs font-bold">2</button>
                                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors">
                                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                {/*   <!-- Secondary Information / Help Section --> */}
                <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 bg-tertiary text-on-tertiary rounded-xl relative overflow-hidden group">
                        <span className="material-symbols-outlined text-4xl mb-4">help_center</span>
                        <h3 className="font-serif text-xl mb-2">¿Necesitas ayuda?</h3>
                        <p className="text-sm opacity-80 mb-6">Si tienes dudas sobre el proceso de cobro o reservas, revisa la guía del referente.</p>
                        <a className="text-tertiary-fixed font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
                            Ver Guía <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </a>
                        <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-[120px]">nest_eco_leaf</span>
                        </div>
                    </div>
                    <div className="md:col-span-2 p-8 border border-outline-variant/20 rounded-xl bg-surface-container-lowest">
                        <h3 className="font-serif text-xl text-primary mb-6">Acciones Rápidas</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <button className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-all text-left">
                                <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
                                    <span className="material-symbols-outlined">add_circle</span>
                                </div>
                                <div>
                                    <p className="font-bold text-sm">Nueva Reserva</p>
                                    <p className="text-xs text-on-surface-variant">Asigna un número manualmente</p>
                                </div>
                            </button>
                            <button className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-all text-left">
                                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
                                    <span className="material-symbols-outlined">file_download</span>
                                </div>
                                <div>
                                    <p className="font-bold text-sm">Exportar Reporte</p>
                                    <p className="text-xs text-on-surface-variant">Descarga tus ventas en CSV/PDF</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}