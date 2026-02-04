"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      <div className="flex justify-start w-full h-150 bg-[url(/resumethumb2.jpg)] bg-right">
        <div className="flex flex-col justify-center items-start w-125 text-black gap-4 p-10 ml-70">
          <h1 className="text-5xl/16 font-bold">
            Stand out with professional custom resumes
          </h1>
          <p className="text-base/8">
            Let your qualifications shine with an exceptional CV, designed with
            ease and made to stand out from the crowd.
          </p>
          <Link href="/design">
            <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
