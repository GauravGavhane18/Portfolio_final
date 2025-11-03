// @flow strict
import { internships } from "@/utils/data/internships";
import Image from "next/image";
import { BsBriefcase } from "react-icons/bs";
import lottieFile from '../../../assets/lottie/study.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Internships() {
  return (
    <div id="internships" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            INTERNSHIPS
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                internships.map(internship => (
                  <GlowCard key={internship.id} identifier={`internship-${internship.id}`}>
                    <div className="p-3 relative text-white">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {internship.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                          <BsBriefcase size={36} />
                        </div>
                        <div className="flex-1">
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {internship.title}
                          </p>
                          <p className="text-sm sm:text-base mb-2">{internship.company}</p>
                          <p className="text-xs text-gray-300 mb-3">
                            {internship.type} • {internship.location}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-300 mb-3">
                            {internship.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {internship.skills.map((skill, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-[#1a1443] text-[#16f2b3] text-xs rounded-md border border-[#16f2b3]"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                          
                          {/* Certificate Section for Deloitte and CodeSoft */}
                          {(internship.company === "Deloitte (Forage)" || internship.company === "CodeSoft") && (
                            <div className="mt-4 p-3 bg-[#1a1443]/30 rounded-lg border border-[#16f2b3]/20">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="text-sm font-semibold text-[#16f2b3]">
                                  📜 {internship.company} Certificate
                                </h4>
                                <div className="flex gap-2">
                                  <button
                                    onClick={() => {
                                      const certFile = internship.company === "Deloitte (Forage)" 
                                        ? "/deloitte.pdf" 
                                        : "/codesoft.jpg";
                                      window.open(certFile, '_blank');
                                    }}
                                    className="text-xs bg-[#16f2b3] text-[#1a1443] px-2 py-1 rounded hover:bg-[#14d4a0] transition-colors"
                                  >
                                    View
                                  </button>
                                  <button
                                    onClick={() => {
                                      const certFile = internship.company === "Deloitte (Forage)" 
                                        ? "/deloitte.pdf" 
                                        : "/codesoft.jpg";
                                      const link = document.createElement('a');
                                      link.href = certFile;
                                      link.download = `${internship.company.replace(/\s+/g, '_')}_Certificate`;
                                      link.click();
                                    }}
                                    className="text-xs bg-gradient-to-r from-pink-500 to-violet-600 text-white px-2 py-1 rounded hover:from-pink-600 hover:to-violet-700 transition-colors"
                                  >
                                    Download
                                  </button>
                                </div>
                              </div>
                              <p className="text-xs text-gray-300">
                                Certificate of completion for {internship.title.toLowerCase()} program
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internships;