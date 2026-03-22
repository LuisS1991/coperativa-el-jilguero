import { createClient } from '../utils/supabase/server'



export default function Home() {

  return (
      <main className="pt-20">
        <section className="relative min-h-[870px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" data-alt="Sunlight filtering through lush forest trees onto a community path" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYizUbx4zr_mro9qflZuaV9dez6l7Mkt3EBmFr6GUzanDKtbREqNFSWrmOF4PrSCu_3n3IQDI4m4Eev-_OxED9yjtyrzdctfee-K6pu8s6UJM1gFc-Z0YntPWW_MGWaKRSVbiYZrg39KHLvK5eFcU_zio9KBskPx7_AQvf34fSjxxA9biuyBJQ2iHnDQoxGecHjeJxYHzVW0xTfD3kZuL4UzkF2pzETaHEBlV0Q7r4LrWt6Yn4SM_9X3XNw7UK6x1kdnXPgpYs85M" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="font-headline text-6xl md:text-7xl text-primary leading-tight tracking-tight mb-6">
                The Living <br />
                <span className="italic text-tertiary">Hearth</span>
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-lg">
                A cooperative community rooted in sustainable living, architectural harmony, and the shared warmth of collective growth.
              </p>
              <div className="flex gap-4">
                <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold hover:bg-primary-container transition-colors">
                  Explore Community
                </button>
                <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl font-bold hover:bg-opacity-80 transition-colors">
                  View Statutes
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 tonal-shift-bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-xl">
                <span className="text-tertiary font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
                <h2 className="font-headline text-4xl text-primary mb-6">Roots that run deep, <br />futures that fly high.</h2>
              </div>
              <p className="text-on-surface-variant max-w-md pb-1">
                Covi El Jilguero is more than a housing project; it's a commitment to a way of life that honors the landscape and the neighbors who share it.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 relative">
                <div className="aspect-[4/3] rounded-full rounded-tr-none overflow-hidden shadow-2xl">
                  <img className="w-full h-full object-cover" data-alt="Minimalist modern community building with large windows and wooden accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiHqKBcp3PEZz0a9Gx-XZmXtIFGQhfSNB9aCU80Bdo9kWhGafFC0La_9iVW2o1DJeP9WRidW3OhpA3eQolQ4uBgeBdBLi_QBFg5dOC_tA8NGeuy-RVHjlunHxgC0bZOVCriX25n3k_1J3pkKrCuigt3u7icyrtcQd5ke8O2aw0i2_RbzQdal2GCt4E7T9rS1d4-5LSLxlydvmLe6DHmr1RfcBwFTcbKyOjHrqtqP65RBy6qj-sC4ld6sybrslfPgEFQoO3f5Qdg6Q" />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-tertiary-container p-12 rounded-full hidden lg:block">
                  <span className="material-symbols-outlined text-tertiary-fixed text-6xl" data-weight="fill">nest_eco_leaf</span>
                </div>
              </div>
              <div className="md:col-span-5 space-y-8 pl-0 md:pl-12">
                <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm">
                  <h3 className="font-headline text-2xl text-primary mb-4">The Cooperativism Ideal</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    We believe in horizontal governance and mutual support. Every member is a guardian of the 'Hearth', ensuring our collective home thrives for generations.
                  </p>
                  <a className="inline-flex items-center gap-2 text-primary mt-6 font-bold border-b border-tertiary-fixed pb-1" href="#">
                    Read our Mission
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 bg-background overflow-hidden">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-16">
              <h2 className="font-headline text-4xl text-primary">Community Pulse</h2>
              <div className="h-1 w-24 bg-tertiary-fixed mt-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-surface-container p-1 rounded-xl group cursor-pointer transition-transform hover:-translate-y-1">
                <div className="relative aspect-square rounded-xl overflow-hidden mb-6">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Group of diverse people laughing during a community meal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyvb32XfAqbHCPAhCdxzUa1K1-rtz3qnAtLrg7PjoqgMndkaWN-m2tM4BN6mxh_-QeldlpscZDdQVygEtZXvJETF0mLToXiRD40wMx3nSrcpRsuezoOy8379wOw7oCXMQsEKKqYwuZnphI-ButI0A-pG8QQZ0f9VjTTX-SbGjPuJn-QHMGAPY05pkYx7O3htiEkJUjiahAMSfcnChcki5E8-5pgRlduXT4ai_uuGb6aAGMgOyRDD22_Q9WsfhiSkcwE17KYjeNezg" />
                  <div className="absolute top-4 left-4 bg-tertiary text-on-tertiary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Activity</div>
                </div>
                <div className="px-6 pb-8">
                  <p className="text-sm text-tertiary font-bold mb-2">March 24, 2024</p>
                  <h3 className="font-headline text-xl text-primary mb-3">Spring Equinox Raffle &amp; Feast</h3>
                  <p className="text-on-surface-variant text-sm line-clamp-2">Join us for our annual fundraising raffle. This year we're focusing on the new community garden project.</p>
                </div>
              </div>
              <div className="bg-surface-container p-1 rounded-xl group cursor-pointer transition-transform hover:-translate-y-1">
                <div className="relative aspect-square rounded-xl overflow-hidden mb-6">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Handwritten notes and a wooden gavel on a clean desk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMsxmOo5gi5Gar18NzTjJskMre47DWBNJnIxiIlxsrt3W44BKLwXvKWYJ8JT9jaqSBWclhNHjcEW3oJk0rLZTkwZmL35W6Am1I3covDp_9jk6WgvtZp76fAsTFqMgSeo_BHpVM-KrqPRj8NIgMZE-p_kXPOdsTz5V0UohNh1ohrqxIfc61vXJhAd9hTBpz1a0jEYDXT3wJ1hHgMWXljDMW0M2bIUVOmRYkTzLbWw3lsIBLycq9Odi2hXfZcFeZLGeVYy2eKdkc57Y" />
                  <div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Assembly</div>
                </div>
                <div className="px-6 pb-8">
                  <p className="text-sm text-tertiary font-bold mb-2">April 02, 2024</p>
                  <h3 className="font-headline text-xl text-primary mb-3">General Assembly: Solar Plan</h3>
                  <p className="text-on-surface-variant text-sm line-clamp-2">Voting session on the phase 2 installation of solar panels across the residential blocks.</p>
                </div>
              </div>
              <div className="bg-surface-container p-1 rounded-xl group cursor-pointer transition-transform hover:-translate-y-1">
                <div className="relative aspect-square rounded-xl overflow-hidden mb-6">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Close up of small green plant sprouting from rich soil" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHPOkF3-brjfqrPfpsbtU4G4kKDPCjeOrG3pYHlS8grvReE2WakV7OETw9gQ2zXaz9y_7MF58NPKc3s4GuoUJZV76ah7azYQ5pPT_v3A8piu2r27KD3fJe-QYfKAdaawbGtJMSQbMsj3drzX1-UJmvG6go89GYutsTdkHh8G4Za_rSbtr2w29ok3JvC6TNPf4bpZi47zAU8alNISMwI5CDzqNGsYDXT4FW3yCGO4e_dh0RUh7eF0qlc_pIc_ClBYiue3Um74wUB_s" />
                  <div className="absolute top-4 left-4 bg-secondary text-on-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">News</div>
                </div>
                <div className="px-6 pb-8">
                  <p className="text-sm text-tertiary font-bold mb-2">Today</p>
                  <h3 className="font-headline text-xl text-primary mb-3">Sustainability Report 2023</h3>
                  <p className="text-on-surface-variant text-sm line-clamp-2">We are proud to announce a 15% reduction in community-wide waste over the last year.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 bg-surface-container-high relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="md:w-1/2">
                <div className="relative inline-block">
                  <div className="absolute -inset-4 bg-tertiary-fixed rounded-full opacity-20 blur-2xl"></div>
                  <blockquote className="font-headline text-3xl md:text-4xl text-primary leading-tight italic relative">
                    "In Covi El Jilguero, we didn't just build houses; we cultivated a landscape where our children can grow as wild and free as the birds of the field."
                  </blockquote>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img className="w-full h-full object-cover" data-alt="Portrait of a smiling community member" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1wiOjdptRi_6YfTNdxAL3VCAOkRfLnQj84y4HSapLivcYNmB-7NRrZ8-3Rw6NqwC-oKn0iB5usIb30TQdiBRtxVCdf2kpV0iJvDluu8b9N_b0U4B6b7pvsEukfgEmj0u8dndBx2OoDKKR2RetJpavjCsI5OtSx2MU8FL4nu3bgAqkupHNQ_-RFJsf8zkFVWcsJ8LlUWwWJBb7mvi8l7-aT35SpRNPqsfIkmlQJ5lUCl3tGnlnql3G2Z7Rzmvtw-2G-9RZCTfOm2Q" />
                  </div>
                  <div>
                    <p className="font-bold text-primary">Elena Martínez</p>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest">Founding Member</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col items-center text-center shadow-sm">
                  <span className="material-symbols-outlined text-tertiary text-4xl mb-4">groups</span>
                  <p className="font-headline text-3xl text-primary">124</p>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest mt-1">Active Members</p>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col items-center text-center shadow-sm">
                  <span className="material-symbols-outlined text-tertiary text-4xl mb-4">eco</span>
                  <p className="font-headline text-3xl text-primary">60%</p>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest mt-1">Green Space</p>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col items-center text-center shadow-sm">
                  <span className="material-symbols-outlined text-tertiary text-4xl mb-4">solar_power</span>
                  <p className="font-headline text-3xl text-primary">100%</p>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest mt-1">Renewable Energy</p>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col items-center text-center shadow-sm">
                  <span className="material-symbols-outlined text-tertiary text-4xl mb-4">volunteer_activism</span>
                  <p className="font-headline text-3xl text-primary">15</p>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest mt-1">Yearly Projects</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}
