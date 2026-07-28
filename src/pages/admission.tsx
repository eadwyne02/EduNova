import { useState, useEffect, useRef } from 'react';
import library from '../assets/library.webp';
import { ChevronDown } from 'lucide-react';

const options = [
  {
    pathway: 'Undergraduate',
    requirement: ['Minimum of five credit passes in relevant subjects', 'Valid entrance examination results (where applicable)', 'Completed online application', 'Supporting documents'],
  },
  {
    pathway: 'Postgraduate',
    requirement: ["Bachelor's degree from a recognized institution", 'Academic transcripts', 'Statement of purpose', 'Two referee reports', 'CV (where applicable)'],
  },
  {
    pathway: 'International Students',
    requirement: ['Academic transcripts', 'English language proficiency (if required)', 'Passport', 'Student visa documentation'],
  },
  {
    pathway: 'Open & Distance Learning (ODL)',
    requirement: ['Meet the minimum academic requirements for the chosen programme.', 'Possess at least five (5) credit passes in relevant subjects, including English Language and Mathematics (where applicable).', 'Complete the online application form.', 'Upload academic certificates and transcripts (for postgraduate applicants).', 'Provide a valid means of identification.', 'Submit a recent passport photograph.', 'Demonstrate access to a computer or mobile device with reliable internet connectivity for online learning.'],
  },
  {
    pathway: 'Professional Certificates',
    requirement: ['Be at least 16 years of age.', 'Possess a minimum of a Senior Secondary School Certificate (SSCE) or its equivalent. (Requirements may vary depending on the course.)', 'Complete the online application form.', 'Upload a valid means of identification.', 'Submit a recent passport photograph.', 'Meet any programme-specific prerequisites, where applicable (for example, basic computer literacy for technology courses).', 'Pay the applicable course registration fee.'],
  },
];

const processSteps = [
  'Choose a Programme',
  'Check Requirements',
  'Complete Online Application',
  'Upload Required Documents',
  'Pay Application Fee',
  'Receive Admission Decision',
  'Accept Offer & Register',
];

const importantDates = [
  { event: 'Applications Open', date: 'January 15, 2026' },
  { event: 'Priority Deadline', date: 'March 31, 2026' },
  { event: 'Regular Deadline', date: 'June 30, 2026' },
  { event: 'Admission Decisions', date: 'July 20, 2026' },
  { event: 'Student Registration', date: 'August 18–22, 2026' },
  { event: 'Orientation', date: 'August 25, 2026' },
];

const faqs = [
  { q: 'How do I apply?', a: 'Complete the online application form on our admissions portal, upload the required documents, and pay the application fee to submit your application.' },
  { q: 'What documents are required?', a: 'Requirements vary by pathway — see the Admission Requirements section above for a full breakdown per programme type.' },
  { q: 'Can international students apply?', a: 'Yes, international students are welcome to apply. Additional documentation such as passport and visa information is required.' },
  { q: 'Is accommodation available?', a: 'Yes, on-campus accommodation is available for both undergraduate and postgraduate students, subject to availability.' },
  { q: 'Are scholarships available?', a: 'EduNova offers merit-based and need-based scholarships. Details are available through the Financial Aid office.' },
  { q: 'How long does admission take?', a: 'Admission decisions are typically released within 4–6 weeks after the application deadline.' },
];

