import Image from 'next/image';

interface School {
  name: string;
  logo: string;
  website: string;
}

const schools: School[] = [
  {
    name: 'Harvard University',
    logo: "https://pngqgrcukfipqmvx.public.blob.vercel-storage.com/Images/Universities/harvard-zqjFK53RJr8pw5wugURRXvTuDyWf8p.png",
    website: 'https://www.harvard.edu'
  },
  {
    name: 'MIT',
    logo: "https://pngqgrcukfipqmvx.public.blob.vercel-storage.com/Images/Universities/mit-GRcbzBWlcJhRAcwtXYqA6x0251A0gQ.png",
    website: 'https://www.mit.edu'
  },
  {
    name: 'Boston University',
    logo: "https://pngqgrcukfipqmvx.public.blob.vercel-storage.com/Images/Universities/bu-odzsUfBRq342dd7ljmzuM42rpP5Z1U.png",
    website: 'https://www.bu.edu'
  },
  {
    name: 'Northeastern University',
    logo: "https://pngqgrcukfipqmvx.public.blob.vercel-storage.com/Images/Universities/northeastern-b8w4G9wTEge81uyAkkN59i0oC5qtiP.png",
    website: 'https://www.northeastern.edu'
  },
  {
    name: 'Tufts University',
    logo: 'https://pngqgrcukfipqmvx.public.blob.vercel-storage.com/Images/Universities/tufts-5rUmBvJajCi3n3qe2HSDb5GfgM35rp.png',
    website: 'https://www.tufts.edu'
  },
  {
    name: 'Boston College',
    logo: "https://pngqgrcukfipqmvx.public.blob.vercel-storage.com/Images/Universities/bc-aHO1szrLF6f3LhPs0sqzcAE8fnSt5i.png",
    website: 'https://www.bc.edu'
  },
  { 
    name: 'Babson College',
    logo: 'https://pngqgrcukfipqmvx.public.blob.vercel-storage.com/Images/Universities/babson-XCeTkJjSx1cvBL7VdjzLDLo4Zz8IM4.png',
    website: 'https://www.babson.edu'
  },
  {
    name: 'Emerson College',
    logo: 'https://pngqgrcukfipqmvx.public.blob.vercel-storage.com/Images/Universities/emerson-LMkdVA9A8u0m3Csih7cDG5b5f6ppzd.png',
    website: 'https://www.emerson.edu'
  },
  {
    name: 'Brandeis University',
    logo: "https://pngqgrcukfipqmvx.public.blob.vercel-storage.com/Images/Universities/brandeis-WcjSFpfRh1xQZ6u63H4kcTkK2UV3WU.png",
    website: 'https://www.brandeis.edu'
  },
  {
    name: 'WPI',
    logo: 'https://pngqgrcukfipqmvx.public.blob.vercel-storage.com/Images/Universities/wpi-foK7NxFxd23DYzmOMiAQuok3Bx6BNc.png',
    website: 'https://www.wpi.edu'
  },
  {
    name: 'Suffolk University',
    logo: 'https://pngqgrcukfipqmvx.public.blob.vercel-storage.com/Images/Universities/suffolk-V9AqABZa1KnIOD3R9XxFRYctZwlbkh.png',
    website: 'https://www.suffolk.edu'
  },
  {
    name: 'UMass Boston',
    logo: 'https://pngqgrcukfipqmvx.public.blob.vercel-storage.com/Images/Universities/umb-VQ58XXjwgVf0FVmGlue188duFn1FsD.png',
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
          {schools.map((school, index) => (
            <div
              key={`${school.name}-${index}`}
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
        <p className="text-center mt-8 text-gray-600 italic">...and more</p>
      </div>
    </section>
  );
};

export default Schools;