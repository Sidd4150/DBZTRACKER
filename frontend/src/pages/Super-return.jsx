import { Tweet } from 'react-tweet'
import { useEffect, useState } from "react";



function SuperReturn() {
    // Calculate the number of days until the return of the DBS anime

    const [now, setNow] = useState(new Date());

    const years = 0; // Placeholder value
    const months = 0; // Placeholder value
    const days = 0; // Placeholder value
    const hours = 0; // Placeholder value
    const minutes = 0; // Placeholder value
    const seconds = 0; // Placeholder value

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const offset = -now.getTimezoneOffset() / 60;
    const gmt = `GMT${offset >= 0 ? "+" : ""}${offset}`;

    return (
        <div className="bg-[url('/bg-dbz-balls.jpg')] bg-cover h-screen flex items-center justify-center">
            <div className="bg-black/60 text-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">

                <h1 className="text-1xl font-bold italic tracking-tighter">Days until the return of</h1>
                <h1 className="text-yellow-400 font-bold text-2xl">DRAGONBALL SUPER</h1>


                <div className="flex justify-center gap-2 mt-4 text-sm">

                    <h1 className='font-bold text-3xl'>Unknown</h1>
                    {/* 
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
                     */}
                </div>



                <p className="mt-1 text-xs opacity-60">
                    Your Timezone: {timeZone} ({gmt})
                </p>



            </div>
            <div className='flex flex-col items-right mt-1 bg-white justify-center p-5 rounded-lg shadow-lg max-w-md w-full text-center opacity-90 ml-10'>
                <p className="text-2xl font-bold italic tracking-tighter">Potentail Leak</p>
                <br />
                <Tweet id="2002029099087519901" />
            </div>
        </div>
    );
}

export default SuperReturn;