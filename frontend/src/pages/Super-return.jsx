import { Tweet } from 'react-tweet'
import { useEffect, useState } from "react";

function SuperReturn() {
    const returnDate = new Date("2026-08-01");
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setNow(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const diffInMs = returnDate - now;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    const years = Math.floor(diffInDays / 365);
    const months = Math.floor((diffInDays % 365) / 30);
    const days = diffInDays % 30;


    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Basic timezone info
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const offset = -now.getTimezoneOffset() / 60;
    const gmt = `GMT${offset >= 0 ? "+" : ""}${offset}`;

    return (
        /* 1. Added 'min-h-screen' and 'overflow-y-auto' to ensure mobile users can scroll */
        <div className="bg-[url('/bg-dbz-balls.jpg')] bg-cover min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 p-6">


            <div className="bg-black/60 text-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
                <h1 className="text-1xl font-bold italic tracking-tighter">Days until the return of</h1>
                <h1 className="text-yellow-400 font-bold text-2xl">DRAGONBALL SUPER</h1>

                <div className="flex justify-center mt-4 text-sm">
                    <p className="text-2xl font-bold text-white-400 pt-2">
                        {String(years).padStart(2, "0")} Years,{" "}
                        {String(months).padStart(2, "0")} Months,{" "}
                        {String(days).padStart(2, "0")} Days
                    </p>

                </div>

                <p className="mt-4 text-xs opacity-60">
                    Your Timezone: {timeZone} ({gmt})
                </p>
            </div>


            <div className='flex flex-col items-center bg-white justify-center p-5 rounded-lg shadow-lg max-w-md w-full text-center opacity-90 lg:ml-10'>
                <p className="text-2xl font-bold italic tracking-tighter">Offical tweet</p>
                <div className="w-full flex justify-center">
                    <Tweet id="2015424417179083121" />
                </div>
            </div>
        </div>
    );
}

export default SuperReturn;