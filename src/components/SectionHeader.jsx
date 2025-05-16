import React from "react";
import { useLocation } from "react-router-dom";

const SectionHeader = () => {
  const location = useLocation();
  
  // Convert pathname to a readable format
  const pageTitle = location.pathname === "/" ? "Home" : location.pathname.replace("/", "").toUpperCase();

  return (
    <div className="w-full bg-black text-white py-6 text-center">
      <h1 className="text-3xl font-bold">{pageTitle}</h1>
    </div>
  );
};

export default SectionHeader;
