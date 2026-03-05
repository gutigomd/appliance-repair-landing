"use client";

import { useState } from "react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur border-b border-slate-200 sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-primary text-white flex items-center justify-center font-semibold">
            AR
          </div>
          <div>
            <div className="text-sm font-semibold tracking-wide text-slate-900">
              USA Appliance Repair
            </div>
            <div className="text-xs text-slate-500">
              Same‑day service in your area
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700" aria-label="Main">
          <a href="#home" className="hover:text-primary transition-colors">
            Home
          </a>
          <a href="#services" className="hover:text-primary transition-colors">
            Services
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        {/* Call to action (desktop) */}
        <div className="hidden sm:flex items-center gap-3">
          <a href="tel:+18005551234" className="text-xs font-semibold text-slate-600">
            Call now: <span className="text-primary">(800) 555‑1234</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-slate-700 shadow-sm hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          onClick={handleToggle}
        >
          {!mobileOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <line x1="4" y1="7" x2="20" y2="7" strokeWidth="1.6" strokeLinecap="round" />
              <line x1="4" y1="12" x2="20" y2="12" strokeWidth="1.6" strokeLinecap="round" />
              <line x1="4" y1="17" x2="20" y2="17" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <line x1="6" y1="6" x2="18" y2="18" strokeWidth="1.6" strokeLinecap="round" />
              <line x1="6" y1="18" x2="18" y2="6" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <nav
        className={`md:hidden max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-3 space-y-1 text-sm font-medium text-slate-700 bg-white/95 border-t border-slate-200 ${
          mobileOpen ? "" : "hidden"
        }`}
        aria-label="Mobile main"
      >
        <a href="#home" className="block py-1.5 hover:text-primary" onClick={handleNavClick}>
          Home
        </a>
        <a href="#services" className="block py-1.5 hover:text-primary" onClick={handleNavClick}>
          Services
        </a>
        <a href="#contact" className="block py-1.5 hover:text-primary" onClick={handleNavClick}>
          Contact
        </a>
        <a
          href="tel:+18005551234"
          className="inline-flex mt-2 items-center justify-center rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-white shadow-sm"
          onClick={handleNavClick}
        >
          Call (800) 555‑1234
        </a>
      </nav>
    </header>
  );
};

export default Header;

