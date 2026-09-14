import { useEffect, useState } from 'react';

const CARDS = [
  { img: '/icons/nuestraGente.jpg', alt: 'Nuestra gente', text: 'Manos de mujeres cabeza de hogar del Medio Atrato' },
  { img: '/icons/recetas.jpg', alt: 'Recetas y coctelería', text: 'Puro, Dorado y Vinete: un ritual para cada momento' },
  { img: '/icons/compras.jpg', alt: 'Compra directa', text: 'Del trapiche a tu mesa: pedido directo por WhatsApp' },
  { img: '/icons/momento.jpg', alt: 'Momento CANAO', text: 'El momento de celebrar la herencia del Pacífico' },
];

export default function FeatureCarousel() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % CARDS.length), 3500);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="flex flex-col h-full">
      <div className="relative flex-1 min-h-[132px] sm:min-h-[152px]">
        {CARDS.map(({ img, alt, text }, i) => (
          <div
            key={text}
            className={`items-center gap-4 transition-all duration-500 ${
              i === active
                ? 'opacity-100 translate-y-0 relative flex'
                : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none flex'
            }`}
          >
            <img
              src={img}
              alt={alt}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-1 ring-black/10 shrink-0"
            />
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
