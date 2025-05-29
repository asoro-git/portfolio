"use client";
import { NavigationBar } from "@/app/components/navigation";

export default function Home() {
  return (
    <>
      <main className="h-2/3 flex flex-col items-center justify-center">
        <NavigationBar />
        <div className="h-full w-full flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center tracking-tight">
            sydneyot.com
          </h1>
        </div>
      </main>

      <footer className="text-gray-400 py-16 px-6">
        <div className="max-w-2xl mx-auto grid gap-12">
          <div className="p-6 md:p-8 rounded-2xl shadow-lg border border-zinc-800 transition-shadow hover:shadow-xl">
            <p className="leading-relaxed">
              If you're here trying to send me web design services emails, stop
              wasting your time, and more importantly, mine. I already build
              sites. If you need one to pretend you're an expert, I can do it
              for you. And yes, you’ll be paying.
            </p>
          </div>
        </div>

        <div className="mt-16 text-sm text-center text-gray-500">
          <div className="flex flex-wrap justify-center items-center gap-2">
            <span>© {new Date().getFullYear()}</span>
            <span>All rights reserved.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
