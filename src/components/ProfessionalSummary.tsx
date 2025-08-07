import { useEffect, useState } from 'react';
import { Code, Cloud, Zap, Shield } from 'lucide-react';
import { useResponsive } from '@/hooks/use-mobile';

const ProfessionalSummary = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isMobile, isTablet } = useResponsive();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('summary');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const highlights = [
    {
      icon: Code,
      title: 'Quick Learner',
      description: 'Rapidly acquiring new technologies and development practices'
    },
    {
      icon: Cloud,
      title: 'Cloud Enthusiast',
      description: 'Passionate about AWS, Azure, and modern cloud architectures'
    },
    {
      icon: Zap,
      title: 'Problem Solver',
      description: 'Analytical approach to troubleshooting and optimization'
    },
    {
      icon: Shield,
      title: 'Quality Focused',
      description: 'Committed to best practices and secure coding standards'
    }
  ];

  return (
    <section id="summary" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Elements - Responsive positioning */}
      <div className="absolute inset-0 opacity-10">
        <div className={`absolute ${isMobile ? 'top-10 right-10' : 'top-20 right-20'} w-48 h-48 sm:w-64 sm:h-64 bg-accent/30 rounded-full blur-3xl floating-card`}></div>
        <div className={`absolute ${isMobile ? 'bottom-10 left-10' : 'bottom-20 left-20'} w-56 h-56 sm:w-80 sm:h-80 bg-primary/20 rounded-full blur-3xl floating-card`} style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Responsive typography */}
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Professional Summary
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
        </div>

        {/* Main Summary Card - Responsive layout */}
        <div className={`mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'fade-in-scale' : 'opacity-0 scale-95'}`}>
          <div className="glass-card p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl sm:rounded-3xl perspective-card">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-center text-foreground">
              <span className="text-accent font-semibold">Recent graduate</span> with strong fundamentals in DevOps and Cloud technologies, 
              specializing in learning automation, cloud infrastructure, and modern deployment practices. 
              Through academic projects and personal learning, I've gained hands-on experience with <span className="text-accent font-semibold">containerization</span> and 
              <span className="text-accent font-semibold"> CI/CD pipelines</span>, ready to apply these skills in real-world scenarios.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-center text-foreground mt-4 sm:mt-6">
              Eager to contribute to innovative teams and continue growing my expertise in cloud-native technologies, 
              automation tools, and scalable system design while delivering value from day one.
            </p>
          </div>
        </div>

        {/* Highlights Grid - Responsive grid layout */}
        <div className={`grid gap-4 sm:gap-6 ${
          isMobile ? 'grid-cols-1' : 
          isTablet ? 'grid-cols-2' : 
          'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
        }`}>
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center perspective-card transition-all duration-1000 touch-manipulation ${
                isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${600 + index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent to-primary rounded-xl sm:rounded-2xl mb-3 sm:mb-4 glow-accent">
                <highlight.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-primary">
                {highlight.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Row - Responsive layout */}
        <div className={`mt-8 sm:mt-12 lg:mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-card p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl">
            <div className={`grid gap-6 sm:gap-8 text-center ${
              isMobile ? 'grid-cols-1' : 
              isTablet ? 'grid-cols-3' : 
              'grid-cols-1 md:grid-cols-3'
            }`}>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-1 sm:mb-2">2+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Self Learning</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-1 sm:mb-2">5+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-1 sm:mb-2">5+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Technologies Learned</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;