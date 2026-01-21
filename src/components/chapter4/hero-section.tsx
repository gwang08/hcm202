"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const FloatingStars = dynamic(
  () => import("@/components/three/floating-stars").then((mod) => mod.FloatingStars),
  { ssr: false }
);

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-700 via-red-600 to-red-800" />
      </div>

      {/* 3D Floating Stars */}
      <FloatingStars />

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-amber-400 via-yellow-500 to-amber-400 z-20" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Chapter label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <div className="w-16 h-px bg-amber-400" />
              <span className="text-amber-300 text-sm font-semibold tracking-[0.2em] uppercase">
                Chương IV
              </span>
            </motion.div>

            {/* Main title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white leading-tight mb-8"
            >
              <span className="block text-4xl md:text-5xl lg:text-6xl font-light mb-2">
                Tư tưởng
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl font-bold text-amber-400">
                Hồ Chí Minh
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-light text-red-100 mt-4">
                về Đảng Cộng sản Việt Nam
              </span>
            </motion.h1>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-32 h-1 bg-amber-400 mb-8 origin-left mx-auto lg:mx-0"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-white/90 font-light mb-12"
            >
              Nhà nước{" "}
              <span className="font-semibold text-amber-300">của Dân</span>,{" "}
              <span className="font-semibold text-amber-300">do Dân</span>,{" "}
              <span className="font-semibold text-amber-300">vì Dân</span>
            </motion.p>

            {/* Key points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3"
            >
              {["Trong sạch", "Vững mạnh", "Vì nhân dân"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium"
                >
                  <span className="text-amber-400 text-xs">◆</span>
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Frame decoration */}
              <div className="absolute -inset-3 border-2 border-amber-400/30" />
              <div className="absolute -inset-6 border border-white/10" />

              {/* Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Ho_Chi_Minh_1946.jpg"
                alt="Chủ tịch Hồ Chí Minh"
                className="w-64 md:w-72 lg:w-80 h-auto object-cover"
              />

              {/* Caption */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-amber-500 text-white px-4 py-2 text-sm font-medium whitespace-nowrap">
                Chủ tịch Hồ Chí Minh
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
