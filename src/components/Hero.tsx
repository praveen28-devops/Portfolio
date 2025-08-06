import { useState, useEffect } from 'react';
import { MapPin, Mail, Phone, Linkedin, Github, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactItems = [
    { icon: MapPin, text: 'Namakkal, Tamil Nadu, India', href: '' },
    { icon: Mail, text: 'praveen.devops@gmail.com', href: 'mailto:praveen.devops@gmail.com' },
    { icon: Phone, text: '+91-9876543210', href: 'tel:+919876543210' },
    { icon: Linkedin, text: 'LinkedIn Profile', href: '#' },
    { icon: Github, text: 'GitHub Profile', href: '#' }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl floating-card"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-neon-cyan/20 rounded-full blur-3xl floating-card" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Section */}
          <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'fade-in-scale' : 'opacity-0'}`}>
            <div className="relative inline-block mb-6">
              <div className="w-40 h-40 mx-auto rounded-full glass-card p-2 floating-card">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-6xl font-bold text-white">
                  PA
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full glow-accent animate-ping"></div>
            </div>
          </div>

          {/* Name and Title */}
          <div className={`mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-glow">
              <span className="bg-gradient-to-r from-primary via-accent to-primary-light bg-clip-text text-transparent">
                Praveen A
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary-light mb-4">
              DevOps & Cloud Engineer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate about cloud infrastructure, automation, and building scalable systems that power modern applications. 
              Transforming ideas into reliable, efficient solutions.
            </p>
          </div>

          {/* Contact Info */}
          <div className={`mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {contactItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="glass-card px-4 py-2 rounded-full hover:elevated-card transition-all duration-300 group perspective-card"
                >
                  <div className="flex items-center space-x-2 text-sm">
                    <item.icon className="h-4 w-4 text-accent group-hover:text-accent-glow transition-colors duration-300" />
                    <span className="text-foreground group-hover:text-primary transition-colors duration-300">
                      {item.text}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-accent text-primary-foreground font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Download className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8 py-3 rounded-full transition-all duration-300 group"
              >
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;