import logo from '../assets/edunova-logo.webp'
import { useState } from 'react'
const navLinks= [
  { label: 'Home', href: '#' },
  { label: 'Programs', href: '#' },
  { label: 'Admissions', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
]
export default function Header(){
    const [isOpen, setIsOpen] = useState(false)
    return(
        <>
        <div className='relative py-2 px-4'>
            <div className='bg-[#F8FAFC] p-1'>
                <div className='flex justify-between'>
                    <img src={logo} alt="EduNova" className='h-[55px] w-[110px] lg:h-[65px] lg:w-[130px]' />  
                    <nav className='hidden md:flex items-center gap-8'>
                        {navLinks.map((navLink, index) => (
                          <a key={index} href={navLink.href} className={`text-lg font- transition-colors duration-200 ${
                            index===0 ? 'text-[#1E3A8A]' :'text-[#1E3A8A]/75 hover:text-[#1E3A8A]'}`}>{navLink.label}</a>
                        ))}
                      </nav> 
                      <div className='hidden md:flex items-center gap-6'>
                        <a href='#' className=' bg-[#1E3A8A] text-md font-medium text-[#fff]/90 px-3 py-2.5 rounded-sm hover:-translate-y-[2px] hover:shadow-sm transition-all duration-300 duration-200'> Portal login</a>
                        <a href='#' className='bg-[#B8901F] text-[#1E3A8A] text-md font-semibold px-3 py-2.5 rounded-sm transition-all duration-300 hover:-translate-y-[2px] hover:shadow-sm'>Apply now</a>
                      </div> 
                      <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" aria-expanded={isOpen} className="flex md:hidden pr-6 flex-col justify-center items-center gap-1.5 w-10 h-10 cursor-pointer">
                          <span className={`block w-6 h-[1.5px] bg-[#1E3A8A] transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}/>
                          <span className={`block w-6 h-[1.5px] bg-[#1E3A8A] transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}/>
                          <span className={`block w-6 h-[1.5px] bg-[#1E3A8A] transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}/>
                      </button>
                </div>
            </div>
            {isOpen && (
              <nav className="absolute z-10 left-0 right-0 flex flex-col md:hidden bg-[#F8FAFC] text-sm font-medium">
                <a href="#" className="px-4 py-3   text-[#1E3A8A] border-b border-[#1E3A8A]/10">Home</a>
                <a href="#" className="px-4 py-3   text-[#1E3A8A]/75 border-b border-[#1E3A8A]/10">Programs</a>
                <a href="#" className="px-4 py-3   text-[#1E3A8A]/75 border-b border-[#1E3A8A]/10">Admissions</a>
                <a href="#" className="px-4 py-3   text-[#1E3A8A]/75 border-b border-[#1E3A8A]/10">About</a>
                <a href="#" className="px-4 py-3   text-[#1E3A8A]/75 border-b border-[#1E3A8A]/10">Contact</a>
                <div className='flex  mb-3 justify-center gap-5 mt-2 mx-4 '>
                        <a href='#' className=' bg-[#1E3A8A] text-md font-medium text-[#B8901F] text-center w-full px-3 py-2.5 rounded-sm hover:-translate-y-[2px] hover:shadow-sm transition-all duration-300 duration-200'> Portal login</a>
                        <a href='#' className='bg-[#B8901F] text-[#1E3A8A] text-md font-semibold  text-center w-full px-3 py-2.5 rounded-sm transition-all duration-300 hover:-translate-y-[2px] hover:shadow-sm'>Apply now</a>
                    </div> 
              </nav>
            )}

        </div>
        </>
    )   
}