"use client";

export default function Video() {
    return (
        <section className="bg-[#1b1b1b] p-10 text-white w-full flex justify-center">
            <div className="max-w-7xl w-full">

                <h1 className="text-4xl font-bold tracking-wide mb-6">Spotlight</h1>

                <p className="text-lg leading-relaxed max-w-3xl mb-10">
                    Feel the adrenaline in Urban Outlaws™: Amped! Break the rules, outrun the chaos, and dominate the streets with unstoppable style. Blaze through hyper-charged districts, master outlaw-level upgrades, unleash brutal custom weapons, and rise as the most feared force in the city.
                </p>

                <div className="grid lg:flex border border-red-600 rounded-xl overflow-hidden">

                    {/* Left Image */}
                    <div className="w-full lg:w-3/4 relative">
                        <a href="https://youtube.com" target="_blank">
                            <img
                            src="/images/trailer.jpg"
                            alt="A futuristic teal-blue tunnel scene with glowing streaks and the word AMPED in bold white text at the center"
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/30 rounded-full p-6">
                            <i className="fas fa-play text-white text-3xl"></i>
                        </div>
                        </a>
                    </div>


                    {/* Right Panel */}
                    <div className="w-full lg:w-1/4 p-8 flex flex-col gap-4 bg-[#1b1b1b]">
                        <span className="text-sm bg-white/10 px-3 py-1 rounded-md w-max">Video</span>

                        <p className="text-sm text-gray-300">November 14, 2025</p>

                        <h2 className="text-xl font-semibold leading-snug">
                            Urban Outlaws: Gameplay Trailer
                        </h2>
                    </div>

                </div>
            </div>
        </section>
    );
}
