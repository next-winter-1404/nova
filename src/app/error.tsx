"use client";

import serverDown from "@/src/assets/icons/errors/serverDown.svg";
import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";

interface IErrorProp {
  error: any;
  reset: () => void;
}

export default function Error({ error, reset }: IErrorProp) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="relative flex items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b]">
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[300px] h-[300px] bg-cyan-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col gap-8 lg:gap-4 items-center w-full"
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="lg:-mb-8 mt-8" 
        >
          <Image
            src={serverDown}
            alt="error icon"
            width={320}
            height={320}
            priority
            className="lg:w-[450px] lg:h-[450px] " 
          />
        </motion.div>

        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-4xl font-black text-white "> 
            خطایی رخ داد
          </h1>

          <p className="max-w-md text-sm text-gray-300 md:text-[20px]">
            در حال حاضر امکان اتصال به سرور وجود ندارد.
            <br />
            لطفاً چند لحظه دیگر مجدداً تلاش کنید.
          </p>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => reset()}
            className="px-6 py-3 text-sm font-semibold transition-all rounded-xl bg-primary-accent-green cursor-pointer"
          >
            تلاش دوباره
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/"
            className="px-6 py-3 text-sm font-semibold text-white border rounded-xl border-white/10 bg-white/5"
          >
            صفحه اصلی
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}