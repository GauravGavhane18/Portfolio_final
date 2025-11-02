// @flow strict
import { extracurricular } from "@/utils/data/extracurricular";
import Image from "next/image";
import { BsTrophy, BsPeople, BsPalette, BsGear, BsHeart } from "react-icons/bs";
import lottieFile from '../../../assets/lottie/code.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Extracurricular() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Leadership':
        return <BsPeople size={36} />;
      case 'Competition':
        return <BsTrophy size={36} />;
      case 'Creative':
        return <BsPalette size={36} />;
      case 'Professional Development':
        return <BsGear size={36} />;
      case 'Social Service':
        return <BsHeart size={36} />;
      default:
        return <BsTrophy size={36} />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Leadership':
        return 'text-blue-500';
      case 'Competition':
        return 'text-yellow-500';
      case 'Creative':
        return 'text-pink-500';
      case 'Professional Development':
        return 'text-green-500';
      case 'Social Service':
        return 'text-red-500';
      default:
        return 'text-violet-500';
    }
  };

  return (
    <div id="extracurricular" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
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
            EXTRACURRICULAR
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
                extracurricular.map(activity => (
                  <GlowCard key={activity.id} identifier={`extracurricular-${activity.id}`}>
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
                          {activity.duration}
                        </p>
                      </div>
                      <div className="flex items-start gap-x-8 px-3 py-5">
                        <div className={`${getCategoryColor(activity.category)} transition-all duration-300 hover:scale-125 flex-shrink-0 mt-1`}>
                          {getCategoryIcon(activity.category)}
                        </div>
                        <div className="flex-1">
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {activity.title}
                          </p>
                          <p className="text-sm sm:text-base mb-1">{activity.organization}</p>
                          <p className="text-xs text-gray-400 mb-3">{activity.institution}</p>
                          <p className="text-xs sm:text-sm text-gray-300 mb-3">
                            {activity.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-2">
                            {activity.skills.map((skill, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-[#1a1443] text-[#16f2b3] text-xs rounded-md border border-[#16f2b3]"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex justify-end">
                            <span className="px-2 py-1 bg-gradient-to-r from-pink-500 to-violet-600 text-white text-xs rounded-full">
                              {activity.category}
                            </span>
                          </div>
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

export default Extracurricular;