import { motion } from "framer-motion";
import { HiArrowRight, HiTrendingUp } from "react-icons/hi";

const cases = [
  {
    flag: "🇺🇸",
    country: "USA",
    type: "CPA Firm",
    headline: "40% Cost Reduction in 3 Months",
    challenge: "A mid-size US CPA firm was struggling with capacity during tax season, spending too much on in-house staff.",
    solution: "Udaan provided a dedicated team of 5 offshore accountants handling bookkeeping and tax prep.",
    results: ["40% reduction in operating costs", "3x faster turnaround on tax filings", "Zero compliance issues"],
    color: "blue",
  },
  {
    flag: "🇬🇧",
    country: "UK",
    type: "Accounting Firm",
    headline: "Bookkeeping Scaled 5x in 6 Months",
    challenge: "A fast-growing UK SaaS startup needed to scale finance operations without ballooning headcount.",
    solution: "Udaan took over all bookkeeping, VAT returns, and payroll, integrating directly with their Xero setup.",
    results: ["5x bookkeeping volume handled", "100% VAT filing accuracy", "Saved £80K annually vs. local hires"],
    color: "indigo",
  },
  {
    flag: "🇦🇺",
    country: "Australia",
    type: "Accounting Practice",
    headline: "Year-End Backlog Cleared in 2 Weeks",
    challenge: "An Australian accounting practice faced a mounting year-end backlog with no capacity to take on new clients.",
    solution: "Udaan deployed an iXBRL tagging and year-end accounts team that integrated within days.",
    results: ["200+ accounts completed on time", "New client intake increased 30%", "Partner capacity freed by 60%"],
    color: "violet",
  },
];

const colorMap = {
  blue: { badge: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300", border: "border-blue-200 dark:border-blue-800", dot: "text-blue-500" },
  indigo: { badge: "bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300", border: "border-indigo-200 dark:border-indigo-800", dot: "text-indigo-500" },
  violet: { badge: "bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300", border: "border-violet-200 dark:border-violet-800", dot: "text-violet-500" },
};

export default function CaseStudies() {
  return (
    <section id="cases" className="py-20 px-6 lg:px-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Proven Results</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Client Success Stories</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Real outcomes from real partnerships across the UK, USA, and Australia.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-7">
          {cases.map((c, i) => {
            const col = colorMap[c.color];
            return (
              <motion.div
                key={c.headline}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className={`bg-white dark:bg-gray-900 rounded-2xl border ${col.border} p-6 hover:shadow-lg transition-all flex flex-col`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{c.flag}</span>
                  <div>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${col.badge}`}>{c.type}</span>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{c.country}</p>
                  </div>
                </div>

                {/* Headline */}
                <div className="flex items-start gap-2 mb-3">
                  <HiTrendingUp className={`w-5 h-5 flex-shrink-0 mt-0.5 ${col.dot}`} />
                  <h3 className="text-gray-900 dark:text-white font-bold text-base leading-snug">{c.headline}</h3>
                </div>

                {/* Challenge + Solution */}
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 leading-relaxed"><span className="font-medium text-gray-700 dark:text-gray-300">Challenge: </span>{c.challenge}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 leading-relaxed"><span className="font-medium text-gray-700 dark:text-gray-300">Solution: </span>{c.solution}</p>

                {/* Results */}
                <div className="mt-auto border-t border-gray-100 dark:border-gray-800 pt-4">
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Results</p>
                  <ul className="space-y-1">
                    {c.results.map((r) => (
                      <li key={r} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <span className="text-green-500">✓</span> {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
