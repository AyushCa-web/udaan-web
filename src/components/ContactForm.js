// ✅ SETUP INSTRUCTIONS:
// 1. Go to https://emailjs.com and create a free account
// 2. Create an Email Service (Gmail, Outlook, etc.) → copy Service ID
// 3. Create an Email Template → copy Template ID
// 4. Get your Public Key from Account → API Keys
// 5. Replace the three constants below

import { useForm } from "react-hook-form";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { HiMail, HiPhone, HiOfficeBuilding, HiChat } from "react-icons/hi";

const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const challenges = [
  "Scaling my accounting team",
  "Reducing finance costs",
  "Tax & compliance support",
  "Payroll management",
  "Year-end accounts backlog",
  "Setting up in India",
  "Other",
];

const teamSizes = ["1–5", "6–20", "21–50", "51–200", "200+"];

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [status, setStatus] = useState("idle");

  const onSubmit = async (data) => {
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          company: data.company,
          role: data.role,
          team_size: data.team_size,
          challenge: data.challenge,
          message: data.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 lg:px-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-start">

        {/* Left info */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Start Your Free Consultation</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
            Tell us your requirements and we&apos;ll get back to you within 24 hours with a tailored proposal.
          </p>

          <div className="space-y-5">
            {[
              { icon: <HiMail className="w-5 h-5" />, label: "Email us", value: "info@udaanllp.com" },
              { icon: <HiPhone className="w-5 h-5" />, label: "WhatsApp", value: "+91 XXXXX XXXXX" },
              { icon: <HiOfficeBuilding className="w-5 h-5" />, label: "Based in", value: "India · Serving UK, USA, Australia & more" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wide">{item.label}</p>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="mt-10 grid grid-cols-3 gap-4">
            {["100+ Clients", "8+ Years", "24/7 Support"].map((badge) => (
              <div key={badge} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                <p className="text-blue-700 dark:text-blue-300 font-bold text-sm">{badge}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right form */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {status === "success" ? (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-10 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-2">Message Sent!</h3>
              <p className="text-green-700 dark:text-green-400">We&apos;ll be in touch within 24 hours.</p>
              <button onClick={() => setStatus("idle")} className="mt-5 text-sm text-blue-600 dark:text-blue-400 underline">
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 space-y-5"
            >
              {/* Name + Email */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wide">Name *</label>
                  <input
                    {...register("name", { required: true })}
                    placeholder="Your name"
                    className={`w-full bg-white dark:bg-gray-700 border ${errors.name ? "border-red-400" : "border-gray-200 dark:border-gray-600"} rounded-lg p-3 text-sm text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none`}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wide">Email *</label>
                  <input
                    {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                    type="email"
                    placeholder="your@email.com"
                    className={`w-full bg-white dark:bg-gray-700 border ${errors.email ? "border-red-400" : "border-gray-200 dark:border-gray-600"} rounded-lg p-3 text-sm text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none`}
                  />
                </div>
              </div>

              {/* Company + Role */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wide">Company</label>
                  <input
                    {...register("company")}
                    placeholder="Company name"
                    className="w-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-3 text-sm text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wide">Your Role</label>
                  <input
                    {...register("role")}
                    placeholder="CEO, CFO, Partner..."
                    className="w-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-3 text-sm text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Team size + Challenge */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wide">Team Size</label>
                  <select
                    {...register("team_size")}
                    className="w-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-3 text-sm text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="">Select...</option>
                    {teamSizes.map((s) => <option key={s} value={s}>{s} employees</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wide">Main Challenge</label>
                  <select
                    {...register("challenge")}
                    className="w-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-3 text-sm text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="">Select...</option>
                    {challenges.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wide">Message</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder="Tell us more about your requirements..."
                  className="w-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-3 text-sm text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-red-500 text-sm">Something went wrong. Please email us at info@udaanllp.com</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-sm hover:shadow-md disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message →"}
              </button>
              <p className="text-center text-xs text-gray-400 dark:text-gray-500">
                100% confidential · We respond within 24 hours
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
