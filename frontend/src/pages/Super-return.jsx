import { Tweet } from 'react-tweet'
import { useEffect, useState } from "react";

function SuperReturn() {
    const [now, setNow] = useState(new Date());

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

                <div className="flex justify-center gap-2 mt-4 text-sm">
                    <h1 className='font-bold text-3xl'>Unknown</h1>
                </div>

                <p className="mt-4 text-xs opacity-60">
                    Your Timezone: {timeZone} ({gmt})
                </p>
            </div>


            <div className='flex flex-col items-center bg-white justify-center p-5 rounded-lg shadow-lg max-w-md w-full text-center opacity-90 lg:ml-10'>
                <p className="text-2xl font-bold italic tracking-tighter">Potential Leak</p>
                <div className="w-full flex justify-center">
                    <Tweet id="2002029099087519901" />
                </div>
            </div>
        </div>
    );
}

export default SuperReturn;