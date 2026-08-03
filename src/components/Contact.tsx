import { MapPin, Phone, Mail, Instagram, MessageCircle } from 'lucide-react';

const cards = [
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'YAR Farms, Green Valley Road, Countryside, TN 600001',
    href: 'https://maps.google.com/?q=YAR+Farms+Green+Valley+Road',
    accent: 'from-forest to-leaf',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
    accent: 'from-leaf to-forest',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@yarfarms.com',
    href: 'mailto:hello@yarfarms.com',
    accent: 'from-earth to-forest',
  },
  {
    icon: Instagram,
    label: 'Follow Us',
    value: '@yarfarms',
    href: 'https://instagram.com/yarfarms',
    accent: 'from-leaf to-earth',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-white bg-grain dark:bg-[#0a160c]">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">Get In Touch</span>
          <h2 className="mt-4 font-display text-3xl font-700 text-forest dark:text-cream sm:text-4xl md:text-5xl text-balance">
            We'd love to hear from you
          </h2>
          <p className="mt-4 text-lg text-earth/85 dark:text-cream/70">
            Questions, group bookings, or just want to say hello — reach out any way you like.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="reveal group card-hover rounded-3xl bg-cream p-7 text-center shadow-soft dark:bg-[#14281a]/70"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className={`mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${c.accent} text-white shadow-glow`}>
                <c.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-display text-base font-600 text-forest dark:text-cream">{c.label}</h3>
              <p className="mt-1 text-sm text-earth/85 dark:text-cream/70">{c.value}</p>
            </a>
          ))}
        </div>

        <div className="reveal mt-12 overflow-hidden rounded-[2rem] shadow-soft">
          <iframe
            title="YAR Farms location map"
            src="https://www.google.com/maps?q=11.0168,76.9558&z=12&output=embed"
            className="h-[400px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
