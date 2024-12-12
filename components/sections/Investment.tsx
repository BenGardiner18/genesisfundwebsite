import { Target, Lightbulb, Users } from 'lucide-react';

const investmentCriteria = [
  {
    title: "Student-Led Innovation",
    description: "We back ambitious student and recent graduate founders who are solving meaningful problems.",
    icon: Lightbulb,
  },
  {
    title: "Market Opportunity",
    description: "We look for ventures targeting large, growing markets with clear competitive advantages.",
    icon: Target,
  },
  {
    title: "Strong Team Dynamic",
    description: "We invest in diverse teams with complementary skills and a track record of execution.",
    icon: Users,
  },
];

const Investment = () => {
  return (
    <section id="thesis" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Investment Thesis
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We invest in early-stage companies founded by student entrepreneurs who are building innovative solutions to meaningful problems.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {investmentCriteria.map((criteria) => (
            <div
              key={criteria.title}
              className="relative p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
            >
              <div className="absolute top-8 left-8">
                <criteria.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-900">{criteria.title}</h3>
                <p className="mt-4 text-gray-600">{criteria.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Investment;