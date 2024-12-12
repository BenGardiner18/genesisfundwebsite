const Stats = () => {
  const stats = [
    { value: "$2M+", label: "Assets Under Management" },
    { value: "25+", label: "Portfolio Companies" },
    { value: "40+", label: "University Partners" },
    { value: "3x", label: "Average Portfolio Growth" },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by Student Founders Across the Nation
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We've built a track record of identifying and supporting exceptional student entrepreneurs.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col bg-gray-50 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  {stat.label}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-blue-600">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Stats;