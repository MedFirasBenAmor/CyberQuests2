import { Button } from "@/components/ui/button";
import StarField from "@/components/decorations/StarField";
import GeometricPattern from "@/components/decorations/GeometricPattern";

const GOOGLE_FORM_URL = import.meta.env.VITE_GOOGLE_FORM_URL || "#";

const JoinUsSection = () => {
  const handleJoinClick = () => {
    window.open(GOOGLE_FORM_URL, "_blank");
  };

  return (
    <section id="join" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <GeometricPattern className="opacity-[0.03]" />
      <StarField count={40} />

      {/* Glowing Mist Effects */}
      <div className="absolute left-[-5%] top-1/4 w-72 h-72 bg-primary/30 rounded-full blur-[100px] animate-pulse pointer-events-none shadow-[0_0_60px_rgba(hsl(var(--primary)),0.4)]" />
      <div className="absolute right-[-5%] top-1/4 w-72 h-72 bg-primary/30 rounded-full blur-[100px] animate-pulse pointer-events-none shadow-[0_0_60px_rgba(hsl(var(--primary)),0.4)]" style={{ animationDelay: '1.2s' }} />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-3">
          Join <span className="text-primary">CyberQuests</span> 
          <span className="inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border-2 border-primary/70 px-4 py-1 text-white text-lg md:text-xl shadow-[0_0_40px_rgba(hsl(var(--primary)),0.5)] animate-pulse-subtle">
            1.0
          </span>
        </h2>
        
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-base md:text-lg">
          Ready to test your cybersecurity skills? Register now and be part of 
          the first edition of CyberQuests. Challenge yourself, learn from experts, 
          and compete for amazing prizes!
        </p>

        <Button
          onClick={handleJoinClick}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-16 py-8 text-xl transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 glow-orange"
        >
          Join Us
        </Button>

        <p className="mt-6 text-sm text-muted-foreground">
          Registration is free • Limited spots available
        </p>
      </div>
    </section>
  );
};

export default JoinUsSection;
