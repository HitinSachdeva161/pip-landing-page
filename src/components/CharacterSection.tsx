import React from "react";
import poppyImage from "../assets/new assets/Poppy.png";
import suroImage from "../assets/new assets/Suro.png";
import vipulImage from "../assets/new assets/Vipul.png";
import hitinImage from "../assets/new assets/Hitin.png";
import sukhbirImage from "../assets/new assets/Sukhbir.png";

interface TeamMember {
  name: string;
  role: string;
  linkedin: string;
  image: string;
  imageAlt: string;
}

export const CharacterSection = (): JSX.Element => {
  const teamMembers: TeamMember[] = [
    {
      name: "Poppy Prasartset",
      role: "Co-PM • Product design lead",
      linkedin: "poppy-prasartset",
      image: poppyImage as unknown as string,
      imageAlt: "Photo of Poppy Prasartset",
    },
    {
      name: "Suro Kim",
      role: "Co-PM • Product designer",
      linkedin: "suro-kim",
      image: suroImage as unknown as string,
      imageAlt: "Photo of Suro Kim",
    },
    {
      name: "Vipul Juneja",
      role: "Dev lead • Back-end developer",
      linkedin: "vipuljuneja",
      image: vipulImage as unknown as string,
      imageAlt: "Photo of Vipul Juneja",
    },
    {
      name: "Hitin Sachdeva",
      role: "Front-end developer",
      linkedin: "hitinsachdeva",
      image: hitinImage as unknown as string,
      imageAlt: "Photo of Hitin Sachdeva",
    },
    {
      name: "Sukhbir Singh",
      role: "Front-end developer",
      linkedin: "sukhbirsinghdevs",
      image: sukhbirImage as unknown as string,
      imageAlt: "Photo of Sukhbir Singh",
    },
  ];

  return (
    <section
      id="team"
      className="flex flex-col items-center gap-12 md:gap-16 py-12 md:py-20 px-6 md:px-12 relative self-stretch w-full"
      style={{ background: "linear-gradient(180deg, #C7DFFF 0%, rgba(255, 255, 255, 1) 100%)" }}
    >
      <div className="flex flex-col items-center justify-center gap-10 md:gap-16 p-8 md:p-16 w-full max-w-[1200px] bg-white/60 backdrop-blur-sm rounded-[32px] md:rounded-[40px] shadow-[0px_4px_20px_rgba(0,0,0,0.08)]">
        <h2 className="[font-family:'Roboto-Medium',Helvetica] font-medium text-[#393152] text-[36px] md:text-[44px] text-center tracking-[-0.5px] leading-[44px] md:leading-[56px]">
          Meet the Team
        </h2>

        <div className="flex flex-col items-center gap-12 md:gap-16 w-full">
          {/* First Row - 2 people */}
          <div className="flex flex-wrap items-start justify-center gap-12 md:gap-16 lg:gap-24 w-full">
            {teamMembers.slice(0, 2).map((member) => (
              <article key={member.name} className="flex flex-col items-center gap-4 w-full max-w-[220px] text-center">
                <div className="relative flex items-center justify-center w-[180px] h-[180px] md:w-[200px] md:h-[200px]">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 opacity-50 blur-xl"></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-white border-4 border-white/80 shadow-[0px_8px_24px_rgba(99,102,241,0.15)]">
                    <img
                      className="w-full h-full object-cover"
                      alt={member.imageAlt}
                      src={member.image}
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2 mt-2">
                  <h3 className="[font-family:'Roboto-Medium',Helvetica] font-medium text-[#2d2d2d] text-[17px] md:text-[18px] tracking-[-0.2px] leading-[24px]">
                    {member.name}
                  </h3>

                  <p className="[font-family:'Roboto-Regular',Helvetica] font-normal text-[#5a5a5a] text-[14px] md:text-[15px] tracking-[0] leading-[20px]">
                    {member.role}
                  </p>

                  <div className="flex items-center gap-3 mt-2">
                    <a
                      href={`https://www.linkedin.com/in/${member.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#584F95] hover:text-[#4752c4] transition-colors"
                      aria-label={`LinkedIn profile of ${member.name}`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a
                      href={`https://${member.linkedin}.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#584F95] hover:text-[#4752c4] transition-colors"
                      aria-label={`Website of ${member.name}`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 490 490" aria-hidden="true">
                        <path d="M245,0C109.9,0,0,109.9,0,245s109.9,245,245,245s245-109.9,245-245S380.1,0,245,0z M172.7,77.3c-14.9,20.8-29.3,47-39.2,79.2H85.3C104.8,121.4,135.6,93.4,172.7,77.3z M69.9,296.8C65,280.4,62.4,263,62.4,245s2.7-35.4,7.5-51.8h55c-2.7,16.1-4.3,33.3-4.3,51.8s1.6,35.7,4.3,51.8H69.9z M85.3,333.5h48.2c9.9,32.2,24.3,58.4,39.2,79.2C135.6,396.6,104.8,368.6,85.3,333.5z M226.7,419.6c-17.7-17.9-39.9-46.3-54.3-86.1h54.3V419.6z M226.7,296.8h-64.4c-3.1-15.9-5-33.1-5-51.8s1.8-35.9,4.9-51.8h64.5L226.7,296.8L226.7,296.8z M226.7,156.5h-54.5c14.4-40.2,36.7-68.6,54.5-86.4V156.5z M404.7,156.5h-48.2c-9.9-32.2-24.3-58.4-39.2-79.2C354.4,93.4,385.2,121.4,404.7,156.5z M263.3,70.4c17.7,17.9,39.9,46.3,54.3,86.1h-54.3V70.4z M263.3,193.2h64.4c3.1,15.9,5,33.1,5,51.8s-1.8,35.9-4.9,51.8h-64.5V193.2z M263.3,333.5h54.5c-14.4,40.2-36.7,68.6-54.5,86.4V333.5z M317.3,412.7c14.9-20.8,29.3-47,39.2-79.2h48.2C385.2,368.6,354.4,396.6,317.3,412.7z M427.6,245c0,18-2.7,35.4-7.5,51.8h-55c2.7-16.1,4.3-33.3,4.3-51.8s-1.6-35.7-4.3-51.8h55C425,209.6,427.6,227,427.6,245z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Second Row - 3 people */}
          <div className="flex flex-wrap items-start justify-center gap-10 md:gap-12 lg:gap-16 w-full">
            {teamMembers.slice(2).map((member) => (
              <article key={member.name} className="flex flex-col items-center gap-4 w-full max-w-[220px] text-center">
                <div className="relative flex items-center justify-center w-[180px] h-[180px] md:w-[200px] md:h-[200px]">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 opacity-50 blur-xl"></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-white border-4 border-white/80 shadow-[0px_8px_24px_rgba(99,102,241,0.15)]">
                    <img
                      className="w-full h-full object-cover"
                      alt={member.imageAlt}
                      src={member.image}
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2 mt-2">
                  <h3 className="[font-family:'Roboto-Medium',Helvetica] font-medium text-[#2d2d2d] text-[17px] md:text-[18px] tracking-[-0.2px] leading-[24px]">
                    {member.name}
                  </h3>

                  <p className="[font-family:'Roboto-Regular',Helvetica] font-normal text-[#5a5a5a] text-[14px] md:text-[15px] tracking-[0] leading-[20px]">
                    {member.role}
                  </p>

                  <div className="flex items-center gap-3 mt-2">
                    <a
                      href={`https://www.linkedin.com/in/${member.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#584F95] hover:text-[#4752c4] transition-colors"
                      aria-label={`LinkedIn profile of ${member.name}`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a
                      href={`https://github.com/${member.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#584F95] hover:text-[#4752c4] transition-colors"
                      aria-label={`GitHub profile of ${member.name}`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a
                      href={`https://${member.linkedin}.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#584F95] hover:text-[#4752c4] transition-colors"
                      aria-label={`Website of ${member.name}`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 490 490" aria-hidden="true">
                        <path d="M245,0C109.9,0,0,109.9,0,245s109.9,245,245,245s245-109.9,245-245S380.1,0,245,0z M172.7,77.3c-14.9,20.8-29.3,47-39.2,79.2H85.3C104.8,121.4,135.6,93.4,172.7,77.3z M69.9,296.8C65,280.4,62.4,263,62.4,245s2.7-35.4,7.5-51.8h55c-2.7,16.1-4.3,33.3-4.3,51.8s1.6,35.7,4.3,51.8H69.9z M85.3,333.5h48.2c9.9,32.2,24.3,58.4,39.2,79.2C135.6,396.6,104.8,368.6,85.3,333.5z M226.7,419.6c-17.7-17.9-39.9-46.3-54.3-86.1h54.3V419.6z M226.7,296.8h-64.4c-3.1-15.9-5-33.1-5-51.8s1.8-35.9,4.9-51.8h64.5L226.7,296.8L226.7,296.8z M226.7,156.5h-54.5c14.4-40.2,36.7-68.6,54.5-86.4V156.5z M404.7,156.5h-48.2c-9.9-32.2-24.3-58.4-39.2-79.2C354.4,93.4,385.2,121.4,404.7,156.5z M263.3,70.4c17.7,17.9,39.9,46.3,54.3,86.1h-54.3V70.4z M263.3,193.2h64.4c3.1,15.9,5,33.1,5,51.8s-1.8,35.9-4.9,51.8h-64.5V193.2z M263.3,333.5h54.5c-14.4,40.2-36.7,68.6-54.5,86.4V333.5z M317.3,412.7c14.9-20.8,29.3-47,39.2-79.2h48.2C385.2,368.6,354.4,396.6,317.3,412.7z M427.6,245c0,18-2.7,35.4-7.5,51.8h-55c2.7-16.1,4.3-33.3,4.3-51.8s-1.6-35.7-4.3-51.8h55C425,209.6,427.6,227,427.6,245z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
