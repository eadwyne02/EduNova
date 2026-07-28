import { FutureEvents,type FutureEvent } from "../data/futureEvents";
function parseEventDate(dateStr:string): Date{
  const now= new Date();
  const parsed  = new Date(`${dateStr} ${now.getFullYear()}`);
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  if (parsed <todayStart){
     parsed.setFullYear(parsed.getFullYear() + 1);
  }
  return parsed;
}

function getUpcomingEvents(events: FutureEvent[], count: number): FutureEvent[] {
  return [...events]
    .sort((a, b) => parseEventDate(a.Date).getTime() - parseEventDate(b.Date).getTime())
    .slice(0, count);
}
export default function FuturePrograms() {
  const upcomingEvents = getUpcomingEvents(FutureEvents, 4);
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
        {upcomingEvents.map((futureEvent, index) => (
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
              <h3 className='font-serif text-xl md:text-2xl font-semibold text-[#14263F] mt-1 mb-2 transition-colors group-hover:text-[#14263F]'>
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
      <div className='flex  z-50 lg:mt-5'>
        <button className='text-[#14263F] text-lg p-2 rounded-2xl transition-all duration-300 ease-out hover:text-[#14263F] hover:tracking-wide'>View Full Events <span aria-hidden='true'>→</span></button>
      </div>
    </section>
  );
}