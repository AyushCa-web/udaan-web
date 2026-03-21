import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const testimonials = [
  { author: "CEO, US Tech Firm", location: "New York, USA", flag: "🇺🇸", quote: "Udaan completely transformed our finance operations. Their offshore team integrates seamlessly with our processes — it feels like they are part of our own company. Highly recommended." },
  { author: "CFO, SaaS Startup", location: "London, UK", flag: "🇬🇧", quote: "We scaled our bookkeeping 5x without adding a single in-house headcount. The accuracy and turnaround time from Udaan is genuinely impressive. A real competitive advantage." },
  { author: "Director, Accountancy Practice", location: "Manchester, UK", flag: "🇬🇧", quote: "During our busiest January deadline period, Udaan stepped in and handled our backlog with zero errors. Their team understood our workflow within days. Outstanding service." },
  { author: "Managing Partner, CPA Firm", location: "Sydney, Australia", flag: "🇦🇺", quote: "The quality of work we receive is client-ready straight away. Udaan saves us significant time and cost. Their communication and responsiveness sets them apart from other providers." },
  { author: "Finance Director", location: "Toronto, Canada", flag: "🇨🇦", quote: "After working with several outsourcing providers, Udaan truly stands out. They are skilled, proactive, and deeply understand accounting. We are very satisfied with the partnership." },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -60 : 60, transition: { duration: 0.3 } }),
  };

  const t = testimonials[index];

  return (
    <section id="testimonials" className="py-20 px-6 lg:px-20 bg-blue-950 dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-3 block">Social Proof</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-blue-200/60 max-w-xl mx-auto">
            Trusted by accounting practices and businesses across the UK, USA, Australia, and India.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative bg-white/5 border border-white/10 rounded-3xl p-10 md:p-14 overflow-hidden">
          {/* Big quote mark */}
          <div className="absolute top-6 left-8 text-8xl text-white/5 font-serif select-none leading-none">"</div>

          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {/* Stars */}
              <div className="text-yellow-400 text-xl mb-6">★★★★★</div>

              {/* Quote */}
              <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold text-lg">
                  {t.flag}
                </div>
                <div>
                  <p className="text-white font-semibold">{t.author}</p>
                  <p className="text-blue-300/70 text-sm">{t.location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                  className={`w-2 h-2 rounded-full transition-all ${i === index ? "bg-yellow-400 w-6" : "bg-white/30 hover:bg-white/50"}`}
                />
              ))}
            </div>
            {/* Arrows */}
            <div className="flex gap-2">
              <button onClick={() => go(-1)} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition">
                <HiChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => go(1)} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition">
                <HiChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust line */}
        <p className="text-center text-blue-300/40 text-xs mt-6 italic">
          Names withheld to maintain client confidentiality.
        </p>
      </div>
    </section>
  );
}
