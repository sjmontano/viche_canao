import { useEffect, useState } from 'react';
import { FlaskConical, Leaf, Droplets, Sun } from 'lucide-react';

const CARDS = [
  { Icon: FlaskConical, circle: 'bg-black', text: 'Destilación ancestral en alambique tradicional' },
  { Icon: Leaf, circle: 'bg-emerald-800', text: 'Caña nativa cultivada sin químicos' },
  { Icon: Droplets, circle: 'bg-cyan-800', text: 'Fermentación lenta de 8 a 15 días' },
  { Icon: Sun, circle: 'bg-amber-700', text: 'Manos de mujeres del Medio Atrato' },
];

export default function FeatureCarousel() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % CARDS.length), 3500);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="flex flex-col h-full">
      <div className="relative flex-1 min-h-[120px] sm:min-h-[140px]">
        {CARDS.map(({ Icon, circle, text }, i) => (
          <div
            key={text}
            className={`flex items-center gap-4 transition-all duration-500 ${
              i === active ? 'opacity-100 translate-y-0 relative' : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
            }`}
          >
            <span className={`${circle} w-10 h-10 sm:w-12 sm:h-12 rounded-full grid place-items-center shrink-0`}>
              <Icon size={20} className="text-white" strokeWidth={1.5} />
            </span>
            <p
              className="text-black/80 text-sm sm:text-base lg:text-lg leading-[1.2]"
              style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.03em' }}
            >
              {text}
            </p>
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-6">
        {CARDS.map((c, i) => (
          <button
            key={c.text}
            onClick={() => setActive(i)}
            aria-label={`Ver tarjeta ${i + 1}`}
            className={`h-0.5 flex-1 rounded-full transition-colors ${i === active ? 'bg-black' : 'bg-black/20'}`}
          />
        ))}
      </div>
    </div>
  );
}
