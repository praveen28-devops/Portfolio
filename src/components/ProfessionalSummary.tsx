import { useEffect, useState } from 'react';
import { Code, Cloud, Zap, Shield } from 'lucide-react';
import FloatingParticles from './FloatingParticles';
import GeometricShapes from './GeometricShapes';

const ProfessionalSummary = () => {
  const [isVisible, setIsVisible] = useState(false);

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
    <section id="summary" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <FloatingParticles 
        particleCount={30} 
        colors={['hsl(var(--primary))', 'hsl(var(--accent))', 'hsl(var(--primary)/0.7)', 'hsl(var(--accent)/0.7)']}
      />
      <GeometricShapes shapeCount={6} />
      
      {/* Traditional Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent/30 rounded-full blur-3xl floating-card"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl floating-card" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-[clamp(1.75rem,6vw,3rem)] sm:text-[clamp(2rem,6vw,3.5rem)] md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Professional Summary
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
        </div>

        {/* Main Summary Card */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'fade-in-scale' : 'opacity-0 scale-95'}`}>
          <div className="glass-card p-8 md:p-12 rounded-3xl perspective-card">
            <p className="text-lg md:text-xl leading-relaxed text-center text-foreground">
              <span className="text-accent font-semibold">Recent graduate</span> with strong fundamentals in DevOps and Cloud technologies, 
              specializing in learning automation, cloud infrastructure, and modern deployment practices. 
              Through academic projects and personal learning, I've gained hands-on experience with <span className="text-accent font-semibold">containerization</span> and 
              <span className="text-accent font-semibold"> CI/CD pipelines</span>, ready to apply these skills in real-world scenarios.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-center text-foreground mt-6">
              Eager to contribute to innovative teams and continue growing my expertise in cloud-native technologies, 
              automation tools, and scalable system design while delivering value from day one.
            </p>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`glass-card p-6 rounded-2xl text-center perspective-card transition-all duration-1000 ${
                isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${600 + index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl mb-4 glow-accent">
                <highlight.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {highlight.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className={`mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-card p-8 rounded-3xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">2+</div>
                <div className="text-muted-foreground">Self Learning</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">5+</div>
                <div className="text-muted-foreground">Projects Built</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">5+</div>
                <div className="text-muted-foreground">Technologies Learned</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;