export default function Admission() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openReq, setOpenReq] = useState<number | null>(0);

  return (
    <div>
      <div className='relative h-[420px] md:h-[520px] overflow-hidden rounded-t-2xl'>
        <img src={library} alt="EduNova University library" className='w-full h-full object-cover' />
        <div className='absolute inset-0 bg-gradient-to-t from-[#0B1524]/90 via-[#0B1524]/40 to-[#0B1524]/30' />
        <div className='absolute inset-0 flex flex-col justify-center items-center text-center px-6'>
          <span className='font-mono text-xs tracking-[0.3em] uppercase text-[#B8901F] mb-4'>Applications Now Open</span>
          <h2 className='font-serif text-white text-4xl md:text-6xl font-semibold leading-tight max-w-2xl'>Admissions 2026/2027</h2>
          <p className='font-sans text-white/75 text-base md:text-lg mt-5 max-w-xl leading-relaxed'>Begin your journey at EduNova University and join a community of innovators, researchers, and future leaders.</p>
          <div className='flex gap-3'>
            <a href='#' className='bg-[#B8901F] text-[#1E3A8A] font-semibold text-sm px-6 py-3 rounded-2xl mt-8 transition-all duration-300 ease-out hover:-translate-y-[2px] hover:shadow-lg'>Apply Now</a>
            <a href='#' className='bg-white/10 border border-white/30 text-white font-semibold text-sm px-6 py-3 rounded-2xl mt-8 transition-all duration-300 ease-out hover:-translate-y-[2px] hover:bg-white/20'>Download Prospectus</a>
          </div>
        </div>
      </div>
      <section className='px-6 md:px-12 py-10 bg-white'>
        <div className='max-w-2xl mb-12'>
          <h2 className='font-serif text-3xl md:text-4xl font-semibold text-[#14263F] mt-3'>Admission Requirements</h2>
        </div>
        <div className='max-w-3xl flex flex-col gap-3'>
          {options.map((option, index) => {
            const isOpen = openReq === index;
            return (
              <div key={index} className='border border-black/10 rounded-xl overflow-hidden'>
                <button onClick={() => setOpenReq(isOpen ? null : index)} className='w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-black/[0.02] transition-colors'>
                  <span className='font-serif text-lg font-semibold text-black'>{option.pathway}</span>
                  <ChevronDown size={18} className={`text-black/40 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className='overflow-hidden'>
                    <ul className='px-6 pb-5 flex flex-col gap-2'>
                      {option.requirement.map((req, reqIndex) => (
                        <li key={reqIndex} className='flex items-start gap-2 text-sm text-black/65 leading-relaxed'>
                          <span className='w-1 h-1 rounded-full bg-[#1E3A8A]/50 mt-2 flex-shrink-0' />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className='px-8 md:px-12 py-10 bg-[#F6F6F2]'>
        <div className='max-w-2xl mb-8'>
          <h2 className='font-serif text-3xl md:text-4xl font-semibold text-[#14263F] mt-3'>Application Process</h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {processSteps.map((step, index) => (
            <div key={index} className='bg-white rounded-xl p-6 border border-black/5'>
              <span className='font-serif text-3xl font-bold text-[#B8901F]'>0{index + 1}</span>
              <p className='font-sans text-sm text-black/70 mt-3 leading-relaxed'>{step}</p>
            </div>
          ))}
        </div>
      </section>
      <section className='px-8 md:px-12 py-10 bg-white'>
        <div className='max-w-2xl mb-12'>
          <h2 className='font-serif text-3xl md:text-4xl font-semibold text-[#14263F] mt-3'>
            Important Dates
          </h2>
        </div>
        <div className='max-w-3xl flex flex-col divide-y divide-black/10'>
          {importantDates.map((item, index) => (
            <div key={index} className='flex justify-between items-center py-4'>
              <span className='font-sans text-black/80 text-sm md:text-base'>{item.event}</span>
              <span className='font-mono text-xs md:text-sm text-black/50'>{item.date}</span>
            </div>
          ))}
        </div>
      </section>
      <section className='px-8 md:px-12 pt-4 pb-8 bg-white'>
        <div className='max-w-2xl mb-6'>
          <h2 className='font-serif text-2xl md:text-4xl font-semibold text-[#14263F]'>
            Frequently Asked Questions
          </h2>
        </div>
        <div className='max-w-3xl flex flex-col divide-y divide-black/10'>
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className='py-4'>
                <button onClick={() => setOpenFaq(isOpen ? null : index)} className='w-full flex items-center justify-between text-left'>
                  <span className='font-sans font-medium text-black text-base'>{faq.q}</span>
                  <ChevronDown size={18} className={`text-black/40 flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] mt-3' : 'grid-rows-[0fr]'}`}>
                  <div className='overflow-hidden'>
                    <p className='font-sans text-sm text-black/60 leading-relaxed pr-8'>{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}