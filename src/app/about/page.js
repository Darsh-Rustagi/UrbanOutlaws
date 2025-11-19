export default function FeaturesSection() {
    return (
        <>
        <section className="w-full bg-[#f6f0e7] py-20 px-10 flex justify-center">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

               
                <div className="flex flex-col justify-center">
                    <h2 className="text-4xl font-bold tracking-wide mb-6 text-black">
                        About
                    </h2>

                    <p className="text-lg text-black leading-relaxed max-w-xl">
                        Choose your outlaw. Build your crew. Conquer the streets.
                        Show everyone what Urban Outlaws are made of.
                    </p>
                </div>

                
                <div className="flex justify-center">
                    <div className="bg-[#0f0f0f] rounded-2xl overflow-hidden shadow-xl p-4">
                        <img
                            src="/images/about.jpg"
                            alt="Urban Outlaws poster-style artwork with multiple futuristic outlaw characters"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full bg-[#1b1b1b] text-white px-10 py-20 flex justify-center">
            <div className="max-w-7xl w-full">

                
                <h2 className="text-4xl font-bold text-center mb-12">
                    Urban Outlaws Features
                </h2>

                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

                    
                    <div>
                        <img
                            src="/images/outlaws.jpg"
                            alt="Urban Outlaws outlaw team lineup standing in a rugged wasteland"
                            className="w-full h-72 object-fit rounded-lg mb-4"
                        />

                        <h3 className="text-xl font-semibold mb-2">The Outlaws</h3>

                        <p className="text-gray-300 mb-4">
                            Each outlaw comes with grit, talent, and a dangerous skillset.
                            Choose your favorite and build a crew that dominates the streets.
                        </p>

                        <button className="border border-white/40 px-5 py-2 rounded-lg hover:bg-white/10">
                            Meet the Outlaws
                        </button>
                    </div>

                    
                    <div>
                        <img
                            src="/images/urbanmodes.jpg"
                            alt="Urban Outlaws combat arena with futuristic weapons and portal effects"
                            className="w-full h-72 object-fit rounded-lg mb-4"
                        />

                        <h3 className="text-xl font-semibold mb-2">Modes</h3>

                        <p className="text-gray-300 mb-4">
                            Urban Outlaws evolves constantly. Jump into crew fights,
                            territory control battles, limited-time events, and more.
                        </p>

                        <button className="border border-white/40 px-5 py-2 rounded-lg hover:bg-white/10">
                            Learn More
                        </button>
                    </div>

                   
                    <div>
                        <img
                            src="/images/districts.jpg"
                            alt="Urban Outlaws futuristic neon city landscape seen from above"
                            className="w-full h-72 object-fit rounded-lg mb-4"
                        />

                        <h3 className="text-xl font-semibold mb-2">Districts</h3>

                        <p className="text-gray-300 mb-4">
                            Explore massive urban districts across the city—each hiding
                            secrets, safehouses, bosses, and challenges.
                        </p>

                        <button className="border border-white/40 px-5 py-2 rounded-lg hover:bg-white/10">
                            Explore the Districts
                        </button>
                    </div>
                </div>

                
                <div className="max-w-xl">
                    <img
                        src="/images/lore.jpg"
                        alt="Urban Outlaws character standing beside futuristic vehicles in a neon-lit hangar"
                        className="w-full h-100 object-fit rounded-lg mb-4"
                    />

                    <h3 className="text-xl font-semibold mb-2">Lore</h3>

                    <p className="text-gray-300">
                        The world of Urban Outlaws is built on rebellion, loyalty, and survival.
                        Every faction has a story—and every outlaw has a past worth uncovering.
                    </p>
                </div>

            </div>
            
        </section>

        
        <section className="w-full bg-linear-to-r from-[#0b0b0b] to-[#131313] text-white px-10 py-20 flex justify-center">
            <div className="max-w-7xl w-full">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Why Urban Outlaws is Better
                </h2>

                <p className="text-center text-gray-300 max-w-3xl mx-auto mb-10">
                    Urban Outlaws blends deep crew-driven gameplay, evolving live districts, and
                    bold stylistic direction to deliver experiences other games can't match.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-[#0f0f0f] p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">Crew-First Gameplay</h3>
                        <p className="text-gray-300">
                            Progress, strategies, and victories are built around crews — not solo power.
                            Teamwork matters and rewards scale with coordination.
                        </p>
                    </div>

                    <div className="bg-[#0f0f0f] p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">Living Districts & Events</h3>
                        <p className="text-gray-300">
                            Districts change over time with player actions and live events, creating
                            emergent moments and long-term goals unique to Urban Outlaws.
                        </p>
                    </div>

                    <div className="bg-[#0f0f0f] p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">Style & Production</h3>
                        <p className="text-gray-300">
                            Bold art direction, cinematic sound, and crafted worldbuilding create an
                            unmistakable identity that stands out from generic titles.
                        </p>
                    </div>

                    <div className="bg-[#0f0f0f] p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">Meaningful Progression</h3>
                        <p className="text-gray-300">
                            Player-driven economy, customizable crews, and persistent growth give
                            long-term goals real weight.
                        </p>
                    </div>

                    <div className="bg-[#0f0f0f] p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">Accessible & Competitive</h3>
                        <p className="text-gray-300">
                            Easy to pick up but deep to master — designed for both casual players
                            and high-skill competitive crews.
                        </p>
                    </div>

                    <div className="bg-[#0f0f0f] p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
                        <p className="text-gray-300">
                            Regular updates, community-driven features, and frequent events keep the
                            experience fresh and player-focused.
                        </p>
                    </div>
                </div>

                <div className="text-center mt-10">
                    <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:opacity-90">
                        Join the Outlaws
                    </button>
                </div>
            </div>
        </section>
        </>
    );
}
