export default function DownloadPage() {
    return (
        <section className="w-full bg-[#1b1b1b] text-white min-h-screen px-10 py-20 flex justify-center">
            <div className="max-w-7xl w-full">

                
                <div className="text-center mb-20">
                    <h1 className="text-5xl font-bold mb-4 tracking-wide">
                        Download Urban Outlaws
                    </h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Choose your platform and join the fight. Build your outlaw crew,
                        dominate the districts, and rule the city.
                    </p>
                </div>

                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">

                   
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

                <div className="bg-[#262626] p-10 rounded-2xl shadow-xl mb-20">
                    <h2 className="text-3xl font-bold mb-6">How to Install</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">PC (.exe)</h3>
                            <ol className="list-decimal list-inside text-gray-300 space-y-2">
                                <li>Download the installer by clicking "Download for PC".</li>
                                <li>Run the .exe file and allow it to make changes if prompted.</li>
                                <li>Follow the installer prompts: choose install folder and create shortcuts.</li>
                                <li>Launch the game from the desktop or Start menu.</li>
                            </ol>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">Steam</h3>
                            <ol className="list-decimal list-inside text-gray-300 space-y-2">
                                <li>Click "Download on Steam" to open the store page.</li>
                                <li>Press "Add to Library" or "Install".</li>
                                <li>Steam will download and install automatically.</li>
                                <li>Launch from your Steam library when ready.</li>
                            </ol>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">Epic Games</h3>
                            <ol className="list-decimal list-inside text-gray-300 space-y-2">
                                <li>Click "Download on Epic" to open the Epic store page.</li>
                                <li>Purchase or claim the game, then click "Install".</li>
                                <li>Open the Epic Games Launcher to monitor download progress.</li>
                                <li>Launch from the Epic Games Launcher once installed.</li>
                            </ol>
                        </div>
                    </div>

                    <p className="text-gray-400 mt-6 text-sm">
                        Note: Make sure your system meets the minimum requirements listed below. For any install issues, run the installer as administrator and ensure your firewall/antivirus isn't blocking the download.
                    </p>
                </div>

                
                <div className="bg-[#262626] p-10 rounded-2xl shadow-xl">
                    <h2 className="text-3xl font-bold mb-8">System Requirements</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                        
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
