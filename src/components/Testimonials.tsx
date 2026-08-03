import { useEffect, useState, useCallback } from 'react';
import { testimonials } from '@/data/content';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const AUTO_MS = 6000;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const go = useCallback((d: number) => setIndex((i) => (i + d + count) % count), [count]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), AUTO_MS);
    return () => clearInterval(t);
  }, [paused, count]);

  return (
    <section
      id="testimonials"
      className="section-pad bg-white bg-grain dark:bg-[#0a160c]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">Testimonials</span>
          <h2 className="mt-4 font-display text-3xl font-700 text-forest dark:text-cream sm:text-4xl md:text-5xl text-balance">
            Loved by families across the country
          </h2>
        </div>

        <div className="reveal relative mx-auto mt-12 max-w-3xl">
          <div className="relative overflow-hidden rounded-[2rem]">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((t) => (
                <figure key={t.name} className="w-full shrink-0 px-1">
                  <div className="rounded-[2rem] bg-cream p-8 shadow-soft sm:p-12 dark:bg-[#14281a]/70">
                    <Quote className="h-9 w-9 text-leaf" />
                    <div className="mt-4 flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-leaf text-leaf" />
                      ))}
                    </div>
                    <blockquote className="mt-4 font-display text-lg font-500 leading-relaxed text-forest dark:text-cream sm:text-xl text-pretty">
                      "{t.review}"
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-4">
                      <img src={t.avatar} alt={t.name} loading="lazy" className="h-14 w-14 rounded-full object-cover ring-2 ring-leaf/40" />
                      <div>
                        <p className="font-display text-base font-600 text-forest dark:text-cream">{t.name}</p>
                        <p className="text-sm text-earth/70 dark:text-cream/60">{t.role}</p>
                      </div>
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </div>

          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="absolute -left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-forest shadow-soft transition-all hover:bg-leaf hover:text-white sm:-left-5 dark:bg-[#14281a]"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="absolute -right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-forest shadow-soft transition-all hover:bg-leaf hover:text-white sm:-right-5 dark:bg-[#14281a]"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="mt-7 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={[
                  'h-2 rounded-full transition-all duration-300',
                  i === index ? 'w-7 bg-leaf' : 'w-2 bg-leaf/30 hover:bg-leaf/50',
                ].join(' ')}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
