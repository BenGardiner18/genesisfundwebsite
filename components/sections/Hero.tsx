import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white  overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="mb-8 inline-flex items-center rounded-full bg-blue-50 px-3 py-1">
              <span className="text-sm font-medium text-blue-600">Now accepting applications</span>
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Backing Boston's Next Generation of Founders
            </h1>
            <p className="text-xl leading-8 text-gray-600 mb-8">
              We're Boston's premier student-focused venture fund, partnering with exceptional student entrepreneurs to build category-defining companies. First check, first believer.
            </p>
            <div className="flex items-center gap-x-6">
              <Link
                href="apply"
                className="rounded-md bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all hover:scale-105"
              >
                Apply for Funding
              </Link>
              <Link
                href="portfolio"
                className="group flex items-center text-base font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
              >
                View Our Portfolio
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            {/* <div className="mt-10 pt-10 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Trusted by top universities</p>
              <div className="flex space-x-6 items-center">
                {['harvard', 'mit', 'bu', 'northeastern'].map((school) => (
                  <div key={school} className="relative w-12 h-12 grayscale hover:grayscale-0 transition-all">
                    <Image
                      src={`/schools/${school}.png`}
                      alt={school}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div> */}
          </div>
          {/* <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Target Fund Size", value: "$2M+" },
                  { label: "Check Size", value: "$50K" },
                  { label: "Portfolio Companies", value: "30+" },
                  { label: "VC Partners", value: "20+" }
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
          <div className="relative w-[500px] h-[500px] hidden lg:block">
            <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Earth sphere */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#2563eb"
                  strokeWidth="1"
                  fill="none"
                  className="opacity-50"
                />
                {/* Latitude lines */}
                {[-60, -30, 0, 30, 60].map((angle) => (
                  <ellipse
                    key={angle}
                    cx="50"
                    cy="50"
                    rx="40"
                    ry={40 * Math.cos((angle * Math.PI) / 180)}
                    stroke="#2563eb"
                    strokeWidth="0.5"
                    fill="none"
                    className="opacity-30"
                  />
                ))}
                {/* Longitude lines */}
                {Array.from({ length: 24 }, (_, i) => i * 15).map((angle) => (
                  <path
                    key={angle}
                    d={`
                      M ${50 + 40 * Math.cos((angle * Math.PI) / 180)} ${50 - 40 * Math.sin((angle * Math.PI) / 180)}
                      A 40 40 0 0 1 ${50 + 40 * Math.cos((angle * Math.PI) / 180)} ${50 + 40 * Math.sin((angle * Math.PI) / 180)}
                    `}
                    stroke="#2563eb"
                    strokeWidth="0.5"
                    fill="none"
                    className="opacity-30"
                  />
                ))}
                {/* Continents rough outlines */}
                <path
                  d="M45 30 Q55 35 60 45 T50 60 T35 50 T45 30"
                  fill="#2563eb"
                  className="opacity-20"
                />
                <path
                  d="M65 55 Q70 50 75 55 T65 65 T65 55"
                  fill="#2563eb"
                  className="opacity-20"
                />
                <path
                  d="M30 40 Q25 45 30 50 T40 45 T30 40"
                  fill="#2563eb"
                  className="opacity-20"
                />
              </svg>
            </div>
            {/* Axis tilt line */}
            <div className="absolute inset-0">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <line
                  x1="50"
                  y1="5"
                  x2="50"
                  y2="95"
                  stroke="#2563eb"
                  strokeWidth="0.5"
                  strokeDasharray="2,2"
                  className="opacity-30"
                  transform="rotate(23.5, 50, 50)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-600 to-indigo-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
      </div> */}
    </div>
  );
};

export default Hero;