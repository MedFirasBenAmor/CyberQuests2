import { useState, useEffect } from "react";
import heroBackground from "@/assets/test_background.png";
import logoTlf from "@/assets/logo_tlf.png";

const EVENT_DATE = new Date("2026-02-21T09:00:00");

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = EVENT_DATE.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);


  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image - Responsive and Original Size */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-auto hidden md:block"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-auto md:hidden"
        style={{ backgroundImage: `url(${logoTlf})` }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />

      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/60 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Animated glowing orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-glow-orb" />
        <div className="absolute bottom-1/3 right-1/5 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-glow-orb-reverse" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-lantern-gold/10 rounded-full blur-3xl animate-glow-orb" style={{ animationDelay: '2s' }} />
      </div>

      {/* Animated circuit lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <defs>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="circuitGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Horizontal animated lines */}
        <line x1="0" y1="20%" x2="100%" y2="20%" stroke="url(#circuitGradient)" strokeWidth="1" className="animate-circuit-h" />
        <line x1="0" y1="80%" x2="100%" y2="80%" stroke="url(#circuitGradient)" strokeWidth="1" className="animate-circuit-h" style={{ animationDelay: '1.5s' }} />

        {/* Vertical animated lines */}
        <line x1="15%" y1="0" x2="15%" y2="100%" stroke="url(#circuitGradient2)" strokeWidth="1" className="animate-circuit-v" />
        <line x1="85%" y1="0" x2="85%" y2="100%" stroke="url(#circuitGradient2)" strokeWidth="1" className="animate-circuit-v" style={{ animationDelay: '2s' }} />

        {/* Animated nodes */}
        <circle cx="15%" cy="20%" r="4" fill="hsl(var(--primary))" className="animate-pulse-node" />
        <circle cx="85%" cy="20%" r="4" fill="hsl(var(--secondary))" className="animate-pulse-node" style={{ animationDelay: '0.5s' }} />
        <circle cx="15%" cy="80%" r="4" fill="hsl(var(--secondary))" className="animate-pulse-node" style={{ animationDelay: '1s' }} />
        <circle cx="85%" cy="80%" r="4" fill="hsl(var(--primary))" className="animate-pulse-node" style={{ animationDelay: '1.5s' }} />
      </svg>

      {/* Floating lantern glow spots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[8%] w-16 h-16 bg-lantern-gold/30 rounded-full blur-xl animate-lantern-float" />
        <div className="absolute top-[25%] right-[10%] w-20 h-20 bg-primary/25 rounded-full blur-xl animate-lantern-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[40%] left-[5%] w-14 h-14 bg-lantern-gold/20 rounded-full blur-xl animate-lantern-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[35%] right-[7%] w-18 h-18 bg-primary/20 rounded-full blur-xl animate-lantern-float" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Scanning line effect 
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-scan-line" />
      </div>
      */}

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center flex flex-col items-center justify-center min-h-screen pt-16">
        <div className="mb-12">
          <h1 className="animate-fade-in-up text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1]" style={{ textShadow: '0 4px 30px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,1)' }}>
            <span className="text-white drop-shadow-2xl">Cyber</span>
            <br className="md:hidden" />
            <span className="text-primary drop-shadow-2xl">Quests</span>
            <span className="inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border-2 border-primary/70 px-5 py-1.5 text-white ml-3 md:ml-4 text-xl md:text-3xl lg:text-4xl align-middle shadow-[0_0_50px_rgba(hsl(var(--primary)),0.6)] animate-pulse-subtle">
              1.0
            </span>
          </h1>
        </div>

        {/* Countdown Timer - Centered and Compact */}
        <div className="animate-fade-in-up delay-200 flex items-start justify-center gap-1 md:gap-2 scale-[0.85] xs:scale-95 md:scale-100">
          {[
            { value: timeLeft.days, label: "Days" },
            { value: timeLeft.hours, label: "Hours" },
            { value: timeLeft.minutes, label: "Mins" },
            { value: timeLeft.seconds, label: "Secs" },
          ].map((item, index) => (
            <div key={item.label} className="flex items-start">
              <div className="flex flex-col items-center">
                <div className="bg-card/95 backdrop-blur-md border border-primary/40 rounded-md px-2 py-1.5 md:px-3 md:py-2 min-w-[50px] md:min-w-[70px] shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                  <span className="text-xl md:text-3xl lg:text-4xl font-mono font-bold text-primary filter drop-shadow-md leading-none">
                    {String(item.value).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-[10px] md:text-xs text-muted-foreground mt-1 font-medium uppercase tracking-tighter">{item.label}</span>
              </div>

              {index < 3 && (
                <div className="h-[30px] md:h-[50px] flex items-center justify-center mx-0.5 md:mx-1">
                  <span className="text-primary/70 text-lg md:text-2xl font-bold animate-pulse">:</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
