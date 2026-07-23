import Ai from '../assets/ai.webp'
const headlines = [
    {category:"Admissions", title:"2026 Admissions Now Open", Summary:"Applications are now being accepted for undergraduate and postgraduate programmes. Prospective students are encouraged to apply before the September deadline.", date:"July 12, 2026"},
    {category:"Campus", title:"EduNova Ranks Among the Top Emerging Universities", Summary:"EduNova has been recognized as one of the fastest-growing universities for excellence in teaching, research, and graduate employability.", date:"June 30, 2026"},
    {category:"National", title:"Students Win National Engineering Challenge", Summary:"A team of Mechanical and Computer Engineering students secured first place in the National Engineering Innovation Challenge with their autonomous agricultural drone.", date:"June 24, 2026"},
    {category:"International", title:"International Students Orientation Week Begins", Summary:"EduNova welcomed students from over 25 countries during its International Orientation Week, promoting cultural exchange and academic integration.", date:"May 28, 2026"},
]
export default function LatestNews(){
    return(
        <>
            <div className=" grid md:grid lg:grid-cols-[0.8fr_1fr]">
                <div className='relative overflow-hidden w-full h-auto lg:h rounded-2xl'>
                    <img src={Ai} alt="ai and robotics innovation center" className='h-[500px] lg:h-full w-full object-cover'/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
                        <div className='absolute inset-0 flex flex-col justify-end lg:justify-center lg:pb-0 items-start px-8 md:px-12 pb-10 md:pb-14'>
                            <span className='bg-white/10 backdrop-blur-sm border border-white/20 text-white font-mono text-sm tracking-[0.2em] uppercase px-3 py-1.5 rounded-full mb-4'>Campus</span>
                            <p className='font-mono text-white/90 text-sm tracking-wide uppercase mb-2'>July 18, 2026</p>
                            <h2 className='text-white font-serif text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight max-w-2xl text-left mb-3'>EduNova Launches New AI & Robotics Innovation Center</h2>
                            <p className='font-sans text-white/70 text-base md:text-lg max-w-xl text-left'>
                            EduNova opens its state-of-the-art AI & Robotics Innovation Center to foster research and technological innovation.</p>
                        </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10 px-8 md:px-12 pt-16 pb-10 lg:py-0'>
                        {headlines.map((headline, index) => (
                            <div key={index} className='group cursor-pointer border-t border-black/10 pt-6 transition-opacity hover:opacity-70'>
                            <span className='inline-block bg-[#14263F] text-white font-mono text-xs tracking-[0.2em] uppercase px-3 py-1.5 rounded-full mb-4'>{headline.category}</span>
                            <p className='font-mono text-[#0B1524] text-xs tracking-wide uppercase mb-2'>{headline.date}</p>
                            <h2 className='text-[#0B1524] font-serif text-xl md:text-2xl font-semibold leading-snug mb-3 group-hover:underline decoration-1 underline-offset-4'>{headline.title}</h2>
                            <p className='font-sans text-[#14263F] text-sm md:text-base leading-relaxed line-clamp-3'>{headline.Summary}</p>
                            </div>
                        ))}
                </div>
            </div>
            <div className='flex justify-center z-50 lg:mt-10'>
                <button className='bg-[#14263F] text-[#F6F6F2] p-2 rounded-2xl transition-all duration-300 ease-out hover:text-[#14263F] hover:bg-[#F6F6F2] hover:border-1 hover:-translate-y-[2px]'>View all Edunova News</button>
            </div>
        </>
    )
}