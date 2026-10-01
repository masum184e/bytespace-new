function WavesIcon() {
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10" aria-hidden>
      <circle cx="20" cy="20" r="20" fill="currentColor" />
      <g fill="none" stroke="#F4F4F4" strokeWidth="2.4" strokeLinecap="round">
        <path d="M2 13c6-5 12 3 18-1s12-3 18 1" />
        <path d="M0 21c6-5 12 3 20-1s12-2 20 1" />
        <path d="M2 29c6-5 12 3 18-1s12-3 18 1" />
      </g>
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10" aria-hidden>
      <circle cx="20" cy="20" r="9" fill="currentColor" />
      {Array.from({ length: 12 }).map((_, i) => (
        <line
          key={i}
          x1="20"
          y1="2"
          x2="20"
          y2={i % 2 ? 6 : 8}
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          transform={`rotate(${i * 30} 20 20)`}
        />
      ))}
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10" aria-hidden>
      <circle cx="20" cy="20" r="20" fill="currentColor" />
      <path d="M23 8 11 22h8l-3 10 13-15h-8l2-9Z" fill="#F4F4F4" />
    </svg>
  );
}

function PetalsIcon() {
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10" aria-hidden>
      <circle cx="20" cy="20" r="20" fill="currentColor" />
      <g fill="#F4F4F4">
        <circle cx="20" cy="11.5" r="4.5" />
        <circle cx="20" cy="28.5" r="4.5" />
        <circle cx="11.5" cy="20" r="4.5" />
        <circle cx="28.5" cy="20" r="4.5" />
      </g>
    </svg>
  );
}

function RingsIcon() {
  return (
    <svg
      viewBox="0 0 40 40"
      className="h-10 w-10"
      aria-hidden
      fill="none"
      stroke="currentColor"
    >
      {[19, 16.5, 14, 11.5, 9].map((r, i) => (
        <circle
          key={r}
          cx={20 + i * 0.9}
          cy={20 - i * 0.9}
          r={r}
          strokeWidth="1"
        />
      ))}
      <circle cx="24" cy="16" r="3" fill="currentColor" stroke="none" />
    </svg>
  );
}

const logos = [
  { name: "Logoipsum", icon: <WavesIcon /> },
  { name: "Logoipsum", icon: <SunIcon /> },
  { name: "Logoipsum", icon: <BoltIcon /> },
  { name: "Logoipsum", icon: <PetalsIcon /> },
  { name: "Logoipsum", icon: <RingsIcon /> },
];

export function Partnership() {
  return (
    <section aria-label="Trusted by" className="bg-gray-50 py-20 text-gray-400">
      <ul className="mx-auto max-w-[1200px] flex items-center justify-center md:justify-between flex-wrap gap-x-12 gap-y-8 px-6md:px-0">
        {logos.map((logo, i) => (
          <li key={i} className="flex items-center gap-2">
            {logo.icon}
            <span className="text-2xl font-bold leading-none tracking-tight">
              {logo.name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Partnership;
