import Image from 'next/image';

const portfolioCompanies = [
  {
    name: "TechStart",
    description: "AI-powered startup development platform",
    logo: "https://images.unsplash.com/photo-1622473590773-f588134b6ce7?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    name: "EcoVenture",
    description: "Sustainable energy solutions",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    name: "HealthTech",
    description: "Digital health innovations",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100&q=80",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Portfolio Companies
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Supporting the next generation of innovative startups
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioCompanies.map((company) => (
            <div
              key={company.name}
              className="relative flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative w-16 h-16 mb-6">
                <Image
                  src={company.logo}
                  alt={company.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{company.name}</h3>
              <p className="mt-2 text-gray-500 text-center">{company.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;