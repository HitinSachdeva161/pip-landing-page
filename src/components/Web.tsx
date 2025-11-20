import React, { useState } from "react";
import { AssetsSection } from "./AssetsSection";
import { CharacterSection } from "./CharacterSection";
import { FeaturesSection } from "./FeaturesSection";
import { MobilePreviewSection } from "./MobilePreviewSection";
import { MobileWrapperSection } from "./MobileWrapperSection";
import { TeamSection } from "./TeamSection";
import image from "../assets/Logo_Nav.png";
import menuIcon from "../assets/hamburger.svg";

export const Web = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigationItems = [
    { label: "Features", href: "#features" },
    { label: "Overview", href: "#assets" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="flex flex-col items-end relative">
      <MobilePreviewSection />
      <MobileWrapperSection />
      <FeaturesSection />
      <CharacterSection />
      <TeamSection />
      <AssetsSection />
      <nav
        className="flex w-[90vw] max-w-[640px] h-[50px] md:h-[60px] items-center justify-between px-5 md:px-7 py-0 fixed top-3 md:top-5 left-1/2 -translate-x-1/2 bg-white rounded-[100px] shadow-[0px_4px_6px_#00000026] z-50"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="relative w-[70px] md:w-[81.82px] h-[26px] md:h-[30px] aspect-[2.73]">
          <img
            className="absolute -top-px left-0 w-[80px] md:w-[88px] h-[30px] md:h-[33px]"
            alt="Company Logo"
            src={image}
          />
        </div>

        <ul className="hidden sm:inline-flex flex-wrap items-end gap-[12px_20px] md:gap-[16px_28px] relative flex-[0_0_auto]">
          {navigationItems.map((item, index) => (
            <li
              key={index}
              className="px-0 py-2.5 flex-[0_0_auto] relative inline-flex items-center justify-center gap-2.5"
            >
              <a
                href={item.href}
                className="text-black relative w-fit mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-sm tracking-[0] leading-[normal] whitespace-nowrap hover:opacity-70 transition-opacity"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Open menu"
          className="sm:hidden inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#f3f2fa] text-[#453b55] hover:opacity-90"
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          {/* <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0" width="18" height="2" rx="1" fill="#453B55"/>
            <rect y="5" width="14" height="2" rx="1" fill="#453B55"/>
            <rect y="10" width="10" height="2" rx="1" fill="#453B55"/>
          </svg> */}
          <img src={menuIcon} alt="Menu Icon" />
        </button>
      </nav>

      {isMenuOpen && (
        <div className="sm:hidden fixed inset-0 bg-[#F7F7F7] z-[60] flex flex-col pt-12 pb-8 px-6">
          {/* Header with Logo centered and Close Button */}
          <div className="relative flex items-center justify-center mb-16">
            <img
              className="w-[100px] h-[38px]"
              alt="PIP Logo"
              src={image}
            />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="#2D3748" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Navigation Items - Centered Vertically */}
          <nav className="flex-1 flex items-start justify-center pt-8">
            <ul className="flex flex-col items-center gap-10">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="[font-family:'Roboto-Medium',Helvetica] font-medium text-[#2D3748] text-[20px] tracking-[-0.3px] leading-[normal] hover:text-[#453b55] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};
