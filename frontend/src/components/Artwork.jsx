const palette = {
  violet: { main: '#6c3ce9', soft: '#ede6ff', ink: '#2f1a6b' },
  coral: { main: '#ff5470', soft: '#ffe3e8', ink: '#7a1128' },
  yellow: { main: '#ffc145', soft: '#fff3d9', ink: '#6b4a00' },
  teal: { main: '#00c2a8', soft: '#dcfbf5', ink: '#00473d' },
}

// A single reusable "sticker sheet" style abstract artwork used in place of
// real photography throughout the site — the page's signature visual motif.
export default function Artwork({ variant = 'hero', color = 'violet', label }) {
  const c = palette[color] || palette.violet
  const uid = `${variant}-${color}-${Math.random().toString(36).slice(2, 7)}`

  return (
    <div className={`art art--${variant}`}>
      <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={label || 'decorative artwork'}>
        <defs>
          <linearGradient id={`grad-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={c.main} />
            <stop offset="100%" stopColor="#6c3ce9" stopOpacity="0.85" />
          </linearGradient>
          <pattern id={`dots-${uid}`} width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.6" fill={c.ink} opacity="0.35" />
          </pattern>
        </defs>

        <rect x="0" y="0" width="400" height="400" rx="28" fill={c.soft} />

        <path
          d="M64 240 C 40 150, 130 60, 230 68 C 330 76, 372 160, 348 246 C 326 324, 232 356, 150 336 C 76 318, 88 330, 64 240 Z"
          fill={`url(#grad-${uid})`}
        />

        <rect x="24" y="24" width="70" height="70" fill={`url(#dots-${uid})`} opacity="0.6" />
        <rect x="306" y="306" width="70" height="70" fill={`url(#dots-${uid})`} opacity="0.6" />

        <circle cx="330" cy="70" r="26" fill="#ffc145" opacity="0.9" />
        <circle cx="52" cy="330" r="18" fill="#ff5470" opacity="0.9" />

        <path
          d="M120 210 q 40 -46 80 0 q 40 46 80 0"
          fill="none"
          stroke="#16121f"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.85"
        />

        <g transform="translate(200,204) rotate(-8)" textAnchor="middle">
          <rect x="-58" y="-24" width="116" height="48" rx="14" fill="#16121f" />
          <text
            x="0"
            y="7"
            fill="#fff"
            fontFamily="Space Mono, monospace"
            fontSize="16"
            fontWeight="700"
          >
            {label || 'AR'}
          </text>
        </g>
      </svg>
    </div>
  )
}
