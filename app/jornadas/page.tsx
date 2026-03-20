export default function Page() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
            <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    {/*     <!-- Top Navigation Bar --> */}
                    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 px-6 md:px-20 py-4 bg-white dark:bg-background-dark/50 backdrop-blur-md sticky top-0 z-50">
                        <div className="flex items-center gap-4 text-slate-900 dark:text-slate-100">
                            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                                <span className="material-symbols-outlined">diversity_3</span>
                            </div>
                            <h2 className="text-lg font-extrabold leading-tight tracking-tight">Covi El Jilguero</h2>
                        </div>
                        <nav className="hidden md:flex flex-1 justify-center gap-8">
                            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Home</a>
                            <a className="text-sm font-semibold text-primary transition-colors" href="#">Events</a>
                            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Gallery</a>
                            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Volunteer</a>
                        </nav>
                        <div className="flex items-center gap-4">
                            <button className="flex cursor-pointer items-center justify-center rounded-xl h-10 bg-primary text-white gap-2 text-sm font-bold px-4 hover:opacity-90 transition-opacity">
                                <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                                <span>Join Event</span>
                            </button>
                        </div>
                    </header>
                    <main className="flex flex-col max-w-[1200px] mx-auto w-full px-4 md:px-10 py-8 gap-12">
                        {/*      <!-- Hero Section --> */}
                        <section className="relative overflow-hidden rounded-xl bg-slate-900 aspect-[21/9] flex items-end">
                            <div className="absolute inset-0 bg-cover bg-center opacity-70" data-alt="Group of diverse people working together in a garden"
                                style={{
                                    backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuD6MdCwCKz6337B-0cwD6nLF3m2qUWB01Tk0_nzWH9DEzhnkJvO-dhgzheqnfai3T2OKKO1FY8b3_vsCqELbYSXPicAjr8yVFU3urcY4w2Br2gttSZ6D3yevOxo8Pg-WYxzdUWjjH0EhZWu5Doe1Zg7Et6Uh1kCJ1ZjBAHbmpDxCl7QeGqvpQHMxpr3_5wvxrraoBJO6guxe539Kj8EY38OpV4hJn_ZMlNywYO7M60lr7YoxhcJVqjY5w1oesb-HrA7FLzrkqa5098L)'
                                }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            <div className="relative p-8 md:p-12 w-full">
                                <span className="inline-block px-3 py-1 bg-primary/20 border border-primary text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-4">Community Spirit</span>
                                <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight max-w-2xl mb-4">Jornadas de Integración</h1>
                                <p className="text-slate-200 text-lg md:text-xl max-w-xl font-medium">Building a stronger community through collaboration, celebration, and shared purpose at Covi El Jilguero.</p>
                            </div>
                        </section>
                        {/*        <!-- Calendar Section --> */}
                        <section>
                            <div className="flex items-end justify-between mb-8">
                                <div>
                                    <h2 className="text-3xl font-black tracking-tight mb-2">Calendar of Events</h2>
                                    <p className="text-slate-600 dark:text-slate-400">Save the date for our upcoming collaborative workdays and celebrations.</p>
                                </div>
                                <button className="text-primary font-bold flex items-center gap-1 hover:underline">
                                    View full year <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/*       <!-- Event Card 1 --> */}
                                <div className="bg-white dark:bg-background-dark border border-primary/10 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="bg-primary/10 text-primary rounded-lg p-2 text-center min-w-[50px]">
                                                <div className="text-xs font-bold uppercase">Oct</div>
                                                <div className="text-xl font-black leading-none">14</div>
                                            </div>
                                            <span className="bg-slate-100 dark:bg-slate-800 text-[10px] font-bold px-2 py-1 rounded">MEMBER ONLY</span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">Sustainable Garden Setup</h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Join us in planting the first seeds of our community organic vegetable garden.</p>
                                        <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                                            <div className="flex items-center gap-1">
                                                <span className="material-symbols-outlined text-sm">schedule</span> 09:00 AM
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <span className="material-symbols-outlined text-sm">location_on</span> Central Plaza
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*          <!-- Event Card 2 --> */}
                                <div className="bg-white dark:bg-background-dark border border-primary/10 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="bg-primary/10 text-primary rounded-lg p-2 text-center min-w-[50px]">
                                                <div className="text-xs font-bold uppercase">Oct</div>
                                                <div className="text-xl font-black leading-none">28</div>
                                            </div>
                                            <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-1 rounded">OPEN TO ALL</span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">Mural Painting Day</h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Lend your artistic hand to decorate our community center's main wall with local art.</p>
                                        <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                                            <div className="flex items-center gap-1">
                                                <span className="material-symbols-outlined text-sm">schedule</span> 10:30 AM
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <span className="material-symbols-outlined text-sm">location_on</span> Community Hall
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Event Card 3 --> */}
                                <div className="bg-white dark:bg-background-dark border border-primary/10 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="bg-primary/10 text-primary rounded-lg p-2 text-center min-w-[50px]">
                                                <div className="text-xs font-bold uppercase">Nov</div>
                                                <div className="text-xl font-black leading-none">05</div>
                                            </div>
                                            <span className="bg-slate-100 dark:bg-slate-800 text-[10px] font-bold px-2 py-1 rounded">RECURRING</span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">Monthly Integration Picnic</h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">A casual gathering for new and existing members to share food and stories.</p>
                                        <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                                            <div className="flex items-center gap-1">
                                                <span className="material-symbols-outlined text-sm">schedule</span> 01:00 PM
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <span className="material-symbols-outlined text-sm">location_on</span> The Orchard
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/*  <!-- Gallery Section --> */}
                        <section>
                            <div className="mb-8">
                                <h2 className="text-3xl font-black tracking-tight mb-2">Moments of Connection</h2>
                                <p className="text-slate-600 dark:text-slate-400">Captured snapshots from our recent community activities.</p>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="aspect-square rounded-xl overflow-hidden bg-slate-200 group">
                                    <img className="w-full h-full object-cover transition-transform group-hover:scale-110" data-alt="Team of people smiling together in a workshop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk_tWaT0jo_ZOeS0xbKer_2Jfrbz1cLKichnQ-Iv4cblbW95kxLFrN1y9DHkUtoYCRaOsjowCk-C-X4l8lgUc5zwbb79n7P9KUYz6_rKi0TbLRe0t6tDPozhn4-V3Ke73C39zzUoGMUEe8vzM-JvnwafILTS2Ww5OoO8Ji8-WDxg7Kkn-XKn0tJGYiC9P5bu1cvKbZLd80u8syHOZAbQb7LxABfINaG4EfGx_8jxcGW8NRqZWg2eZIKHoiTAIuDdW4shAYGb8V6idM" />
                                </div>
                                <div className="aspect-square rounded-xl overflow-hidden bg-slate-200 group">
                                    <img className="w-full h-full object-cover transition-transform group-hover:scale-110" data-alt="Hands holding earth and a small sapling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjzx_5qfG_44ob9CCfCXkSvyQ04Tkg3jnVjG60TqhMYHJF7r7J_VL1RpmEnGIfFdaWvx5k7WAzGg-J2CYS5SfAAKmu5ETqK0ZVgaB8rC_G3pK_gD6BVMv_DTnmFHM9TQZAOFDS5DVw4tVLVjYn5ebdYs8Pw6XNZ27IySXIhSoq0r-z7CuumLFtyn9o5iVK-jEmQ8-Df6DtRfbm99rjzc0yqo-c8vZsGnTUcdXGSiCizJuLZT9DXaA_WKTWB45izyXrY5LpOnpAZtM8" />
                                </div>
                                <div className="aspect-square rounded-xl overflow-hidden bg-slate-200 group row-span-2 col-span-2">
                                    <img className="w-full h-full object-cover transition-transform group-hover:scale-110" data-alt="Large community dinner outdoors at sunset" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_TGm92b6F8pgfgw5C2tOhqG0jYumFutvJWVeEeZPnB6dZ5vo8PzN7YK63eBY7zKp248pjIBVPVGD-ZYndvoqU1-7or1JzapsYw53_Nw9GKH5B6bfNpjy6sMy0RhzzNIB_1xVCCYHbheK56KkQrX-d26XOuNUoerkq2Pgxs6tg1c5yFogL_FnLIgXG3P0vUdh_nnuNQjwzSbEEnEqntkEkFEOJFDUbrqgRgi9z8jRBC9zewle7HW_WhO9T06oO_fIZ42q1Dt-FjZrR" />
                                </div>
                                <div className="aspect-square rounded-xl overflow-hidden bg-slate-200 group">
                                    <img className="w-full h-full object-cover transition-transform group-hover:scale-110" data-alt="Children playing together in a community space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMB0_7JYHSYi9O8MleoIM1EajcQHXp__WQBYnJlDvXDnRbNkX9a1NYD-0rpuPb-Mm_w_24A88mj4jd7BQtSwQJx_Yk3bF0EKw7GCg-6CaJbGmXbe-dQwGEk2HP4VOLAZmSD5P7QLUEjNDDjvnH3p1ZSw5QLYf3Pmlg4zOdkSiz-7PwIFvooVS8sr-hGcAuLrpJKZcQQQIIU8uhNV3g0j8y4CjkXAgMxbvypHVBUpeamMjHwFZRTPNFUwaB_AGZkb8ygy7g5Rz3YpF-" />
                                </div>
                                <div className="aspect-square rounded-xl overflow-hidden bg-slate-200 group">
                                    <img className="w-full h-full object-cover transition-transform group-hover:scale-110" data-alt="Community meeting with people talking and gesturing" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzNCnI7P583zPTk0EeFfVEqAXLGKgM4fbZZkUfQDJV0XGwu9E0Jika7DYH8nrSUsaUsoT8wwpTlfoOCu-NHZqGvHE3fTLOZaghsOlxFHH29xCsA2wmv9fxjGNjpv6lKcgFXt6oldyj9R0nfMLAMZPXaE-dWTbKW08uKtytsL8ocMZ26rpAUR-KWHI1w_CpGXz3FUvdD8N1CefzdDD8-trL2nbhmVOlIuFP-0T-RVb7ibPK5CL7Ry13ojg-ZbW_7EJaAajDZU0WgHwB" />
                                </div>
                            </div>
                        </section>
                        {/*   <!-- Testimonials Section --> */}
                        <section className="bg-primary/5 rounded-2xl p-8 md:p-12">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-black tracking-tight mb-2">Voices from our Community</h2>
                                <p className="text-slate-600 dark:text-slate-400">Why these integration days matter to our cooperative family.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white dark:bg-background-dark p-8 rounded-xl relative shadow-sm">
                                    <span className="material-symbols-outlined text-primary text-4xl absolute -top-4 -left-2 bg-white dark:bg-background-dark rounded-full px-2">format_quote</span>
                                    <p className="italic text-lg text-slate-700 dark:text-slate-300 mb-6">"Being part of the 'Jornadas' has changed my perspective on what it means to live in a community. It's not just about sharing a building; it's about building a home together."</p>
                                    <div className="flex items-center gap-4">
                                        <div className="size-12 rounded-full bg-cover bg-center" data-alt="Portrait of Maria Garcia"
                                            style={{
                                                backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuCnoMxmhwjBYEihG1NsA99AyEN_JnVvv1VG7vPQwUHf3BXsAP9BRAsXjEvKBy4kB8-cRxLaT9vEpQrKKFgc4_Dm6zNmxDMM1nRMHlw1_OvLOjCdwuORo7s2_g7IW5GeqeCqqw2Og7qkkd2WsFoDO_0_fO9fKOhkybXywU2qBz8HH8CDjPSOHLgbOkYcx8gA_qSenLYtGbbQl6iF2hQhtTphSlQKmQHWauOOyNKDedvjBgXMtOsmwWe1n3v61HUvy7xj4ljW5hYLb7W-)'
                                            }}></div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 dark:text-slate-100">Maria Garcia</h4>
                                            <p className="text-xs text-slate-500">Member since 2021</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-background-dark p-8 rounded-xl relative shadow-sm">
                                    <span className="material-symbols-outlined text-primary text-4xl absolute -top-4 -left-2 bg-white dark:bg-background-dark rounded-full px-2">format_quote</span>
                                    <p className="italic text-lg text-slate-700 dark:text-slate-300 mb-6">"Seeing our kids play together while we work in the garden is the highlight of my month. Covi El Jilguero is more than just housing, it's a support system."</p>
                                    <div className="flex items-center gap-4">
                                        <div className="size-12 rounded-full bg-cover bg-center" data-alt="Portrait of Carlos Mendoza"

                                            style={{
                                                backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuASNUUAZNogSUFfMzd4TdwsyxNovBGekA07CPNeG_wVnwWj7-ctzPZnjHyLCPlCxVSB38vWlZPXCQkx5er0h6DaIrq7sTBF4lOmNX4zc8zmZgvEnnifV58f9tgiXTStUr5UYmN4-Gu3ALfG5ru8WJ-3nIGFQkSpbzVEOlAyqesk6pTAgHI28BWuMJFRKBrngxGSOf3lqJBM1Rq4wJXiLztuYsyeLfi7exHQyGFOjIOuWyaiGFfPkKuLtk1EQe8TtvReet0wXDaJNon2)'
                                            }}></div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 dark:text-slate-100">Carlos Mendoza</h4>
                                            <p className="text-xs text-slate-500">Volunteer Coordinator</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/*     <!-- Volunteer Signup Form Section --> */}
                        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                            <div className="space-y-6">
                                <h2 className="text-4xl font-black tracking-tight leading-tight">Lend a Hand,<br /><span className="text-primary">Grow our Community</span></h2>
                                <p className="text-lg text-slate-600 dark:text-slate-400">Our integration days are powered by volunteers like you. Whether you have 2 hours or the whole weekend, there's a place for you here.</p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-primary bg-primary/10 p-1 rounded-full text-sm font-bold">check</span>
                                        <span className="font-medium">No experience needed for most tasks</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-primary bg-primary/10 p-1 rounded-full text-sm font-bold">check</span>
                                        <span className="font-medium">Free snacks and community meal provided</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-primary bg-primary/10 p-1 rounded-full text-sm font-bold">check</span>
                                        <span className="font-medium">Make friends with your neighbors</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white dark:bg-background-dark p-8 rounded-2xl border border-primary/10 shadow-xl">
                                <h3 className="text-2xl font-bold mb-6">Join the Next Event</h3>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-1">
                                            <label className="text-xs font-bold text-slate-500 uppercase">First Name</label>
                                            <input className="w-full bg-background-light dark:bg-slate-800 border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary" placeholder="John" type="text" />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label className="text-xs font-bold text-slate-500 uppercase">Last Name</label>
                                            <input className="w-full bg-background-light dark:bg-slate-800 border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary" placeholder="Doe" type="text" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs font-bold text-slate-500 uppercase">Email Address</label>
                                        <input className="w-full bg-background-light dark:bg-slate-800 border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary" placeholder="john@example.com" type="email" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs font-bold text-slate-500 uppercase">I'm interested in...</label>
                                        <select className="w-full bg-background-light dark:bg-slate-800 border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary">
                                            <option>Gardening &amp; Landscaping</option>
                                            <option>Art &amp; Mural Painting</option>
                                            <option>Event Planning &amp; Hosting</option>
                                            <option>Cooking for the Community</option>
                                        </select>
                                    </div>
                                    <div className="pt-4">
                                        <button className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:opacity-90 transition-opacity" type="submit">Sign Up to Volunteer</button>
                                        <p className="text-[10px] text-center text-slate-400 mt-3 uppercase tracking-tighter">By signing up, you agree to receive event notifications via email.</p>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </main>
                    {/*    <!-- Simple Footer --> */}
                    <footer className="border-t border-primary/10 py-12 px-6 md:px-20 bg-white dark:bg-background-dark/50">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-[1200px] mx-auto w-full">
                            <div className="flex items-center gap-3">
                                <div className="size-6 bg-primary rounded flex items-center justify-center text-white text-[14px]">
                                    <span className="material-symbols-outlined text-[16px]">diversity_3</span>
                                </div>
                                <span className="font-black text-slate-900 dark:text-slate-100">Covi El Jilguero</span>
                            </div>
                            <div className="flex gap-8 text-sm font-medium text-slate-500">
                                <a className="hover:text-primary transition-colors" href="#">Instagram</a>
                                <a className="hover:text-primary transition-colors" href="#">Facebook</a>
                                <a className="hover:text-primary transition-colors" href="#">Contact</a>
                                <a className="hover:text-primary transition-colors" href="#">Privacy</a>
                            </div>
                            <div className="text-sm text-slate-400">
                                © 2023 Covi El Jilguero Cooperative.
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}