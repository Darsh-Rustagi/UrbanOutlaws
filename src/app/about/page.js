export default function FeaturesSection() {
    return (
        <>
        <section className="w-full bg-[#f6f0e7] py-20 px-10 flex justify-center">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

                {/* LEFT SIDE TEXT */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-4xl font-bold tracking-wide mb-6 text-black">
                        About
                    </h2>

                    <p className="text-lg text-black leading-relaxed max-w-xl">
                        Choose your outlaw. Build your crew. Conquer the streets.
                        Show everyone what Urban Outlaws are made of.
                    </p>
                </div>

                {/* RIGHT IMAGE */}
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

                {/* Heading */}
                <h2 className="text-4xl font-bold text-center mb-12">
                    Urban Outlaws Features
                </h2>

                {/* TOP FEATURE GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

                    {/* Feature 1 */}
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

                    {/* Feature 2 */}
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

                    {/* Feature 3 */}
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

                {/* LOWER IMAGE + LORE */}
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
        </>
    );
}
