

function App() {

  const pastDate = new Date("2018-03-25"); // Your 25-Mar-18 date
  const today = new Date();

  // The Subtraction
  const diffInMs = today - pastDate;

  // Conversion
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  const years = Math.floor(diffInDays / 365);
  const months = Math.floor((diffInDays % 365) / 30);
  const days = diffInDays % 30;

  console.log(`${years} years, ${months} months, and ${days} days`);

  return (

    <div className="bg-[url('/bg-dbz-balls.jpg')] bg-cover h-screen flex items-center justify-center">
      <div className="bg-black/60 text-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
        <h1 className="text-2xl font-bold">DBSTRACKER</h1>

        <p className="text-3xl font-black text-orange-400">
          {years} Years, {months} Months, {days} Days
        </p>

        <p className="mt-2 text-sm">
          since the end of the DragonBall Super anime.
        </p>


      </div>
    </div >
  )
}

export default App
