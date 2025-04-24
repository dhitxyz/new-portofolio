import React from "react";

const Footer = () => {
  return (
    <footer className="py-0 md:py-8 mt-12 text-start">
      <div className="mt-8 text-sm text-gray-500">
        &copy; Copyright {new Date().getFullYear()} by Kadek Panji
      </div>
    </footer>
  );
};

export default Footer;
