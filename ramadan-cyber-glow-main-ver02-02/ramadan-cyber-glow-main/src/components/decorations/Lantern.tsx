interface LanternProps {
  className?: string;
  size?: number;
  variant?: "gold" | "blue" | "orange";
  animationDelay?: number;
}

const Lantern = ({ 
  className = "", 
  size = 80, 
  variant = "gold",
  animationDelay = 0 
}: LanternProps) => {
  const colors = {
    gold: {
      main: "hsl(var(--primary))",
      light: "hsl(var(--primary))",
      dark: "hsl(var(--secondary))",
      glow: "hsl(var(--primary))",
    },
    blue: {
      main: "hsl(var(--secondary))",
      light: "hsl(var(--secondary))",
      dark: "hsl(var(--background))",
      glow: "hsl(var(--secondary))",
    },
    orange: {
      main: "hsl(var(--primary))",
      light: "hsl(var(--primary))",
      dark: "hsl(var(--secondary))",
      glow: "hsl(var(--primary))",
    },
  };

  const c = colors[variant];

  return (
    <div 
      className={`animate-swing-slow ${className}`}
      style={{ animationDelay: `${animationDelay}s` }}
    >
      {/* Hanging chain */}
      <div 
        className="mx-auto w-0.5 h-8 opacity-60"
        style={{ background: c.dark }}
      />
      
      <svg
        width={size}
        height={size * 1.4}
        viewBox="0 0 80 112"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-glow-pulse"
        style={{ animationDelay: `${animationDelay + 0.5}s` }}
      >
        <defs>
          <radialGradient id={`lanternGlow-${variant}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={c.glow} stopOpacity="0.9" />
            <stop offset="50%" stopColor={c.main} stopOpacity="0.5" />
            <stop offset="100%" stopColor={c.dark} stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`lanternBody-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={c.light} />
            <stop offset="50%" stopColor={c.main} />
            <stop offset="100%" stopColor={c.dark} />
          </linearGradient>
        </defs>

        {/* Inner glow */}
        <ellipse cx="40" cy="60" rx="30" ry="40" fill={`url(#lanternGlow-${variant})`} />

        {/* Top dome */}
        <path
          d="M 25 20 Q 40 5 55 20 L 52 25 Q 40 15 28 25 Z"
          fill={c.dark}
        />
        
        {/* Top cap */}
        <ellipse cx="40" cy="20" rx="15" ry="5" fill={c.dark} />
        
        {/* Finial */}
        <ellipse cx="40" cy="8" rx="4" ry="6" fill={c.main} />
        
        {/* Main body frame */}
        <path
          d="M 25 25 
             Q 15 45 15 60 
             Q 15 85 25 95 
             L 30 100 
             Q 40 105 50 100 
             L 55 95 
             Q 65 85 65 60 
             Q 65 45 55 25 
             Q 40 20 25 25"
          fill="none"
          stroke={c.dark}
          strokeWidth="3"
        />
        
        {/* Glass panels with glow */}
        <path
          d="M 27 28 
             Q 18 48 18 60 
             Q 18 82 27 92 
             L 40 97 
             L 53 92 
             Q 62 82 62 60 
             Q 62 48 53 28 
             Q 40 23 27 28"
          fill={`url(#lanternBody-${variant})`}
          opacity="0.7"
        />
        
        {/* Decorative patterns */}
        <path
          d="M 30 40 L 40 35 L 50 40 L 40 45 Z"
          fill={c.light}
          opacity="0.5"
        />
        <path
          d="M 28 60 L 40 52 L 52 60 L 40 68 Z"
          fill={c.light}
          opacity="0.4"
        />
        <path
          d="M 30 80 L 40 75 L 50 80 L 40 85 Z"
          fill={c.light}
          opacity="0.3"
        />
        
        {/* Bottom base */}
        <ellipse cx="40" cy="100" rx="12" ry="4" fill={c.dark} />
        <ellipse cx="40" cy="105" rx="8" ry="3" fill={c.main} />
      </svg>
    </div>
  );
};

export default Lantern;
