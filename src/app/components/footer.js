export default function Footer() {
    return (
        <footer className="bg-black text-white py-10 px-8 ">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

               
                <div className="text-xl font-semibold tracking-wide">
                    Urban Outlaws
                </div>

                
                <nav className="flex gap-8 text-sm">
                    <a
                        href="/"
                        className="hover:text-gray-300 transition"
                    >
                        Home
                    </a>
                    <a
                        href="/about"
                        className="hover:text-gray-300 transition"
                    >
                        About
                    </a>
                    <a
                        href="/season"
                        className="hover:text-gray-300 transition"
                    >
                        Season
                    </a>
                    <a
                        href="/download"
                        className="hover:text-gray-300 transition"
                    >
                        Download
                    </a>
                </nav>
            </div>

            
            <div className="w-full h-px bg-white/10 mt-8 mb-6"></div>

            
            <div className="max-w-7xl mx-auto text-xs text-gray-400">
                © 2025 Urban Outlaws. All rights reserved.
            </div>
        </footer>
    );
}
