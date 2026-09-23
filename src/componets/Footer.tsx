import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-12">
        <div>
          <img className="h-7 w-auto" src={logo} alt="Dev Stack" />
          <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
            Curated tools, technologies, and resources for building better software.
          </p>
          <div className="mt-5 flex gap-4 text-xs font-medium text-gray-600">
            <a className="font-bold hover:text-[#d8217d]" href="#github">GitHub</a>
            <a className="font-bold hover:text-[#d8217d]" href="#twitter">Twitter</a>
            <a className="font-bold hover:text-[#d8217d]" href="#linkedin">LinkedIn</a>
          </div>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900">Product</h2>
          <div className="mt-4 space-y-3 text-sm text-gray-500">
            <a className="block hover:text-[#d8217d]" href="#home">Home</a>
            <a className="block hover:text-[#d8217d]" href="#technologies">Technologies</a>
            <a className="block hover:text-[#d8217d]" href="#projects">Projects</a>
          </div>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900">Company</h2>
          <div className="mt-4 space-y-3 text-sm text-gray-500">
            <a className="block hover:text-[#d8217d]" href="#about">About</a>
            <a className="block hover:text-[#d8217d]" href="#contact">Contact</a>
            <a className="block hover:text-[#d8217d]" href="#careers">Careers</a>
          </div>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900">Legal</h2>
          <div className="mt-4 space-y-3 text-sm text-gray-500">
            <a className="block hover:text-[#d8217d]" href="#privacy">Privacy Policy</a>
            <a className="block hover:text-[#d8217d]" href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between lg:px-12">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-5">
            <a className="hover:text-[#d8217d]" href="#privacy">Privacy</a>
            <a className="hover:text-[#d8217d]" href="#terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
