"use client";

import Image from "next/image";
import Link from "next/link";
import JulesPic from "@/public/JulesPic.jpeg";
import BenPic from "@/public/BenPic.jpeg";
import PratPic from "@/public/PratPic.jpeg";
import LoganPic from "@/public/LoganPic.jpeg";
import AndrePic from "@/public/AndrePic.jpeg";
import YoussefPic from "@/public/YoussefPic.jpeg";

interface TeamMember {
  name: string;
  university: string;
  description: string;
  imageUrl: string;
  linkedinUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Youssef Rezkalla",
    university: "Boston University",
    description:"Two-time founder turned VC with experience at BECO Capital, Global Ventures, and NOA, a Venture Partner at GoingVC, Founding Member of Partner Track, a global community of 400+ VC professionals.",
    imageUrl: YoussefPic.src,
    linkedinUrl: "https://www.linkedin.com/in/youssefrezkalla/"
  },
  {
    name: "Logan Hine",
    university: "Harvard University",
    description: "Founder at Arcadia Ventures with 3 years of experience in VC across Newlin Ventures, GoAhead Ventures and an operator background at Ridge and Atmos AI. ",
    imageUrl: LoganPic.src,
    linkedinUrl: "https://www.linkedin.com/in/logan-hine-4a810a217/"
  },
  {
    name: "Andre Kirby",
    university: "Northeastern University", 
    description: "Startup operator at Snyk, Extern and Workiva. VC professional with 2 years of experience at IDEA: Northeastern’s Venture Accelerator and Glasswing Ventures. ",
    imageUrl: AndrePic.src,
    linkedinUrl: "https://www.linkedin.com/in/andre-kirby/"
  },
  {
    name: "Jules Deplanck",
    university: "Babson College",
    description: "Two-time founder and startup operator in Sequoia and Headline VC portfolio company - Elyn. VC experience from Hera Capital and Interlace VC and Founder of Deelscoop, a US/Europe community of 700+ VC professionals. ",
    imageUrl: JulesPic.src,
    linkedinUrl: "https://www.linkedin.com/in/julesdeplanck/"
  },
  {
    name: "Ben Gardiner",
    university: "Boston University",
    description: "Founder of HR Tech Startup Talentora backed by Boston University Innovation Lab, Strategy and Ops at Vista Equity backed InvoiceCloud, ML and Software Engineering at BU Spark, and Data Science at Syneos Health",
    imageUrl: BenPic.src,
    linkedinUrl: "https://www.linkedin.com/in/bengardiner18/"
  },
  {
    name: "Prat Mallick",
    university: "Harvard University",
    imageUrl: PratPic.src,
    description: "President of Politics at Harvard Kennedy with VC experience through General Catalyst as first an intern and now a Managing Director, current Fellow at XFund and doing Growth at YC-backed Sweetspot.",
    linkedinUrl: "https://www.linkedin.com/in/mallickprat/"
  },
];

const TeamGallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 py-12 w-3/4">
      {teamMembers.map((member) => (
        <div key={member.name} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-64 w-full">
            <Image
              src={member.imageUrl}
              alt={member.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{member.university}</p>
            <p className="text-gray-700 mb-4">{member.description}</p>
            <Link 
              href={member.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Connect on LinkedIn
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamGallery;
