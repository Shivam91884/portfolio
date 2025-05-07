import React from 'react';

interface SkillCardProps {
  category: string;
  skills: string[];
  icon: React.ReactNode;
  bgColor: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ category, skills, icon, bgColor }) => {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-transform duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg`}>
      <div className={`${bgColor} py-4 px-6 flex items-center gap-3`}>
        {icon}
        <h3 className="text-xl font-bold text-white">{category}</h3>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const skillsData = [
    {
      category: "Programming Languages",
      icon: <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center text-indigo-600">&lt;/&gt;</div>,
      skills: ["Python", "Object Oriented Programming"],
      bgColor: "bg-indigo-600"
    },
    {
      category: "Databases",
      icon: <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center text-indigo-600">&lt;/&gt;</div>,
      skills: ["SQL"],
      bgColor: "bg-indigo-600"
    },
    {
      category: "Python Libraries",
      icon: <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center text-blue-600">&#9881;</div>,
      skills: ["NumPy", "Pandas", "Matplotlib", "TensorFlow", "Seaborn"],
      bgColor: "bg-blue-600"
    },
    {
      category: "Tools",
      icon: <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center text-blue-600">&#9881;</div>,
      skills: ["Machine Learning", "Artificial Intelligence", "IoT"],
      bgColor: "bg-blue-600"
    },
    {
      category: "AI & ML",
      icon: <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center text-blue-600">&#9881;</div>,
      skills: ["Supervised Learning ", "Unsupervised Learning"],
      bgColor: "bg-blue-600"
    },
    {
      category: "Soft Skills",
      icon: <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center text-purple-600">&#128172;</div>,
      skills: ["Communication Skills", "Time Management", "Problem Solving"],
      bgColor: "bg-purple-600"
    },
    {
      category: "Languages",
      icon: <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center text-green-600">&#127760;</div>,
      skills: ["English (Advanced)", "Hindi (Native)"],
      bgColor: "bg-green-600"
    },
    {
      category: "Others",
      icon: <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center text-purple-600">&#128172;</div>,
      skills: ["Data Analytics", "Data Analysis", "Data Visualization", "Data Modelling", "Statistical Analysis", "Statistics"],
      bgColor: "bg-purple-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-900">Skills</h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            My toolkit of technical and soft skills that help me excel in the field of Artificial Intelligence and software development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((item, index) => (
            <SkillCard key={index} {...item} />
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-indigo-900">Proficiency Levels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-indigo-700">Python</h4>
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-600 rounded-full" style={{ width: "85%" }}></div>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span>Beginner</span>
                <span>Advanced</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-indigo-700">Machine Learning</h4>
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-600 rounded-full" style={{ width: "70%" }}></div>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span>Beginner</span>
                <span>Advanced</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-indigo-700">SQL</h4>
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-600 rounded-full" style={{ width: "80%" }}></div>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span>Beginner</span>
                <span>Advanced</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-indigo-700">Communication Skills</h4>
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-600 rounded-full" style={{ width: "90%" }}></div>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span>Beginner</span>
                <span>Advanced</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;