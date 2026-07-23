import { MapPin, Phone, Mail } from "lucide-react"
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; 
const quickLinks = [
  { label: 'Contact EduNova', href: '#' },
  { label: 'Accreditation', href: '#' },
  { label: 'Admission Requirements', href: '#' },
  { label: 'FAQs', href: '#' },
];

const aboutLinks = [
  { label: 'About EduNova', href: '#' },
  { label: 'Our History', href: '#' },
  { label: 'Vision & Mission', href: '#' },
  { label: 'Academic Calendar', href: '#' },
];

const programLinks = [
  { label: 'Undergraduate Programs', href: '#' },
  { label: 'Postgraduate Programs', href: '#' },
  { label: 'Open & Distance Learning', href: '#' },
  { label: 'Professional Certificates', href: '#' },
];

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="flex flex-col">
      <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-white/40 mb-4">{title}</h4>
      <nav className="flex flex-col gap-3">
        {links.map((link, index) => (
            <a key={index} href={link.href} className="text-sm text-white/70 hover:text-white transition-colors duration-200 w-fit">{link.label}</a>
        ))}
      </nav>
    </div>
  );
}
export default function Footer() {
  return (
    <footer className="bg-[#0B1524]">
      <div className="flex px-6 py-10">
        <div className="lg:border-r-1 py-6  lg:border-white/30">
            <div className=" md:px-12  grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
                <div className="flex flex-col gap-4 md:col-span-1">
                <div className="flex gap-3">
                    <MapPin size={18} strokeWidth={1.5} className="text-[#B8901F] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-white/60 leading-relaxed">Innovation Drive, Knowledge City P.M.B. 2101, Ogbomoso, Oyo State, Nigeria</p>
                </div>
                    <a href="tel:+234905280113" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-200">
                    <Phone size={18} strokeWidth={1.5} className="text-[#B8901F] flex-shrink-0" /> +234 90 528 0113</a>          
                    <a href="mailto:adeyieddieuel@gmail.com" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-200">
                    <Mail size={18} strokeWidth={1.5} className="text-[#B8901F] flex-shrink-0" />info@edunova.edu.ng</a>
                </div>

                <FooterColumn title="Quick Links" links={quickLinks} />
                <FooterColumn title="About" links={aboutLinks} />
                <FooterColumn title="Programs" links={programLinks} />
            </div>
            <div className="flex flex-col lg:flex-row md:flex-row md:ml-12 md:mr-10 lg:ml-12 lg:mr-10 gap-6 mt-8 justify-center items-center">
                <p className="text-white/70 text-sm hidden md:inline lg:inline">EduNova University is committed to advancing education, innovation, and community development. We foster an inclusive environment where diverse perspectives are valued, and we work in partnership with our local and global communities to create lasting social impact.</p>
                <div className="flex items-center justify-center flex-col gap-1">
                    <div className="flex gap-2">
                        <a href="#" aria-label="Instagram" className="text-white hover:bg-[#d5ba6e] hover:text-black p-1 rounded-full transition-colors">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" aria-label="X (Twitter)" className="p-1 text-white hover:bg-[#d5ba6e] hover:text-black rounded-full transition-colors">
                            <FaXTwitter size={20} />
                        </a>
                        <a href="#" aria-label="Facebook" className=" p-1 text-white hover:bg-[#d5ba6e] hover:text-black rounded-full transition-colors">
                            <FaFacebook size={20} />
                        </a>
                        <a href="#" aria-label="LinkedIn" className="p-1 text-white hover:bg-[#d5ba6e] hover:text-black rounded-full transition-colors">
                            <FaLinkedin size={20} />
                        </a>
                        <a href="#" aria-label="YouTube" className="p-1 text-white hover:bg-[#d5ba6e] hover:text-black rounded-full transition-colors">
                            <FaYoutube size={20} />
                        </a>
                    </div>
                    <p className="text-white/70 text-xs transition-all cursor-pointer duration-500 hover:underline hover:text-[#d5ba6e]">@ednova social directory</p>
                </div>
            </div>
        </div>
        <div className="relative hidden lg:inline">
            <svg width="250" height="300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 12.5L9.5 17L19 6" stroke="#B8901F" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" className="opacity-15"/>
</svg>
            <div className="absolute inset-0 flex flex-col  justify-center">
                <h3 className=" font-mono text-white/90 text-5xl text-center">WHERE IDEAS BECOME</h3>
                <h3 className=" font-sans text-[#B8901F] text-5xl text-center font-bold">IMPACT.</h3>
                <p className="italic text-[#fff] cursor-pointer text-center mt-4 tracking-wide transition-all duration-300  hover:tracking-wider hover:text-[#B8901F]">learn how <span aria-hidden='true'>→</span></p>
            </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-8 md:px-12 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <span className="text-white/50 text-xs">
          © 2026 EduNova. All rights reserved.
        </span>
        <div className="flex gap-6">
          <a href="#" className="text-white/50 hover:text-white text-xs transition-colors">Privacy Policy</a>
          <a href="#" className="text-white/50 hover:text-white text-xs transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}