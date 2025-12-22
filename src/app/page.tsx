"use client";

export default function Home() {
  return (
    <>
      <div className="h-full max-w-lg flex flex-col justify-center items-center">
        <div className="h-2/3 flex flex-col items-center justify-center">
          <div className="h-full w-full mt-8 md-8 flex flex-col items-center justify-center">
            <h1 className="w-screen text-4xl md:text-4xl font-extrabold text-center tracking-tight">
              Redirecting...
            </h1>
          </div>
        </div>
        <footer className="flex flex-col justify-center items-center text-gray-400 py-8">
          <div className="max-w-2xs sm:max-w-sm p-6 md:p-8 rounded-2xl shadow-lg border border-zinc-800 transition-shadow hover:shadow-xl">
            <p className="leading-relaxed">Redirecting...</p>
          </div>

          <div className="mt-8 text-sm text-center text-gray-500">
            <div className="gap-2 flex flex-wrap justify-center items-center">
              <span>© {new Date().getFullYear()} </span>
              <span>All rights reserved.</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
