export default function Home() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased">
      <div className="relative flex min-h-screen flex-col">
        {/*<!-- Navigation --> */}
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-background-dark/80">
          <div className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-12">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                <span className="material-symbols-outlined">flutter_dash</span>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Covi El Jilguero</h2>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Inicio</a>
              <a className="text-sm font-semibold hover:text-primary transition-colors" href="/sorteos">Sorteos</a>
              <a className="text-sm font-semibold hover:text-primary transition-colors" href="/jornadas">Jornadas</a>
              <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Nosotros</a>
              <a className="text-sm font-semibold hover:text-primary transition-colors" href="/contacto">Contacto</a>
            </nav>
            <div className="flex items-center gap-4">
              <button className="hidden sm:flex items-center justify-center rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-slate-900 shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all">
                Join Us
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">person</span>
              </button>
            </div>
          </div>
        </header>
        <main className="flex-1">
          {/*<!-- Hero Section --> */}
          <section className="relative h-[600px] w-full overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center" data-alt="Modern sustainable cooperative housing community building"
              style={{
                backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuCDyFB5IxAfFKUzY3Fzcb6QyJrlUc4NiU6N1rB5Duq27CT3MuBrx_gIrs73n9z8nuFn1EnMYpTXd3klUSewTLdPsGv4PwCpm7ScEobVtl0Yon6MNTDNaPg4mxdy8ZGkv8vf8GN6ud19yulmuWW5cGjNQ4jtzCYqV16DXvCvgfKmLEXwZLtUXb7xbQjamzWobpFN8kmFTsOduGARovei4s_K9nrRD4d2lBL7gZdoawAcxPPULZsIA8MDJX2KCMbGQ6E2CpztJhdfJCLd)'
              }}>
              <div className="absolute inset-0 bg-gradient-to-r from-background-dark/80 via-background-dark/40 to-transparent"></div>
            </div>
            <div className="container relative mx-auto flex h-full flex-col justify-center px-6 lg:px-12">
              <div className="max-w-2xl space-y-6">
                <h1 className="text-5xl font-black leading-tight text-white lg:text-7xl">
                  Cooperativa de Viviendas <span className="text-primary">Covi El Jilguero</span>
                </h1>
                <p className="text-xl text-slate-200">
                  Construyendo comunidad y hogar juntos a través del esfuerzo mutuo y la solidaridad.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="flex min-w-[160px] items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-bold text-slate-900 shadow-xl shadow-primary/30 hover:scale-105 transition-transform">
                    Join Us
                  </button>
                  <button className="flex min-w-[160px] items-center justify-center rounded-xl bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all">
                    See Current Raffles
                  </button>
                </div>
              </div>
            </div>
          </section>
          {/*   <!-- About Us / Mission --> */}
          <section className="py-24 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary-dark font-bold text-xs uppercase tracking-wider">
                    <span className="material-symbols-outlined text-sm">groups</span> Our Mission
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900 dark:text-white leading-tight">Rooted in Mutual Aid and Shared Community Values</h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    Covi El Jilguero is more than just a housing project. We are a collective of families dedicated to building a sustainable future. Based on the principles of mutual aid, we work together to manage, build, and maintain our living spaces, ensuring dignity and affordability for all members.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-background-light dark:bg-background-dark">
                      <span className="material-symbols-outlined text-primary mb-4 text-3xl">handshake</span>
                      <h3 className="font-bold text-lg mb-2">Mutual Aid</h3>
                      <p className="text-sm text-slate-500">Working together to build better homes through shared physical effort and resource management.</p>
                    </div>
                    <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-background-light dark:bg-background-dark">
                      <span className="material-symbols-outlined text-primary mb-4 text-3xl">diversity_3</span>
                      <h3 className="font-bold text-lg mb-2">Community Values</h3>
                      <p className="text-sm text-slate-500">Fostering solidarity, democratic participation, and social integration in everything we do.</p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                    <img alt="Group of diverse people working together outdoors" className="w-full h-full object-cover" data-alt="Happy community members working together in a garden" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZaF_eyNrBf5ODEtNhlghTTsRVoCJzXhWiFZ7Ln8UizU5AJFjpAb6amFeAdLwqHlrHxqOywbkMExPWSTYsWTPvy21XMiJLjlFQrvc0gCApwxWJxeKHU41TRDwj_YFu97JXwxqZz2z9kifeXdHXEtI-XR0V7soQ4e-unW7aKpGWMREfwh3rmpmuM5Vohon6_8IVRfDByp_9n_oxRfUz8J-G8FEaCF0K5f0rEyczdXJOzIcnSfuVjVUha_Et4XdHnSioJ1CpNifx9yvr" />
                  </div>
                  <div className="absolute -bottom-8 -left-8 p-8 bg-accent-brown rounded-3xl text-white shadow-xl hidden md:block">
                    <div className="text-4xl font-black">15+</div>
                    <div className="text-sm font-medium opacity-80 uppercase tracking-tighter">Years of Unity</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*  <!-- Raffles & CTA Banner --> */}
          <section className="py-16">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="relative overflow-hidden rounded-[2.5rem] bg-accent-brown p-8 md:p-16 text-white">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="max-w-xl text-center md:text-left">
                    <h2 className="text-3xl font-bold md:text-4xl mb-4">Support Our Community Project</h2>
                    <p className="text-lg text-slate-200">Participate in our monthly raffles and help us fund the common spaces of our new cooperative housing wing.</p>
                  </div>
                  <div className="flex shrink-0 gap-4">
                    <button className="rounded-xl bg-primary px-8 py-4 text-base font-black text-slate-900 hover:scale-105 transition-transform">
                      Enter Raffle
                    </button>
                    <button className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-base font-bold hover:bg-white/20 transition-all">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*   <!-- News & Updates --> */}
          <section className="py-24 bg-background-light dark:bg-background-dark">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="flex items-end justify-between mb-12">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Recent Activities &amp; News</h2>
                  <p className="text-slate-600 dark:text-slate-400">Stay up to date with the latest developments in our cooperative.</p>
                </div>
                <a className="hidden md:flex items-center gap-2 text-primary font-bold hover:underline" href="#">
                  View All News <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* <!-- News Item 1 --> */}
                <article className="group overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="aspect-video overflow-hidden">
                    <img alt="Neighborhood green project community" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="People planting trees in a new urban development" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoOmxDwDJqV4lI1FH_4L7RrQuPKjsB7z7PY1LPkBhXH3t09nY-Y_7Yvp0SNyHD7sj-RzLjwZ1wo9Pgp67poJcBxRWgGLXC4kMYKRb-Anzlo9AKJc2xQYunBeVWYjqsvYVX8U1qc59Y4DRIV-cXfkhYu65gxMSCPnVdevvjLfkxmVRh1mxnpX6H1hsNJt6E73KgGLa_lfQlDQD0bjlKxVXe3JuFWCVUbES26HjIcRK0ISLlNVx2U_aRbFBpd6YT-GnE-hW04MUsfxKU" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs font-bold text-primary mb-3">
                      <span className="material-symbols-outlined text-xs">calendar_today</span> Oct 12, 2023
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">Neighborhood Green Project</h3>
                    <p className="text-slate-600 dark:text-slate-400 line-clamp-2">Our members joined forces to plant over 50 native trees around the perimeter of the housing block.</p>
                  </div>
                </article>
                {/* <!-- News Item 2 --> */}
                <article className="group overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="aspect-video overflow-hidden">
                    <img alt="Meeting of community members" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Diverse group of people sitting in a circle discussing projects" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDObW7JIZWbcQIF-HS-zi-foIdhEIZ2lj3E__DBC3qUZ1KPbohuOLjX5vdlHDqIF5OdE2rYNMcmz_z8P0jmNne3PHpPCdqzGGfm6RskrT2HVds-jLXaCeaPHX3eBXr04B3TofBTLow-OfMR2-Z8gHc_MPdlbe_T29a285wVeeCmjgtnPVpjtqa9Ek_Xsjh0EWdMJTGrEI8_sjuvzwxssk0OEYA9-Eb1cDeZd_rIwZGitzVwhV43KS8YSvG0xCsjqjFQ8tp-UFgNvmTa" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs font-bold text-primary mb-3">
                      <span className="material-symbols-outlined text-xs">calendar_today</span> Nov 05, 2023
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">Annual General Meeting</h3>
                    <p className="text-slate-600 dark:text-slate-400 line-clamp-2">A successful assembly where we discussed budget allocations and upcoming construction phases.</p>
                  </div>
                </article>
                {/*  <!-- News Item 3 --> */}
                <article className="group overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="aspect-video overflow-hidden">
                    <img alt="Community workshop" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Architects and community members looking at blue prints" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDquXgTiA35_wIr8QPSa7C9HfzDBGJ_o-822trAnBV8c0MHWQg8SCeFTHOyEleXOmVSByF7YBYE__CQ4gX9ibTeiiZTrNJd14Cfu00L5klsExp8N4dD-3oXA74CmBRxaNyz-KaB6A_mMNHW5WsYWFpeuy6ojPmrpeifbW0IbSrnp_oBha3hWHtqbmyIKN4Z91PCAmV9TM-IrC3-lOcZjDxwmzFNucqD6tUsy5BUubbTZKiRDp2oYDcYlsfrvDwZDTjG4s7ypyoo-klA" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs font-bold text-primary mb-3">
                      <span className="material-symbols-outlined text-xs">calendar_today</span> Dec 01, 2023
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">Architecture Workshop</h3>
                    <p className="text-slate-600 dark:text-slate-400 line-clamp-2">Families collaborated with architects to define the shared common rooms of the future development.</p>
                  </div>
                </article>
              </div>
            </div>
          </section>
        </main>
        {/*<!-- Footer --> */}
        <footer className="bg-background-dark py-16 text-white border-t border-slate-800">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="col-span-1 md:col-span-2 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-slate-900">
                    <span className="material-symbols-outlined">flutter_dash</span>
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">Covi El Jilguero</h2>
                </div>
                <p className="max-w-md text-slate-400 leading-relaxed">
                  A housing cooperative built on the pillars of mutual aid, collective ownership, and solidarity. Creating homes and futures since 2008.
                </p>
                <div className="flex gap-4">
                  <a className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-primary transition-colors" href="#">
                    <span className="material-symbols-outlined text-lg">public</span>
                  </a>
                  <a className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-primary transition-colors" href="#">
                    <span className="material-symbols-outlined text-lg">mail</span>
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                <ul className="space-y-4 text-slate-400">
                  <li><a className="hover:text-primary transition-colors" href="#">Home</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Our History</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">How to Join</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Current Raffles</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-6">Contact Us</h4>
                <ul className="space-y-4 text-slate-400">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                    <span data-location="Montevideo, Uruguay">Calle del Jilguero 1234, Montevideo, Uruguay</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-xl">call</span>
                    <span>+598 2123 4567</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
              © 2023 Cooperativa de Viviendas Covi El Jilguero. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
