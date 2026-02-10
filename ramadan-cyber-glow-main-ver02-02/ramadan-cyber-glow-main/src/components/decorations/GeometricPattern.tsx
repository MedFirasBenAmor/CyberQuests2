interface GeometricPatternProps {
  className?: string;
}

const GeometricPattern = ({ className = "" }: GeometricPatternProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03] ${className}`}>
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-pattern"
      >
        <defs>
          <pattern
            id="islamicPattern"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            {/* Eight-pointed star pattern */}
            <g stroke="hsl(var(--primary))" strokeWidth="1" fill="none">
              {/* Central octagram */}
              <polygon points="50,10 60,40 90,50 60,60 50,90 40,60 10,50 40,40" />
              <polygon points="50,20 55,40 80,50 55,60 50,80 45,60 20,50 45,40" />
              
              {/* Corner connections */}
              <path d="M 0,0 L 30,30" />
              <path d="M 100,0 L 70,30" />
              <path d="M 0,100 L 30,70" />
              <path d="M 100,100 L 70,70" />
              
              {/* Diamond accents */}
              <polygon points="50,0 55,5 50,10 45,5" />
              <polygon points="0,50 5,55 10,50 5,45" />
              <polygon points="100,50 95,55 90,50 95,45" />
              <polygon points="50,100 55,95 50,90 45,95" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#islamicPattern)" />
      </svg>
    </div>
  );
};

export default GeometricPattern;
