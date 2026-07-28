import { GraduationCap, BookOpen, Award, Globe, Laptop,ChevronDown  } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const programs = [
  {
    icon: GraduationCap,
    type: 'Undergraduate Programmes',
    faculties: [
      {
        name: 'Faculty of Engineering & Technology',
        path: '/programs/undergraduate/engineering',
        departments: ['Civil Engineering', 'Mechanical Engineering', 'Electrical Engineering','Electronic Engineering', 'Chemical Engineering', 'Industrial Engineering', 'Mechatronics Engineering', 'Petroleum Engineering', 'Biomedical Engineering', 'Materials & Metallurgical Engineering', 'Computer Engineering'],
      },
      {
        name: 'Faculty of Computing & AI',
        path: '/programs/undergraduate/computing',
        departments: ['Computer Science', 'Software Engineering', 'Artificial Intelligence', 'Cybersecurity'],
      },
      {
        name: 'Faculty of Business & Management',
        path: '/programs/undergraduate/business',
        departments: ['Accounting', 'Marketing', 'Business Administration', 'Economics'],
      },
      {
        name: 'Faculty of Health Sciences',
        path: '/programs/undergraduate/health-sciences',
        departments: ['Nursing', 'Public Health', 'Biomedical Sciences'],
      },
      {
        name: 'Faculty of Law',
        path: '/programs/undergraduate/law',
        departments: ['Common Law', 'International Law'],
      },

    ],
  },
  {
    icon: BookOpen,
    type: 'Postgraduate Programmes',
    faculties: [
      {
        name: 'Faculty of Engineering & Technology',
        path: '/programs/postgraduate/engineering',
        departments: ['M.Eng Civil Engineering', 'M.Eng Mechanical Engineering', 'M.Eng. Electrical & Electronic Engineering', 'M.Eng. Mechatronics Engineering', 'M.Eng. Industrial Engineering', 'M.Eng. Renewable Energy Engineering','M.Eng. Materials & Metallurgical Engineering', 'M.Eng. Robotics & Automation Engineering', 'Ph.D. Mechanical Engineering', 'Ph.D. Civil Engineering', 'Ph.D. Electrical & Electronic Engineering', 'Ph.D. Computer Engineering', 'Ph.D. Chemical Engineering', 'Ph.D. Mechatronics Engineering','Ph.D. Industrial Engineering', 'Ph.D. Renewable Energy Engineering'],
      },
      {
        name: 'Faculty of Computing & AI',
        path: '/programs/postgraduate/computing',
        departments: ['M.Sc. Computer Science', 'M.Sc. Software Engineering', 'M.Sc. Artificial Intelligence', 'M.Sc. Cybersecurity', 'M.Sc. Data Science', 'M.Sc. Information Technology', 'M.Sc. Human–Computer Interaction', 'M.Sc. Cloud Computing', 'Ph.D. Computer Science', 'Ph.D. Artificial Intelligence', 'Ph.D. Cybersecurity', 'Ph.D. Data Science', 'Ph.D. Software Engineering'],
      },
      {
        name: 'Faculty of Business & Management',
        path: '/programs/postgraduate/business',
        departments: ['Master of Business Administration (MBA)', 'M.Sc. Accounting', 'M.Sc. Finance', 'M.Sc. Marketing', 'M.Sc. Human Resource Management', 'M.Sc. Business Analytics', 'M.Sc. International Business', 'M.Sc. Supply Chain Management', 'Ph.D. Business Administration', 'Ph.D. Accounting', 'Ph.D. Finance', 'Ph.D. Marketing', 'Ph.D. Economics'],
      },
      {
        name: 'Faculty of Health Sciences',
        path: '/programs/postgraduate/health',
        departments: ['Master of Public Health (MPH)', 'M.Sc. Nursing', 'M.Sc. Public Health', 'M.Sc. Medical Laboratory Science', 'M.Sc. Health Information Management', 'M.Sc. Nutrition & Dietetics', 'Ph.D. Public Health', 'Ph.D. Nursing', 'Ph.D. Medical Laboratory Science', 'Ph.D. Nutrition & Dietetics'],
      },
      {
        name: 'Faculty of Law',
        path: '/programs/postgraduate/law',
        departments: ['LL.M. (Master of Laws)', 'LL.M. Commercial Law', 'LL.M. International Law', 'LL.M. Human Rights Law', 'LL.M. Corporate & Financial Law', 'Ph.D. Law', 'Ph.D. International Law', 'Ph.D. Commercial Law', 'Ph.D. Constitutional Law'],
      },
    ],
  },
  {
    icon: Award,
    type: 'Professional Certificates',
    faculties: [
      {
        name: 'School of Computing & Digital Technologies',
        path: '/programs/certificates/computing',
        departments: ['Data Analytics', 'UI/UX Design', 'Cloud Computing', 'Mobile App Development', 'Web Development'],
      },
      {
        name: 'School of Engineering & Technology',
        path: '/programs/certificates/engineering',
        departments: ['AutoCAD & CAD Design', 'HVAC Systems','Industrial Automation', '3D Printing Technology'],
      },
      {
        name: 'School of Business & Entrepreneurship',
        path: '/programs/certificates/business',
        departments: ['Digital Marketing', 'Project Management', 'Business Analytics', 'Supply Chain Management'],
      },
      {
        name: 'School of Health Sciences',
        path: '/programs/certificates/health',
        departments: ['Public Health', 'First Aid & CPR', 'Nutrition & Wellness', 'Medical Laboratory Techniques'],
      },
    ],
  },
  {
    icon: Globe,
    type: 'International Programmes',
    faculties: [
      {
        name: 'Student Exchange Programmes',
        path: '/programs/international/exchange',
        departments: ['Semester Abroad', 'Summer Exchange', 'Global Classroom Initiative'],
      },
      {
        name: 'Global Partnerships',
        path: '/programs/international/partnerships',
        departments: ['Dual Degree Programmes', 'Joint Research', 'Academic Collaboration'],
      },
      {
        name: 'Global Learning',
        path: '/programs/international/learning',
        departments: ['International Summer School', 'International Winter School', 'Global Leadership Programme'],
      },
      {
        name: 'Language & Cultural Studies',
        path: '/programs/international/language',
        departments: ['English Language Centre', 'French Language Centre', 'Chinese Language Centre', 'Spanish Language Centre'],
      },
    ],
  },
  {
    icon: Laptop,
    type: 'Open & Distance Learning',
    faculties: [
      {
        name: 'School of Business & Management',
        path: '/programs/distance-learning/business',
        departments: ['Online MBA', 'PGD in Business Administration', 'B.Sc. Business Administration'],
      },
      {
        name: 'School of Computing & Digital Technology',
        path: '/programs/distance-learning/computing',
        departments: ['Online B.Sc Computer Science', 'Diploma in Software Development', 'Certificate in Data Analytics'],
      },
      {
        name: 'School of Education',
        path: '/programs/distance-learning/education',
        departments: ['B.Ed. Educational Management', 'B.Ed. Adult Education', 'PGDE (Postgraduate Diploma in Education)'],
      },
      {
        name: 'School of Social Sciences',
        path: '/programs/distance-learning/social-science',
        departments: ['B.Sc. Economics', 'B.Sc. Psychology', 'B.Sc. Public Administration', 'Diploma in Criminology'],
      },
    ],

  },
];

