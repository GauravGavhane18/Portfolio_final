import { goalsData } from '@/utils/data/goals-data';

const Goals = () => {
  return (
    <div id='goals' className="relative z-50 my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            GOALS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        {/* Short Term Goals */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="flex items-center">
              <span className="text-2xl mr-3">🎯</span>
              <h3 className="text-2xl font-bold text-white">Short Term Goals</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goalsData.shortTerm.map((goal) => (
              <GoalCard key={goal.id} goal={goal} type="short" />
            ))}
          </div>
        </div>

        {/* Long Term Goals */}
        <div>
          <div className="flex items-center mb-8">
            <div className="flex items-center">
              <span className="text-2xl mr-3">🚀</span>
              <h3 className="text-2xl font-bold text-white">Long Term Goals</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goalsData.longTerm.map((goal) => (
              <GoalCard key={goal.id} goal={goal} type="long" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const GoalCard = ({ goal, type }) => {
  const cardBg = type === 'short' 
    ? 'bg-gradient-to-r from-violet-600 to-purple-600' 
    : 'bg-gradient-to-r from-pink-500 to-violet-600';
    
  return (
    <div className="bg-gradient-to-r from-[#0d1224] to-[#0a0e27] rounded-lg border border-[#1b2c68a0] p-6 hover:border-[#464c6a] transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10">
      <div className="flex items-start justify-between mb-4">
        <span className="text-3xl">{goal.icon}</span>
        <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${cardBg}`}>
          {goal.timeline}
        </span>
      </div>
      
      <h4 className="text-lg font-semibold text-white mb-2">{goal.title}</h4>
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{goal.description}</p>
      
      <div className="flex items-center justify-between">
        <span className="text-xs text-[#16f2b3] font-medium bg-[#16f2b3]/10 px-2 py-1 rounded">
          {goal.category}
        </span>
        <div className={`w-2 h-2 rounded-full ${type === 'short' ? 'bg-violet-500' : 'bg-pink-500'}`}></div>
      </div>
    </div>
  );
};

export default Goals;