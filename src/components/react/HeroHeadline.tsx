type Word = { text: string; dim?: boolean; delay: string };

const LINES: Word[][] = [
  [
    { text: 'El', delay: '0.3s' },
    { text: 'Poder', delay: '0.4s' },
    { text: 'de', dim: true, delay: '0.5s' },
  ],
  [
    { text: 'la', dim: true, delay: '0.6s' },
    { text: 'Tierra', delay: '0.7s' },
    { text: 'en', dim: true, delay: '0.8s' },
  ],
  [{ text: 'cada Gota', delay: '0.9s' }],
];

function RevealWord({ text, dim, delay }: Word) {
  return (
    <span className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-bottom">
      <span className="animate-word-reveal inline-block" style={{ animationDelay: delay }}>
        <span className={dim ? 'text-white/45' : 'text-white'}>{text}</span>
      </span>
    </span>
  );
}

export default function HeroHeadline() {
  return (
    <h1
      className="text-white text-[48px] leading-[50px] sm:text-[80px] sm:leading-[72px] md:text-[110px] md:leading-[95px] lg:text-[130px] lg:leading-[110px] xl:text-[155px] xl:leading-[125px]"
      style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 400, letterSpacing: '-0.05em' }}
    >
      <span className="block space-x-[0.22em]">
        {LINES[0].map((w) => (
          <RevealWord key={w.text} {...w} />
        ))}
      </span>
      <span className="block space-x-[0.22em]">
        {LINES[1].map((w) => (
          <RevealWord key={w.text} {...w} />
        ))}
      </span>
      <span className="block">
        <RevealWord {...LINES[2][0]} />
        <img
          src="/fotos/puro.jpg"
          alt="Gota de Viche CANAO"
          className="animate-scale-in delay-1000 hidden sm:inline-block align-middle ml-2 lg:ml-4 rounded-full object-cover"
          style={{ height: 'clamp(60px, 10vw, 160px)', width: 'clamp(60px, 10vw, 160px)' }}
        />
      </span>
    </h1>
  );
}
