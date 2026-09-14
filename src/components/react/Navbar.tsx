import { useState } from 'react';
import { Search, ShoppingBag, AtSign, Menu, X } from 'lucide-react';
import { WHATSAPP_NUMBER, INSTAGRAM_URL } from '../../consts';

const LINKS = [
  { href: '/historia', label: 'Historia' },
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/proceso', label: 'Proceso' },
  { href: '/contacto', label: 'Contacto' },
];

const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola CANAO, quiero conocer el catálogo')}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="animate-fade-in px-5 sm:px-8 lg:px-10 py-4 lg:py-5 flex items-center justify-between relative z-20">
        <a
          href="/"
          className="animate-slide-left delay-200 text-white font-medium text-[30px] tracking-[-0.05em] leading-none"
          style={{ fontFamily: '"DM Sans", sans-serif' }}
        >
          CANAO
        </a>
        <div className="animate-fade-in delay-400 hidden md:flex items-center gap-10">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/90 text-[18px] tracking-[-0.02em] hover:text-white transition-colors"
              style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 500 }}
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="animate-slide-right delay-300 flex items-center gap-2 sm:gap-3">
          <a href="/catalogo" aria-label="Buscar en el catálogo" className="text-white p-2 hover:text-dorado transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </a>
          <a href={waHref} target="_blank" rel="noopener" aria-label="Pedir por WhatsApp" className="text-white p-2 hover:text-dorado transition-colors">
            <ShoppingBag size={20} strokeWidth={1.5} />
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener" aria-label="Instagram de Viche CANAO" className="text-white p-2 hover:text-dorado transition-colors">
            <AtSign size={20} strokeWidth={1.5} />
          </a>
          <img
            src="/fotos/puro.jpg"
            alt="Viche CANAO"
            className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover ring-1 ring-white/30 ml-1"
          />
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className="md:hidden text-white p-2"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="animate-fade-in fixed inset-0 bg-black/90 z-30 flex flex-col items-center justify-center gap-8 md:hidden">
          <button
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
            className="absolute top-4 right-5 text-white p-2"
          >
            <X size={28} />
          </button>
          {[{ href: '/', label: 'Inicio' }, ...LINKS].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white text-2xl tracking-tight hover:text-dorado transition-colors"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
