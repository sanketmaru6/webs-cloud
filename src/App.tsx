import { FC, useState } from "react";

const App: FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleTap = () => setCount((prev) => prev + 1);
  const handleReset = () => setCount(0);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-sky-100 via-emerald-100 to-amber-100 flex items-center justify-center px-4 py-6">
      <main className="w-full max-w-md bg-white/90 backdrop-blur-xl border border-white/60 shadow-2xl rounded-3xl p-6 sm:p-8">
        {/* Header */}
        <header className="flex items-center gap-4 mb-6 sm:mb-8">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 shadow-lg flex items-center justify-center text-3xl text-white">
            ⚛️
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              My First React App
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              React • TypeScript • Tailwind CSS
            </p>
          </div>
        </header>

        {/* Description */}
        <p className="text-sm text-slate-600 mb-6 text-center">
          Tap the counter to increase its value, or use the buttons below to
          control it.
        </p>

        {/* Counter section */}
        <section className="flex flex-col items-center gap-4">
          {/* Counter circle as main action button */}
          <button
            type="button"
            onClick={handleTap}
            className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 shadow-xl flex flex-col items-center justify-center text-white overflow-hidden active:scale-95 transition-transform duration-150 focus:outline-none focus:ring-4 focus:ring-blue-300"
            aria-label="Tap to increase counter"
          >
            {/* soft shine */}
            <div className="pointer-events-none absolute inset-0 bg-white/10 blur-xl" />
            <span className="relative text-4xl sm:text-5xl font-extrabold drop-shadow-lg">
              {count}
            </span>
            <span className="relative text-[0.65rem] sm:text-xs tracking-[0.28em] mt-1 uppercase opacity-90">
              Taps
            </span>
          </button>

          {/* Button row */}
          <div className="flex w-full gap-3 mt-4">
            <button
              type="button"
              onClick={handleTap}
              className="flex-1 inline-flex items-center justify-center gap-1 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 text-white text-sm sm:text-base font-semibold py-2.5 sm:py-3 shadow-md hover:opacity-90 active:scale-95 transition-all"
            >
              <span>+</span>
              <span>Increase</span>
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="flex-1 inline-flex items-center justify-center gap-1 rounded-full border border-slate-300 bg-white text-slate-800 text-sm sm:text-base font-semibold py-2.5 sm:py-3 shadow-sm hover:bg-slate-50 active:scale-95 transition-all"
            >
              <span>0</span>
              <span>Reset</span>
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-6 sm:mt-8 text-center">
          <p className="text-[0.7rem] sm:text-xs text-slate-500">
            Optimised for mobile & tablet · {new Date().getFullYear()}
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;
