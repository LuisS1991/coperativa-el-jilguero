export default function Sorteos() {
    return (
        <main className="pt-20">
            {/*  <!-- Hero Section: Editorial Organicism --> */}
            <section className="relative min-h-[921px] flex flex-col items-center justify-center px-8 overflow-hidden bg-surface-container-low">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-20">
                    <div className="lg:col-span-6 space-y-8">
                        <span className="inline-block px-4 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full text-sm font-bold tracking-widest uppercase">Tradición Cooperativa</span>
                        <h1 className="serif-display text-6xl md:text-8xl font-black text-primary leading-[1.1] tracking-tighter">
                            Gran Sorteo <br /><span className="text-tertiary italic">Anual.</span>
                        </h1>
                        <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed">
                            Construimos comunidad, un número a la vez. Participa en nuestra rifa solidaria y ayuda a consolidar el sueño de la vivienda cooperativa mientras ganas premios increíbles.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <a className="bg-primary text-on-primary px-8 py-4 rounded-xl text-lg font-bold shadow-lg hover:bg-primary-container transition-all" href="#reservar">Reservar mi Número</a>
                            <a className="flex items-center gap-2 text-primary font-bold px-8 py-4 border-b-2 border-tertiary-fixed hover:bg-surface-container transition-all" href="#premios">Ver Premios <span className="material-symbols-outlined">arrow_downward</span></a>
                        </div>
                    </div>
                    <div className="lg:col-span-6 relative flex flex-col gap-4">
                        {/*  <!-- Prize Showcase: Bento-style overlap --> */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 relative aspect-video bg-surface-container rounded-full overflow-hidden group">
                                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Modern white luxury car for first prize" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC446X2t85vZQjj5_hCq8thIC5BNjjZ-746IKj6DCKCK3znQOBCVLA8iYBBh79H3SBzRco-UQ--VcXMA8UrneEU2U80WbHMxkAKTikiBQQ8jny2P0YYkcF5ldy9B70TgYnH5wqRe5IbiESLhcfLiecX37TzxifLsymq0sN2AM6Cc-HccKIrHlNfFmx3HXCWDqoSJ_yelokoSPqsAPmfc4ieKh69efrM4Ev9HdwQMyj_ALh15BpoV65r4JcdOcaIJ-dpeOS9YX1_TqM" />
                                <div className="absolute bottom-6 left-6 bg-primary text-on-primary px-4 py-2 rounded-lg font-bold">1º PREMIO: Automóvil 0km</div>
                            </div>
                            <div className="aspect-square bg-surface-container rounded-xl overflow-hidden relative group">
                                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="classNameic black motorcycle second prize" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnZrZ_7e6DvUO8zmnTdqVQYL1gMlGInNstLqgFFCgUcg7K4n4mCHlZ5LTerLX35PFWyC32vzqS4lXJxtmTeYVVSvhbIZha6PhDVk2gzCT_I5fWGWiLcdzD9xkjqhsNkbN1JeSfF0JgQZjurtPz6RTax4-QMme6Frk7CpLyTeC4tk0jVHDl8nEBKoGNkNA42Q5eH0pba1GD9Tu4MQosDO_FaiUPTz0-dcPxXirZKIboJqlFAV3W6yRO_j4WRjYltzeDzErylwxowVQ" />
                                <div className="absolute bottom-4 left-4 bg-tertiary text-on-tertiary px-3 py-1 rounded-lg text-sm font-bold">2º PREMIO: Moto 150cc</div>
                            </div>
                            <div className="aspect-square bg-surface-container rounded-xl overflow-hidden relative group">
                                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Electric scooter modern city commute third prize" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmUUVGUbvFTuuQJ0u06QAyHvBu9v_FtN-42YH6Msjy8NuqqhSkcjeAdh-kId2PyaDjqikHLjrb45WTEUKKeBi5cy6vF2s_5OMvBz4AEBwMgagDiMxxBAMxGunQhGxXN8LEK2giKsFvIoFmdSPna2Gfwv0S-volHuJpx2lzFzYeG-Edyy017F5VIMv15c1Gms6B99QuiOPJs6l8Htl8oQrEHN2ntO78Hmo2cq8N2nkRT3BVW1MIteYZ7_D-dpG43WIUGUEFjjnOfEM" />
                                <div className="absolute bottom-4 left-4 bg-secondary text-on-secondary px-3 py-1 rounded-lg text-sm font-bold">3º PREMIO: Monopatín Eléctrico</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*     <!-- Decorative circle --> */}
                <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-tertiary-container/10 rounded-full blur-3xl"></div>
            </section>
            {/*    <!-- Panel de Referentes: The Community Nest Style --> */}
            <section className="py-24 px-8 bg-surface">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h2 className="serif-display text-4xl font-bold text-primary mb-4">Nuestros Referentes</h2>
                        <p className="text-on-surface-variant max-w-2xl">Cada paso que damos es gracias al compromiso de nuestros socios. Contacta a tu referente de confianza para adquirir tu número.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/*     <!-- Referente Card 1 --> */}
                        <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col gap-6 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] group-hover:bg-primary/10 transition-colors"></div>
                            <div className="flex items-center gap-5">
                                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/20">
                                    <img className="w-full h-full object-cover" data-alt="Portrait of a friendly cooperative member" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQE8qPSmyjj1uVv0SdJFBWZCJHGPwQZqM5YlrL0eXYh4impKCC4oiSCzBpW6BGpOLqBUhxnOr_3N_yUNekGkZ_nfwkGoz2EB87TtdBGvJCUuTVKWgbm2m2ayL65RERytN5IBQIykAS0DOnZDTXvWl_OgT3_P3Mu0_gWMnzP1kl3bvXEVbKiQQKG-HX964CHWhMQwzpiizPFaA5AlwswDU_tKGkUerXmNQVeWDj4eKUd_m9UMKYcDli4s9gv131FqyVrwnDoiRQZLA" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-primary">Carlos Benítez</h3>
                                    <p className="text-sm text-tertiary font-semibold uppercase tracking-wider">Sector A - Arboleda</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between text-sm font-bold">
                                    <span>Progreso de Ventas</span>
                                    <span className="text-primary">85%</span>
                                </div>
                                <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                                    <div className="h-full bg-primary rounded-full w-[85%]"></div>
                                </div>
                                <div className="flex justify-between text-xs text-on-surface-variant pt-2">
                                    <span>Asignados: 200</span>
                                    <span className="font-bold text-on-surface">Vendidos: 170</span>
                                </div>
                            </div>
                        </div>
                        {/*   <!-- Referente Card 2 --> */}
                        <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col gap-6 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/10 rounded-bl-[100px] group-hover:bg-secondary-container/20 transition-colors"></div>
                            <div className="flex items-center gap-5">
                                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/20">
                                    <img className="w-full h-full object-cover" data-alt="Portrait of a female cooperative leader" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfTHHqyf-1dfeKos0id6HIh3HcHEcHguKcjSlSOh9slTHxzd8Fw6DnzXToiRGdAJ6lBJcJ0PyJFh8z-Qrj4LOtnoUMHPoNemiyES4evx8g2NuZVhjT0RaQRCZ0iMs7FdwlI3ZIgS6NOOYFVRQjN5GekXWn9VKQu3bhpnsuM1U-BzFcjWlK5S4CsU7jUrxra2ouVR1aaYnRdvm-TwGPiuovxvJ8fa3tLAfkTPho9x5SrOFzxO_Koa7X5fzCEyacmtHcZYsPjdNQI-o" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-primary">Mariana Solís</h3>
                                    <p className="text-sm text-tertiary font-semibold uppercase tracking-wider">Sector B - Las Alas</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between text-sm font-bold">
                                    <span>Progreso de Ventas</span>
                                    <span className="text-primary">42%</span>
                                </div>
                                <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                                    <div className="h-full bg-primary rounded-full w-[42%]"></div>
                                </div>
                                <div className="flex justify-between text-xs text-on-surface-variant pt-2">
                                    <span>Asignados: 150</span>
                                    <span className="font-bold text-on-surface">Vendidos: 63</span>
                                </div>
                            </div>
                        </div>
                        {/*  <!-- Referente Card 3 --> */}
                        <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col gap-6 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary-container/5 rounded-bl-[100px] group-hover:bg-tertiary-container/10 transition-colors"></div>
                            <div className="flex items-center gap-5">
                                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/20">
                                    <img className="w-full h-full object-cover" data-alt="Portrait of an elderly cooperative member" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtYniP_-mLTCibUc23FOWc2gUS4rZ_m06MaLbA_FIq4jHibV7Y1vND8XJx_15R6sCjQvbIKzFaB3PGNxrpJVvz4LxSwL-mEaYe-tM9WCfK6i4sWw25wBaIHH2k4_IJm7H5wMXjQypNby6CYIsodhSnkVvOCe1Eg7KZNLVzVYa0YO25rnE5UR0hpimndyBoMEgV53p623Ckx8-fcK-gv8tDX5GDqi_Lh6YS6DmUJfletZCNGwv1qS_LuIFRF6mo-6udod3AIjv_noA" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-primary">Roberto Gómez</h3>
                                    <p className="text-sm text-tertiary font-semibold uppercase tracking-wider">Sector C - El Jilguero</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between text-sm font-bold">
                                    <span>Progreso de Ventas</span>
                                    <span className="text-primary">98%</span>
                                </div>
                                <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                                    <div className="h-full bg-primary rounded-full w-[98%]"></div>
                                </div>
                                <div className="flex justify-between text-xs text-on-surface-variant pt-2">
                                    <span>Asignados: 250</span>
                                    <span className="font-bold text-on-surface">Vendidos: 245</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*  <!-- Disponibilidad de Números: Minimal Grid --> */}
            <section className="py-24 px-8 bg-surface-container-low">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="serif-display text-4xl font-bold text-primary mb-4">Números Disponibles</h2>
                            <p className="text-on-surface-variant">Explora los números restantes. El color indica su estado actual.</p>
                        </div>
                        <div className="flex gap-4 text-xs font-bold uppercase tracking-widest">
                            <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-surface-container-lowest border border-outline-variant"></span> Libre</div>
                            <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-secondary-container"></span> Reservado</div>
                            <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-primary opacity-30"></span> Vendido</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-15 lg:grid-cols-20 gap-2">
                        {/* <!-- Loop simulation for grid of numbers --> */}
                        {/*    <!-- 1-20 sequence sample --> */}
                        <div className="aspect-square flex items-center justify-center bg-primary opacity-20 text-on-primary font-bold text-xs rounded-lg cursor-not-allowed" title="Vendido">01</div>
                        <div className="aspect-square flex items-center justify-center bg-surface-container-lowest border border-outline-variant/20 hover:border-primary hover:text-primary transition-all font-bold text-xs rounded-lg cursor-pointer">02</div>
                        <div className="aspect-square flex items-center justify-center bg-surface-container-lowest border border-outline-variant/20 hover:border-primary hover:text-primary transition-all font-bold text-xs rounded-lg cursor-pointer">03</div>
                        <div className="aspect-square flex items-center justify-center bg-secondary-container text-on-secondary-container font-bold text-xs rounded-lg cursor-help" title="Reservado">04</div>
                        <div className="aspect-square flex items-center justify-center bg-surface-container-lowest border border-outline-variant/20 hover:border-primary hover:text-primary transition-all font-bold text-xs rounded-lg cursor-pointer">05</div>
                        <div className="aspect-square flex items-center justify-center bg-surface-container-lowest border border-outline-variant/20 hover:border-primary hover:text-primary transition-all font-bold text-xs rounded-lg cursor-pointer">06</div>
                        <div className="aspect-square flex items-center justify-center bg-primary opacity-20 text-on-primary font-bold text-xs rounded-lg cursor-not-allowed">07</div>
                        <div className="aspect-square flex items-center justify-center bg-surface-container-lowest border border-outline-variant/20 hover:border-primary hover:text-primary transition-all font-bold text-xs rounded-lg cursor-pointer">08</div>
                        <div className="aspect-square flex items-center justify-center bg-surface-container-lowest border border-outline-variant/20 hover:border-primary hover:text-primary transition-all font-bold text-xs rounded-lg cursor-pointer">09</div>
                        <div className="aspect-square flex items-center justify-center bg-surface-container-lowest border border-outline-variant/20 hover:border-primary hover:text-primary transition-all font-bold text-xs rounded-lg cursor-pointer">10</div>
                        {/*  <!-- Row 2 --> */}
                        <div className="aspect-square flex items-center justify-center bg-surface-container-lowest border border-outline-variant/20 hover:border-primary hover:text-primary transition-all font-bold text-xs rounded-lg cursor-pointer">11</div>
                        <div className="aspect-square flex items-center justify-center bg-secondary-container text-on-secondary-container font-bold text-xs rounded-lg cursor-help">12</div>
                        <div className="aspect-square flex items-center justify-center bg-surface-container-lowest border border-outline-variant/20 hover:border-primary hover:text-primary transition-all font-bold text-xs rounded-lg cursor-pointer">13</div>
                        <div className="aspect-square flex items-center justify-center bg-surface-container-lowest border border-outline-variant/20 hover:border-primary hover:text-primary transition-all font-bold text-xs rounded-lg cursor-pointer text-primary bg-primary-fixed">14</div>
                        <div className="aspect-square flex items-center justify-center bg-surface-container-lowest border border-outline-variant/20 hover:border-primary hover:text-primary transition-all font-bold text-xs rounded-lg cursor-pointer">15</div>
                        <div className="aspect-square flex items-center justify-center bg-primary opacity-20 text-on-primary font-bold text-xs rounded-lg cursor-not-allowed">16</div>
                        <div className="aspect-square flex items-center justify-center bg-surface-container-lowest border border-outline-variant/20 hover:border-primary hover:text-primary transition-all font-bold text-xs rounded-lg cursor-pointer">17</div>
                        <div className="aspect-square flex items-center justify-center bg-surface-container-lowest border border-outline-variant/20 hover:border-primary hover:text-primary transition-all font-bold text-xs rounded-lg cursor-pointer">18</div>
                        <div className="aspect-square flex items-center justify-center bg-surface-container-lowest border border-outline-variant/20 hover:border-primary hover:text-primary transition-all font-bold text-xs rounded-lg cursor-pointer">19</div>
                        <div className="aspect-square flex items-center justify-center bg-surface-container-lowest border border-outline-variant/20 hover:border-primary hover:text-primary transition-all font-bold text-xs rounded-lg cursor-pointer">20</div>
                        {/* <!-- Additional generic items to fill space --> */}
                        <div className="aspect-square flex items-center justify-center bg-surface-container-lowest border border-outline-variant/20 font-bold text-xs rounded-lg">...</div>
                        <div className="aspect-square flex items-center justify-center bg-surface-container-lowest border border-outline-variant/20 font-bold text-xs rounded-lg">999</div>
                    </div>
                    <div className="mt-12 text-center">
                        <button className="text-primary font-bold flex items-center gap-2 mx-auto hover:gap-3 transition-all">Ver todos los números <span className="material-symbols-outlined">chevron_right</span></button>
                    </div>
                </div>
            </section>
            {/*  <!-- Formulario de Reserva: Stationery Feel --> */}
            <section className="py-24 px-8 bg-surface" id="reservar">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-surface-container-lowest p-12 rounded-xl shadow-xl shadow-primary/5 relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-on-primary px-8 py-3 rounded-full font-bold uppercase tracking-[0.2em] text-sm">Formulario de Reserva</div>
                        <div className="text-center mb-12 space-y-4">
                            <h2 className="serif-display text-4xl font-bold text-primary">Solicitá tu número</h2>
                            <p className="text-on-surface-variant">Completá tus datos y un referente se pondrá en contacto para coordinar el pago.</p>
                        </div>
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-on-surface-variant ml-1 uppercase tracking-wider">Nombre</label>
                                    <input className="w-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest rounded-xl py-4 px-6 text-on-surface transition-all outline-none" placeholder="Ej: Juan" type="text" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-on-surface-variant ml-1 uppercase tracking-wider">Apellido</label>
                                    <input className="w-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest rounded-xl py-4 px-6 text-on-surface transition-all outline-none" placeholder="Ej: Pérez" type="text" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-on-surface-variant ml-1 uppercase tracking-wider">Teléfono de Contacto</label>
                                    <input className="w-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest rounded-xl py-4 px-6 text-on-surface transition-all outline-none" placeholder="+598 000 000" type="tel" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-on-surface-variant ml-1 uppercase tracking-wider">Número Solicitado</label>
                                    <input className="w-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest rounded-xl py-4 px-6 text-on-surface font-bold text-primary transition-all outline-none" placeholder="000" type="number" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-on-surface-variant ml-1 uppercase tracking-wider">Referente Preferido</label>
                                <select className="w-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest rounded-xl py-4 px-6 text-on-surface transition-all outline-none appearance-none">
                                    <option value="">Sin preferencia</option>
                                    <option value="carlos">Carlos Benítez (Sector A)</option>
                                    <option value="mariana">Mariana Solís (Sector B)</option>
                                    <option value="roberto">Roberto Gómez (Sector C)</option>
                                </select>
                            </div>
                            <div className="pt-6">
                                <button className="w-full bg-primary text-on-primary py-5 rounded-xl text-xl font-bold hover:bg-primary-container shadow-lg transition-all flex items-center justify-center gap-3" type="submit">
                                    Enviar Solicitud de Reserva <span className="material-symbols-outlined">send</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}