export default function Page() {
    return (
        <main className="pt-32 pb-20">
            {/*    <!-- Hero Branding --> */}
            <section className="max-w-7xl mx-auto px-8 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
                    <div className="max-w-xl">
                        <span className="text-tertiary font-semibold tracking-widest text-xs uppercase mb-4 block">Connect with our Community</span>
                        <h1 className="text-6xl md:text-7xl font-serif text-primary leading-[1.1] mb-8 tracking-tighter">The Living Hearth</h1>
                        <p className="text-lg text-on-surface-variant leading-relaxed">
                            Welcome to the heart of Covi El Jilguero. Whether you're a prospective member, a current resident, or a partner in our journey, our doors are always open to those seeking to build a sustainable, shared future.
                        </p>
                    </div>
                    <div className="relative hidden md:block">
                        <div className="w-full h-80 bg-surface-container-high rounded-tl-full rounded-br-full overflow-hidden">
                            <img className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" data-alt="Interior of a warm wooden community center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8_EMoQA6rMQkUpl2NPl5keF79LsyE_wdOnRswdwcLmFdWi4IvkzMWxbjdk31mW1wg0nGqBkpXeK5DZaGg8SyUkwrGmXj_BQ1RpOxwJ9xrKHpriEDH6PDPKcMFeLjWVGAOMUr--9xRZ9ytxlCgsa8f2slGWb-5Hp3E0Dd3ugR6ak6I9HeKlrTKp05jy5knT6VvDCn4WcFmzf8SlFzlf3z_NZDNvUfXM7k54hJjS2R45llWJ2kR4NvWkQsrcpmY7r3YKyCNgto-dnE" />
                        </div>
                    </div>
                </div>
            </section>
            {/*  <!-- Main Content Grid --> */}
            <section className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/*   <!-- Contact Form (Bento Style) --> */}
                <div className="lg:col-span-7 bg-surface-container-low p-10 rounded-xl editorial-shadow">
                    <h2 className="text-3xl font-serif text-primary mb-8">Send a Message</h2>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-on-surface-variant tracking-wider uppercase">Name</label>
                                <input className="w-full bg-surface-container-highest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all placeholder:text-outline" placeholder="Your Full Name" type="text" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-on-surface-variant tracking-wider uppercase">Email</label>
                                <input className="w-full bg-surface-container-highest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all placeholder:text-outline" placeholder="email@address.com" type="email" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant tracking-wider uppercase">Subject</label>
                            <input className="w-full bg-surface-container-highest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all placeholder:text-outline" placeholder="How can we help?" type="text" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant tracking-wider uppercase">Message</label>
                            <textarea className="w-full bg-surface-container-highest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all placeholder:text-outline" placeholder="Your thoughts..." ></textarea>
                        </div>
                        <button className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold tracking-wide hover:opacity-90 active:scale-[0.98] transition-all" type="submit">
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
                {/*   <!-- Contact Info Column --> */}
                <div className="lg:col-span-5 space-y-8">
                    {/*  <!-- Location Info --> */}
                    <div className="bg-surface-container-high p-8 rounded-xl space-y-6">
                        <div className="flex items-start gap-4">
                            <span className="material-symbols-outlined text-tertiary bg-tertiary-fixed p-3 rounded-full">location_on</span>
                            <div>
                                <h3 className="font-serif text-xl text-primary">Our Address</h3>
                                <p className="text-on-surface-variant mt-1">Montevideo, Uruguay<br />Calle del Jilguero 1234, Barrio Sur</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="material-symbols-outlined text-primary bg-primary-fixed p-3 rounded-full">schedule</span>
                            <div>
                                <h3 className="font-serif text-xl text-primary">Office Hours</h3>
                                <p className="text-on-surface-variant mt-1">Monday – Friday: 09:00 - 18:00<br />Saturday: 10:00 - 14:00</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Direct Channels --> */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <a className="bg-secondary-container p-6 rounded-xl flex flex-col items-center text-center hover:opacity-90 transition-opacity" href="#">
                            <span className="material-symbols-outlined text-on-secondary-container mb-3 scale-125" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                            <span className="font-bold text-on-secondary-container">WhatsApp</span>
                            <span className="text-xs text-on-secondary-container/80 mt-1">+598 99 123 456</span>
                        </a>
                        <a className="bg-surface-container p-6 rounded-xl flex flex-col items-center text-center hover:bg-surface-container-high transition-colors" href="tel:+59821234567">
                            <span className="material-symbols-outlined text-primary mb-3 scale-125">call</span>
                            <span className="font-bold text-on-surface">Call Us</span>
                            <span className="text-xs text-on-surface-variant mt-1">+598 2123 4567</span>
                        </a>
                    </div>
                    {/*   <!-- Featured Quote/Signature Component --> */}
                    <div className="relative overflow-hidden bg-tertiary-container p-8 rounded-xl text-on-tertiary-container">
                        <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-9xl opacity-10">format_quote</span>
                        <p className="italic text-lg font-serif mb-4 relative z-10">
                            "The strength of the goldfinch lies not in its flight alone, but in the nest it builds together."
                        </p>
                        <p className="text-sm font-bold uppercase tracking-widest">— Cooperative Values</p>
                    </div>
                </div>
            </section>
            {/* <!-- Map Section --> */}
            <section className="max-w-7xl mx-auto px-8 mt-20">
                <div className="bg-surface-container-highest rounded-xl h-[500px] relative overflow-hidden group">
                    <img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2000ms]" data-alt="Modern architectural map of Montevideo city blocks" data-location="Montevideo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7-_3F1LuHZTeCtQBqBW0BoQ4nvkN5McAVC0dkY8sx4yejb8hb4qGC95enil_6CzzHv8zbzXBiWUvs5MIPpFbnHCuMrBFwpqyoqgNAUkVmv0-tg-rP0DopXBEMabvpDXmqG2AIj1ERuV15LDjtHVdI8HucY_DJOwjVbLumqUI44T5CEq9Sd9Hq7C7BDM0SxiikDq7jLYhrBZHKtbNDYTYENEpFAaPmUKIRqdMfV9VhHyVzu2rCFFQu2_PGhaedPG0g-AUPaL0RNS4" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-surface p-8 rounded-full editorial-shadow flex flex-col items-center max-w-xs text-center border-4 border-primary/10">
                            <span className="material-symbols-outlined text-primary text-4xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                            <p className="font-serif text-lg font-bold">Visit the Hearth</p>
                            <p className="text-xs text-on-surface-variant mt-1">Get directions to our main headquarters in Montevideo</p>
                            <button className="mt-4 text-primary font-bold text-sm border-b-2 border-primary pb-1">Open in Maps</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}