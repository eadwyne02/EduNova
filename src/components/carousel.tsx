import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Aerial from '../assets/aerial.webp'
import Gate from '../assets/gate.webp'
import Graduation from '../assets/graduation.webp'
import Library from '../assets/library.webp'

const slides  = [
    {src:Aerial, alt:'Aerial view', title: 'Your Future Starts Here', subtitle: 'A campus built for big dreams'},
    {src:Gate, alt: 'Main gate', title: 'Excellence Has an Address', subtitle: 'Step through and be part of the legacy' },
    { src: Graduation, alt: 'Graduation', title: 'Every Ending Is a Launch', subtitle:'Celebrating the graduates who made it happen' },
    { src: Library, alt: 'Library', title: 'Where Curious Minds Thrive', subtitle:'Endless knowledge, one page at a time' },
];
const AUTOPLAY_INTERVAL = 5000
export default function Carousel(){
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused]= useState(false);

    const prevSlide = () =>
        setCurrent((prev) => (prev===0 ? slides.length - 1 : prev -1));
    const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

    useEffect(() =>{
        if (isPaused) return;
        const timer = setInterval(() =>{
            setCurrent((prev) => (prev === slides.length -1 ? 0 : prev + 1))
        }, AUTOPLAY_INTERVAL);
        return () => clearInterval(timer);
    }, [isPaused]);
    return (
    <div className="relative w-full h-[500px] " onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      {slides.map((slide, index) => (
        <div key={index} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${ index === current ? 'opacity-100' : 'opacity-0'}`}>
          <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
          <div className="absolute inset-0 flex flex-col justify-end px-8 md:px-16 pb-16 md:pb-24">
            <span className={`font-mono text-white/70 text-sm md:text-base tracking-[0.3em] uppercase mb-4 transition-all duration-700 delay-100 ${index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>0{index + 1} — {slide.alt}</span>
            <h2 className={`font-serif text-white text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight max-w-3xl transition-all duration-700 delay-200 ${index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>{slide.title}</h2>
            <p className={`font-sans text-white/70 text-base md:text-lg mt-4 max-w-lg transition-all duration-700 delay-300 ${index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>{slide.subtitle}</p>
          </div>
        </div>
      ))}

      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition">
        <ChevronLeft size={28} /> 
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition">
        <ChevronRight size={28} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button key={index} onClick={() => setCurrent(index)} className={`w-2.5 h-2.5 rounded-full transition ${index === current ? 'bg-white' : 'bg-[#14263F]'}`}/>
        ))}
      </div>
    </div>
  );
}