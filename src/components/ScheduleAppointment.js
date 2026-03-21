// src/components/ScheduleAppointment.js
// ✅ Setup: Replace YOUR_FORM_ID with your Formspree form ID (https://formspree.io)
// Or swap the fetch call for any other form backend (EmailJS, Resend, etc.)
const FORMSPREE_ID = "YOUR_FORM_ID";

import { useState } from "react";

const services = [
  "Year End Outsourcing Accounting",
  "Management Accounts Outsourcing",
  "IXbrl Tagging Outsourcing",
  "Payroll Outsourcing",
  "CIS Return Outsourcing",
  "Bookkeeping Outsourcing",
  "VAT Return Outsourcing",
  "Personal Tax Return Outsourcing",
  "Corporation Tax Outsourcing",
  "Business Setup & Support Services",
  "Tax Registrations, Filings & Advisory Support",
  "Other / Not sure yet",
];

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM",
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
  "04:00 PM", "04:30 PM", "05:00 PM",
];

export default function ScheduleAppointment() {
  const today = new Date().toISOString().split("T")[0];

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTimeSelect = (slot) => {
    setForm({ ...form, time: slot });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.time) return alert("Please select a time slot.");
    setStatus("sending");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...form,
          subject: `Appointment Request: ${form.service} — ${form.date} at ${form.time}`,
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section id="schedule" className="bg-blue-50 py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-5xl mb-4">✅</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Appointment Requested!</h3>
          <p className="text-gray-600 mb-2">
            Thank you, <strong>{form.name}</strong>. We've received your request for{" "}
            <strong>{form.date}</strong> at <strong>{form.time}</strong>.
          </p>
          <p className="text-gray-500 text-sm">We&apos;ll confirm your appointment by email within a few hours.</p>
          <button
            onClick={() => { setStatus("idle"); setForm({ name: "", email: "", phone: "", company: "", service: "", date: "", time: "", notes: "" }); }}
            className="mt-6 text-sm text-blue-600 underline"
          >
            Book another appointment
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="schedule" className="bg-blue-50 py-16 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Schedule an Appointment</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Book a free consultation with our team. Pick your preferred date, time, and service — We&apos;ll confirm within a few hours.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-md p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Personal details */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <input
              type="text" name="name" value={form.name} onChange={handleChange} required
              placeholder="Your full name"
              className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
            <input
              type="email" name="email" value={form.email} onChange={handleChange} required
              placeholder="your@email.com"
              className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel" name="phone" value={form.phone} onChange={handleChange}
              placeholder="+44 7700 000000"
              className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company / Practice Name</label>
            <input
              type="text" name="company" value={form.company} onChange={handleChange}
              placeholder="Optional"
              className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Service selection */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Service Required *</label>
            <select
              name="service" value={form.service} onChange={handleChange} required
              className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
            >
              <option value="">Select a service...</option>
              {services.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date *</label>
            <input
              type="date" name="date" value={form.date} onChange={handleChange} required
              min={today}
              className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Time slots */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-3">Preferred Time *</label>
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
              {timeSlots.map((slot) => (
                <button
                  type="button"
                  key={slot}
                  onClick={() => handleTimeSelect(slot)}
                  className={`py-2 px-2 rounded-lg text-xs font-medium border transition ${
                    form.time === slot
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-600 border-gray-200 hover:border-blue-400 hover:text-blue-600"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
            {!form.time && (
              <p className="text-xs text-gray-400 mt-2">Please select a time slot above.</p>
            )}
          </div>

          {/* Notes */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
            <textarea
              name="notes" value={form.notes} onChange={handleChange} rows={3}
              placeholder="Anything you&apos;d like us to know before the call..."
              className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Error */}
          {status === "error" && (
            <div className="md:col-span-2">
              <p className="text-red-600 text-sm">Something went wrong. Please try again or email us at info@udaanllp.com</p>
            </div>
          )}

          {/* Submit */}
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-60"
            >
              {status === "sending" ? "Booking..." : "📅 Book Appointment"}
            </button>
            <p className="text-center text-xs text-gray-400 mt-3">
              We&apos;ll confirm your slot by email within a few hours. All consultations are free.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
