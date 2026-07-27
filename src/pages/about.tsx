import edu from '../assets/gate.webp'
import chancellor from '../assets/chancellor.webp'
import vc from '../assets/vice-chancellor.webp'
import dvcAcademics from '../assets/dvc-academics.webp'
import dvcAdmin from '../assets/dvc-admin.webp'
import registra from '../assets/registra.webp'
import liberian from '../assets/liberian.webp'
import bursar from '../assets/bursar.webp'
import library from '../assets/lib.webp'
import aiRob from '../assets/ai-rob.webp'
import lab from '../assets/lab.webp'
import innovation from '../assets/inn hub.webp'
import sport from '../assets/sport.webp'
import medical from '../assets/hospital.webp'
import classroom from '../assets/class.webp'
import hostel from '../assets/hostel.webp'
import { Sparkles, Lightbulb, ShieldCheck, Users, Handshake, Leaf, Crown, HeartHandshake } from 'lucide-react'

const leaders = [
  { name: "Prof. Christopher A. Adebayo, CON", position: "Chancellor", image: chancellor, qualification: 'B.Sc., M.Sc., Ph.D., FNSE', alt: 'University Chancellor' },
  { name: "Prof. Daniel O. Adekunle", position: "Vice-Chancellor", image: vc, qualification: 'B.Eng., M.Eng., Ph.D., FAS', alt: 'University Vice-Chancellor' },
  { name: "Prof. Grace A. Eze", position: "Deputy Vice-Chancellor (Academic)", image: dvcAcademics, qualification: 'B.Sc., M.Sc., Ph.D.', alt: 'Deputy Vice-Chancellor (Academic)' },
  { name: "Prof. Samuel T. Yusuf", position: "Deputy Vice-Chancellor (Administration)", image: dvcAdmin, qualification: 'B.Sc., MBA, Ph.D.', alt: 'Deputy Vice-Chancellor (Administration)' },
  { name: "Mrs. Olufunmilayo E. Akinola", position: "Registrar", image: registra, qualification: 'B.A., MPA, FCIA', alt: 'Registrar' },
  { name: "Mr. Ibrahim A. Bello", position: "Bursar", image: bursar, qualification: 'B.Sc. Accounting, MBA, FCA', alt: 'Bursar' },
  { name: "Dr. Esther O. Adeyemi", position: "University Librarian", image: liberian, qualification: 'B.LIS., M.LIS., Ph.D.', alt: 'University Librarian' },
]

const facilities = [
  { name: 'Modern Library', image: library, alt: 'Modern Library' },
  { name: 'AI & Robotics Innovation Centre', image: aiRob, alt: 'AI & Robotics Innovation Centre' },
  { name: 'Engineering Laboratories', image: lab, alt: 'Engineering Laboratories' },
  { name: 'Student Innovation Hub', image: innovation, alt: 'Student Innovation Hub' },
  { name: 'Sports Complex', image: sport, alt: 'Sports Complex' },
  { name: 'Medical Centre', image: medical, alt: 'Medical Centre' },
  { name: 'Smart Classrooms', image: classroom, alt: 'Smart Classrooms' },
  { name: 'Student Accommodation', image: hostel, alt: 'Student Accommodation' },
]

