

function App() {

  const pastDate = new Date("2018-03-25"); // Your 25-Mar-18 date
  const today = new Date();

  // The Subtraction
  const diffInMs = today - pastDate;

  // Conversion
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  return (

    <div className="bg-[url('/bg-dbz-balls.jpg')] bg-cover h-screen flex items-center justify-center">
      <div className="bg-black/60 text-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
        <h1 className="text-2xl font-bold">DBZTRACKER</h1>

        <p className="text-5xl font-black text-orange-500">
          {diffInDays} Days
        </p>

        <p className="mt-2 text-sm">
          since the end of the DragonBall Super anime.
        </p>


      </div>
    </div >
  )
}

export default App
