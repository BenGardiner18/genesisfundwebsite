const Spotlight = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-display mb-4">
            Latest Updates
          </h2>
          <p className="text-xl text-gray-600">
            Recent success stories and fund activities
          </p>
        </div>

        <div className="flex items-center justify-center">
          {/* Mercor Spotlight */}
          {/* <div>
            <iframe 
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7297686390635462657" 
              height="755" 
              width="100%" 
              frameBorder="0" 
              allowFullScreen
              title="Mercor LinkedIn Post"
              className="shadow-lg rounded-lg"
            />
          </div> */}

          {/* Genesis Fund LinkedIn Feed */}
          <div className="w-full max-w-4xl">
            <iframe 
              src="https://widgets.sociablekit.com/linkedin-page-posts/iframe/25525123" 
              frameBorder="0" 
              width="100%" 
              height="755"
              title="Genesis Fund LinkedIn Feed"
              className="shadow-lg rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
