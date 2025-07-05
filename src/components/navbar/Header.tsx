"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

// ✅ Dynamic imports
const NavHeader = dynamic(() => import("./NavHeader"));
const NavLinks = dynamic(() => import("./NavLinks"));
const NavUI = dynamic(() => import("./NavUI"));

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  const [contactForm, setContactForm] = useState(false);
  const openContactForm = () => setContactForm(!contactForm);

  return (
    <header className="absolute w-full z-50 transition-all duration-300">
      <div className="h-16 md:h-20 mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <NavHeader />
        <NavUI
          open={open}
          openContactForm={openContactForm}
          toggleOpen={toggleOpen}
        />
      </div>
      <NavLinks
        open={open}
        openContactForm={openContactForm}
        toggleOpen={toggleOpen}
      />
    </header>
  );
};

export default Header;
