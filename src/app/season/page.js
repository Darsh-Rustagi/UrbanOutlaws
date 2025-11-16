export default function SeasonUpdates() {
    return (
        <div className="w-full flex flex-col">

            {/* SECTION 1 */}
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

            {/* SECTION 2 */}
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

            {/* SECTION 3 */}
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

        </div>
    );
}
