import { useEffect, useRef, useState } from "react";
import { HiArrowRight, HiPlay } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: 100, suffix: "+", label: "Global Clients" },
  { value: 8, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "%", label: "Cost Savings" },
  { value: 50, suffix: "+", label: "Team Size" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Hero() {
  const [counted, setCounted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCounted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400 rounded-full filter blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400 rounded-full filter blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left content */}
          <div>
            <motion.div
              initial="hidden" animate="visible" custom={0} variants={fadeUp}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-200 text-xs font-medium px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Trusted by 100+ businesses since 2016
            </motion.div>

            <motion.h1
              initial="hidden" animate="visible" custom={1} variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Scale Globally with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400">
                Offshore Talent
              </span>{" "}
              Excellence
            </motion.h1>

            <motion.p
              initial="hidden" animate="visible" custom={2} variants={fadeUp}
              className="text-lg text-blue-100/80 mb-8 leading-relaxed max-w-xl"
            >
              At <span className="text-white font-semibold">Udaan</span>, we empower businesses worldwide with technology-driven offshore accounting — helping you focus on growth while we handle the numbers.
            </motion.p>

            <motion.p
              initial="hidden" animate="visible" custom={3} variants={fadeUp}
              className="italic text-blue-200/70 text-sm mb-8"
            >
              Take Finance Ahead, Take Udaan.
            </motion.p>

            <motion.div
              initial="hidden" animate="visible" custom={4} variants={fadeUp}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollTo("schedule")}
                className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-yellow-400/30 hover:scale-105"
              >
                Free Strategy Call <HiArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="flex items-center gap-2 border border-white/30 hover:border-white/60 text-white px-7 py-3.5 rounded-xl transition-all hover:bg-white/10"
              >
                <HiPlay className="w-4 h-4" /> Explore Services
              </button>
            </motion.div>
          </div>

          {/* Right: finance dashboard illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <Image
                src="/udaan-web/finance.svg"
                alt="Finance dashboard illustration"
                width={520}
                height={420}
                className="w-full max-w-[520px] drop-shadow-2xl"
                priority
              />
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-green-400 text-green-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg animate-bounce">
                50% Cost Savings
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          ref={ref}
          initial="hidden" animate="visible" custom={5} variants={fadeUp}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/15 transition"
            >
              <div className="text-3xl font-bold text-white mb-1">
                {counted ? (
                  <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <div className="text-blue-200/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
