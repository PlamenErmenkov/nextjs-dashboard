"use client";

import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { lusitana } from "./ui/fonts";
import Image from "next/image";

import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Page() {
  return (
    // <main className="flex min-h-screen flex-col p-6">
    //   <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-300 p-4 md:h-52">
    //     <AcmeLogo />
    //   </div>
    //   <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
    //     <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
    //       <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black" />
    //       <p
    //         className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
    //       >
    //         <strong>Welcome to Acme.</strong> This is the example for the{" "}
    //         <a href="https://nextjs.org/learn/" className="text-blue-300">
    //           Next.js Learn Course
    //         </a>
    //         , brought to you by Vercel.
    //       </p>
    //       <Link
    //         href="/login"
    //         className="flex items-center gap-5 self-start rounded-lg bg-purple-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-purple-400 md:text-base"
    //       >
    //         <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
    //       </Link>
    //     </div>
    //     <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
    //       {/* Add Hero Images Here */}
    //       <Image
    //         src="/hero-desktop.png"
    //         width={1000}
    //         height={760}
    //         alt="Screenshots of the dashboard project showing desktop version"
    //         className="hidden md:block"
    //       ></Image>
    //       <Image
    //       src='/hero-mobile.png'
    //       width={560}
    //       height={620}
    //       alt="Mobile image"
    //       className="block md:hidden"
    //       ></Image>
    //     </div>
    //   </div>
    // </main>

    <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center relative w-full">
      <h1 className="flex-row md:flex-row z-10 text-3xl md:text-7xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
        Dashboard App
      </h1>
      <Link href="/login">
        <button className="z-20 m-6 relative inline-flex w-16 h-8 md:w-24 md:h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm md:text-xl font-medium text-white backdrop-blur-3xl">
            Login
          </span>
        </button>
      </Link>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
