import { motion } from "framer-motion";
import { FaBook, FaBalanceScale, FaFileInvoiceDollar, FaUsers, FaUserTie, FaGlobe, FaTags, FaBuilding } from "react-icons/fa";

const serviceGroups = [
  {
    heading: "Accounting",
    color: "blue",
    icon: <FaBook />,
    services: [
      { title: "Year End Outsourcing Accounting", desc: "Accurate year-end accounts preparation and filing, handled with precision and on time." },
      { title: "Management Accounts Outsourcing", desc: "Regular management accounts to keep you informed and in control of your business." },
      { title: "IXbrl Tagging Outsourcing", desc: "Professional iXBRL tagging for Companies House and HMRC submissions." },
      { title: "Payroll Outsourcing", desc: "Complete payroll processing, payslips, statutory deductions, and reporting.", icon: <FaUsers /> },
      { title: "CIS Return Outsourcing", desc: "Accurate CIS returns and contractor/subcontractor compliance support." },
      { title: "Bookkeeping Outsourcing", desc: "Reliable day-to-day bookkeeping to keep your financial records clean and current." },
    ],
  },
  {
    heading: "Tax",
    color: "indigo",
    icon: <FaFileInvoiceDollar />,
    services: [
      { title: "VAT Return Outsourcing", desc: "End-to-end VAT return preparation, review, and filing to keep you compliant." },
      { title: "Personal Tax Return Outsourcing", desc: "Self-assessment tax returns prepared accurately with maximum allowable reliefs." },
      { title: "Corporation Tax Outsourcing", desc: "Corporation tax computations and CT600 filings handled efficiently and compliantly." },
    ],
  },
  {
    heading: "Company Secretarial",
    color: "violet",
    icon: <FaBuilding />,
    services: [
      { title: "Business Setup & Support Services", desc: "Company formations, registrations, and ongoing secretarial compliance support." },
      { title: "Tax Registrations, Filings & Advisory Support", desc: "HMRC registrations, statutory filings, and expert advisory for your business." },
    ],
  },
];

const colorMap = {
  blue: {
    group: "bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800",
    heading: "text-blue-700 dark:text-blue-300",
    icon: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300",
    card: "hover:border-blue-200 dark:hover:border-blue-700",
    dot: "bg-blue-500",
  },
  indigo: {
    group: "bg-indigo-50 dark:bg-indigo-900/20 border-indigo-100 dark:border-indigo-800",
    heading: "text-indigo-700 dark:text-indigo-300",
    icon: "bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300",
    card: "hover:border-indigo-200 dark:hover:border-indigo-700",
    dot: "bg-indigo-500",
  },
  violet: {
    group: "bg-violet-50 dark:bg-violet-900/20 border-violet-100 dark:border-violet-800",
    heading: "text-violet-700 dark:text-violet-300",
    icon: "bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-300",
    card: "hover:border-violet-200 dark:hover:border-violet-700",
    dot: "bg-violet-500",
  },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 lg:px-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3 block">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            End-to-end accounting, tax, and compliance outsourcing — tailored to help international businesses grow with confidence.
          </p>
        </motion.div>

        <div className="space-y-12">
          {serviceGroups.map((group, gi) => {
            const c = colorMap[group.color];
            return (
              <motion.div
                key={group.heading}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.1, duration: 0.6 }}
              >
                {/* Group header */}
                <div className="flex items-center gap-3 mb-5">
                  <span className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm ${c.icon}`}>
                    {group.icon}
                  </span>
                  <h3 className={`text-xl font-bold ${c.heading}`}>{group.heading}</h3>
                  <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800 ml-2" />
                </div>

                {/* Cards */}
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                >
                  {group.services.map((svc) => (
                    <motion.div
                      key={svc.title}
                      variants={item}
                      className={`bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-5 ${c.card} hover:shadow-md transition-all cursor-default`}
                    >
                      <div className="flex items-start gap-2 mb-2">
                        <span className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${c.dot}`} />
                        <h4 className="text-gray-800 dark:text-gray-100 font-semibold text-sm leading-snug">{svc.title}</h4>
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed pl-4">{svc.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
