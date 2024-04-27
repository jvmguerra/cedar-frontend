import React from 'react';
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="flex flex-col items-center">
        <Image
          src="/full-logo.svg"
          alt="Cedar Logo"
          className=""
          width={126}
          height={32}
        />
        <p className="text-cedar-blue text-2xl font-bold leading-7 font-arial mt-7 mb-6">Welcome to the user management page</p>
      </div>
    </main>
  );
}
