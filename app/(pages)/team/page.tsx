
import TeamGallery from "@/components/TeamGallery";
const Team = () => {
  return (
    <div>
      <main className="min-h-screen py-10 px-4">
        <h1 className="text-4xl font-bold text-center">Meet Our Team</h1>
        <p className="mt-4 text-lg text-center">
          Our team is composed of experienced professionals dedicated to supporting student entrepreneurs.
        </p>
        <TeamGallery />
        {/* Add team member details here */}
      </main>
    </div>
  );
};

export default Team; 