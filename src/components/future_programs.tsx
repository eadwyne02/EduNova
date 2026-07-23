const futureEvents = [
  { Date: 'Aug 12', time: '10:00 AM', event: "Freshers' Orientation 2026", description: 'Welcome session for newly admitted students to explore campus life and academic expectations.' },
  { Date: 'Aug 18', time: '2:00 PM', event: "AI & Robotics Workshop", description: 'Hands-on workshop introducing students to artificial intelligence and robotics technologies.' },
  { Date: 'Aug 25', time: '9:00 AM', event: "Career & Internship Fair", description: 'Meet leading employers, explore internship opportunities, and build professional connections.' },
  { Date: 'Sep 3', time: '11:00 AM', event: "Research & Innovation Summit", description: 'Faculty and students present groundbreaking research and innovative projects.' },
];

export default function FuturePrograms() {
  return (
    <section className='px-8 md:px-12 py-10'>
      <div className='max-w-2xl mb-14'>
        <h2 className='font-serif text-3xl md:text-4xl font-semibold text-center text-[#0B1524] mt-3 leading-tight'>
          What's Coming Up?
        </h2>
        <p className='font-sans text-black/60 text-base md:text-lg mt-4 text-center'>
          Stay in the loop with upcoming orientations, workshops, and campus events.
        </p>
      </div>
      <div className='flex flex-col divide-y divide-black/10 max-w-4xl'>
        {futureEvents.map((futureEvent, index) => (
          <div key={index} className='group flex flex-col sm:flex-row gap-6 py-2 transition-colors duration-300 hover:bg-white/60 px-4 -mx-4 rounded-lg'>
            <div className='flex-shrink-0 flex flex-col items-center justify-center bg-[#0B1524] text-white rounded-xl w-20 h-20 py-2'>
              <span className='font-serif text-lg font-semibold leading-none'>
                {futureEvent.Date.split(' ')[1]}
              </span>
              <span className='font-mono text-[12px] tracking-widest uppercase mt-1 text-white/80'>
                {futureEvent.Date.split(' ')[0]}
              </span>
            </div>
            <div className='flex-1'>
              <span className='font-mono text-sm tracking-wide uppercase text-black/70'>
                {futureEvent.time}
              </span>
              <h3 className='font-serif text-xl md:text-2xl font-semibold text-black mt-1 mb-2 transition-colors group-hover:text-[#14263F]'>
                {futureEvent.event}
              </h3>
              <p className='font-sans text-black/60 text-base leading-relaxed max-w-lg'>
                {futureEvent.description}
              </p>
            </div>
            <div className='flex sm:items-center'>
                <a href='#' className='inline-flex items-center gap-1 font-sans text-sm text-black border-b border-black/20 pb-1 h-fit transition-all duration-300 hover:gap-2 hover:border-black'>
                Details <span aria-hidden='true'>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-center mt-16'>
        <button className='bg-[#14263F] text-[#F6F6F2] px-6 py-3 rounded-2xl transition-all duration-300 ease-out hover:text-[#14263F] hover:bg-[#F6F6F2] hover:border hover:border-[#14263F] hover:-translate-y-[2px]'>
          View Full Events
        </button>
      </div>
    </section>
  );
}