import Lantern from "./Lantern";

interface FloatingLanternsProps {
  className?: string;
}

const FloatingLanterns = ({ className = "" }: FloatingLanternsProps) => {
  const lanterns = [
    { x: 5, y: 10, size: 50, variant: "gold" as const, delay: 0 },
    { x: 12, y: 25, size: 40, variant: "orange" as const, delay: 0.5 },
    { x: 88, y: 8, size: 55, variant: "gold" as const, delay: 0.3 },
    { x: 92, y: 30, size: 45, variant: "blue" as const, delay: 0.8 },
    { x: 3, y: 50, size: 35, variant: "blue" as const, delay: 1.2 },
    { x: 95, y: 55, size: 38, variant: "orange" as const, delay: 0.7 },
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {lanterns.map((lantern, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            left: `${lantern.x}%`,
            top: `${lantern.y}%`,
            transform: "translateX(-50%)",
          }}
        >
          <Lantern
            size={lantern.size}
            variant={lantern.variant}
            animationDelay={lantern.delay}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingLanterns;
