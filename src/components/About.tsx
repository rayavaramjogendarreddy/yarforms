import { Target, Eye, Quote, Sprout } from 'lucide-react';
import { coreValues } from '@/data/content';
import { useCountUp } from '@/hooks/useScrollReveal';

const stats = [
  { label: 'Acres of Greenery', value: 120, suffix: '+' },
  { label: 'Happy Visitors', value: 15000, suffix: '+' },
  { label: 'Farm Animals', value: 80, suffix: '' },
  { label: 'Years of Farming', value: 25, suffix: '' },
];

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: v } = useCountUp(value);
  return (
    <div className="text-center">
      <p className="font-display text-3xl font-700 text-forest dark:text-cream sm:text-4xl">
        <span ref={ref}>{v.toLocaleString()}</span>
        {suffix}
      </p>
      <p className="mt-1 text-sm font-500 text-earth dark:text-cream/60">{label}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-pad bg-cream bg-grain dark:bg-[#0d1f10]">
      <div className="container-x">
        {/* Story */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="reveal reveal-left">
            <span className="eyebrow">
              <Sprout className="h-4 w-4" /> Our Story
            </span>
            <h2 className="mt-5 font-display text-3xl font-700 leading-tight text-forest dark:text-cream sm:text-4xl md:text-5xl text-balance">
              A family farm rooted in sustainability and shared with the world
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-earth/90 dark:text-cream/75">
              YAR Farms began as a quiet family endeavour to restore a patch of land to its natural
              glory. Over the years, that patch grew into a thriving, chemical-free farm — a place
              where heritage mango orchards, open pastures, and happy animals live side by side.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-earth/90 dark:text-cream/75">
              Today we open our gates to visitors who want to step away from the rush of city life
              and experience rural living firsthand: walk the fields, meet the animals, taste produce
              picked that very morning, and breathe air that smells of rain and earth. Everything here
              is grown and cared for the way nature intended.
            </p>
          </div>

          <div className="reveal reveal-right grid grid-cols-2 gap-4">
            <img
              src="https://images.pexels.com/photos/5078726/pexels-photo-5078726.jpeg?auto=compress&cs=tinysrgb&w=700&h=900&fit=crop"
              alt="Lush green citrus orchard with mountain backdrop"
              loading="lazy"
              className="img-zoom h-72 w-full rounded-3xl object-cover shadow-soft sm:h-80"
            />
            <img
              src="https://images.pexels.com/photos/7782158/pexels-photo-7782158.jpeg?auto=compress&cs=tinysrgb&w=700&h=900&fit=crop"
              alt="Woman teaching gardening to children on a farm"
              loading="lazy"
              className="img-zoom mt-8 h-72 w-full rounded-3xl object-cover shadow-soft sm:h-80"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="reveal mt-16 grid grid-cols-2 gap-8 rounded-3xl glass p-8 dark:bg-[#14281a]/60 sm:grid-cols-4 sm:p-10">
          {stats.map((s) => (
            <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="reveal reveal-left card-hover rounded-3xl gradient-border p-8 sm:p-10">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-leaf/15 text-leaf">
              <Target className="h-7 w-7" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-700 text-forest dark:text-cream">Our Mission</h3>
            <p className="mt-3 text-lg leading-relaxed text-earth/90 dark:text-cream/75">
              To farm sustainably and share the beauty of rural life with every visitor — offering an
              authentic, hands-on connection to nature while protecting the land for future generations.
            </p>
          </div>
          <div className="reveal reveal-right card-hover rounded-3xl gradient-border p-8 sm:p-10">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-forest/15 text-forest">
              <Eye className="h-7 w-7" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-700 text-forest dark:text-cream">Our Vision</h3>
            <p className="mt-3 text-lg leading-relaxed text-earth/90 dark:text-cream/75">
              To be a trusted destination where families, schools, and travellers reconnect with the
              origins of their food — and leave inspired to live more gently on the earth.
            </p>
          </div>
        </div>

        {/* Core values */}
        <div className="mt-20">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="eyebrow">What We Stand For</span>
            <h3 className="mt-4 font-display text-3xl font-700 text-forest dark:text-cream sm:text-4xl">
              Our Core Values
            </h3>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((v, i) => (
              <div
                key={v.title}
                className="reveal card-hover rounded-3xl bg-white/70 p-7 text-center shadow-soft dark:bg-[#14281a]/60"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-forest to-leaf text-white">
                  <v.icon className="h-7 w-7" />
                </span>
                <h4 className="mt-5 font-display text-xl font-600 text-forest dark:text-cream">{v.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-earth/85 dark:text-cream/70">{v.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Owner message */}
        <div className="reveal mt-20 overflow-hidden rounded-[2rem] bg-gradient-to-br from-forest to-leaf p-1">
          <div className="rounded-[1.85rem] bg-forest px-8 py-12 sm:px-12 sm:py-14">
            <Quote className="h-10 w-10 text-leaf" />
            <blockquote className="mt-6 max-w-3xl font-display text-xl font-500 leading-relaxed text-cream sm:text-2xl">
              "When you walk through our gates, you are not a visitor — you are a guest in our home and
              a partner in our dream of farming that gives back to the earth. We hope you leave with
              muddy shoes, a full heart, and a little of this farm in your soul."
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <img
                src="https://images.pexels.com/photos/38670596/pexels-photo-38670596.jpeg?auto=compress&cs=tinysrgb&w=160&h=160&fit=crop"
                alt="YAR Farms owner portrait"
                loading="lazy"
                className="h-14 w-14 rounded-full object-cover ring-2 ring-leaf"
              />
              <div>
                <p className="font-display text-lg font-600 text-cream">Y. Abdul Rahman</p>
                <p className="text-sm text-cream/70">Founder & Farmer, YAR Farms</p>
              </div>
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  );
}
