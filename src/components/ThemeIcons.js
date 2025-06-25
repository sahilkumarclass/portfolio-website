export const SunIcon = ({ size = 40, color = "#3A4252" }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="8" fill="#FFD600" />
        <g stroke={color} strokeWidth="2">
            <line x1="16" y1="2" x2="16" y2="7" />
            <line x1="16" y1="25" x2="16" y2="30" />
            <line x1="2" y1="16" x2="7" y2="16" />
            <line x1="25" y1="16" x2="30" y2="16" />
            <line x1="6.22" y1="6.22" x2="9.34" y2="9.34" />
            <line x1="22.66" y1="22.66" x2="25.78" y2="25.78" />
            <line x1="6.22" y1="25.78" x2="9.34" y2="22.66" />
            <line x1="22.66" y1="9.34" x2="25.78" y2="6.22" />
        </g>
    </svg>
);

export const MoonIcon = ({ size = 40, color = "#3A4252" }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <path
            d="M22 16c0 3.31-2.69 6-6 6-1.1 0-2.13-.3-3-.82a7 7 0 0 0 7.82-9.18A6.01 6.01 0 0 1 22 16z"
            stroke={color}
            strokeWidth="2.2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
); 