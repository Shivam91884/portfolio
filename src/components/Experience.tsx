import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-900">Experience</h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            My professional experiences have helped me develop practical skills and apply theoretical knowledge in real-world settings.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-indigo-800 mb-2">Trainee</h3>
                  <div className="flex items-center text-indigo-600 font-medium">
                    <Briefcase size={18} className="mr-2" />
                    <span>Skillvoid</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar size={18} className="mr-2" />
                    <span>February 2022 - April 2022</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={18} className="mr-2" />
                    <span>Remote</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700 mb-4">
                  Skillvoid is collaborated with E-cell IIT Roorkee. During my training, I had the opportunity to gain hands-on experience and develop my skills in various areas.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-indigo-700 mb-3">Key Responsibilities & Achievements</h4>
                <ul className="space-y-3">
                  <li className="flex">
                    <div className="flex-shrink-0 w-5 h-5 bg-indigo-500 rounded-full mt-1 mr-3"></div>
                    <p className="text-gray-700">Learned new materials, processes, and programs quickly.</p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-5 h-5 bg-indigo-500 rounded-full mt-1 mr-3"></div>
                    <p className="text-gray-700">Participated in on-the-job training, working closely with supervisors and coworkers and asking appropriate questions.</p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-5 h-5 bg-indigo-500 rounded-full mt-1 mr-3"></div>
                    <p className="text-gray-700">Attended training courses to build understanding of processes, techniques, and industry.</p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-5 h-5 bg-indigo-500 rounded-full mt-1 mr-3"></div>
                    <p className="text-gray-700">Supported departmental tasks to increase understanding of industry processes.</p>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-indigo-700 mb-3">Technologies & Skills Applied</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Object Oriented Programming</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Machine Learning</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Communication Skills</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Time Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-indigo-800 mb-2">Data Visualization Trainee</h3>
                  <div className="flex items-center text-indigo-600 font-medium">
                    <Briefcase size={18} className="mr-2" />
                    <span>Dell Foundation - Anudip Foundation</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar size={18} className="mr-2" />
                    <span>August 2024 - October 2024</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={18} className="mr-2" />
                    <span>On Site</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700 mb-4">
                Completed professional training in Data Analytics at Anudip Foundation, gaining hands-on experience with tools like Excel, SQL, Python, and Power BI, and working on real-world datasets to develop analytical and visualization skills.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-indigo-700 mb-3">Key Responsibilities & Achievements</h4>
                <ul className="space-y-3">
                  <li className="flex">
                    <div className="flex-shrink-0 w-5 h-5 bg-indigo-500 rounded-full mt-1 mr-3"></div>
                    <p className="text-gray-700">Assisted in developing over 10 interactive dashboards with Power BI, improving data interpretation and
                    reporting efficiency by 30%.</p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-5 h-5 bg-indigo-500 rounded-full mt-1 mr-3"></div>
                    <p className="text-gray-700">Collaborated with a team of 5 to analyse datasets, uncovering 15 key trends that informed crucial business
                    decisions.</p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-5 h-5 bg-indigo-500 rounded-full mt-1 mr-3"></div>
                    <p className="text-gray-700">Utilized Python and SQL skills to streamline data extraction processes, reducing turnaround time by 25% and
                    increasing accuracy by 20%.</p>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-indigo-700 mb-3">Technologies & Skills Applied</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">SQL</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Microsoft Excel</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Microsoft Power BI</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Python Libraries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
     
      </div>
    </section>
  );
};

export default Experience;