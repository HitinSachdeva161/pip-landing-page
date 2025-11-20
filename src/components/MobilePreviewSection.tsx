import React from "react";
import landingMockup from "../assets/new assets/Landing page mockup.png";
import pipoHey from "../assets/Hero/Pipo_Hey.png";
import pipoShy from "../assets/Hero/Pipo_Shy.png";
import pipoPointing from "../assets/Hero/Pipo_Pointing.png";
import pipoCoffee from "../assets/Hero/Pipo_Cofee Cup.png";

export const MobilePreviewSection = (): JSX.Element => {
  return (
    <section className="relative w-full sm:min-h-[85vh] md:h-[100vh] bg-[#dcd8f0] overflow-hidden">
      {/* Container for all content */}
      <div className="relative w-full max-w-[1400px] mx-auto flex flex-col gap-6 md:gap-0 sm:min-h-[85vh] md:h-[100vh] md:justify-between px-4 pt-[4rem] sm:pt-[5rem] md:pt-[8rem] pb-0">
        
        {/* Main content - Centered */}
        <div className="relative z-20 flex flex-col items-center justify-center gap-4 sm:gap-5 md:gap-7 text-center w-full max-w-[700px] mx-auto pt-4 sm:pt-8 md:pt-12">
          
          {/* Headline */}
          <h1 className="[font-family:'Roboto-Medium',Helvetica] font-medium text-[#3d3555] text-[30px] sm:text-[38px] md:text-[46px] lg:text-[50px] leading-[1.2] tracking-[-0.5px] px-4">
            Worried about meeting people?
            <br />
            PIP got you
          </h1>

          {/* CTA Button */}
          <button
            className="inline-flex items-center justify-center min-w-[190px] h-[52px] md:h-[56px] px-10 md:px-12 bg-[#453b55] hover:bg-[#5a4d6b] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#453b55]/50"
            type="button"
            aria-label="Download project proposal"
          >
            <span className="[font-family:'Roboto-Medium',Helvetica] font-medium text-white text-[15px] md:text-[16px] tracking-wide">
              Download Proposal
            </span>
          </button>

        </div>

        {/* Phone mockup - Three phones in one image */}
        <div className="relative z-20 flex items-end justify-center w-full">
          <img
            className="w-full max-w-[340px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] h-auto sm:h-[80vh] md:h-auto md:max-h-[50vh] object-contain object-bottom drop-shadow-2xl"
            alt="PIP mobile app mockups showing login, AR practice, and feedback screens"
            src={landingMockup}
          />
        </div>

        {/* Floating Pipo Characters - Positioned around the content */}
        
        {/* Left Pipo Hey - Waving */}
        <div 
          className="absolute top-[32%] left-[2%] sm:top-[34%] sm:left-[4%] md:top-[36%] md:left-[8%] lg:top-[38%] lg:left-[12%] z-10 animate-float"
        >
          <img
            className="w-[70px] h-[80px] sm:w-[90px] sm:h-[105px] md:w-[110px] md:h-[130px] lg:w-[130px] lg:h-[150px] object-contain"
            alt="PIP character waving"
            src={pipoHey}
          />
        </div>

        {/* Right Pipo Pointing */}
        <div 
          className="absolute top-[44%] right-[2%] sm:top-[46%] sm:right-[4%] md:top-[48%] md:right-[8%] lg:top-[50%] lg:right-[12%] z-10 animate-float-delayed"
        >
        <img
            className="w-[70px] h-[80px] sm:w-[90px] sm:h-[105px] md:w-[110px] md:h-[130px] lg:w-[130px] lg:h-[150px] object-contain"
            alt="PIP character pointing"
            src={pipoPointing}
        />
      </div>

      </div>
    </section>
  );
};
