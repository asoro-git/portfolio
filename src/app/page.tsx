"use client";
import { NavigationBar } from "@/app/components/navigation";

export default function Home() {
  return (
    <>
      <main className="h-2/3 flex flex-col items-center justify-center">
        <NavigationBar />
        <div className="border border-zinc-800 rounded-xl h-full mt-8 md-8 w-lg flex flex-col items-center justify-center">
          <h1 className=" text-4xl md:text-4xl font-extrabold text-center tracking-tight">
            Sydneyot.com
          </h1>
        </div>
      </main>
      <footer className="flex flex-col justify-center items-center text-gray-400 py-8">
        <div className="max-w-lg">
          <div className="p-6 md:p-8 rounded-2xl shadow-lg border border-zinc-800 transition-shadow hover:shadow-xl">
            <p className="leading-relaxed">
              If you&apos;re here trying to send me web design services emails,
              stop wasting your time.
            </p>
          </div>
        </div>

        <div className="mt-8 text-sm text-center text-gray-500">
          <div className="gap-2 flex flex-wrap justify-center items-center">
            <span>© {new Date().getFullYear()} </span>
            <span>All rights reserved.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
