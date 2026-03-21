// src/components/Testimonials.js
const testimonials = [
  {
    author: "Accountancy Practice, London (UK)",
    text: "Working with the Udaan team has been a great experience. They are reliable, proactive, and always ready to go the extra mile to meet deadlines. Udaan has become a trusted partner for our outsourcing needs, and we truly value the quality and consistency of their work.",
  },
  {
    author: "Accountancy Practice, Birmingham (UK)",
    text: "Even in a short time, working with Udaan has been a very positive experience. Their team supported our growth by handling key accounting and bookkeeping tasks smoothly. They are responsive, flexible, and easy to work with. We're very happy with the partnership so far.",
  },
  {
    author: "Accountancy Practice, Manchester (UK)",
    text: "Udaan understood our systems and working style very quickly, which made a big difference during the busy January deadline. Their professional and dependable support helped us deliver work on time without stress. We now feel confident taking on new clients and growing our practice.",
  },
  {
    author: "Accountancy Practice, Sydney (Australia)",
    text: "The quality of work we receive from Udaan is excellent and ready for client meetings straight away. They are friendly, easy to approach, and provide a truly personal service with clear communication. We are very happy with the reliable support.",
  },
  {
    author: "Business, New York (USA)",
    text: "After working with several outsourcing firms, Udaan truly stands out. The team is skilled, proactive, and a pleasure to work with. We're very satisfied with their support and would happily recommend Udaan to others looking for finance and accounting help.",
  },
  {
    author: "CPA Firm, Toronto (Canada)",
    text: "Udaan's expertise in cross-border compliance has been invaluable for our Indian expansion. Their turnaround times are impressive and the accuracy of their work is consistently high. A genuinely dependable outsourcing partner.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Client Testimonials</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Trusted by accounting practices and businesses across the UK, USA, Australia, and India for reliable, accurate, and confidential outsourcing support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-100 rounded-xl p-6 hover:shadow-md transition flex flex-col"
            >
              <div className="text-blue-200 text-5xl font-serif leading-none mb-3 select-none">"</div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">{t.text}</p>
              <div className="border-t border-gray-200 pt-4">
                <div className="text-yellow-400 text-sm mb-1">★★★★★</div>
                <p className="text-gray-800 font-semibold text-sm">{t.author}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm italic">
            All testimonials are from real clients. Names withheld to maintain confidentiality.
          </p>
        </div>
      </div>
    </section>
  );
}
