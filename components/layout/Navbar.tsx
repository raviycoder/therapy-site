"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if scrolled (for background style)
      setIsScrolled(currentScrollY > 10);

      // Determine visibility direction
      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        // Scrolling down & not at top -> Hide
        setIsVisible(false);
      } else {
        // Scrolling up -> Show
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-60 flex items-center justify-between px-6 md:px-[57.6px] py-[15px] md:py-[12.36px] transition-all duration-500 ease-in-out",
          isScrolled
            ? "bg-[#FBF6F1]/95 backdrop-blur-sm shadow-sm"
            : "bg-[#FBF6F1]",
          isVisible ? "translate-y-0" : "-translate-y-full",
        )}
      >
        {/* Mobile: Hamburger / Close Button (Left) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-[25px] h-[25px] group z-60 relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {/* Line 1 - Top line that rotates to form X */}
          <span
            className={cn(
              "absolute w-[30px] h-[1.2px] bg-primary block transition-all duration-500 ease-in-out origin-center",
              isOpen ? "rotate-45" : "-translate-y-[4px]",
            )}
          ></span>
          {/* Line 2 - Bottom line that rotates to form X */}
          <span
            className={cn(
              "absolute w-[30px] h-[1.2px] bg-primary block transition-all duration-500 ease-in-out origin-center",
              isOpen ? "-rotate-45" : "translate-y-[4px]",
            )}
          ></span>
        </button>

        {/* Desktop: Logo (Left) */}
        <a
          href="#"
          className="hidden md:block text-[34.432px] font-medium text-primary"
          style={{ lineHeight: "41.3184px" }}
        >
          Lilac Template
        </a>

        {/* Mobile: Logo (Right) */}
        <a href="#" className="md:hidden text-[20px] font-bold text-primary">
          Lilac Template
        </a>

        {/* Desktop: Links (Right) */}
        <div className="hidden md:flex gap-[45px] text-[19.7px] font-normal">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-primary py-[1.96px] hover:opacity-70 transition-opacity"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Overlay - Comes from BOTTOM */}
      <div
        className={cn(
          "fixed inset-0 bg-[#FBF6F1] z-50 flex flex-col transition-all duration-500 ease-in-out",
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-full pointer-events-none",
        )}
      >
        {/* Header (Hidden, since the main navbar is visible on top) */}
        <div className="flex items-center justify-between px-6 py-[15px] invisible pointer-events-none">
          {/* Spacer to push content down */}
          <div className="w-[25px]"></div>

          {/* Logo (Right) - Duplicate for spacing */}
          <div className="text-[20px] font-bold text-primary">
            Lilac Template
          </div>
        </div>

        {/* Menu Links - Centered */}
        <div className="flex-1 flex flex-col items-center justify-center gap-8 pb-20">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[40px] font-medium text-primary hover:opacity-70 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
