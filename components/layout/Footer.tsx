import { Facebook, Twitter, Linkedin } from 'lucide-react'; // Import social media icons

const socialMediaLinks = [
  // { href: "https://facebook.com", icon: <Facebook className="h-8 w-8" /> },
  // { href: "https://twitter.com", icon: <Twitter className="h-8 w-8" /> },
  { href: "https://www.linkedin.com/company/boston-genesis-fund/", icon: <Linkedin className="h-8 w-8" /> }
];

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-6 tracking-tight text-gray-900">Connect with Us</h2>
        <div className="flex justify-center space-x-8 mb-6">
          {socialMediaLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:scale-105 text-gray-600 hover:text-primary"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="mt-6 text-sm text-gray-500">© 2024 Genesis Fund. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 