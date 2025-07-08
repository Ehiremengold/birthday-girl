import "./App.css";
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import image1 from "./assets/images/1.jpg";
import image2 from "./assets/images/2.jpg";
import image3 from "./assets/images/3.jpg";
import image4 from "./assets/images/4.jpg";

function App() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const updateSize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const images = [image1, image2, image3, image4];

  return (
    <main className="font-poppins min-h-screen flex flex-col items-center justify-center px-4 py-10 text-center space-y-8">
      <section className="max-w-3xl space-y-6 w-full">
        <h1 className="text-4xl sm:text-6xl font-bold text-pink-600">
          🎉 Happy Birthday Onaopemipo! 🎂
        </h1>
        <p className="text-lg sm:text-xl text-gray-700">
          Today is all about you, my love. Every day with you is a blessing. I'm
          grateful for you and I thank God sincerely for your life💖. May this
          new year bring you unmatched joy, love, and success.
        </p>
        <div className="w-full max-w-2xl aspect-[4/3] mx-auto rounded-3xl overflow-hidden shadow-2xl border-2 border-white backdrop-blur-lg">
          <Swiper
            modules={[Autoplay, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            loop={true}
            effect="fade"
            className="w-full h-full"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full">
                  <img
                    src={src}
                    alt={`Onaopemipo ${index + 1}`}
                    className="w-full h-full object-cover object-top transition-transform duration-1000 ease-in-out hover:scale-105"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <blockquote className="italic text-pink-500 font-medium text-lg">
          “You are altogether beautiful, my darling; there is no flaw in you.” —
          Song of Solomon 4:7
        </blockquote>
        <footer className="pt-8 text-sm text-gray-400">
          Made with ❤️ by your forever fan.
        </footer>
      </section>
    </main>
  );
}

export default App;
