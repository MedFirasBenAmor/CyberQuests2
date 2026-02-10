interface CrescentMoonProps {
  className?: string;
  size?: number;
}

const CrescentMoon = ({ className = "", size = 120 }: CrescentMoonProps) => {
  return (
    <div className={`relative animate-moon-glow ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer glow */}
        <defs>
          <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="moonFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="50%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--primary))" />
          </linearGradient>
        </defs>
        
        {/* Glow circle */}
        <circle cx="50" cy="50" r="48" fill="url(#moonGlow)" />
        
        {/* Crescent moon shape */}
        <path
          d="M 50 5 
             A 45 45 0 1 1 50 95 
             A 35 35 0 1 0 50 5"
          fill="url(#moonFill)"
          className="drop-shadow-lg"
        />
        
        {/* Inner highlight */}
        <path
          d="M 52 10 
             A 40 40 0 1 1 52 90 
             A 32 32 0 1 0 52 10"
          fill="white"
          opacity="0.3"
        />
      </svg>
    </div>
  );
};

export default CrescentMoon;
