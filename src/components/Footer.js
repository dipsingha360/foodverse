import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 flex flex-col gap-3 items-center bg-rose-200 opacity-75">
      <h2 className="logo text-2xl font-bold lowercase italic">
        Food<span className="text-rose-500">Verse</span>
      </h2>
      <p>&copy; {new Date().getFullYear()} Foodverse. All right reserved.</p>
    </footer>
  );
};

export default Footer;
