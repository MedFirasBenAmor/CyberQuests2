interface CyberCircuitPatternProps {
  className?: string;
}

const CyberCircuitPattern = ({ className = "" }: CyberCircuitPatternProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-[0.08]"
      >
        <defs>
          <pattern
            id="circuitPattern"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            {/* Main circuit lines */}
            <g stroke="hsl(var(--secondary))" strokeWidth="1" fill="none">
              {/* Horizontal lines */}
              <path d="M 0,50 L 60,50 L 70,60 L 130,60 L 140,50 L 200,50" />
              <path d="M 0,150 L 40,150 L 50,140 L 100,140 L 110,150 L 200,150" />
              
              {/* Vertical lines */}
              <path d="M 50,0 L 50,40 L 60,50" />
              <path d="M 150,0 L 150,60 L 140,70 L 140,130 L 150,140 L 150,200" />
              
              {/* Diagonal connections */}
              <path d="M 70,60 L 80,70 L 80,130 L 70,140" />
              <path d="M 130,60 L 120,70 L 120,130 L 130,140" />
            </g>
            
            {/* Circuit nodes */}
            <g fill="hsl(var(--primary))">
              <circle cx="50" cy="50" r="3" />
              <circle cx="70" cy="60" r="2" />
              <circle cx="130" cy="60" r="2" />
              <circle cx="150" cy="50" r="3" />
              <circle cx="80" cy="100" r="4" />
              <circle cx="120" cy="100" r="4" />
              <circle cx="50" cy="150" r="3" />
              <circle cx="100" cy="140" r="2" />
              <circle cx="150" cy="150" r="3" />
            </g>
            
            {/* Lock icon at center */}
            <g stroke="hsl(var(--secondary))" strokeWidth="1.5" fill="none" transform="translate(85, 85)">
              <rect x="0" y="10" width="30" height="20" rx="2" />
              <path d="M 5,10 L 5,5 Q 5,0 15,0 Q 25,0 25,5 L 25,10" />
              <circle cx="15" cy="20" r="3" fill="hsl(var(--secondary))" />
            </g>
          </pattern>
          
          {/* Glow effect */}
          <filter id="circuitGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuitPattern)" filter="url(#circuitGlow)" />
      </svg>
      
      {/* Animated glowing lines */}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" className="opacity-20">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="hsl(var(--secondary))" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          
          {/* Animated horizontal lines */}
          <line 
            x1="0" y1="25%" x2="100%" y2="25%" 
            stroke="url(#lineGradient)" 
            strokeWidth="1"
            className="animate-pulse"
            style={{ animationDuration: '3s' }}
          />
          <line 
            x1="0" y1="75%" x2="100%" y2="75%" 
            stroke="url(#lineGradient)" 
            strokeWidth="1"
            className="animate-pulse"
            style={{ animationDuration: '4s', animationDelay: '1s' }}
          />
        </svg>
      </div>
    </div>
  );
};

export default CyberCircuitPattern;
