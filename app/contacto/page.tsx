export default function Page() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
            {/*   <!-- Navigation --> */}
            <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-3">
                            <div className="bg-primary p-2 rounded-lg">
                                <span className="material-symbols-outlined text-white">home_work</span>
                            </div>
                            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Covi El Jilguero</h1>
                        </div>
                        <nav className="hidden md:flex items-center gap-8">
                            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Home</a>
                            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Projects</a>
                            <a className="text-sm font-medium text-primary" href="#">Contact</a>
                            <a className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all" href="#">Join Us</a>
                        </nav>
                        <div className="flex md:hidden">
                            <span className="material-symbols-outlined">menu</span>
                        </div>
                    </div>
                </div>
            </header>
            <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                {/*   <!-- Hero Section --> */}
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Connect with Our Community</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">Join Covi El Jilguero, a vibrant housing cooperative dedicated to sustainable living and mutual support.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/*  <!-- Left Column: Contact Form & Info --> */}
                    <div className="space-y-12">
                        {/* <!-- Contact Form Card --> */}
                        <div className="bg-white dark:bg-slate-900/50 p-8 rounded-xl border border-primary/10 shadow-sm">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">mail</span> Send us a Message
                            </h3>
                            <form action="#" className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold px-1">Full Name</label>
                                        <input className="w-full rounded-lg border-primary/20 bg-background-light dark:bg-slate-800 focus:ring-primary focus:border-primary" placeholder="John Doe" type="text" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold px-1">Email Address</label>
                                        <input className="w-full rounded-lg border-primary/20 bg-background-light dark:bg-slate-800 focus:ring-primary focus:border-primary" placeholder="john@example.com" type="email" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold px-1">Subject</label>
                                    <input className="w-full rounded-lg border-primary/20 bg-background-light dark:bg-slate-800 focus:ring-primary focus:border-primary" placeholder="Inquiry about membership" type="text" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold px-1">Message</label>
                                    <textarea className="w-full rounded-lg border-primary/20 bg-background-light dark:bg-slate-800 focus:ring-primary focus:border-primary" placeholder="How can we help you?" ></textarea>
                                </div>
                                <button className="w-full bg-primary text-white font-bold py-3 rounded-lg shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                                    Send Message
                                </button>
                            </form>
                        </div>
                        {/* <!-- Social & Address --> */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                                <h4 className="font-bold mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined">share</span> Follow Us
                                </h4>
                                <div className="flex gap-4">
                                    <a className="bg-white dark:bg-slate-800 p-3 rounded-full hover:text-primary transition-colors shadow-sm" href="#">
                                        <svg className="w-6 h-6 fill-current"  ><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                                    </a>
                                    <a className="bg-white dark:bg-slate-800 p-3 rounded-full hover:text-primary transition-colors shadow-sm" href="#">
                                        <svg className="w-6 h-6 fill-current"  ><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
                                    </a>
                                    <a className="bg-white dark:bg-slate-800 p-3 rounded-full hover:text-primary transition-colors shadow-sm" href="#">
                                        <span className="material-symbols-outlined text-2xl">chat</span>
                                    </a>
                                </div>
                            </div>
                            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                                <h4 className="font-bold mb-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined">location_on</span> Visit Us
                                </h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Calle Las Flores 1234,<br />Montevideo, Uruguay</p>
                                <p className="text-sm mt-2 font-medium">Mon - Fri: 09:00 - 18:00</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Right Column: Registration & Map --> */}
                    <div className="space-y-12">
                        {/* <!-- Registration CTA --> */}
                        <div className="bg-primary p-8 rounded-xl text-white shadow-xl">
                            <h3 className="text-2xl font-bold mb-2">Member Registration</h3>
                            <p className="mb-6 opacity-90 text-sm">Become a part of our cooperative. New members are welcome to apply for our upcoming housing projects.</p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/20 p-2 rounded-lg">
                                        <span className="material-symbols-outlined">description</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Required Documents</h4>
                                        <p className="text-xs opacity-75">ID, Proof of income, and family group details.</p>
                                    </div>
                                </div>
                                <button className="w-full bg-white text-primary font-bold py-3 rounded-lg hover:bg-slate-50 transition-colors">
                                    Start Registration Process
                                </button>
                            </div>
                        </div>
                        {/* <!-- Location Map Placeholder --> */}
                        <div className="rounded-xl overflow-hidden border border-primary/10 shadow-lg h-[350px] relative group">
                            <div className="absolute inset-0 bg-slate-200 flex flex-col items-center justify-center bg-cover bg-center" data-alt="A stylized map showing the cooperative location in Montevideo"
                                data-location="Montevideo" style={{
                                    backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuDXIoe7SymfKcp3M2Hzg02lbAGcG-0DxClx-PXY6hFX9ioEk2YNbUyS4XCE7QhMBYjeuvz-RnAPt2F_WZHfNqHtUEise4gkDSPevvxVHQitLh3q5gQcdz69YcEJyvdvbHf562RgKOgQcbQFlZfWz5w-ike2w8PaduM_phkvfx-8KFcAwVA-LgqAxMRVvgHAUK8v7GJoyBB8ynJ5R8Bqb2HQXtlkJZWvTUWUx-uDOtuBDIYTO34Ku-b-9TIG4McFvSA4zZwZthCg6VEu)'
                                }}>
                                <div className="bg-white/90 dark:bg-slate-900/90 p-4 rounded-lg shadow-xl text-center backdrop-blur-sm">
                                    <span className="material-symbols-outlined text-primary text-4xl mb-1">push_pin</span>
                                    <p className="font-bold text-sm">Covi El Jilguero HQ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*   <!-- FAQ Section --> */}
                <section className="mt-24 border-t border-primary/10 pt-16">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold mb-4">Frequently Asked Questions</h3>
                        <p className="text-slate-600 dark:text-slate-400">Everything you need to know about joining a FECOVI-style cooperative.</p>
                    </div>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white dark:bg-slate-900/40 rounded-xl border border-primary/5 hover:border-primary/20 transition-all">
                            <h4 className="font-bold mb-2 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-sm">help</span> How do I join?
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Fill out the registration form and attend our monthly orientation meeting for prospective members.</p>
                        </div>
                        <div className="p-6 bg-white dark:bg-slate-900/40 rounded-xl border border-primary/5 hover:border-primary/20 transition-all">
                            <h4 className="font-bold mb-2 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-sm">help</span> What are the costs?
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Members contribute through social capital and monthly fees determined by the cooperative's assembly.</p>
                        </div>
                        <div className="p-6 bg-white dark:bg-slate-900/40 rounded-xl border border-primary/5 hover:border-primary/20 transition-all">
                            <h4 className="font-bold mb-2 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-sm">help</span> Is housing immediate?
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">No, cooperatives involve a planning and construction phase where members participate in decision-making.</p>
                        </div>
                        <div className="p-6 bg-white dark:bg-slate-900/40 rounded-xl border border-primary/5 hover:border-primary/20 transition-all">
                            <h4 className="font-bold mb-2 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-sm">help</span> What is FECOVI's role?
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">We follow FECOVI guidelines for mutual-aid and collective property, ensuring legal and social stability.</p>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="bg-slate-900 text-slate-400 py-12 mt-20 border-t border-primary/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <div className="flex items-center gap-3 text-white mb-6">
                            <span className="material-symbols-outlined text-primary">home_work</span>
                            <h2 className="text-xl font-bold">Covi El Jilguero</h2>
                        </div>
                        <p className="text-sm leading-relaxed">Building community through cooperative housing since 2015. Empowering families to own their future together.</p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a className="hover:text-primary transition-colors" href="#">Project Portfolio</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Meeting Schedule</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Legal Documents</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6">Newsletter</h4>
                        <p className="text-sm mb-4">Stay updated on our progress and open spots.</p>
                        <div className="flex gap-2">
                            <input className="bg-slate-800 border-none rounded-lg text-sm flex-1 focus:ring-primary" placeholder="email@address.com" type="email" />
                            <button className="bg-primary text-white p-2 rounded-lg hover:bg-primary/80 transition-all">
                                <span className="material-symbols-outlined">send</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-xs">
                    © 2023 Covi El Jilguero Cooperative. Affiliated with FECOVI. All rights reserved.
                </div>
            </footer>
        </div>
    )
}