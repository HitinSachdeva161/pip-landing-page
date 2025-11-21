import React from "react";
import pipVideo from "../assets/new assets/pip_55s_final.mp4";
import pipThumbnail from "../assets/new assets/thumbnail.png";


export const FeaturesSection = (): JSX.Element => {
  const buttons = [
    { label: "View Proposal", ariaLabel: "View project proposal" },
    { label: "View Design Files", ariaLabel: "View design files" },
    { label: "View GitHub", ariaLabel: "View GitHub repository" },
  ];

  return (
    <section
      id="assets"
      className="flex flex-col items-center gap-6 md:gap-12 py-12 md:py-20 px-6 relative self-stretch w-full"
      style={{ background: "linear-gradient(180deg, #EEF3E7 0%, #C7DFFF 100%)" }}
      aria-labelledby="assets-heading"
    >
      <h2
        id="assets-heading"
        className="[font-family:'Roboto-Medium',Helvetica] font-medium text-[#393152] text-[32px] md:text-[40px] text-center tracking-[0] leading-[42px] md:leading-[60px]"
      >
        Overview
      </h2>

      <div
        className="flex w-full max-w-[90vw] md:max-w-[800px] lg:max-w-[960px] h-[200px] sm:h-[280px] md:h-[450px] lg:h-[540px] items-center justify-center p-6 md:p-12  rounded-[12px] md:rounded-[16px]"
        aria-label="Video player"
      >
        <video
          controls
          poster={pipThumbnail}
          className="w-full h-[full] rounded-[12px] md:rounded-[16px] object-contain"
          role="region"
          aria-label="Project overview video"
        >
          <source src={pipVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <nav
        className="flex flex-col md:flex-row items-center gap-3 md:gap-5"
        role="navigation"
        aria-label="Project resources"
      >
        {buttons.map((button, index) => (
          <button
            key={index}
            className="inline-flex w-full md:w-auto min-w-[180px] h-[48px] md:h-[50px] items-center justify-center gap-2.5 px-6 md:px-8 py-3 bg-[#453b55] rounded-[100px] cursor-pointer hover:bg-[#5a4d6b] focus:outline-none focus:ring-2 focus:ring-[#453b55] focus:ring-offset-2 transition-colors"
            aria-label={button.ariaLabel}
            type="button"
          >
            <span className="[font-family:'Roboto-Medium',Helvetica] font-medium text-white text-[13px] md:text-[14px] text-center tracking-[0] leading-[normal]">
              {button.label}
            </span>
          </button>
        ))}
      </nav>
    </section>
  );
};
