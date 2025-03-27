import Image from "next/image";

const partners = [
  {
    name: "1984 Ventures",
    logo: "https://pngqgrcukfipqmvx.public.blob.vercel-storage.com/Images/VCs/1984-wIt79pZtjU97mCEQAyPU99gz9Y04sF.jpeg",
    link: "https://www.1984.vc/"
  },
  {
    name: "Afore Capital",
    logo: "https://pngqgrcukfipqmvx.public.blob.vercel-storage.com/Images/VCs/afore-TtfZRRttXNMzeJ6ym3gmK4DBFuLYIZ.webp", 
    link: "https://afore.vc/"
  },
  {
    name: "HOF Capital",
    logo: "https://pngqgrcukfipqmvx.public.blob.vercel-storage.com/Images/VCs/hof-9Ckig0fIebcDqLqLWEZTWf9QFsQMxq.webp",
    link: "https://hofcapital.com/"
  },
  {
    name: "Link Ventures",
    logo: "https://pngqgrcukfipqmvx.public.blob.vercel-storage.com/Images/VCs/link-KrwWAGNEB9gNPs4MenFMpdAqll2v6q.png",
    link: "https://www.linkventures.com/"
  },
  {
    name: "Olive Tree Capital",
    logo: "https://pngqgrcukfipqmvx.public.blob.vercel-storage.com/Images/VCs/olivetree-BIoGPuCDJafeZAL67NqhGKwuuCX00m.jpg",
    link: "https://www.olivetreecapital.com/"
  },
  {
    name: "Underscore VC",
    logo: "https://pngqgrcukfipqmvx.public.blob.vercel-storage.com/Images/VCs/underscore-4GRC8ih70xAfuXtOZWLptdTf4h0vNk.jpg",
    link: "https://underscore.vc/"
  },
  {
    name: "Laconia",
    logo: "https://pngqgrcukfipqmvx.public.blob.vercel-storage.com/Images/VCs/laconia-YXIgP4P1fyRylp8oVs5yMvfHJD0aje.png",
    link: "https://www.laconiacapitalgroup.com/"
  },
  {
    name: "New Era Capital",
    logo: "https://pngqgrcukfipqmvx.public.blob.vercel-storage.com/Images/VCs/newera-h85dPihxX9MjMxRPzLnnEoX2hhQ3sl.jpeg",
    link: "https://www.neweraventures.com/"
  },
  {
    name: "Glasswing Ventures",
    logo: "https://pngqgrcukfipqmvx.public.blob.vercel-storage.com/Images/VCs/glasswing-bNjiOuUVm27HGbpOECX3LiO7WZAy9k.jpg",
    link: "https://glasswing.vc/"
  },
  {
    name: "Techstars",
    logo: "https://pngqgrcukfipqmvx.public.blob.vercel-storage.com/Images/VCs/techstars-btWMO3laZkJBhqcDjovV9ZxnyAyzsp.png",
    link: "https://www.techstars.com/"
  }
];

export default function Partners() {
  return (
    <section className="py-24 bg-secondary border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Our VC Partners
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={40}
                className="h-25 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                unoptimized
              />
            </a>
          ))}
        </div>
        <p className="text-center mt-12 text-gray-600 tracking-wide">
          We share exclusive deal flow with our VC partners on a weekly basis
        </p>
      </div>
    </section>
  );
}