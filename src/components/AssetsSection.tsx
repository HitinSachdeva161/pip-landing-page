import React from "react";
import footerLogo from "../assets/Logo_Footer.png";

export const AssetsSection = (): JSX.Element => {
  const navigationLinks = [
    { id: 1, label: "Team", href: "#team" },
    { id: 2, label: "Contact", href: "#contact" },
    { id: 3, label: "Features", href: "#features" },
    { id: 4, label: "Overview", href: "#assets" },
  ];

  const actionButtons = [
    { label: "View Proposal", ariaLabel: "View project proposal" , href: "https://drive.google.com/file/d/1oD-VHGhwlZiQ3R1wlu-ynogYbzjDYl_R/view?usp=sharing" },
    { label: "View Design Files", ariaLabel: "View design files" , href: "https://www.figma.com/design/bvZP4XgMNTkdLQ81bdWbTe/PIP-Design?node-id=0-1&t=EXMdYw0cTIEAZl0k-1" },
    { label: "View GitHub", ariaLabel: "View GitHub repository", href: "https://github.com/vipuljuneja/Capstone" }
  ];

  return (
    <footer className="flex flex-col gap-8 md:gap-12 py-12 md:py-16 px-6 md:px-12 relative self-stretch w-full bg-[#3e3153]">
      <div className="flex flex-col items-center gap-8 md:gap-10 w-full max-w-[1200px] mx-auto">
        {/* Top Section: Logo + Tagline and Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 w-full">
          {/* Left: Logo with tagline */}
          <div className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-6">
            <img
              className="w-[140px] h-[52px] md:w-[159px] md:h-[60px] object-contain"
              alt="PIP Logo"
              src={footerLogo}
            />
            {/* <div className="hidden md:block w-px h-[60px] bg-white/30" aria-hidden="true" /> */}
            {/*<div className="hidden md:flex items-center justify-center">
              <div className="[font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[13px] md:text-[14px] text-center md:text-left tracking-[0] leading-[20px]">
                Practice <br />
                Improve <br />
                Perform
              </div>
            </div>*/}
          </div>

          {/* Right: Action Buttons */}
          <nav
            className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4"
            aria-label="Footer actions"
          >
            {actionButtons.map((button) => (
              <a
                key={button.label}
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full md:w-auto items-center justify-center min-w-[190px] md:min-w-[160px] h-[48px] md:h-[50px] px-6 md:px-8 bg-white rounded-[100px] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#3e3153] transition-all"
                type="button"
              >
                <span className="[font-family:'Roboto-Medium',Helvetica] font-medium text-[#3e3153] text-[14px] md:text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                  {button.label}
                </span>
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Section: Navigation Links and Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 w-full border-t border-white/20 pt-6">
          {/* Left: Navigation Links */}
          <nav
            className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 md:gap-x-8 gap-y-2"
            aria-label="Footer navigation"
          >
            {navigationLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-white [font-family:'Roboto-Medium',Helvetica] font-medium text-[13px] md:text-[14px] tracking-[0] leading-[normal] hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#3e3153] transition-all whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Copyright */}
          <p className="[font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[11px] md:text-[12px] text-center md:text-right tracking-[0] leading-[normal] whitespace-nowrap">
            © PIP 2025 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
