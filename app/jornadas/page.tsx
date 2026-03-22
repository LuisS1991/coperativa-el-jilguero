export default function Page() {
    return (
        <main className="pt-32 pb-20">
            {/* <!-- Hero Section --> */}
            <section className="max-w-7xl mx-auto px-8 mb-24">
                <div className="flex flex-col md:flex-row gap-12 items-end">
                    <div className="flex-1">
                        <span className="font-sans text-sm uppercase tracking-widest text-secondary font-bold mb-4 block">The Human Side</span>
                        <h1 className="font-headline text-5xl md:text-7xl text-primary leading-tight font-bold tracking-tight">Our Living <br /><span className="text-tertiary italic">Community</span></h1>
                    </div>
                    <div className="flex-1 max-w-md pb-4">
                        <p className="text-on-surface-variant leading-relaxed text-lg">
                            The heartbeat of Covi El Jilguero isn't just the bricks and mortar, but the hands that build, the laughter shared during social days, and the collective spirit of the Living Hearth.
                        </p>
                    </div>
                </div>
            </section>
            {/* <!-- Gallery Grid - Bento Style --> */}
            <section className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* <!-- Main Featured Item --> */}
                    <div className="md:col-span-8 group cursor-pointer overflow-hidden rounded-xl bg-surface-container-low border border-outline-variant/15 p-4">
                        <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-6">
                            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Group of community members sharing a communal meal outdoors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVR0h1r6gJSGLE446talxdwysdbepS2uAKcPx8i3E9TDyFNVaBDbirErF1b0zsuNHk8TS6MGuU0gVZfouMWzdWQ6nEJGqfxS06jAX1DzvnkMVln4ne0gtq3tvcyx9-7b0ouO5L1pizgWsOIRE1EBy7KGnPJI5L15OddzuLERK1sttqSE1ZnXzH_tqEE0xPKbcuZOnudndBt0I_xiEJZRY0GrtzB-r1r5C30tJokDa5H-_xGDJcHl6UUFB5IIX145AmrupqBSLxNsk" />
                            <div className="absolute top-4 right-4 bg-primary text-on-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Featured</div>
                        </div>
                        <div className="px-2">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-tertiary font-bold tracking-widest text-xs uppercase">Social Event</span>
                                <span className="text-on-surface-variant/60 text-xs">October 24, 2024</span>
                            </div>
                            <h3 className="font-headline text-2xl text-primary mb-2">Harvest Dinner 2024</h3>
                            <p className="text-on-surface-variant font-body">Celebrating the completion of our central plaza garden with neighbors and family.</p>
                        </div>
                    </div>
                    {/* <!-- Secondary Item --> */}
                    <div className="md:col-span-4 group cursor-pointer overflow-hidden rounded-xl bg-surface-container-low border border-outline-variant/15 p-4 flex flex-col">
                        <div className="relative aspect-square overflow-hidden rounded-lg mb-6">
                            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Close up of hands working together on a wooden construction project" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwUp4dcJyIUGCWq44-xmB-EoUQa0dUQ8O1kV0sxuGqxJs_EtIvMQGq7bm9sHeuTL3H6D2hVWUxQ2Vs-Y0uiuEGGKvud8-JzWiTBsUqz_9Rlv8ZIpaFaevIqEJFRb0xdRS_rtikZ4SYNj3y9ukqYP4ntOEfhz4ZugU4zkWcwmqH6hvi73HolAwjNlHMfw3rwKdnLmnfg6pI79_7B6pxqTdyWXeastoU-Enop-6GeQq3ahueqAQ1XErNYVJNO7J_gFgPtKcs6HzBCrU" />
                        </div>
                        <div className="mt-auto px-2">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-tertiary font-bold tracking-widest text-xs uppercase">Work Day</span>
                                <span className="text-on-surface-variant/60 text-xs">Sept 12</span>
                            </div>
                            <h3 className="font-headline text-xl text-primary mb-2">Foundation Building</h3>
                            <p className="text-on-surface-variant text-sm">Collective effort on the North wing roof structure. Many hands make light work.</p>
                        </div>
                    </div>
                    {/* <!-- Row 2 --> */}
                    <div className="md:col-span-4 group cursor-pointer overflow-hidden rounded-xl bg-surface-container-high border border-outline-variant/15 p-4 flex flex-col">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-lg mb-6 rounded-tr-full">
                            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Three friends laughing during a community building workshop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5XzXtHd8hO0CM5M1fleNLVJvgJawB4RD4iTpOsoQol6n1AxWj4YGaNq8KG4PIeQX7n7YXcEKMGgcnsufn-9eFch3C56nqtNk4HYZy_vY63rRc2vaxbUbv7TU3Ek_di5kiLB4XK7Tn3Yg1n20EMDgkVaboAQLJ8vSWUIWeab5eVR_bWp3EgSWo3EQy4golzuLFhE3F-2CWPcQtPYOvoS0xGq4xFhySSLf6SrYnXKPoby_4Egb7haAZwNiWpEgK6Jo9LHs9MslcOoc" />
                        </div>
                        <div className="px-2">
                            <span className="text-tertiary font-bold tracking-widest text-xs uppercase block mb-1">Community</span>
                            <h3 className="font-headline text-lg text-primary">Member Orientation</h3>
                            <p className="text-on-surface-variant text-sm mt-1">Welcoming six new families to the cooperative this Spring.</p>
                        </div>
                    </div>
                    <div className="md:col-span-4 group cursor-pointer overflow-hidden rounded-xl bg-surface-container-low border border-outline-variant/15 p-4">
                        <div className="relative aspect-square overflow-hidden rounded-lg mb-6">
                            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Children playing in a rustic wooden courtyard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhb1z9hyILmIk24NiXaxRGe38msWCJEqLrlFiRPPBL9LC--9wHz5HRT6c792l4TDPGPnxpHcOVFgoJOCnwoS7nRMJ96bwp3sSnwwLXymysGiMo8-nk-nkY_e6BHtvbeH-3AbG0bKd1e5qHIdElM_WF5QWX902SbU5bcNolxpVPQNJsk6dLlaNMDTd91u0FmQS67r1R-MrlUEQfhMkeJk4porvxeiyVq7po0RdSDbdW1QV6uKzcqw-eSDctPB0c73tMnAAyf868E54" />
                        </div>
                        <div className="px-2">
                            <span className="text-tertiary font-bold tracking-widest text-xs uppercase block mb-1">Activities</span>
                            <h3 className="font-headline text-lg text-primary">Youth Art Morning</h3>
                            <p className="text-on-surface-variant text-sm mt-1">Our smallest members leaving their mark on the playground walls.</p>
                        </div>
                    </div>
                    <div className="md:col-span-4 group cursor-pointer overflow-hidden rounded-xl bg-primary-container p-6 relative">
                        <div className="flex flex-col h-full justify-between text-on-primary">
                            <span className="material-symbols-outlined text-4xl mb-8">volunteer_activism</span>
                            <div>
                                <h3 className="font-headline text-2xl mb-4">Want to Join Us?</h3>
                                <p className="font-body text-primary-fixed mb-8 opacity-90">Every weekend we open our doors for community work and tours. Come meet the faces of Jilguero.</p>
                                <button className="bg-surface text-primary px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-tertiary-fixed transition-colors">Apply for Membership</button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Row 3: Signature Component --> */}
                    <div className="md:col-span-12 mt-12 bg-tertiary-container/10 p-12 rounded-xl relative overflow-hidden">
                        <div className="flex flex-col md:flex-row items-center gap-16 relative z-10">
                            <div className="flex-1">
                                <h2 className="font-headline text-4xl text-primary mb-6">The Heartbeat of the Home</h2>
                                <p className="font-body text-on-surface-variant text-xl italic mb-8">"Coming together wasn't just about sharing a mortgage; it was about sharing a life. We built the kitchen together, but we built the friendship first."</p>
                                <div className="flex items-center gap-4">
                                    <div className="h-1 w-12 bg-tertiary"></div>
                                    <span className="font-sans text-sm uppercase tracking-widest font-bold">Marta &amp; Luis, Founding Members</span>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="w-64 h-64 rounded-full border-8 border-surface-container-highest overflow-hidden transform translate-x-4">
                                    <img className="w-full h-full object-cover" data-alt="Portrait of an elderly couple smiling in front of a modern wood cabin" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrqaDOMx2_CotiG5WLME0NYc8aV-JGr-AfjdtZctxKfzdiu9yssZvcou42aABszI0G0daAt6SH1G1jwrGIWEp4NY_e2kINSTTeDRS5-EIBmvis1KNyZODe0fEs4F9TVxi574cDK508ARjqCoCn5ss0kZSjRQfQG5af4Tee7cLPSkqhNgExGa0b-LEGAJ2o5D553AkNjJPZw5I2oKFCKC81rs1kdoDXikfth-hnmwBJ-Y6AEQYbLNR0ncJqV1r7ehesXNNCkMXc2KI" />
                                </div>
                                <div className="absolute -bottom-4 -left-4 bg-tertiary text-on-tertiary p-6 rounded-xl editorial-shadow">
                                    <span className="material-symbols-outlined text-4xl" style={{
                                        fontVariationSettings: '"FILL" 1'

                                    }}>format_quote</span>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Decorative Circle Background --> */}
                        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-tertiary-fixed rounded-full opacity-20 blur-3xl"></div>
                    </div>
                </div>
            </section>
            {/* <!-- CTA Section --> */}
            <section className="mt-32 max-w-3xl mx-auto text-center px-8">
                <h2 className="font-headline text-3xl text-primary mb-6">Capture a Moment</h2>
                <p className="text-on-surface-variant mb-12">Members are encouraged to upload photos of daily life. Help us document the growth of our shared dream.</p>
                <div className="flex flex-wrap justify-center gap-4">
                    <button className="bg-primary text-on-primary flex items-center gap-2 px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs">
                        <span className="material-symbols-outlined text-sm">upload</span>
                        Submit Photo
                    </button>
                    <button className="bg-surface-container-high text-primary px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-surface-container-highest transition-colors">
                        View Archive
                    </button>
                </div>
            </section>
        </main>
    )
}