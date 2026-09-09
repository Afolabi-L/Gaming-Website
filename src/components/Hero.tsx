import { useState } from "react";

import { useState } from "react";

const heroVideos:string[] = [
  "/videos/hero1.mp4",
  "/videos/hero-2.mp4",
  "/videos/hero-3.mp4",
  "/videos/hero-4.mp4",
];

const [currentIndex, setCurrentIndex] = useState(0);

function Hero() {
    return (
      <section className="relative w-full h-screen overflow-hidden text-white">
        <div className="w-full h-full relative">
          <video
            loop
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/hero1.mp4" type="video/mp4" />
          </video>

          <div className="z-1 absolute top-20 left-12.5 ">
            <h1 className="text-8xl font-impact font-black not-italic mb-5">
              REDFINE
            </h1>
            <p className="max-w-52 mb-2.5 font-arial-helvetica">
              Enter the metagame Layer Unleash the Play Economy
            </p>
            <button className="bg-[#edff66] border-2 border-[#edff66] py-2.5 px-10 rounded-3xl cursor-pointer text-black font-arial-helvetica font-normal hover:bg-transparent transition duration-300 hover:text-white hover:shadow-[0_0_15px_#edff66]">
              Watch Trailer
            </button>
          </div>

          <h1 className="text-8xl font-impact m-0 absolute right-5 bottom-7.5">
            Gaming
          </h1>
            <button className="w-50 h-50 bg-[#edff66b6] absolute left-[45%] bottom-[45%] rounded-[50%] flex items-center justify-center text-black text-3xl font-bold cursor-pointer z-100 opacity-0 transition duration-500 ease-in-out hover:opacity-100 hover:shadow-[0_0_15px_rgba(255,255,255,0.616)]"
            onClick={() => setCurrentIndex((prev) => (prev + 1) % heroVideos.length)}
          >
            NEXT
          </button>
        </div>
      </section>
    );
}

export default Hero