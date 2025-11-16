"use client";

export default function LatestNews() {
    const news = [
        {
            img: "/images/update.jpg",
            tag: "News Article",
            date: "October 30, 2025",
            title: "Major Update Coming to Urban Outlaws",
            desc: "Prepare for new districts, weapons, and outlaw factions entering the world of Urban Outlaws.",
        },
        {
            img: "https://placehold.co/600x350/png",
            tag: "News Article",
            date: "October 21, 2025",
            title: "Urban Outlaws: Audio Overhaul",
            desc: "A full redesign of the soundscape, with upgraded weapon FX and ambient city layers.",
        },
        {
            img: "https://placehold.co/600x350/png",
            tag: "News Article",
            date: "September 2, 2025",
            title: "Urban Outlaws Anti-Cheat Update",
            desc: "The latest improvements in anti-cheat technology across all platforms.",
        },
        {
            img: "https://placehold.co/600x350/png",
            tag: "News Article",
            date: "August 21, 2025",
            title: "Urban Outlaws Matchmaking Test Results",
            desc: "Insights from the most recent matchmaking stress test.",
        },
    ];

    const updates = [
        {
            img: "https://placehold.co/600x350/png",
            tag: "Game Updates",
        },
        {
            img: "https://placehold.co/600x350/png",
            tag: "Game Updates",
        },
        {
            img: "https://placehold.co/600x350/png",
            tag: "Game Updates",
        },
        {
            img: "https://placehold.co/600x350/png",
            tag: "Game Updates",
        },
    ];

    return (
        <section className="bg-[#1b1b1b] text-white px-10 py-12 w-full flex justify-center">
            <div className="max-w-7xl w-full">


                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-4xl font-bold">Latest News</h2>
                    <button className="text-white bg-white/10 px-6 py-2 rounded-lg hover:bg-white/20">
                        See all
                    </button>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {news.map((item, i) => (
                        <div
                            key={i}
                            className="bg-[#262626] rounded-xl overflow-hidden shadow-lg"
                        >
                            <img
                                src={item.img}
                                alt="Urban Outlaws themed news image placeholder"
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-5 flex flex-col gap-2">
                <span className="bg-white/10 text-xs px-3 py-1 rounded-md w-max">
                  {item.tag}
                </span>

                                <p className="text-sm text-gray-300">{item.date}</p>

                                <h3 className="text-lg font-semibold leading-snug">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-gray-400">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold">Game Updates</h2>
                    <button className="text-white bg-white/10 px-6 py-2 rounded-lg hover:bg-white/20">
                        See all
                    </button>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {updates.map((item, i) => (
                        <div
                            key={i}
                            className="bg-[#262626] rounded-xl overflow-hidden shadow-lg"
                        >
                            <img
                                src={item.img}
                                alt="Urban Outlaws game update placeholder image"
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-4">
                <span className="bg-white/10 text-xs px-3 py-1 rounded-md w-max">
                  {item.tag}
                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
