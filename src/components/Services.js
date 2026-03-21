// src/components/Services.js
const serviceGroups = [
  {
    heading: "Accounting",
    color: "blue",
    icon: "📒",
    services: [
      { title: "Year End Outsourcing Accounting", desc: "Accurate year-end accounts preparation and filing, handled with precision and on time." },
      { title: "Management Accounts Outsourcing", desc: "Regular management accounts to keep you informed and in control of your business." },
      { title: "IXbrl Tagging Outsourcing", desc: "Professional iXBRL tagging for Companies House and HMRC submissions." },
      { title: "Payroll Outsourcing", desc: "Complete payroll processing, payslips, statutory deductions, and reporting." },
      { title: "CIS Return Outsourcing", desc: "Accurate CIS returns and contractor/subcontractor compliance support." },
      { title: "Bookkeeping Outsourcing", desc: "Reliable day-to-day bookkeeping to keep your financial records clean and current." },
    ],
  },
  {
    heading: "Tax",
    color: "indigo",
    icon: "🧾",
    services: [
      { title: "VAT Return Outsourcing", desc: "End-to-end VAT return preparation, review, and filing to keep you compliant." },
      { title: "Personal Tax Return Outsourcing", desc: "Self-assessment tax returns prepared accurately with maximum allowable reliefs." },
      { title: "Corporation Tax Outsourcing", desc: "Corporation tax computations and CT600 filings handled efficiently and compliantly." },
    ],
  },
  {
    heading: "Company Secretarial",
    color: "violet",
    icon: "🏢",
    services: [
      { title: "Business Setup & Support Services", desc: "Company formations, registrations, and ongoing secretarial compliance support." },
      { title: "Tax Registrations, Filings & Advisory Support", desc: "HMRC registrations, statutory filings, and expert advisory for your business." },
    ],
  },
];

const colorMap = {
  blue: {
    badge: "bg-blue-100 text-blue-700",
    icon: "bg-blue-50 text-blue-600",
    border: "border-blue-100",
    heading: "text-blue-700",
    dot: "bg-blue-500",
  },
  indigo: {
    badge: "bg-indigo-100 text-indigo-700",
    icon: "bg-indigo-50 text-indigo-600",
    border: "border-indigo-100",
    heading: "text-indigo-700",
    dot: "bg-indigo-500",
  },
  violet: {
    badge: "bg-violet-100 text-violet-700",
    icon: "bg-violet-50 text-violet-600",
    border: "border-violet-100",
    heading: "text-violet-700",
    dot: "bg-violet-500",
  },
};

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          End-to-end accounting, tax, and compliance outsourcing — tailored to help businesses grow with confidence.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-14">
        {serviceGroups.map((group) => {
          const c = colorMap[group.color];
          return (
            <div key={group.heading}>
              {/* Group header */}
              <div className="flex items-center gap-3 mb-6">
                <span className={`text-2xl w-10 h-10 flex items-center justify-center rounded-lg ${c.icon}`}>
                  {group.icon}
                </span>
                <h3 className={`text-xl font-bold ${c.heading}`}>{group.heading}</h3>
                <div className="flex-1 h-px bg-gray-200 ml-2" />
              </div>

              {/* Service cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {group.services.map((svc) => (
                  <div
                    key={svc.title}
                    className={`bg-white rounded-xl p-5 border ${c.border} hover:shadow-md transition`}
                  >
                    <div className="flex items-start gap-2 mb-2">
                      <span className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${c.dot}`} />
                      <h4 className="text-gray-800 font-semibold text-sm leading-snug">{svc.title}</h4>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed pl-4">{svc.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
