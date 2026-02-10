import { MapPin, Calendar, Clock, Timer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import StarField from "@/components/decorations/StarField";
import GeometricPattern from "@/components/decorations/GeometricPattern";

const locationCards = [
  {
    icon: MapPin,
    title: "Location",
    value: "ENET'Com",
    subtitle: "Sfax Technopole, Tunis Road, Sfax",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Calendar,
    title: "Date",
    value: "21 Feb 2026",
    subtitle: "During Ramadan",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Clock,
    title: "Start Time",
    value: "18:00",
    subtitle: "Registration opens 17:30",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
  },
  {
    icon: Timer,
    title: "End Time",
    value: "07:00 AM",
    subtitle: "Award ceremony follows",
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
  },
];

const LocationSection = () => {
  return (
    <section id="location" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-deep/30 to-background" />
      <GeometricPattern className="opacity-[0.02]" />
      <StarField count={25} />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Where & <span className="text-primary">When</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
            Mark your calendar and join us at ENET'Com for an unforgettable experience
          </p>
        </div>

        {/* Location Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {locationCards.map((card, index) => (
            <Card
              key={card.title}
              className="bg-card/50 backdrop-blur-sm border-border/30 hover:border-primary/20 transition-all duration-300 hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`inline-flex p-3 rounded-xl ${card.bgColor} mb-4 group-hover:scale-110 transition-transform`}>
                  <card.icon className={`w-6 h-6 ${card.color}`} />
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  {card.title}
                </p>
                <p className="text-lg md:text-xl font-bold text-foreground mb-1">
                  {card.value}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {card.subtitle}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
