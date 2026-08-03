import { useState } from 'react';
import { faqs } from '@/data/content';
import { Plus } from 'lucide-react';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad bg-cream bg-grain dark:bg-[#0d1f10]">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-4 font-display text-3xl font-700 text-forest dark:text-cream sm:text-4xl md:text-5xl text-balance">
            Everything you need to know before visiting
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.question}
                className="reveal overflow-hidden rounded-3xl bg-white shadow-soft dark:bg-[#14281a]/70"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-600 text-forest dark:text-cream sm:text-lg">{f.question}</span>
                  <span
                    className={[
                      'grid h-9 w-9 shrink-0 place-items-center rounded-full bg-leaf/12 text-leaf transition-transform duration-300',
                      isOpen ? 'rotate-45' : '',
                    ].join(' ')}
                  >
                    <Plus className="h-5 w-5" />
                  </span>
                </button>
                <div
                  className="grid transition-all duration-500 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-earth/90 dark:text-cream/75 sm:text-base">
                      {f.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
