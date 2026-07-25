import library from '../assets/library.webp'
export default function Admission(){
    return(
        <>
        <div>
            <div className='relative h-[420px] md:h-[520px] overflow-hidden rounded-t-2xl'>
                <img src={library} alt="EduNova University library" className='w-full h-full object-cover'/>
                <div className='absolute inset-0 bg-gradient-to-t from-[#0B1524]/90 via-[#0B1524]/40 to-[#0B1524]/30' />
                <div className='absolute inset-0 flex flex-col justify-center items-center text-center px-6'>
                        <span className='font-mono text-xs tracking-[0.3em] uppercase text-[#1E3A8A] mb-4'>
                        Applications Now Open</span>
                        <h2 className='font-serif text-white text-4xl md:text-6xl font-semibold leading-tight max-w-2xl'>
                        Admissions 2026/2027</h2>
                        <p className='font-sans text-white/75 text-base md:text-lg mt-5 max-w-xl leading-relaxed'>
                        Begin your journey at EduNova University and join a community of innovators, researchers, and future leaders.</p>
                        <div className='flex gap-3'>
                            <a href='#' className='bg-[#B8901F]  text-[#1E3A8A] font-semibold text-md px-5 py-3 rounded-2xl mt-8 transition-all duration-300 ease-out hover:-translate-y-[2px] hover:shadow-lg'>Apply Now</a>
                            <a href='#' className='bg-[#1E3A8A]  text-[#B8901F] font-semibold text-md px-5 py-3 rounded-2xl mt-8 transition-all duration-300 ease-out hover:-translate-y-[2px] hover:shadow-lg'>Download Prospectus</a>
                        </div>
                    </div>
            </div>
            <div>
                <h2>Admission Requirement</h2>
            </div>
        </div>
        </>
    )
}