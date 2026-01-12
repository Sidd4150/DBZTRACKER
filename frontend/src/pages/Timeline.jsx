import { Link } from "react-router-dom";

function Timeline() {
  const timeline = [
    { year: "1986", title: "Dragon Ball", desc: "Goku's childhood adventures begin." },
    { year: "1989", title: "Dragon Ball Z", desc: "Saiyan Saga to Majin Buu Saga." },
    { year: "1996", title: "Dragon Ball GT", desc: "Non-canon sequel with Super Saiyan 4." },
    { year: "2015", title: "Dragon Ball Super", desc: "Battle of Gods to Tournament of Power." },
    { year: "2018", title: "Dragon Ball Super: Broly", desc: "Broly movie released." },
    { year: "2022", title: "Dragon Ball Super: Super Hero", desc: "Gohan & Piccolo movie." },
  ];

  return (

    <div className="min-h-screen text-white p-10 flex flex-col"
      style={{
        backgroundImage: `url("/bg-dbz-balls.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-3xl font-bold text-center mb-10 text-white-400">
        Dragon <span className="text-3xl font-bold text-center mb-10 text-400">Ball</span> Timeline
      </h1>

      <div className="min-h-screen text-white p-10">
        {/* Back to Home Link */}
        <div className="mb-6">
          <Link
            to="/"
            className="text-white-400 hover:text-orange-500 font-semibold"
          >
            &larr; Back to Home
          </Link>
        </div>



        {/* Scrollable vertical container */}
        <div className="relative max-w-3xl mx-auto space-y-10">
          {/* Vertical dashed line */}
          <div className="absolute left-1/2 top-0 w-1 h-full bg-transparent border-l-2 border-dashed border-orange-500 -translate-x-1/2 pointer-events-none"></div>

          {/* Timeline items */}
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`relative w-5/12 p-5 rounded-xl shadow-md bg-white/10 border-l-4 border-orange-500 ${index % 2 === 0 ? "ml-auto text-right" : "mr-auto text-left"
                }`}
            >
              <p className="text-sm text-gray-300">{item.year}</p>
              <h2 className="text-xl font-bold text-orange-400">{item.title}</h2>
              <p className="text-sm mt-1">{item.desc}</p>

              {/* Circle on the dashed line */}
              <div
                className={`absolute top-5 w-4 h-4 bg-orange-500 rounded-full border-2 border-white ${index % 2 === 0 ? "-left-2" : "-right-2"
                  }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
