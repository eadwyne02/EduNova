import { GraduationCap, BookOpen, Award, Globe } from 'lucide-react';
const programs = [
  {
    icon: GraduationCap,
    type: 'Undergraduate Programmes',
    tagline: 'Start Strong',
    description: "Build a solid academic foundation with industry-focused bachelor's degrees designed for real-world impact.",
  },
  {
    icon: BookOpen,
    type: 'Postgraduate Programmes',
    tagline: 'Go Deeper',
    description: "Advance your expertise with degrees built for leadership, research, and professional excellence.",
  },
  {
    icon: Award,
    type: 'Professional Certificates',
    tagline: 'Move Faster',
    description: "Gain practical, industry-recognized skills through flexible programmes designed for career advancement.",
  },
  {
    icon: Globe,
    type: 'International Programmes',
    tagline: 'Think Global',
    description: "Expand your horizons through global partnerships, exchange programmes, and international learning opportunities.",
  },
];

export default function Program() {
  return (
    <section className='px-8 md:px-12 py-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10'>
        {programs.map((program, index) => {
          const Icon = program.icon;
          return (
            <div key={index} className='group cursor-pointer bg-white p-6 md:p-8 border border-black/10 rounded-xl transition-all duration-300 hover:border-black/30 hover:shadow-sm'>
              <div className='flex items-center justify-center w-12 h-12 rounded-full bg-[#14263F]/5 mb-5 transition-colors duration-300 group-hover:bg-[#14263F]'>
                <Icon size={22} strokeWidth={1.5} className='text-[#14263F] transition-colors duration-300 group-hover:text-white'/>
              </div>
              <h3 className='font-mono text-xs tracking-wide uppercase text-black/40 mb-2 transition-colors group-hover:text-[#14263F]'>{program.type}</h3>
              <p className='font-serif text-2xl md:text-3xl font-semibold text-[#14263F] mb-3'>{program.tagline}</p>
              <p className='font-sans text-black/60 text-base leading-relaxed max-w-md mb-5'>{program.description}</p>
               <a href='#' className='inline-flex items-center gap-1 font-sans text-sm text-black transition-all duration-300 hover:gap-2'>
                Learn more <span aria-hidden='true'>→</span>
              </a>
            </div>
          );
        })}
      </div>
      <div className='flex  z-50 lg:mt-5'>
        <button className='text-[#14263F] text-lg p-2 rounded-2xl transition-all duration-300 ease-out hover:text-[#14263F] hover:tracking-wide'>View All Programmes <span aria-hidden='true'>→</span></button>
      </div>
    </section>
  );
}