export default function SeasonUpdates() {
    return (
        <div className="w-full flex flex-col">

            <section className="w-full bg-[#F5EDE1] py-20">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
                    <div>
                        <h2 className="text-4xl font-extrabold text-black mb-4 tracking-tight">
                            OLYMPUS RISING
                        </h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Chase new heights in the updated Olympus, reworked for better flow, dynamic positioning, and elevated gameplay—plus
                            4 new POIs, including the sprawling Somers University campus and the enormous Gravity Engine.
                        </p>

                        <button className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition">
                            Reach the Top
                        </button>
                    </div>

                    <img
                        src="/images/update1.jpg"
                        alt="Olympus Rising"
                        className="rounded-xl shadow-xl"
                    />
                </div>
            </section>

            <section className="w-full bg-[#0E0E10] py-20 text-white">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
                    <img
                        src="/images/update2.jpg"
                        alt="Fight & Flight"
                        className="rounded-xl shadow-xl"
                    />

                    <div>
                        <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
                            FIGHT AND FLIGHT RESPONSE
                        </h2>

                        <p className="text-gray-300 leading-relaxed mb-6">
                            New Legend updates: Valkyrie and Horizon take flight for more intense aerial combat, while Rampart gets evolving cover
                            for better area denial.
                        </p>

                        <button className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition">
                            Touch the Sky
                        </button>
                    </div>
                </div>
            </section>

            <section className="w-full bg-[#F5EDE1] py-20">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

                    <div>
                        <h2 className="text-4xl font-extrabold text-black mb-4 tracking-tight">
                            DOUBLE-BARREL DEVASTATION
                        </h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            The Alternator becomes a lightning-fast killing machine with the “Double Tap” Hop-Up—fire both barrels at once and watch your enemies drop.
                        </p>

                        <button className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition">
                            Lock and Load
                        </button>
                    </div>

                    <img
                        src="/images/update3.jpg"
                        alt="Double Barrel"
                        className="rounded-xl shadow-xl"
                    />
                </div>
            </section>

            <section className="w-full bg-[#0E0E10] py-20 text-white">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
                    <img
                        src="/images/weapon.jpg"
                        alt="Urban Arsenal"
                        className="w-full max-h-80 md:max-h-96 object-cover rounded-xl shadow-xl"
                    />

                    <div>
                        <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
                            URBAN ARSENAL EXPANSION
                        </h2>

                        <p className="text-gray-300 leading-relaxed mb-6">
                            New attachments and equipment drop into play, letting players customize weapons for both long-range control and fast city skirmishes.
                        </p>

                        <button className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition">
                            Gear Up
                        </button>
                    </div>
                </div>
            </section>

            <section className="w-full bg-[#F5EDE1] py-20">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

                    <div>
                        <h2 className="text-4xl font-extrabold text-black mb-4 tracking-tight">
                            STREET CIRCUIT SHOWDOWN
                        </h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            A new rotating limited-time mode introduces neon-lit urban arenas where speed, aggression, and split-second decisions rule every match.
                        </p>

                        <button className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition">
                            Enter the Arena
                        </button>
                    </div>

                    <img
                        src="/images/bike.jpg"
                        alt="Street Mode"
                        className="w-full max-h-80 md:max-h-96 object-cover rounded-xl shadow-xl"
                    />
                </div>
            </section>

        </div>
    );
}
