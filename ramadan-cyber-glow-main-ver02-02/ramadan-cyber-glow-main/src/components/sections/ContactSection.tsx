import { useState } from "react";
import { Send, Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import StarField from "@/components/decorations/StarField";
import GeometricPattern from "@/components/decorations/GeometricPattern";

const socialLinks = [
  { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/share/1b1mkwptZZ/" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/securinets.enetcom?igsh=aXZ0djQ5NW82ejN6" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/posts/securinets-enet-com_throwback-to-our-online-session-first-activity-7421634810521149440-DjE1?utm_source=share&utm_medium=member_android&rcm=ACoAAFBMY9YBrSaa2oS0E39m1xtoHNgsWgDZEe8" },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: "Message Sent !",
      description: "Thank you for contacting us. We will get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-[#0A0F1C]">
      <GeometricPattern className="opacity-[0.02]" />
      <StarField count={30} />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Contact <span className="text-primary">Us</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 max-w-6xl mx-auto items-start">
          {/* Left Column: Info Cards */}
          <div className="space-y-6">
            {/* Email Card */}
            <Card className="bg-[#111827]/50 backdrop-blur-sm border-white/5 p-5 md:p-8 rounded-2xl">
              <div className="flex items-start sm:items-center gap-4 md:gap-6">
                <div className="p-3 md:p-4 rounded-xl bg-primary/20 text-primary shrink-0">
                  <Mail className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1">Email Us</h3>
                  <p className="text-sm md:text-base text-muted-foreground break-all sm:break-normal">
                    cyberquest.ramadannights@gmail.com
                  </p>
                </div>
              </div>
            </Card>

            {/* Social Card */}
            <Card className="bg-[#111827]/50 backdrop-blur-sm border-white/5 p-5 md:p-8 rounded-2xl">
              <div className="flex items-start sm:items-center gap-4 md:gap-6">
                <div className="p-3 md:p-4 rounded-xl bg-secondary/20 text-secondary shrink-0">
                  <Send className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3">Social Media</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 text-muted-foreground hover:text-white hover:bg-white/10 transition-all"
                        aria-label={social.name}
                      >
                        <social.icon className="w-5 h-5 md:w-6 md:h-6" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Contact Form */}
          <Card className="bg-[#111827]/50 backdrop-blur-sm border-white/5 p-5 md:p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-white ml-1">Your Name</label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-[#1F2937]/50 border-white/5 focus:border-primary/50 text-white h-12"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-white ml-1">Email Address</label>
                <Input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-[#1F2937]/50 border-white/5 focus:border-primary/50 text-white h-12"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-white ml-1">Message</label>
                <Textarea
                  name="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="bg-[#1F2937]/50 border-white/5 focus:border-primary/50 text-white resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 rounded-xl transition-all"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
