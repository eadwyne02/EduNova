import logo from '../assets/edunova-logo.webp'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Programs', path: '/program' },
  { label: 'Admissions', path: '/admission' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Header() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='relative'>
      <div className='bg-[#F8FAFC] py-2 px-4 '>
        <div className='flex justify-between'>
          <img src={logo} alt="EduNova" className='h-[55px] w-[110px] md:w-[95px] lg:h-[65px] lg:w-[130px]' />
          <nav className='hidden md:flex items-center gap-4 lg:gap-8'>
            {navLinks.map((navLink, index) => {
              const isActive = location.pathname === navLink.path
              return (
                <Link key={index} to={navLink.path} className={`text-sm lg:text-lg transition-colors duration-200 whitespace-nowrap ${isActive ? 'text-[#1E3A8A] font-semibold' : 'text-[#1E3A8A]/75 hover:text-[#1E3A8A]'}`}>{navLink.label}</Link>
              )
            })}
          </nav>
          <div className='hidden md:flex items-center gap-3 lg:gap-6'>
            <Link to='/portal' className='bg-[#1E3A8A] text-xs lg:text-sm font-medium text-white/90 px-3 py-2 lg:px-4 lg:py-2.5 rounded-sm hover:-translate-y-[2px] hover:shadow-sm transition-all duration-300 whitespace-nowrap'>
              Portal login
            </Link>
            <Link to='/apply' className='bg-[#B8901F] text-[#1E3A8A] text-xs lg:text-sm font-semibold px-3 py-2 lg:px-4 lg:py-2.5 rounded-sm transition-all duration-300 hover:-translate-y-[2px] hover:shadow-sm whitespace-nowrap'>
              Apply now
            </Link>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" aria-expanded={isOpen} className="flex md:hidden pr-6 flex-col justify-center items-center gap-1.5 w-10 h-10 cursor-pointer">
            <span className={`block w-6 h-[1.5px] bg-[#1E3A8A] transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-[#1E3A8A] transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block w-6 h-[1.5px] bg-[#1E3A8A] transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="absolute z-10 left-0 right-0 flex flex-col md:hidden bg-[#F8FAFC] text-sm font-medium">
          {navLinks.map((navLink, index) => {
            const isActive = location.pathname === navLink.path
            return (
              <Link key={index} to={navLink.path} onClick={() => setIsOpen(false)} className={`px-4 py-3 border-b border-[#1E3A8A]/10 ${isActive ? 'text-[#1E3A8A] font-semibold' : 'text-[#1E3A8A]/75'}`}>
                {navLink.label}
              </Link>
            )
          })}
          <div className='flex mb-3 justify-center gap-5 mt-2 mx-4'>
            <Link to='/portal' onClick={() => setIsOpen(false)} className='bg-[#1E3A8A] text-md font-medium text-[#B8901F] text-center w-full px-3 py-2.5 rounded-sm hover:-translate-y-[2px] hover:shadow-sm transition-all duration-300'>
              Portal login
            </Link>
            <Link to='/apply' onClick={() => setIsOpen(false)} className='bg-[#B8901F] text-[#1E3A8A] text-md font-semibold text-center w-full px-3 py-2.5 rounded-sm transition-all duration-300 hover:-translate-y-[2px] hover:shadow-sm'>
              Apply now
            </Link>
          </div>
        </nav>
      )}
    </div>
  )
}