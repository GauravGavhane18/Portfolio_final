// @flow strict
import { certifications } from "@/utils/data/certifications";
import Image from "next/image";
import { BsAward } from "react-icons/bs";
import lottieFile from '../../../assets/lottie/education.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Certifications() {
  return (
    <div id="certifications" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Certifications
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
                certifications.map(certification => (
                  <GlowCard key={certification.id} identifier={`certification-${certification.id}`}>
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
                          {certification.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                          <BsAward size={36} />
                        </div>
                        <div className="flex-1">
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {certification.title}
                          </p>
                          <p className="text-sm sm:text-base mb-2">{certification.issuer}</p>
                          <p className="text-xs text-[#16f2b3] mb-3">
                            ID: {certification.credentialId}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {certification.skills.map((skill, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-[#1a1443] text-[#16f2b3] text-xs rounded-md border border-[#16f2b3]"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                          {certification.credentialUrl && (
                            <a
                              href={certification.credentialUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block mt-3 text-[#16f2b3] text-sm hover:underline"
                            >
                              View Certificate →
                            </a>
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

export default Certifications;
