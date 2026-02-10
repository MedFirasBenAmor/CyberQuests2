import { Target, Users, Network, Trophy, Sparkles, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StarField from "@/components/decorations/StarField";
import GeometricPattern from "@/components/decorations/GeometricPattern";

const features = [
  {
    icon: Target,
    title: "Real Challenges",
    description: "Face industry-level cybersecurity challenges",
  },
  {
    icon: Users,
    title: "Expert Mentors",
    description: "Learn from experienced security professionals",
  },
  {
    icon: Network,
    title: "Networking",
    description: "Connect with fellow security enthusiasts",
  },
  {
    icon: Trophy,
    title: "Prizes",
    description: "Win exciting prizes and recognition",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-deep/50 to-background" />
      <GeometricPattern className="opacity-[0.02]" />
      <StarField count={30} />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">CyberQuests</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            The first Capture The Flag event organized by SecuriNets ENET'Com, 
            bringing together cybersecurity enthusiasts for an unforgettable experience.
          </p>
        </div>

        {/* Mission & Highlights Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift group">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Shield className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              To foster cybersecurity skills among students and professionals through 
              hands-on challenges, workshops, and collaborative learning in a Ramadan Nights
              atmosphere that celebrates both technology and tradition.
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-secondary/30 transition-all duration-300 hover-lift group">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary/20 transition-colors">
                  <Sparkles className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">Event Highlights</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-muted-foreground">
             CyberQuest 1.0 is a beginner-friendly CTF event combining learning and competition in a unique Ramadan Nights atmosphere.
It features 8 CTF categories and 10+ technical sessions designed to build strong cybersecurity foundations.
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="bg-card/30 backdrop-blur-sm border-border/30 text-center p-4 md:p-6 hover:bg-card/50 transition-all duration-300 hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 md:p-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary group-hover:scale-110 transition-transform">
                  <feature.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="font-semibold text-sm md:text-base text-foreground">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground hidden sm:block">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
