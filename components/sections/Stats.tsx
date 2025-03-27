const Stats = () => {
  const stats = [
    { value: "$2M+", label: "Target Assets Under Management" },
    { value: "30", label: "Target Portfolio Companies" },
    { value: "20+", label: "Partnered VC Firms" },
    { value: "$50k", label: "Average Check Size" },
  ];

  return (
    <div className="bg-secondary sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by Student Founders Across the Nation
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We&apos;ve built a track record of identifying and supporting exceptional student entrepreneurs.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all">
                <dt className="text-sm font-semibold leading-6 text-gray-600 tracking-wide uppercase">
                  {stat.label}
                </dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-primary">
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