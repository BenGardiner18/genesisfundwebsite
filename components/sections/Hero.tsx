import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Globe from "./Globe";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl animate-[fadeIn_1s_ease-in]">
            <div className="mb-8 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 animate-[bounce_1s_ease-in-out_infinite]">
              <span className="text-sm font-medium text-blue-600">Now accepting applications</span>
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 animate-[slideInLeft_0.8s_ease-out]">
              Backing Boston's Next Generation of Founders
            </h1>
            <p className="text-xl leading-8 text-gray-600 mb-8 animate-[slideInRight_1s_ease-out]">
              We're Boston's premier student-focused venture fund, partnering with exceptional student entrepreneurs to build category-defining companies. First check, first believer.
            </p>
            <div className="flex items-center gap-x-6 animate-[fadeInUp_1.2s_ease-out]">
              <Link
                href="apply"
                className="rounded-md bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all hover:scale-105 animate-[pulse_2s_ease-in-out_infinite]"
              >
                Apply for Funding
              </Link>
              <Link
                href="portfolio"
                className="group flex items-center text-base font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors animate-[wiggle_1s_ease-in-out_infinite]"
              >
                View Our Portfolio
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div className="relative w-[500px] h-[500px] hidden lg:block animate-[float_6s_ease-in-out_infinite]">
            <Globe />
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] animate-[wave_10s_ease-in-out_infinite]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-600 to-indigo-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
      </div>
    </div>
  );
};

export default Hero;