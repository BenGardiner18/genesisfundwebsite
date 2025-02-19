"use client";

const HighlightsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="text-center my-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
          Genesis Fund Highlights
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Celebrating our recent achievements and milestones
        </p>
      </div>
      {/* <div>
        <h1>Genesis Fund Highlights</h1>
        <p>Celebrating our recent achievements and milestones</p>
      </div> */}

      <div className="max-w-2xl w-full">
        {/* LinkedIn Feed */}
        <div className="space-y-6">
          <iframe 
            src='https://widgets.sociablekit.com/linkedin-page-posts/iframe/25525123' 
            frameBorder='0' 
            width='100%' 
            height='1000'
          />
        </div>
      </div>
    </div>
  );
};

export default HighlightsPage;