export default function ProgramList() {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggleFaculty = (key: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  return (
    <section className='px-8 md:px-12 py-10 bg-[#F6F6F2]'>
      <div className='max-w-2xl mb-10'>
        <span className='font-mono text-sm tracking-[0.2em] uppercase text-black/50'>
          Explore Every Faculty & School
        </span>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {programs.map((program, programIndex) => {
          const Icon = program.icon;
          return (
            <div
              key={programIndex}
              className='bg-white rounded-2xl overflow-hidden border border-black/5 hover:shadow-md transition-shadow duration-300'
            >
              {/* Header band */}
              <div className='bg-[#B8901F] flex items-center justify-between px-5 py-4'>
                <h3 className='text-[#1E3A8A] font-serif font-semibold text-lg leading-tight'>
                  {program.type}
                </h3>
                <Icon size={26} strokeWidth={1.5} className='text-[#1E3A8A] flex-shrink-0' />
              </div>

              {/* Faculty list */}
              <ul className='py-2'>
                {program.faculties.map((faculty, facultyIndex) => {
                  const key = `${programIndex}-${facultyIndex}`;
                  const isOpen = expanded.has(key);
                  return (
                    <li key={facultyIndex} className='border-b border-black/5 last:border-b-0'>
                      <div className='flex items-center justify-between px-5 py-3 gap-2'>
                        <Link
                          to={faculty.path}
                          className='font-sans text-sm text-black/70 hover:text-[#1E3A8A] transition-colors leading-relaxed'
                        >
                          {faculty.name}
                        </Link>
                        <button
                          onClick={() => toggleFaculty(key)}
                          aria-label={`Toggle ${faculty.name} departments`}
                          aria-expanded={isOpen}
                          className='flex-shrink-0 p-1 rounded-full hover:bg-black/5 transition-colors'
                        >
                          <ChevronDown
                            size={16}
                            strokeWidth={2}
                            className={`text-black/40 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                      </div>

                      {/* Departments dropdown */}
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className='overflow-hidden'>
                          <ul className='px-5 pb-3 pl-8 flex flex-col gap-2'>
                            {faculty.departments.map((dept, deptIndex) => (
                              <li key={deptIndex} className='flex items-start gap-2'>
                                <span className='w-1 h-1 rounded-full bg-[#1E3A8A]/40 mt-2 flex-shrink-0' />
                                <span className='font-sans text-xs text-black/55'>{dept}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}