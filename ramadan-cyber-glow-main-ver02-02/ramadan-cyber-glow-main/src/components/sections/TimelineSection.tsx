import React from 'react';
import { 
  Users, 
  Tv, 
  Rocket, 
  Coffee, 
  Terminal, 
  Moon, 
  Flag, 
  Award,
  Clock
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import StarField from "@/components/decorations/StarField";
import GeometricPattern from "@/components/decorations/GeometricPattern";

type EventType = 'ctf' | 'break' | 'iftar' | 'ceremony' | 'workshop';

interface TimelineEvent {
    id: number;
    time: string;
    title: string;
    type: EventType;
    icon: any;
    description?: string;
}

const events: TimelineEvent[] = [
    { 
      id: 1, 
      time: "20:00", 
      title: "Opening Ceremony", 
      type: 'ceremony', 
      icon: Users,
      description: "Registration and welcome kit distribution."
    },
    { 
      id: 2, 
      time: "21:00", 
      title: "Opening & CTF Rules", 
      type: 'ceremony', 
      icon: Tv,
      description: "Official opening ceremony and rules presentation."
    },
    { 
      id: 3, 
      time: "22:00", 
      title: "Launch CTF", 
      type: 'ctf', 
      icon: Rocket,
      description: "Start of the Capture The Flag competition!"
    },
    { 
      id: 4, 
      time: "04:00", 
      title: "Suhoor", 
      type: 'iftar', 
      icon: Moon,
      description: "Ramadan pre-dawn meal break."
    },
    { 
      id: 5, 
      time: "06:00", 
      title: "Closing Ceremony", 
      type: 'ceremony', 
      icon: Award,
      description: "Announcement of winners and closing ceremony."
    },
];

const typeStyles: Record<EventType, { color: string, bg: string, ring: string }> = {
    ctf: { color: "text-primary", bg: "bg-primary/10", ring: "ring-primary/30" },
    break: { color: "text-amber-400", bg: "bg-amber-400/10", ring: "ring-amber-400/30" },
    iftar: { color: "text-lantern-gold", bg: "bg-lantern-gold/10", ring: "ring-lantern-gold/30" },
    ceremony: { color: "text-cyan-400", bg: "bg-cyan-400/10", ring: "ring-cyan-400/30" },
    workshop: { color: "text-purple-400", bg: "bg-purple-400/10", ring: "ring-purple-400/30" },
};

const TimelineSection = () => {
    return (
        <section id="timeline" className="relative py-20 bg-[#060A16] overflow-hidden">
            <GeometricPattern className="opacity-[0.03]" />
            <StarField count={20} />
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Our <span className="text-primary">Planning</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
                        Follow the journey of CyberQuests 1.0 from dusk till dawn.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Central Vertical Line */}
                    <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/10 lg:-translate-x-1/2" />

                    <div className="space-y-12">
                        {events.map((event, index) => {
                            const isEven = index % 2 === 0;
                            const style = typeStyles[event.type];
                            const Icon = event.icon;

                            return (
                                <div key={event.id} className="relative group">
                                    {/* Timeline Node */}
                                    <div className="absolute left-8 lg:left-1/2 top-6 lg:top-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary lg:-translate-y-1/2 lg:-translate-x-1/2 z-20 shadow-[0_0_15px_rgba(hsl(var(--primary)),0.6)] group-hover:scale-125 transition-transform" />

                                    {/* Content Container */}
                                    <div className={`flex flex-col lg:flex-row ${isEven ? 'lg:flex-row-reverse' : ''} items-start lg:items-center w-full gap-4 lg:gap-0`}>
                                        
                                        {/* Card Side */}
                                        <div className={`w-full lg:w-1/2 pl-16 lg:pl-0 ${isEven ? 'lg:pl-16' : 'lg:pr-16'} order-2 lg:order-none`}>
                                            <Card className="bg-[#111827]/60 backdrop-blur-xl border-white/5 p-5 md:p-6 rounded-2xl hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,0,0,0.4)] group">
                                                <div className="flex items-center gap-4 mb-3">
                                                    <div className={`p-2 rounded-xl ${style.bg} ${style.color} group-hover:scale-110 transition-transform duration-500`}>
                                                        <Icon size={20} />
                                                    </div>
                                                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">
                                                        {event.title}
                                                    </h3>
                                                </div>
                                                <p className="text-muted-foreground text-sm leading-relaxed text-left opacity-80">
                                                    {event.description}
                                                </p>
                                            </Card>
                                        </div>

                                        {/* Time Side */}
                                        <div className={`w-full lg:w-1/2 pl-16 lg:pl-0 ${isEven ? 'lg:text-right lg:pr-16' : 'lg:text-left lg:pl-16'} order-1 lg:order-none`}>
                                            <div className={`flex items-center gap-2 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                                                <div className={`flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-inner ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                                                    <Clock size={16} className="text-primary" />
                                                    <span className="text-lg md:text-xl font-mono font-bold text-white tracking-tight">
                                                        {event.time}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;

