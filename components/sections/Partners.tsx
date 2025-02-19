import Image from "next/image";

const partners = [
  {
    name: "1984 Ventures",
    logo: "/vcs/1984.jpeg",
    link: "https://www.1984.vc/"
  },
  {
    name: "Afore Capital",
    logo: "/vcs/afore.webp", 
    link: "https://afore.vc/"
  },
  {
    name: "House of First",
    logo: "/vcs/hof.webp",
    link: "https://www.hof.vc/"
  },
  {
    name: "Link Ventures",
    logo: "/vcs/link.png",
    link: "https://www.linkventures.com/"
  },
  {
    name: "Olive Tree Capital",
    logo: "/vcs/olivetree.jpg",
    link: "https://www.olivetreecap.com/"
  },
  {
    name: "Underscore VC",
    logo: "/vcs/underscore.jpg",
    link: "https://underscore.vc/"
  },
  {
    name: "Laconia",
    logo: "/vcs/laconia.png",
    link: "https://www.laconia.vc/"
  },
  {
    name: "New Era Capital",
    logo: "/vcs/newera.jpeg",
    link: "https://www.neweracap.com/"
  },
  {
    name: "Glasswing Ventures",
    logo: "/vcs/glasswing.jpg",
    link: "https://www.glasswing.com/"
  },
  {
    name: "Techstars",
    logo: "/vcs/techstars.png",
    link: "https://www.techstars.com/"
  }
];

export default function Partners() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Backed by World-Class Investors
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={40}
                className="h-25 w-auto object-contain"
              />
            </a>
          ))}
        </div>
        <p className="italic text-center mt-4 text-gray-600">
          We share exclusive deal flow with our VC partners on a weekly basis
        </p>
      </div>
    </section>
  );
} 