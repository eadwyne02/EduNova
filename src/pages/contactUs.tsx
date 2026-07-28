import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, ChevronDown, ShieldAlert } from 'lucide-react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaXTwitter } from 'react-icons/fa6'
import gate from '../assets/gate.webp'

const contactCards = [
  {
    icon: MapPin,
    title: 'Address',
    lines: ['EduNova University', 'Innovation Drive, Knowledge City', 'P.M.B. 2101', 'Ogbomoso, Oyo State, Nigeria'],
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: [],
    groups: [
      { label: 'General Enquiries', value: '+234 (0) 201 234 5678', href: 'tel:+2342012345678' },
      { label: 'Admissions Office', value: '+234 (0) 201 234 5679', href: 'tel:+2342012345679' },
    ],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: [],
    groups: [
      { label: 'General Enquiries', value: 'info@edunova.edu.ng', href: 'mailto:info@edunova.edu.ng' },
      { label: 'Admissions', value: 'admissions@edunova.edu.ng', href: 'mailto:admissions@edunova.edu.ng' },
      { label: 'Support', value: 'support@edunova.edu.ng', href: 'mailto:support@edunova.edu.ng' },
    ],
  },
  {
    icon: Clock,
    title: 'Office Hours',
    lines: [],
    groups: [
      { label: 'Monday – Friday', value: '8:00 AM – 5:00 PM', href: undefined, },
      { label: 'Saturday', value: '9:00 AM – 1:00 PM', href: undefined, },
      { label: 'Sunday & Public Holidays', value: 'Closed', href: undefined, },
    ],
  },
]

const departments = [
  { name: 'Admissions Office', email: 'admissions@edunova.edu.ng' },
  { name: "Registrar's Office", email: 'registrar@edunova.edu.ng' },
  { name: 'Bursary', email: 'bursary@edunova.edu.ng' },
  { name: 'Student Affairs', email: 'studentaffairs@edunova.edu.ng' },
  { name: 'International Office', email: 'international@edunova.edu.ng' },
  { name: 'ICT Support', email: 'ictsupport@edunova.edu.ng' },
  { name: 'Library', email: 'library@edunova.edu.ng' },
]

const faqs = [
  { q: 'How do I apply?', a: 'Complete the online application form through our admissions portal, upload the required documents, and pay the application fee to submit your application.' },
  { q: 'When does admission open?', a: 'Applications for the 2026/2027 academic year open January 15, 2026. Check our Admissions page for the full calendar of deadlines.' },
  { q: 'How can I request my transcript?', a: "Submit a transcript request through the Registrar's Office, either in person or by emailing registrar@edunova.edu.ng with your student ID and delivery details." },
  { q: 'How do I contact the Admissions Office?', a: 'Reach the Admissions Office at admissions@edunova.edu.ng or +234 (0) 201 234 5679 during office hours.' },
  { q: 'Where is EduNova located?', a: 'Our campus is located on Innovation Drive, Knowledge City, Ogbomoso, Oyo State, Nigeria.' },
]

