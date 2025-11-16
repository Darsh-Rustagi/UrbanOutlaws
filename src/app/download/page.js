export default function DownloadPage() {
    return (
        <section className="w-full bg-[#1b1b1b] text-white min-h-screen px-10 py-20 flex justify-center">
            <div className="max-w-7xl w-full">

                {/* HERO SECTION */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl font-bold mb-4 tracking-wide">
                        Download Urban Outlaws
                    </h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Choose your platform and join the fight. Build your outlaw crew,
                        dominate the districts, and rule the city.
                    </p>
                </div>

                {/* PLATFORM GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">

                    {/* PC */}
                    <div className="bg-[#262626] rounded-2xl p-8 shadow-lg">
                        <img
                            src="/images/windows.webp"
                            alt="Urban Outlaws PC promo artwork"
                            className="w-full h-40 object-cover rounded-lg mb-6"
                        />
                        <h3 className="text-xl font-semibold mb-2">PC Download</h3>
                        <p className="text-gray-300 mb-4">
                            Full HD performance, full customization, optimal controls.
                        </p>
                        <button className="bg-white/10 hover:bg-white/20 px-5 py-2 rounded-lg w-full">
                            Download for PC
                        </button>
                    </div>

                    {/* STEAM */}
                    <div className="bg-[#262626] rounded-2xl p-8 shadow-lg">
                        <img
                            src="/images/steam.png"
                            alt="Steam version promotional artwork"
                            className="w-full h-40 object-cover rounded-lg mb-6"
                        />
                        <h3 className="text-xl font-semibold mb-2">Steam</h3>
                        <p className="text-gray-300 mb-4">
                            Access achievements, cloud saves, community features and more.
                        </p>
                        <button className="bg-white/10 hover:bg-white/20 px-5 py-2 rounded-lg w-full">
                            Download on Steam
                        </button>
                    </div>

                    {/* EPIC GAMES */}
                    <div className="bg-[#262626] rounded-2xl p-8 shadow-lg">
                        <img
                            src="/images/epic.png"
                            alt="Epic Games version promotional cover"
                            className="w-full h-40 object-cover rounded-lg mb-6"
                        />
                        <h3 className="text-xl font-semibold mb-2">Epic Games Store</h3>
                        <p className="text-gray-300 mb-4">
                            Join the fight with exclusive rewards and weekly bonuses.
                        </p>
                        <button className="bg-white/10 hover:bg-white/20 px-5 py-2 rounded-lg w-full">
                            Download on Epic
                        </button>
                    </div>
                </div>

                {/* SYSTEM REQUIREMENTS */}
                <div className="bg-[#262626] p-10 rounded-2xl shadow-xl">
                    <h2 className="text-3xl font-bold mb-8">System Requirements</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                        {/* Minimum */}
                        <div>
                            <h3 className="text-xl font-semibold mb-3">Minimum</h3>
                            <ul className="text-gray-300 space-y-2">
                                <li>• OS: Windows 10</li>
                                <li>• CPU: Intel i5 / Ryzen 3</li>
                                <li>• GPU: GTX 960 / RX 560</li>
                                <li>• RAM: 8GB</li>
                                <li>• Storage: 30GB</li>
                            </ul>
                        </div>

                        {/* Recommended */}
                        <div>
                            <h3 className="text-xl font-semibold mb-3">Recommended</h3>
                            <ul className="text-gray-300 space-y-2">
                                <li>• OS: Windows 11</li>
                                <li>• CPU: Intel i7 / Ryzen 5</li>
                                <li>• GPU: GTX 1660 / RX 5700</li>
                                <li>• RAM: 16GB</li>
                                <li>• Storage: 30GB SSD</li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
