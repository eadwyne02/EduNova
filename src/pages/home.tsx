import Carousel from "../components/carousel"
import LatestNews from "../components/latest_news"
import Program from "../components/programs"
import FuturePrograms from "../components/future_programs"
import { useState, useEffect, useRef } from "react"
const stats = [
  { value: 95, suffix: '%', label: 'Graduate Employment' },
  { value: 40, suffix: '+', label: 'Degree Programmes' },
  { value: 15000, suffix: '+', label: 'Students' },
  { value: 500, suffix: '+', label: 'Academic Staff' },
  { value: 50, suffix: '+', label: 'Research Laboratories' },
  { value: 30, suffix: '+', label: 'International Partners' },
];
function useCountUp(target: number, duration = 1500, shouldStart: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [shouldStart, target, duration]);

  return count;
}
function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const count = useCountUp(value, 1500, inView);

  return (
    <div ref={ref} className='flex flex-col items-center text-center'>
      <span className='font-serif text-4xl md:text-5xl font-bold text-[#B8901F]'>
        {count.toLocaleString()}{suffix}
      </span>
      <span className='font-sans text-sm text-white/70 mt-2'>{label}</span>
    </div>
  );
}

export default function Home(){
    return(
        <>
            <div>
                <Carousel />
                <div className="pt-8 bg-[#F6F6F2]">
                    <h2 className="text-[#14263F] text-3xl text-center font-bold font-serif lg:mt-6">Latest News</h2>
                    <div className=" pt-1">
                        <div className="mx-5 mt-3 ">
                            <LatestNews />
                        </div>
                    </div>
                    <h2 className=" mt-14 text-[#14263F] text-3xl text-center font-bold font-serif">Edunova's Programs</h2>
                    <Program />
                    <FuturePrograms />
                    <section className='px-8 md:px-12 py-20 bg-[#0B1524]'>
                        <div className='max-w-2xl mb-14'>
                            <h2 className='font-serif text-3xl md:text-4xl font-semibold text-white mt-3'>Why Choose EduNova?</h2>
                        </div>
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6'>
                            {stats.map((stat, index) => (
                                <StatCounter key={index} value={stat.value} suffix={stat.suffix} label={stat.label} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}