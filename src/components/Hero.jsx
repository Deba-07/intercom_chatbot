import React from "react";

function Hero() {
  return (
    <main className="relative flex flex-col items-center text-center px-4 sm:px-6 md:px-10 pt-10 pb-20 max-w-full w-full">
      
      {/* Logo */}
      <img
        alt="Company logo white abstract shape centered"
        className="mb-4 w-12 h-12"
        height={48}
        width={48}
        src="https://storage.googleapis.com/a1aa/image/f904b226-2553-449e-2348-804b768cb501.jpg"
      />

      {/* Headline */}
      <h1
        className="text-white font-serif font-normal leading-[1.1] max-w-5xl text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem]"
        style={{ fontFeatureSettings: "'liga' 0" }}
      >
        The #1 AI agent
        <br />
        for customer service
      </h1>

      {/* Subheadline */}
      <div
        className="flex flex-wrap justify-center gap-4 text-[0.65rem] sm:text-[0.75rem] font-mono font-normal uppercase mt-4 max-w-4xl text-white"
        style={{ letterSpacing: "0.1em" }}
      >
        <span>#1 in performance benchmarks</span>
        <span>#1 in competitive bake-offs</span>
        <span>#1 ranking on G2</span>
      </div>

      {/* CTA Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <button className="bg-white text-black rounded-md px-6 py-2 text-sm sm:text-base font-normal">
          Start free trial
        </button>
        <button className="border border-white rounded-md px-6 py-2 text-sm sm:text-base font-normal text-white hover:bg-white hover:text-black transition">
          View demo
        </button>
      </div>

      {/* Client Logos / Names */}
      <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mt-20 max-w-5xl w-full px-4 sm:px-0">
        <span className="text-white font-semibold opacity-50 hover:opacity-100 cursor-default select-none">
          Amplitude
        </span>
        <span className="text-white font-bold opacity-90 hover:opacity-100 cursor-default select-none">
          Moneybox
        </span>
        <span
          className="text-white font-mono opacity-40 hover:opacity-100 cursor-default select-none line-through"
        >
          Shutterstock
        </span>
        <span className="text-white font-semibold opacity-90 hover:opacity-100 cursor-default select-none">
          Synthesia
        </span>
        <span
          className="text-white font-mono opacity-40 hover:opacity-100 cursor-default select-none line-through"
        >
          Lovable
        </span>
      </div>
    </main>
  );
}

export default Hero;
