import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-surface-container-high  w-full mt-20 rounded-t-none">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-16 max-w-7xl mx-auto">
                <div className="space-y-6">
                    <div className="font-serif text-xl text-primary-900 dark:text-primary-50">Covi El Jilguero</div>
                    <p className="text-primary-800/60 font-sans text-sm tracking-wide lowercase italic">the living hearth cooperative</p>
                    <div className="flex gap-4">
                        <span className="material-symbols-outlined text-primary-900 cursor-pointer">social_leaderboard</span>
                        <span className="material-symbols-outlined text-primary-900 cursor-pointer">camera</span>
                        <span className="material-symbols-outlined text-primary-900 cursor-pointer">mail</span>
                    </div>
                </div>
                <div className="space-y-6">
                    <h4 className="font-sans text-sm uppercase tracking-widest text-primary-900 dark:text-primary-50 font-bold">Quick Links</h4>
                    <nav className="flex flex-col gap-4">
                        <Link className="text-primary-800/60 font-sans text-sm uppercase tracking-widest hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-opacity" href="#">Contact Us</Link>
                        <Link className="text-primary-800/60 font-sans text-sm uppercase tracking-widest hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-opacity" href="#">Privacy Policy</Link>
                        <Link className="text-primary-800/60 font-sans text-sm uppercase tracking-widest hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-opacity" href="#">Statutes</Link>
                        <Link className="text-primary-800/60 font-sans text-sm uppercase tracking-widest hover:text-tertiary-700 dark:hover:text-tertiary-300 transition-opacity" href="#">Internal Rules</Link>
                    </nav>
                </div>
                <div className="space-y-6">
                    <h4 className="font-sans text-sm uppercase tracking-widest text-primary-900 dark:text-primary-50 font-bold">Newsletter</h4>
                    <p className="text-primary-800/60 font-sans text-sm">Stay updated with our latest activities and community milestones.</p>
                    <div className="flex">
                        <input className="bg-surface-container-highest border-none rounded-l-xl px-4 py-3 w-full focus:ring-primary" placeholder="Email address" type="email" />
                        <button className="bg-primary text-on-primary px-6 py-3 rounded-r-xl">
                            <span className="material-symbols-outlined">send</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="px-12 py-8 max-w-7xl mx-auto border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="font-sans text-sm uppercase tracking-widest text-primary-800/60">© 2024 Covi El Jilguero. The Living Hearth Cooperative.</p>
                <div className="flex items-center gap-2 text-primary-800/60">
                    <span className="material-symbols-outlined text-xs">location_on</span>
                    <span className="text-xs uppercase tracking-widest" data-location="Montevideo, Uruguay">Montevideo, Uruguay</span>
                </div>
            </div>
        </footer>
    )
}