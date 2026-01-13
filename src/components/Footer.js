
const Footer = () => {
  return (
    <footer className="bg-blue-400 shadow-md text-gray-900 py-4 sm:py-6 mt-0">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 text-center">
        <p className="text-sm sm:text-base md:text-lg italic font-semibold mb-2">
          "Dream big. Work hard. Stay focused."
        </p>
        <p className="text-[10px] sm:text-xs md:text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold">Dharniha</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
