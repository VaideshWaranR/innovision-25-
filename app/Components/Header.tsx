import React from "react";

function Header() {
  return (
    <div className="flex justify-between items-center px-8 md:px-14 py-4 w-full">
      {/* Left Logo */}
      <img
        className="h-6 md:h-12 object-contain"
        src="/images/reclogo.png"
        alt="REC Logo"
      />

      {/* Right Logo */}
      <img
        className="h-16 md:h-22 object-contain"
        src="/images/iic.png"
        alt="IIC Logo"
      />
    </div>
  );
}

export default Header;
