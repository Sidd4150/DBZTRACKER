import { Link } from "react-router-dom";

function Timeline() {
  const timeline = [
    {
      year: "1986",
      title: "Dragon Ball",
      desc: "Goku's childhood adventures begin with Bulma and the quest for the Dragon Balls.",
    },
    {
      year: "1989",
      title: "Dragon Ball Z",
      desc: "The legendary Saiyan Saga to the climactic Majin Buu Saga.",
    },
    {
      year: "1996",
      title: "Dragon Ball GT",
      desc: "Goku and friends go on a grand tour in space (Non-canon).",
    },
    {
      year: "2015",
      title: "Dragon Ball Super",
      desc: "Godly battles from the Battle of Gods to the Tournament of Power.",
    },
    {
      year: "2018",
      title: "DB Super: Broly",
      desc: "The epic return and canonization of the legendary Super Saiyan Broly.",
    },
    {
      year: "2022",
      title: "DB Super: Super Hero",
      desc: "Gohan and Piccolo step up to face the new Red Ribbon Army threat.",
    },
  ];

  return (
    <div className="min-h-screen text-white relative flex flex-col items-center bg-black overflow-x-hidden">
      {/* Background with Dark Overlay for readability */}
      <div
        className="fixed inset-0 bg-[url('/bg-dbz-balls.jpg')] bg-cover bg-center opacity-40 grayscale-[20%]"
        style={{ zIndex: 0 }}
      ></div>
      <div className="fixed inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" style={{ zIndex: 1 }}></div>

      <div className="relative z-10 w-full max-w-5xl p-6 sm:p-10">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-black uppercase italic tracking-tighter mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-200 to-orange-600 drop-shadow-[0_0_15px_rgba(251,146,60,0.5)]">
              Dragon Ball
            </span>
            <br />
            <span className="text-2xl sm:text-3xl tracking-[0.3em] font-light text-white/90">Timeline</span>
          </h1>
        </header>

        {/* Timeline Flow */}
        <div className="relative">
          {/* Central Energy Beam (Line) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-orange-500/0 via-orange-500 to-orange-500/0 -translate-x-1/2 hidden md:block shadow-[0_0_20px_rgba(249,115,22,0.8)]"></div>

          <div className="space-y-16 md:space-y-24">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center justify-between w-full group ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-[45%]">
                  <div className={`p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 group-hover:bg-white/10 group-hover:border-orange-500/50 group-hover:-translate-y-2 relative overflow-hidden`}>

                    {/* Character Thumbnail */}
                    <div className="flex items-center gap-4 mb-4">
                      <div>
                        <span className="text-orange-400 font-black text-xs tracking-widest uppercase opacity-80">{item.year}</span>
                        <h2 className="text-2xl font-black text-white group-hover:text-orange-400 transition-colors uppercase tracking-tight">{item.title}</h2>
                      </div>
                    </div>

                    <p className="text-sm text-white/70 leading-relaxed font-medium">
                      {item.desc}
                    </p>

                    {/* Aura Glow Background (Only visible on hover) */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600/0 via-orange-600/5 to-orange-600/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  </div>
                </div>

                {/* Central Power Point */}
                <div className="hidden md:flex items-center justify-center w-12 h-12 relative z-20">
                  <div className="w-4 h-4 bg-orange-500 rounded-full border-4 border-black group-hover:scale-[2] transition-transform duration-500 shadow-[0_0_20px_rgba(249,115,22,1)]"></div>
                  <div className="absolute inset-0 bg-orange-500/30 rounded-full animate-ping"></div>
                </div>

                {/* Spacer for Desktop */}
                <div className="hidden md:block w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;