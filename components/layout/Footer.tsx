import { Facebook, Twitter, Linkedin } from 'lucide-react'; // Import social media icons

const socialMediaLinks = [
  // { href: "https://facebook.com", icon: <Facebook className="h-8 w-8" /> },
  // { href: "https://twitter.com", icon: <Twitter className="h-8 w-8" /> },
  { href: "https://www.linkedin.com/company/boston-genesis-fund/", icon: <Linkedin className="h-8 w-8" /> }
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Connect with Us</h2>
        <div className="flex justify-center space-x-6 mb-4">
          {socialMediaLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform duration-300 hover:scale-110"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="mt-4 text-sm opacity-75">© 2024 Genesis Fund. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 