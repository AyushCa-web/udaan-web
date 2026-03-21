import { motion } from "framer-motion";

const pillars = [
  { emoji: "🌍", title: "Vision", text: "To give businesses the wings to grow by taking away the burden of accounting and compliance." },
  { emoji: "🎯", title: "Mission", text: "To combine technology with financial expertise to deliver smarter, faster, and more cost-efficient outsourcing solutions." },
  { emoji: "💪", title: "Strengths", list: ["100+ satisfied customers", "7+ years of client retention", "50+ team of experts", "Serving 4+ countries"] },
];

export default function WhyUs() {
  return (
    <section id="about" className="py-20 px-6 lg:px-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Who We Are</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Udaan</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            At <span className="font-semibold text-blue-600 dark:text-blue-400">Udaan</span>, we accelerate business growth by empowering companies with best-in-class offshore talent and technology-driven accounting solutions. Since 2016, we&apos;ve partnered with 100+ clients worldwide.
          </p>
          <p className="italic text-blue-700 dark:text-blue-300 font-medium mt-4">&ldquo;Take Finance Ahead, Take Udaan.&rdquo;</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-7">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-7 hover:shadow-md transition"
            >
              <div className="text-3xl mb-4">{p.emoji}</div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">{p.title}</h3>
              {p.text && <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{p.text}</p>}
              {p.list && (
                <ul className="space-y-2">
                  {p.list.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <span className="text-blue-500">✓</span> {item}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
