import { Building, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import StarField from "@/components/decorations/StarField";
import GeometricPattern from "@/components/decorations/GeometricPattern";

const partners = [
  {
    name: "ENET'Com",
    description: "National School of Electronics and Telecommunications of Sfax",
    icon: Building,
  },
  {
    name: "SecuriNet FST",
    description: "Technical Team",
    icon: Users,
  },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="relative py-16 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <GeometricPattern className="opacity-[0.02]" />
      <StarField count={20} />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient-orange">Partners</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Proudly supported by leading institutions in cybersecurity education
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {partners.map((partner) => (
            <Card
              key={partner.name}
              className="bg-card/50 backdrop-blur-sm border-border/30 hover:border-primary/30 transition-all duration-300 hover-lift group"
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-4 group-hover:scale-110 transition-transform">
                  <partner.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {partner.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {partner.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
