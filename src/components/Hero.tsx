import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-indigo-900 to-blue-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fadeIn">
            SHIVAM AGRAHARI
          </h1>
          <div className="w-20 h-1 bg-indigo-400 mb-6"></div>
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-8 opacity-90 max-w-3xl animate-fadeIn animation-delay-200">
            Artificial Intelligence Engineering Student
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mb-10 leading-relaxed text-indigo-100 animate-fadeIn animation-delay-400">
          Highly motivated individual with a strong foundation in Python, SQL, and Python Libraries, gained through hands-on experience at Anudip Founadtion.  Demonstrated exceptional aptitude for mastering new technologies and a proven ability to quickly learn and apply new skills.  Seeking a challenging role in a tech-driven environment to utilize and further develop my technical capabilities.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fadeIn animation-delay-600">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors"
            >
              Contact Me
            </a>
            <a 
              href="#experience" 
              className="px-6 py-3 bg-transparent border border-white hover:bg-white hover:text-indigo-900 rounded-full transition-colors"
            >
              View Experience
            </a>
          </div>
          <a 
            href="#about" 
            className="absolute bottom-8 animate-bounce hover:text-indigo-300 transition-colors"
          >
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
