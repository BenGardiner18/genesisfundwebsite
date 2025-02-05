"use client";

const JobsPage = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-start py-12 px-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8">Join Our Team</h1>
        <div className="aspect-[3/4] w-full">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfxvCyrPGnJlWTl_8_Gznk8O1ms6IT4R7Nas6c2v-UtuerbNg/viewform?embedded=true"
            width="100%"
            height="100%"
            className="border-none"
          >
            Loading form...
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default JobsPage; 