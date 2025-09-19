import React from "react";

const Footer: React.FC = () => {

  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo + Description */}
          <div>
            <h2 className="text-2xl font-bold text-white">StayFinder</h2>
            <p className="mt-3 text-sm text-gray-400">
              Helping you find the perfect place to stay – anywhere, anytime.
            </p>
          </div>

        
        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} StayFinder. All rights reserved.
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
