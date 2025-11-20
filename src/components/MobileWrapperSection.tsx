import React from "react";
import featureMockupOne from "../assets/Features/Mockup_Feature 1.png";
import featureMockupTwo from "../assets/Features/Mockup_Feature 2.png";
import featureMockupThree from "../assets/Features/Mockup_Feature 3.png";

interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  glowColor: string;
}

export const MobileWrapperSection = (): JSX.Element => {
  const features: Feature[] = [
    {
      id: "progressive-ai",
      title: "Progressive AI Driven Practice",
      description:
        "Choose your own scenario and let AI adapt to your progress, guiding you from simple voice training to expressive facial practice. Gradually progress through real-life interactions, starting with the PIP Orb, then a human character, and finally a human-like avatar for immersive practice.",
      image: featureMockupOne as unknown as string,
      imageAlt: "Progressive AI feature mockup",
      imagePosition: "left",
      glowColor: "radial-gradient(50% 50% at 50% 50%, #E2ECD5 48.56%, rgba(246, 234, 194, 0) 100%)",
    },
    {
      id: "encouragement",
      title: "Encouragement and Reflective Space",
      description:
        "Each time you complete a session, PIP sends you a letter with kind, uplifting words, celebrating your strengths and gently suggesting areas to grow. You can also write a reflection note to yourself to track your journey and progress.",
      image: featureMockupTwo as unknown as string,
      imageAlt: "Mockup mailbox",
      imagePosition: "right",
      glowColor: "radial-gradient(50% 50% at 50% 50%, #E4E0FF 49%, rgba(203, 226, 254, 0) 100%)",
    },
    {
      id: "daily-articles",
      title: "Daily Articles",
      description:
        "PIP shares useful articles each day to help you learn and grow. You can save your favorites to revisit anytime.",
      image: featureMockupThree as unknown as string,
      imageAlt: "Mockup daily articles",
      imagePosition: "left",
      glowColor: "radial-gradient(50% 50% at 50% 50%, #C7DFFF 48.56%, rgba(206, 217, 190, 0) 100%)",
    },
  ];

  return (
    <section
      id="features"
      className="bg-[#f3f2fa] py-12 md:py-24 px-6 md:px-12 relative self-stretch w-full"
      aria-labelledby="features-heading"
    >
      <div className="flex flex-col w-full max-w-[1100px] items-center gap-12 md:gap-20 mx-auto">
        <h2 id="features-heading" className="[font-family:'Roboto-Medium',Helvetica] font-medium text-[#393152] text-[32px] md:text-[40px] text-center tracking-[0] leading-[42px] md:leading-[60px]">
          Features
        </h2>

        <div className="flex flex-col items-center gap-12 md:gap-24 w-full">
          {features.map((feature) => (
            <article key={feature.id} className={`flex flex-col ${feature.imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6 md:gap-16 w-full max-w-[1000px]`}>
              {/* Image with gradient glow effect */}
              <div className="flex items-center justify-center w-full md:w-1/2 relative">
                {/* Gradient glow behind phone */}
                <div
                  className="absolute inset-0 rounded-full blur-3xl scale-110"
                  style={{ background: feature.glowColor }}
                ></div>

                <img
                  className="relative w-[200px] h-[240px] sm:w-[260px] sm:h-[300px] md:w-[320px] md:h-[380px] lg:w-[360px] lg:h-[420px] object-contain drop-shadow-xl z-10"
                  alt={feature.imageAlt}
                  src={feature.image}
                />
              </div>

              {/* Text */}
              <div className="flex flex-col items-start gap-3 md:gap-6 w-full md:w-1/2 text-center md:text-left px-4 md:px-0">
                <h3 className="w-full [font-family:'Roboto-Medium',Helvetica] font-medium text-[#393152] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] tracking-[0] leading-[32px] sm:leading-[36px] md:leading-[48px]">
                  {feature.title}
                </h3>
                <p className="w-full [font-family:'Roboto-Regular',Helvetica] font-normal text-[#393152] text-[13px] sm:text-[14px] md:text-[15px] tracking-[0] leading-[20px] sm:leading-[22px] md:leading-[24px]">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
