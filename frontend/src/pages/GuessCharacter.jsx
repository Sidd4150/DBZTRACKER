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

    setTimeout(() => {
      setMessage("");
      setLocked(false);
      setLevel(level + 1);
    }, 1500);
  };

  if (level >= characters.length) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 bg-[url('/bg-dbz-balls.jpg')] bg-cover h-screen flex items-center justify-center">
        <div className="bg-white rounded-xl p-10 opacity-95 shadow-lg text-center">
          <h1 className="text-3xl font-bold mb-4">Game Over 🎮</h1>
          <p className="text-xl">
            You guessed {score} / {characters.length} correctly!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 bg-[url('/bg-dbz-balls.jpg')] bg-cover h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold mb-2">
        Level {level + 1} / {characters.length}
      </h1>

      <div className="mb-6">
        <img
          src={current.image}
          alt={current.name}
          className="w-64 h-64 object-cover rounded-lg shadow-lg filter saturate-125 contrast-110 brightness-105"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {current.options.map((option) => (
          <button
            key={option}
            onClick={() => handleGuess(option)}
            className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg font-semibold text-white transition-colors"
          >
            {option}
          </button>
        ))}
      </div>

      {message && (
        <p className="mt-4 text-xl font-bold animate-pulse">{message}</p>
      )}
    </div>
  );
}

export default GuessCharacter;
