import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
    const pastDate = new Date("2018-03-25");
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setNow(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const diffInMs = now - pastDate;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    const years = Math.floor(diffInDays / 365);
    const months = Math.floor((diffInDays % 365) / 30);
    const days = diffInDays % 30;

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const offset = -now.getTimezoneOffset() / 60;
    const gmt = `GMT${offset >= 0 ? "+" : ""}${offset}`;

    return (
        <div className="bg-[url('/bg-dbz-balls.jpg')] bg-cover h-screen flex items-center justify-center">
            <div className="bg-black/60 text-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">

                <h1 className="text-2xl font-bold">DBSTRACKER</h1>


                <div className="flex justify-center gap-2 mt-4 text-sm">



                    <div className="bg-white/10 px-3 py-2 rounded-lg">
                        <p className="text-lg font-bold">{String(years).padStart(2, "0")}</p>
                        <p className="text-xs opacity-80">Years</p>
                    </div>

                    <div className="bg-white/10 px-3 py-2 rounded-lg">
                        <p className="text-lg font-bold">{String(months).padStart(2, "0")}</p>
                        <p className="text-xs opacity-80">Months</p>
                    </div>

                    <div className="bg-white/10 px-3 py-2 rounded-lg">
                        <p className="text-lg font-bold">{String(days).padStart(2, "0")}</p>
                        <p className="text-xs opacity-80">Days</p>
                    </div>

                    <div className="bg-white/10 px-3 py-2 rounded-lg">
                        <p className="text-lg font-bold">{String(hours).padStart(2, "0")}</p>
                        <p className="text-xs opacity-80">Hours</p>
                    </div>
                    <div className="bg-white/10 px-3 py-2 rounded-lg">
                        <p className="text-lg font-bold">{String(minutes).padStart(2, "0")}</p>
                        <p className="text-xs opacity-80">Minutes</p>
                    </div>
                    <div className="bg-white/10 px-3 py-2 rounded-lg">
                        <p className="text-lg font-bold animate-pulse">
                            {String(seconds).padStart(2, "0")}
                        </p>
                        <p className="text-xs opacity-80">Seconds</p>
                    </div>
                </div>

                <p className="mt-2 text-sm">
                    since the end of the Dragon Ball Super anime.
                </p>

                <p className="mt-1 text-xs opacity-60">
                    Your Timezone: {timeZone} ({gmt})
                </p>

                {/* Link to Timeline */}
                <Link
                    to="/timeline"
                    className="inline-block mt-4 text-orange-400 underline hover:text-orange-300"
                >
                    View Dragon Ball Timeline →
                </Link>

            </div>
        </div>
    );
}

export default Home;