const coreValues = [
  { label: 'Excellence', icon: Sparkles },
  { label: 'Innovation', icon: Lightbulb },
  { label: 'Integrity', icon: ShieldCheck },
  { label: 'Diversity & Inclusion', icon: Users },
  { label: 'Collaboration', icon: Handshake },
  { label: 'Sustainability', icon: Leaf },
  { label: 'Leadership', icon: Crown },
  { label: 'Community Service', icon: HeartHandshake },
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <div className='relative w-full h-[420px] md:h-[520px]'>
        <img src={edu} alt="EduNova University campus gate" className='w-full h-full object-cover' />
        <div className='absolute inset-0 bg-gradient-to-t from-[#0B1524]/90 via-[#0B1524]/45 to-[#0B1524]/20' />
        <div className='absolute inset-0 flex flex-col justify-center items-center text-center px-6'>
          <span className='font-mono text-xs tracking-[0.3em] uppercase text-[#B8901F] mb-4'>
            Est. 1985
          </span>
          <h2 className='font-serif text-white text-4xl md:text-6xl font-semibold leading-tight max-w-2xl'>
            About EduNova University
          </h2>
          <p className='font-sans text-white/75 text-base md:text-lg mt-5 max-w-xl leading-relaxed'>
            Empowering minds through innovation, research, and global education to shape the leaders of tomorrow.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className='px-8 md:px-12 py-20 bg-white'>
        <div className='max-w-3xl mx-auto text-center'>
          <span className='font-mono text-xs tracking-[0.2em] uppercase text-black/50'>Who We Are</span>
          <h3 className='font-serif text-3xl md:text-4xl font-semibold text-black mt-3 mb-6'>
            Our Story
          </h3>
          <p className='font-sans text-black/65 text-base md:text-lg leading-relaxed'>
            Founded with a vision to redefine higher education, EduNova University is a forward-thinking institution committed to academic excellence, innovation, and societal impact. Through world-class teaching, cutting-edge research, and industry collaboration, we prepare students to thrive in an ever-changing global landscape.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className='px-8 md:px-12 py-20 bg-[#F6F6F2]'>
        <div className='max-w-2xl mb-14'>
          <span className='font-mono text-xs tracking-[0.2em] uppercase text-black/50'>What Drives Us</span>
          <h3 className='font-serif text-3xl md:text-4xl font-semibold text-black mt-3'>
            Mission & Vision
          </h3>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-16'>
          <div className='bg-white rounded-2xl p-8 border border-black/5'>
            <span className='font-mono text-xs tracking-widest uppercase text-[#B8901F]'>Vision</span>
            <p className='font-serif text-xl md:text-2xl text-black mt-3 leading-snug'>
              To be a globally recognized university driving innovation, research, and transformative education.
            </p>
          </div>
          <div className='bg-white rounded-2xl p-8 border border-black/5'>
            <span className='font-mono text-xs tracking-widest uppercase text-[#B8901F]'>Mission</span>
            <p className='font-serif text-xl md:text-2xl text-black mt-3 leading-snug'>
              To empower students through quality education, groundbreaking research, and meaningful community engagement while fostering creativity, leadership, and lifelong learning.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <span className='font-mono text-xs tracking-widest uppercase text-black/40 block mb-6'>Core Values</span>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
          {coreValues.map((value, index) => {
            const Icon = value.icon
            return (
              <div key={index} className='bg-white rounded-xl p-5 flex flex-col items-center text-center gap-3 border border-black/5 hover:border-[#1E3A8A]/30 transition-colors duration-300'>
                <Icon size={22} strokeWidth={1.5} className='text-[#1E3A8A]' />
                <span className='font-sans text-sm text-black/75'>{value.label}</span>
              </div>
            )
          })}
        </div>
      </section>

      {/* Leadership */}
      <section className='px-8 md:px-12 py-20 bg-white'>
        <div className='max-w-2xl mb-14'>
          <span className='font-mono text-xs tracking-[0.2em] uppercase text-black/50'>Meet the Team</span>
          <h3 className='font-serif text-3xl md:text-4xl font-semibold text-black mt-3'>
            University Leadership
          </h3>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {leaders.map((leader, index) => (
            <div key={index} className='group'>
              <div className='relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-black/5'>
                <img
                  src={leader.image}
                  alt={leader.alt}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                />
              </div>
              <h4 className='font-serif text-lg font-semibold text-black leading-snug'>
                {leader.name}
              </h4>
              <p className='font-mono text-xs tracking-wide uppercase text-[#B8901F] mt-1'>
                {leader.position}
              </p>
              <p className='font-sans text-xs text-black/50 mt-1'>
                {leader.qualification}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Campus Facilities */}
      <section className='px-8 md:px-12 py-20 bg-[#F6F6F2]'>
        <div className='max-w-2xl mb-14'>
          <span className='font-mono text-xs tracking-[0.2em] uppercase text-black/50'>Life on Campus</span>
          <h2 className='font-serif text-3xl md:text-4xl font-semibold text-black mt-3'>
            Campus Facilities
          </h2>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {facilities.map((facility, index) => (
            <div key={index} className='group relative rounded-2xl overflow-hidden aspect-square'>
              <img
                src={facility.image}
                alt={facility.alt}
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent' />
              <p className='absolute bottom-4 left-4 right-4 font-sans text-white text-sm md:text-base font-medium leading-tight'>
                {facility.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}