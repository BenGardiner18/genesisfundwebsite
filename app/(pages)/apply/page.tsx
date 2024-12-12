"use client";

const ApplyPage = () => {

  const formUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL; // https://docs.google.com/forms/d/e/1FAIpQLSd_LP_rI3BCdnaZO1eMNJHeR6_w9wiB5p5R17QxMNb2tXyygg/viewform
  const embedUrl = `${formUrl}?embedded=true`;
  console.log(embedUrl);
  return (
    <div className="flex justify-center py-8 mt-10">
      <iframe 
      
        src={embedUrl}
        width="640"
        height="2560" 
       
      >
        Loading...
      </iframe>
    </div>
  );
};

export default ApplyPage;
