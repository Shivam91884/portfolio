import React from 'react';


const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-900">About Me</h2>
            <div className="w-16 h-1 bg-indigo-500 mb-6"></div>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Adept in Python and demonstrating exceptional aptitude, I quickly mastered new materials and technologies during my tenure at Skillvoid. Through proactive engagement in training and collaboration with seasoned professionals, I significantly enhanced my proficiency in Object-Oriented Programming and Machine Learning.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Currently pursuing B.tech in Artificial Intelligence at IIMT Engineering College, Greater Noida, I am positioning myself as a valuable asset in tech-driven environments.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="px-4 py-2 bg-indigo-50 text-indigo-800 rounded-full">
                Artificial Intelligence
              </div>
              <div className="px-4 py-2 bg-indigo-50 text-indigo-800 rounded-full">
                Python
              </div>
              <div className="px-4 py-2 bg-indigo-50 text-indigo-800 rounded-full">
                Data Analysis
              </div>
              <div className="px-4 py-2 bg-indigo-50 text-indigo-800 rounded-full">
                Data Analyst
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-gray-700">
              <div className="flex items-center gap-2">
                <span className="font-semibold">Location:</span>
                <span>Greater Noida</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Email:</span>
                <span>shivamagrahari91884@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Phone:</span>
                <span>+91 9651175679</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Interests:</span>
                <span>AI, ML, Programming</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-indigo-600 to-blue-500 shadow-xl flex items-center justify-center text-white text-5xl font-bold">
            <img src="src/components/pro.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;