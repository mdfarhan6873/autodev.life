'use client';

const ProjectShowcase = () => {
  const projectShowcases = [
    {
      title: "Ask in bio",
      image: "/api/placeholder/300/200",
      category: "Social App",
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Travel Explorer",
      image: "/api/placeholder/300/200", 
      category: "Travel App",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Code Editor",
      image: "/api/placeholder/300/200",
      category: "Developer Tool",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "NaviStride",
      image: "/api/placeholder/300/200",
      category: "Navigation App",
      color: "from-teal-500 to-blue-600"
    },
    {
      title: "Honor Our Heroes",
      image: "/api/placeholder/300/200",
      category: "Memorial Site",
      color: "from-gray-700 to-gray-900"
    },
    {
      title: "AI Storybook Generator",
      image: "/api/placeholder/300/200",
      category: "Creative Tool",
      color: "from-cyan-500 to-blue-600"
    },
    // {
    //   title: "Learning Platform",
    //   image: "/api/placeholder/300/200",
    //   category: "Education",
    //   color: "from-blue-600 to-purple-700"
    // },
    // {
    //   title: "Make Complex Simple",
    //   image: "/api/placeholder/300/200",
    //   category: "Productivity",
    //   color: "from-pink-600 to-red-700"
    // },
    // {
    //   title: "The Mindloom",
    //   image: "/api/placeholder/300/200",
    //   category: "Wellness App",
    //   color: "from-orange-400 to-pink-500"
    // },
    // {
    //   title: "Dashboard Analytics",
    //   image: "/api/placeholder/300/200",
    //   category: "Business Tool",
    //   color: "from-slate-600 to-slate-800"
    // },
    // {
    //   title: "Tripp'n It",
    //   image: "/api/placeholder/300/200",
    //   category: "Travel Planner",
    //   color: "from-red-600 to-black"
    // },
    // {
    //   title: "Game Builder",
    //   image: "/api/placeholder/300/200",
    //   category: "Gaming Platform",
    //   color: "from-gray-800 to-black"
    // }
  ];

  return (
    <section className="relative bg-black py-16  pt-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">From the builders</h2>
            <p className="text-gray-400 text-lg">Explore what users are building with AutoDev.</p>
          </div>
          <button className="text-[#14a89b] hover:text-[#128a7e] transition-colors font-medium">
            Browse the Gallery →
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projectShowcases.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-[#14a89b]/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`aspect-video bg-gradient-to-br ${project.color} flex items-center justify-center relative`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative text-white font-semibold text-sm text-center px-2">{project.title}</div>
              </div>
              <div className="p-4">
                <h3 className="text-white font-medium mb-1">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.category}</p>
              </div>
              <div className="absolute inset-0 bg-[#14a89b]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;