const socialLinks = [
  { icon: FaFacebook, href: '#', label: 'Facebook' },
  { icon: FaXTwitter, href: '#', label: 'X (Twitter)' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FaYoutube, href: '#', label: 'YouTube' },
]

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  return (
    <div>
      <div className='relative w-full h-[380px] md:h-[440px]'>
        <img src={gate} alt="EduNova University campus" className='w-full h-full object-cover' />
        <div className='absolute inset-0 bg-gradient-to-t from-[#0B1524]/90 via-[#0B1524]/50 to-[#0B1524]/25' />
        <div className='absolute inset-0 flex flex-col justify-center items-center text-center px-6'>
          <h1 className='font-serif text-white text-4xl md:text-6xl font-semibold leading-tight max-w-2xl'>
            Contact EduNova University
          </h1>
          <p className='font-sans text-white/75 text-base md:text-lg mt-5 max-w-xl leading-relaxed'>
            We're here to answer your questions and help you take the next step in your academic journey.
          </p>
        </div>
      </div>
      <section className='px-8 md:px-12 py-20 bg-white'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {contactCards.map((card, index) => {
            const Icon = card.icon
            return (
              <div key={index} className='bg-[#F6F6F2] rounded-2xl p-6'>
                <div className='w-11 h-11 rounded-full bg-[#1E3A8A]/5 flex items-center justify-center mb-4'>
                  <Icon size={20} strokeWidth={1.5} className='text-[#1E3A8A]' />
                </div>
                <h3 className='font-serif text-lg font-semibold text-black mb-3'>{card.title}</h3>
                {card.lines.length > 0 && (
                  <p className='font-sans text-sm text-black/60 leading-relaxed'>
                    {card.lines.map((line, i) => (
                      <span key={i} className='block'>{line}</span>
                    ))}
                  </p>
                )}

                {card.groups && (
                  <div className='flex flex-col gap-3'>
                    {card.groups.map((group, i) => (
                      <div key={i}>
                        <p className='font-mono text-[10px] tracking-wide uppercase text-black/40'>{group.label}</p>
                        {group.href ? (
                          <a href={group.href} className='font-sans text-sm text-black/75 hover:text-[#1E3A8A] transition-colors'>{group.value}</a>
                        ) : (
                          <p className='font-sans text-sm text-black/75'>{group.value}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>
      <section className='px-8 md:px-12  bg-white'>
        <div className='max-w-2xl mb-12'>
          <h2 className='font-serif text-3xl md:text-4xl font-semibold text-[#14263F] mt-3'>Department Directory</h2>
          <p className='font-sans text-black/60 text-base mt-4'>Reach the right office directly instead of waiting on a general inbox.</p>
        </div>
        <div className='max-w-3xl flex flex-col divide-y divide-black/10'>
          {departments.map((dept, index) => (
            <div key={index} className='flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-4'>
              <span className='font-sans text-black/80 text-sm md:text-base font-medium'>{dept.name}</span>
              <a href={`mailto:${dept.email}`} className='font-mono text-xs md:text-sm text-[#1E3A8A] hover:underline'>{dept.email}</a>
            </div>
          ))}
        </div>
      </section>
      <section className='px-8 md:px-12 py-10 bg-[#F6F6F2]'>
        <div className='max-w-2xl mb-10'>
          <h2 className='font-serif text-3xl md:text-4xl font-semibold text-[#14263F] mt-3'>Find Our Campus</h2>
        </div>
        <div className='rounded-2xl overflow-hidden border border-black/10 h-[400px]'>
          <iframe title='EduNova University Location' src='https://www.google.com/maps?q=Ogbomoso,Oyo%20State,Nigeria&output=embed'width='100%'height='100%'style={{ border: 0 }}loading='lazy'referrerPolicy='no-referrer-when-downgrade'/>
        </div>
      </section>
      <section className='px-8 md:px-12 py-10 bg-white'>
        <div className='max-w-2xl mb-12'>
          <h2 className='font-serif text-2xl md:text-4xl font-semibold text-[#14263F] mt-3'>Frequently Asked Questions</h2>
        </div>

        <div className='max-w-3xl flex flex-col divide-y divide-black/10'>
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index
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
            )
          })}
        </div>
      </section>
      <section className='px-8 md:px-12 py-16 bg-[#F6F6F2]'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <div>
            <span className='font-mono text-xs tracking-[0.2em] uppercase text-black/50 block mb-4'>Follow Us</span>
            <div className='flex gap-4'>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                    <a key={index} href={social.href} aria-label={social.label} className='w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition-colors duration-300'>
                    <Icon size={18} /></a>
                )
              })}
            </div>
          </div>
          <div>
            <span className='font-mono text-xs tracking-[0.2em] uppercase text-black/50 block mb-4'>Emergency Contact</span>
            <div className='flex flex-col gap-3'>
              <a href='tel:+2342012345600' className='flex items-center gap-3 bg-white rounded-xl px-5 py-3.5 hover:bg-white/70 transition-colors'>
                <ShieldAlert size={18} className='text-[#B8901F] flex-shrink-0' />
                <div>
                  <p className='font-mono text-[10px] tracking-wide uppercase text-black/40'>Campus Security</p>
                  <p className='font-sans text-sm text-black/80'>+234 (0) 201 234 5600</p>
                </div>
              </a>
              <a href='tel:+2342012345601' className='flex items-center gap-3 bg-white rounded-xl px-5 py-3.5 hover:bg-white/70 transition-colors'>
                <Phone size={18} className='text-[#B8901F] flex-shrink-0' />
                <div>
                  <p className='font-mono text-[10px] tracking-wide uppercase text-black/40'>Medical Centre</p>
                  <p className='font-sans text-sm text-black/80'>+234 (0) 201 234 5601</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}