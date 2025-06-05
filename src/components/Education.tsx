import React from 'react';
import { GraduationCap, Building, CalendarDays } from 'lucide-react';

interface EducationItemProps {
  institution: string;
  degree: string;
  location: string;
  period: string;
  description: string;
}

const EducationItem: React.FC<EducationItemProps> = ({ 
  institution, 
  degree, 
  location, 
  period, 
  description 
}) => {
  return (
    <div className="mb-10">
      <div className="flex flex-col md:flex-row md:items-center mb-2 gap-1 md:gap-4">
        <h3 className="text-xl font-bold text-indigo-800 mb-1 md:mb-0">{institution}</h3>
        <div className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm self-start md:self-auto">
          {period}
        </div>
      </div>
      <div className="flex items-center gap-1 mb-2 text-gray-600">
        <GraduationCap size={18} />
        <span>{degree}</span>
      </div>
      <div className="flex items-center gap-1 mb-3 text-gray-600">
        <Building size={18} />
        <span>{location}</span>
      </div>
      <p className="text-gray-700">
        {description}
      </p>
    </div>
  );
};

const Education: React.FC = () => {
  const educationItems = [
    {
      institution: "IIMT College of Engineering",
      degree: "B.tech CSE(AI)",
      location: "Greater Noida",
      period: "2021 - Present",
      description: "Currently pursuing B.tech in Artificial Intelligence with focus on machine learning, deep learning, and artificial intelligence applications. Current academic performance: 62% (5th Sem)"
    },
    {
      institution: "Praxis Vidyapeeth",
      degree: "12th",
      location: "Basti",
      period: "2018 - 2020",
      description: "Completed higher secondary education with 75% marks, focusing on science and mathematics subjects."
    },
    {
      institution: "CDA Academy",
      degree: "10th",
      location: "Basti",
      period: "2016 - 2018",
      description: "Completed secondary education with 64% marks, establishing a strong foundation in basic sciences and mathematics."
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-900">Education</h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            My academic journey has provided me with a strong foundation in technology and science, preparing me for challenges in the field of Artificial Intelligence.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-indigo-200"></div>
            
            {educationItems.map((item, index) => (
              <div key={index} className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white">
                  <CalendarDays size={16} />
                </div>
                <EducationItem {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
