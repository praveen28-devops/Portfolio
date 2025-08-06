import { useState, useEffect } from 'react';
import { MapPin, Mail, Phone, Linkedin, Github, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParticleSystem from './ParticleSystem';
import profilePhoto from '../assets/profile-photo.jpg'
import heroBg from '../assets/hero-bg.jpg'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactItems = [
    { icon: MapPin, text: 'Namakkal, Tamil Nadu, India', href: '' },
    { icon: Mail, text: 'praveen.fresher@gmail.com', href: 'mailto:praveen.fresher@gmail.com' },
    { icon: Phone, text: '+91-9876543210', href: 'tel:+919876543210' },
    { icon: Linkedin, text: 'LinkedIn Profile', href: '#' },
    { icon: Github, text: 'GitHub Profile', href: '#' }
  ];

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      style={{
        backgroundImage: `linear-gradient(135deg, hsl(215 85% 25% / 0.95), hsl(190 85% 45% / 0.9)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Particle System */}
      <ParticleSystem count={30} />

      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-80 h-80 bg-accent/40 rounded-full blur-3xl floating-card"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/30 rounded-full blur-3xl floating-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-highlight-teal/25 rounded-full blur-3xl floating-slow"></div>
        <div className="absolute top-32 right-32 w-64 h-64 bg-highlight-blue/20 rounded-full blur-3xl floating-card" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Enhanced Profile Section with Real Image */}
          <div className={`mb-8 transition-all duration-1500 ${isVisible ? 'fade-in-scale' : 'opacity-0'}`}>
            <div className="relative inline-block mb-6">
              <div className="w-48 h-48 mx-auto rounded-full glass-card p-2 floating-card super-elevated">
                <div className="w-full h-full rounded-full overflow-hidden relative image-overlay">
                  <img 
                    src={profilePhoto} 
                    alt="Praveen A" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full glow-accent animate-ping"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary-glow rounded-full glow-blue" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Enhanced Name and Title */}
          <div className={`mb-8 transition-all duration-1500 delay-300 ${isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow-blue">
              <span className="bg-gradient-to-r from-primary-light via-accent to-primary-light bg-clip-text text-transparent animate-pulse">
                Praveen A
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 text-glow">
              Aspiring DevOps Engineer
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Fresh Computer Science graduate passionate about cloud technologies, automation, and building scalable systems. 
              Ready to contribute to innovative projects and grow in the DevOps field.
            </p>
          </div>

          {/* Enhanced Contact Info with 3D Effects */}
          <div className={`mb-8 transition-all duration-1500 delay-500 ${isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
              {contactItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`glass-card px-6 py-3 rounded-full hover:super-elevated transition-all duration-500 group tilt-card ${
                    isVisible ? 'bounce-in' : 'opacity-0'
                  }`}
                  style={{ transitionDelay: `${700 + index * 100}ms` }}
                >
                  <div className="flex items-center space-x-3 text-sm">
                    <item.icon className="h-5 w-5 text-accent group-hover:text-accent-glow transition-colors duration-300 group-hover:scale-110" />
                    <span className="text-white group-hover:text-accent transition-colors duration-300 font-medium">
                      {item.text}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Buttons with Advanced 3D Effects */}
          <div className={`transition-all duration-1500 delay-700 ${isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-accent text-white font-bold px-10 py-4 rounded-full shadow-2xl hover:super-elevated transition-all duration-500 group perspective-card text-lg"
              >
                <Download className="h-6 w-6 mr-3 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-3 border-white/30 text-white hover:bg-white/20 hover:border-accent font-bold px-10 py-4 rounded-full transition-all duration-500 group perspective-card backdrop-blur-sm text-lg"
              >
                View Projects
                <Github className="h-6 w-6 ml-3 group-hover:rotate-12 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 floating-card">
        <div className="w-8 h-12 border-3 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-2 h-4 bg-accent rounded-full mt-3 animate-ping glow-accent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;