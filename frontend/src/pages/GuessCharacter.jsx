import { useState, useEffect } from "react";

const characters = [
  {
    name: "Goku",
    image: "/chars/goku.jpg",
    options: ["Goku", "Vegeta", "Gohan", "Trunks"],
  },
  {
    name: "Vegeta",
    image: "/chars/vegeta.jpeg",
    options: ["Goku", "Vegeta", "Piccolo", "Broly"],
  },
  {
    name: "Gohan",
    image: "/chars/gohan.jpg",
    options: ["Goten", "Gohan", "Future Trunks", "Krillin"],
  },
  {
    name: "Trunks",
    image: "/chars/trunks.jpg",
    options: ["Vegeta", "Goten", "Trunks", "Gohan"],
  },
  {
    name: "Piccolo",
    image: "/chars/picoolo.jpg",
    options: ["Piccolo", "Beerus", "Hit", "Jiren"],
  },
  {
    name: "Broly",
    image: "/chars/broly.jpg",
    options: ["Broly", "Jiren", "Toppo", "Gogeta"],
  },
  {
    name: "Beerus",
    image: "/chars/beerus.jpg",
    options: ["Whis", "Beerus", "Champa", "Zeno"],
  },
];

function GuessCharacter() {
  const [level, setLevel] = useState(0);
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);
  const [locked, setLocked] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 200); // Show image for 0.5 seconds

    return () => clearTimeout(timer);
  }, [level]);

  const current = characters[level];

  const handleGuess = (option) => {
    if (locked) return;
    setLocked(true);

    if (option === current.name) {
      setScore(score + 1);
      setMessage("Correct! 🔥");
    } else {
      setMessage(`Wrong! ❌ It was ${current.name}`);
    }

    setIsVisible(true); // Reveal on guess

    setTimeout(() => {
      setMessage("");
      setLocked(false);
      setLevel(level + 1);
    }, 200);
  };

  const handleRestart = () => {
    setLevel(0);
    setScore(0);
    setMessage("");
    setLocked(false);
  };

  if (level >= characters.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[url('/bg-dbz-balls.jpg')] bg-cover px-4">
        <div className="bg-white/90 rounded-xl p-6 sm:p-10 shadow-lg text-center max-w-sm w-full">
          <h1 className="text-xl sm:text-3xl font-bold mb-2">Game Over 🎮</h1>
          <p className="text-lg">
            You guessed {score} / {characters.length} correctly!
          </p>
          <button
            onClick={handleRestart}
            className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition-transform active:scale-95 shadow-md"
          >
            Play Again 🔄
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[url('/bg-dbz-balls.jpg')] bg-cover px-4 text-center">
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">
        Level {level + 1} / {characters.length}
      </h1>

      <div className="mb-4 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 flex items-center justify-center bg-white/10 rounded-lg shadow-lg overflow-hidden relative">
        {isVisible ? (
          <img
            src={current.image}
            alt={current.name}
            className="max-w-full max-h-full object-contain"
          />
        ) : (
          <div className="text-white/20 text-6xl sm:text-8xl font-black italic select-none">
            ?
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3 w-full max-w-xs sm:max-w-sm">
        {current.options.map((option) => (
          <button
            key={option}
            onClick={() => handleGuess(option)}
            className="bg-orange-500 hover:bg-orange-600 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold text-white active:scale-95 transition"
          >
            {option}
          </button>
        ))}
      </div>

      {message && (
        <p className="mt-3 text-base sm:text-lg font-bold animate-pulse">
          {message}
        </p>
      )}
    </div>
  );
}

export default GuessCharacter;
