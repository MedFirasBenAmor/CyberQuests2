import { useState } from "react";
import {
  Bug,
  Globe,
  Cpu,
  Puzzle,
  Search,
  Lock,
  Eye,
  Binary,
  Calendar,
  Clock,
  User
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import StarField from "@/components/decorations/StarField";
import GeometricPattern from "@/components/decorations/GeometricPattern";

const GOOGLE_FORM_URL = import.meta.env.VITE_GOOGLE_FORM_URL || "#";

const categories = [
  { id: "pwn", name: "Pwn", icon: Bug, color: "text-red-400", description: "Memory corruption and exploitation", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop" },
  { id: "web", name: "Web Exploitation", icon: Globe, color: "text-blue-400", description: "Web vulnerabilities and exploits", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80" },
  { id: "reverse", name: "Reverse Engineering", icon: Cpu, color: "text-green-400", description: "Binary analysis and reversing", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80" },
  { id: "misc", name: "Misc", icon: Puzzle, color: "text-purple-400", description: "Logic, scripting, challenges", image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&h=400&fit=crop" },
  { id: "osint", name: "OSINT", icon: Search, color: "text-yellow-400", description: "Open-source intelligence gathering", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" },
  { id: "crypto", name: "Cryptography", icon: Lock, color: "text-cyan-400", description: "Encryption and cryptographic analysis", image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=400&fit=crop" },
  { id: "stego", name: "Steganography", icon: Eye, color: "text-pink-400", description: "Hidden data and secrets", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop" },
  { id: "forensics", name: "Forensics", icon: Binary, color: "text-orange-400", description: "Digital evidence analysis", image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=600&h=400&fit=crop" },
];

const workshops = [
  { id: 1, title: "Crypto 1", category: "crypto", difficulty: "Beginner", duration: "2h", trainer: "Mustapha Labiadh", date: "February 10, 2026" },
  { id: 2, title: "Web 1", category: "web", difficulty: "Beginner", duration: "2h", trainer: "Koussay Dhifi", date: "February 11, 2026" },
  { id: 3, title: "Crypto 2", category: "crypto", difficulty: "Intermediate", duration: "2h", trainer: "Chahine Ben Salah", date: "February 12, 2026" },
  { id: 4, title: "Web 2", category: "web", difficulty: "Intermediate", duration: "2h", trainer: "Fedi Brinsi", date: "February 13, 2026" },
  { id: 5, title: "Forensic 1", category: "forensics", difficulty: "Beginner", duration: "2h", trainer: "Abderrahman Aissaoui", date: "February 14, 2026" },
  { id: 6, title: "Forensic 2", category: "forensics", difficulty: "Intermediate", duration: "2h", trainer: "Aziz Haddadi", date: "February 15, 2026" },
  { id: 7, title: "Reverse 1", category: "reverse", difficulty: "Beginner", duration: "2h", trainer: "Youssef Hafsouni", date: "February 16, 2026" },
  { id: 8, title: "Reverse 2", category: "reverse", difficulty: "Intermediate", duration: "2h", trainer: "Omar Bel Haj Youssef", date: "February 17, 2026" },
  { id: 9, title: "Pwn 1", category: "pwn", difficulty: "Beginner", duration: "2h", trainer: "Youssef Ben Hsan", date: "February 18, 2026" },
  { id: 10, title: "Pwn 2", category: "pwn", difficulty: "Intermediate", duration: "2h", trainer: "Youssef Ben Hsan", date: "February 19, 2026" },
  { id: 11, title: "OSINT", category: "osint", difficulty: "Beginner", duration: "2h", trainer: "Rayen Akriche & Bassem Rebai", date: "February 20, 2026" },
];

const difficultyColors: Record<string, string> = {
  Beginner: "bg-green-500/20 text-green-400 border-green-500/30",
  Intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Advanced: "bg-red-500/20 text-red-400 border-red-500/30",
};

const WorkshopsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredWorkshops = selectedCategory
    ? workshops.filter((w) => w.category === selectedCategory)
    : [];

  const getCategoryColor = (categoryId: string) => {
    const category = categories.find((c) => c.id === categoryId);
    return category ? category.color : "text-muted-foreground";
  };

  const handleJoinSession = () => {
    window.open(GOOGLE_FORM_URL, "_blank");
  };

  const isSessionPast = (dateStr: string) => {
    const monthMap: Record<string, number> = {
      "Janvier": 0, "Février": 1, "Mars": 2, "Avril": 3, "Mai": 4, "Juin": 5,
      "Juillet": 6, "Août": 7, "Septembre": 8, "Octobre": 9, "Novembre": 10, "Décembre": 11
    };

    const parts = dateStr.split(" ");
    if (parts.length !== 3) return false;

    const day = parseInt(parts[0]);
    const month = monthMap[parts[1]];
    const year = parseInt(parts[2]);

    if (isNaN(day) || month === undefined || isNaN(year)) return false;

    const workshopDate = new Date(year, month, day, 23, 59, 59); // End of the day
    return new Date() > workshopDate;
  };

  return (
    <section id="workshops" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <GeometricPattern className="opacity-[0.02]" />
      <StarField count={25} />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Workshops & <span className="text-primary">Training</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Master cybersecurity skills through hands-on workshops led by experts
          </p>
        </div>

        {/* Challenge Categories */}
        <div className="mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
            Challenge Categories
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(
                  selectedCategory === category.id ? null : category.id
                )}
                className={`p-4 rounded-xl border transition-all duration-300 hover-lift group ${selectedCategory === category.id
                  ? "bg-card border-primary/50 shadow-lg shadow-primary/10"
                  : "bg-card/30 border-border/30 hover:bg-card/50 hover:border-border"
                  }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <category.icon
                    className={`w-6 h-6 md:w-8 md:h-8 ${category.color} group-hover:scale-110 transition-transform`}
                  />
                  <span className="text-sm md:text-base font-medium text-foreground text-center">
                    {category.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Category Display */}
        {selectedCategory && (
          <div className="mb-8">
            {(() => {
              const category = categories.find(c => c.id === selectedCategory);
              if (!category) return null;
              const CategoryIcon = category.icon;
              return (
                <div className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border border-border/30 rounded-2xl overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    {/* Category Image */}
                    <div className="md:w-1/3 h-48 md:h-auto">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {/* Category Info */}
                    <div className="md:w-2/3 p-6 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-3">
                        <CategoryIcon className={`w-8 h-8 ${category.color}`} />
                        <h3 className={`text-2xl md:text-3xl font-bold ${category.color}`}>
                          {category.name}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-lg mb-4">
                        {category.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="border-primary/50 text-primary">
                          {filteredWorkshops.length} session{filteredWorkshops.length > 1 ? 's' : ''} available
                        </Badge>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedCategory(null)}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          Close
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Sessions Title */}
        {filteredWorkshops.length > 0 && (
          <h4 className="text-xl font-semibold text-center mb-6 text-foreground">
            Available Sessions
          </h4>
        )}

        {/* Workshops Grid - Centered */}
        {filteredWorkshops.length > 0 ? (
          <div className="flex justify-center">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
              {filteredWorkshops.map((workshop) => (
                <Card
                  key={workshop.id}
                  className="bg-card/50 backdrop-blur-sm border-border/30 hover:border-primary/30 transition-all duration-300 hover-lift group"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <Badge
                        variant="outline"
                        className={`text-xs ${difficultyColors[workshop.difficulty]}`}
                      >
                        {workshop.difficulty}
                      </Badge>
                      <Badge
                        variant="outline"
                        className={`text-xs ${getCategoryColor(workshop.category)} border-current/30`}
                      >
                        {categories.find(c => c.id === workshop.category)?.name}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {workshop.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {/* Trainer */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4 text-primary" />
                      <span>{workshop.trainer}</span>
                    </div>

                    {/* Date & Duration */}
                    <div className="flex items-center justify-between gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{workshop.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="font-mono">{workshop.duration}</span>
                      </div>
                    </div>


                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            <p className="text-lg">Select a category to see available workshops</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkshopsSection;
