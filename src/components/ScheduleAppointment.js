import { useState } from "react";

const FORMSPREE_ID = "YOUR_FORM_ID";

const services = [
  "Year End Outsourcing Accounting", "Management Accounts Outsourcing",
  "IXbrl Tagging Outsourcing", "Payroll Outsourcing", "CIS Return Outsourcing",
  "Bookkeeping Outsourcing", "VAT Return Outsourcing", "Personal Tax Return Outsourcing",
  "Corporation Tax Outsourcing", "Business Setup & Support Services",
  "Tax Registrations, Filings & Advisory Support", "Other / Not sure yet",
];

const timeSlots = [
  "09:00 AM","09:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM","12:00 PM",
  "02:00 PM","02:30 PM","03:00 PM","03:30 PM","04:00 PM","04:30 PM","05:00 PM",
];

export default function ScheduleAppointment() {
  const today = new Date().toISOString().split("T")[0];
  const [form, setForm] = useState({ name:"", email:"", phone:"", company:"", service:"", date:"", time:"", notes:"" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.time) return alert("Please select a time slot.");
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, subject: `Appointment: ${form.service} — ${form.date} at ${form.time}` }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch { setStatus("error"); }
  };

  if (status === "success") return (
    <section id="schedule" className="py-20 px-6 bg-blue-50 dark:bg-gray-950">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Appointment Requested!</h3>
        <p className="text-gray-500 dark:text-gray-400">We&apos;ll confirm your slot at <strong>{form.date}</strong> at <strong>{form.time}</strong> within a few hours.</p>
        <button onClick={() => { setStatus("idle"); setForm({ name:"",email:"",phone:"",company:"",service:"",date:"",time:"",notes:"" }); }} className="mt-5 text-sm text-blue-600 dark:text-blue-400 underline">Book another</button>
      </div>
    </section>
  );

  return (
    <section id="schedule" className="py-20 px-6 lg:px-20 bg-blue-50 dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Book a Call</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">Schedule an Appointment</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Pick your preferred date and time for a free 30-minute strategy call with our team.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: "Full Name *", name: "name", type: "text", placeholder: "Your full name", required: true },
            { label: "Email Address *", name: "email", type: "email", placeholder: "your@email.com", required: true },
            { label: "Phone Number", name: "phone", type: "tel", placeholder: "+44 7700 000000" },
            { label: "Company / Practice Name", name: "company", type: "text", placeholder: "Optional" },
          ].map((f) => (
            <div key={f.name}>
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wide">{f.label}</label>
              <input type={f.type} name={f.name} value={form[f.name]} onChange={handleChange} required={f.required} placeholder={f.placeholder}
                className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-sm text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>
          ))}

          <div className="md:col-span-2">
            <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wide">Service Required *</label>
            <select name="service" value={form.service} onChange={handleChange} required
              className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-sm text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option value="">Select a service...</option>
              {services.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wide">Preferred Date *</label>
            <input type="date" name="date" value={form.date} onChange={handleChange} required min={today}
              className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-sm text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">Preferred Time *</label>
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
              {timeSlots.map((slot) => (
                <button type="button" key={slot} onClick={() => setForm({ ...form, time: slot })}
                  className={`py-2 px-1 rounded-lg text-xs font-medium border transition ${
                    form.time === slot ? "bg-blue-600 text-white border-blue-600" : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-blue-400"
                  }`}>
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wide">Additional Notes</label>
            <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} placeholder="Anything you'd like us to know..."
              className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-sm text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          </div>

          {status === "error" && <div className="md:col-span-2"><p className="text-red-500 text-sm">Something went wrong. Please email info@udaanllp.com</p></div>}

          <div className="md:col-span-2">
            <button type="submit" disabled={status === "sending"}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all disabled:opacity-60">
              {status === "sending" ? "Booking..." : "📅 Book Appointment"}
            </button>
            <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-3">Free 30-minute consultation · We confirm within a few hours</p>
          </div>
        </form>
      </div>
    </section>
  );
}
