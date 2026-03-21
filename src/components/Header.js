//import Image from "next/image";
//
//export default function Header() {
//  return (
//    <header className="bg-gradient-to-r from-blue-800 to-indigo-700 text-white py-20">
//      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
//
//        {/* Left Content */}
//        <div className="flex-1 text-center md:text-left">
//          <h1 className="text-4xl md:text-5xl font-bold mb-6">
//            Accelerating Growth with Smarter Accounting Solutions
//          </h1>
//          <p className="text-lg mb-6">
//            We empower businesses worldwide with technology-driven offshore accounting,
//            helping you focus on what matters most — growing your business.
//          </p>
//          <a
//            href="#contact"
//            className="bg-yellow-400 text-blue-800 px-6 py-3 rounded font-semibold shadow hover:bg-yellow-300 transition"
//          >
//            Get in Touch
//          </a>
//        </div>
//
//        {/* Right Illustration */}
//        <div className="flex-1">
//          <Image
//            src="/finance.svg"  // 👈 place downloaded SVG in /public
//            alt="Finance Illustration"
//            width={500}
//            height={400}
//            className="mx-auto"
//          />
//        </div>
//      </div>
//    </header>
//  );
//}
//

// src/components/Header.js
export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-8">
        {/* Left: text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Your Finance Team – Without the Overhead
          </h1>

          <p className="text-lg text-white/90 mb-4">
            At <span className="font-semibold text-white">Udaan</span>, we accelerate growth by empowering businesses with best-in-class offshore talent and technology-driven accounting solutions. Since 2016, we have helped <span className="font-semibold">100+ clients</span> solve capacity challenges and scale their accounting and finance teams with ease.
          </p>

          <p className="italic text-md md:text-lg mb-6">Take Finance Ahead, Take Udaan.</p>

          <div className="flex items-center justify-center lg:justify-start gap-4">
            <a
              href="#contact"
              className="bg-yellow-400 text-blue-800 px-6 py-3 rounded font-semibold shadow hover:bg-yellow-300 transition"
            >
              Get in Touch
            </a>

            <a
              href="#about"
              className="border border-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-blue-700 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right: illustration */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/finance.svg"
            alt="Finance illustration"
            className="w-[420px] max-w-full"
          />
        </div>
      </div>
    </header>
  );
}
