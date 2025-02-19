import Image from 'next/image';

interface School {
  name: string;
  logo: string;
  website: string;
}

const schools: School[] = [
  {
    name: 'Harvard University',
    logo: '/schools/harvard.png',
    website: 'https://www.harvard.edu'
  },
  {
    name: 'MIT',
    logo: '/schools/mit.png',
    website: 'https://www.mit.edu'
  },
  {
    name: 'Boston University',
    logo: '/schools/bu.png',
    website: 'https://www.bu.edu'
  },
  {
    name: 'Northeastern University',
    logo: '/schools/northeastern.png',
    website: 'https://www.northeastern.edu'
  },
  {
    name: 'Tufts University',
    logo: '/schools/tufts.png',
    website: 'https://www.tufts.edu'
  },
  {
    name: 'Boston College',
    logo: '/schools/bc.png',
    website: 'https://www.bc.edu'
  },
  { 
    name: 'Babson College',
    logo: '/schools/babson.png',
    website: 'https://www.babson.edu'
  },
  {
    name: 'Brandeis University',
    logo: '/schools/brandeis.png',
    website: 'https://www.brandeis.edu'
  },
  {
    name: 'WPI',
    logo: '/schools/wpi.png',
    website: 'https://www.wpi.edu'
  },
  {
    name: 'Suffolk University',
    logo: '/schools/suffolk.png',
    website: 'https://www.suffolk.edu'
  },
  {
    name: 'Brandeis University',
    logo: '/schools/brandeis.png',
    website: 'https://www.brandeis.edu'
  },
  {
    name: 'UMass Boston',
    logo: '/schools/umb.png',
    website: 'https://www.umb.edu'
  }
    
];

const Schools = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-display mb-4">
            Boston Schools We Cover
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {schools.map((school) => (
            <div
              key={school.name}
              className="flex justify-center"
            >
              <a href={school.website} target="_blank" rel="noopener noreferrer" 
                 className="block">
                <div className="relative w-24 h-24 mb-2">
                  <Image
                    src={school.logo}
                    alt={`${school.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-center text-sm font-medium text-gray-900">{school.name}</h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schools;