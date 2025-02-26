"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import LOGO from "/public/Images/logo3.png";
import LOGO2 from "/public/Images/board.png";
import LOGO3 from "/public/Images/logo4.png";
import LOGO4 from "/public/Images/logo5.png";
import SYNC_BOARD_LOGO from "/public/Images/sync-board.png";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ClipboardPen } from "lucide-react";

export default function Home() {
  const router = useRouter();
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 overflow-hidden">
      <div className="w-full h-20 bg-opacity-30 border-b gap-x-5 bg-white fixed top-0 z-[50] flex items-center backdrop-blur-sm justify-between lg:px-32 px-20">
        <div className="flex gap-x-2 items-center">
          <Image src={LOGO} alt="Collaboration" width={70} height={70} />
          <Image
            src={SYNC_BOARD_LOGO}
            alt="Collaboration"
            width={180}
            height={80}
          />
        </div>
        <div className="flex items-center gap-x-4">
          <Button
            onClick={() => router.push("/documents")}
            className="bg-indigo-500 hover:bg-opacity-40 hover:text-black font-semibold tracking-wider"
          >
            Your Documents
          </Button>
          <UserButton />
        </div>
      </div>
      {/* Main Content */}
      <main className="text-center px-6 relative z-10 max-w-3xl mx-auto">
        <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 via-blue-500 to-slate-600 text-transparent bg-clip-text">
          Welcome to Sync Board
        </h1>
        <p className="text-lg text-gray-600 mb-6 font-medium">
          A seamless, real-time collaborative document editor. Work together
          effortlessly, anytime, anywhere.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => router.push("/documents")}
            className="bg-indigo-500 font-semibold tracking-wide bg-opacity-50 hover:text-white text-slate-700 px-6 py-3 rounded-lg shadow-md flex items-center hover:bg-indigo-700 transition-all hover:bg-opacity-70"
          >
            Start Writing
            <ClipboardPen className="size-5 ml-2" />
          </button>
        </div>
      </main>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 flex flex-wrap gap-4 opacity-20">
        {Array.from({ length: 35 }).map((_, i) => (
          <div
            key={i}
            className="bg-blue-300 rounded-lg shadow-md shadow-slate-600"
            style={{
              width: `${Math.random() * 150 + 50}px`,
              height: `${Math.random() * 150 + 50}px`,
              transform: `rotate(${Math.random() * 20 - 10}deg)`,
              position: "absolute",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.7,
            }}
          />
        ))}
      </div>

      {/* Illustrative Image */}
      <div className="absolute bottom-10 right-10 lg:right-32 xl:right-56 z-0 opacity-50 rotate-12">
        <Image src={LOGO} alt="Collaboration" width={300} height={200} />
      </div>
      <div className="absolute top-10 right-10 lg:right-32 xl:right-56 z-0 opacity-50 rotate-12">
        <Image src={LOGO2} alt="Collaboration" width={300} height={200} />
      </div>
      <div className="absolute top-10 left-10 z-0 lg:left-32 xl:left-56 opacity-50 rotate-12">
        <Image src={LOGO3} alt="Collaboration" width={300} height={200} />
      </div>
      <div className="absolute bottom-10 left-10 z-0 lg:left-32 xl:left-56 opacity-50 rotate-12">
        <Image src={LOGO4} alt="Collaboration" width={300} height={200} />
      </div>
    </div>
  );
}
