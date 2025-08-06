import { useEffect, useState } from 'react';
import { Code, Cloud, Zap, Shield } from 'lucide-react';

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
      title: 'Automation Expert',
      description: 'Building efficient CI/CD pipelines and infrastructure as code'
    },
    {
      icon: Cloud,
      title: 'Cloud Architect',
      description: 'Designing scalable solutions on AWS, Azure, and GCP platforms'
    },
    {
      icon: Zap,
      title: 'Performance Optimizer',
      description: 'Optimizing system performance and reducing deployment times'
    },
    {
      icon: Shield,
      title: 'Security Focused',
      description: 'Implementing DevSecOps practices and security best practices'
    }
  ];

  return (
    <section id="summary" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent/30 rounded-full blur-3xl floating-card"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl floating-card" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Professional Summary
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
        </div>

        {/* Main Summary Card */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'fade-in-scale' : 'opacity-0 scale-95'}`}>
          <div className="glass-card p-8 md:p-12 rounded-3xl perspective-card">
            <p className="text-lg md:text-xl leading-relaxed text-center text-foreground">
              <span className="text-accent font-semibold">5+ years</span> of experience in DevOps and Cloud Engineering, 
              specializing in automating infrastructure, streamlining deployment processes, and building resilient cloud architectures. 
              Proven track record of reducing deployment times by <span className="text-accent font-semibold">60%</span> and 
              improving system reliability by <span className="text-accent font-semibold">90%</span> through innovative automation solutions.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-center text-foreground mt-6">
              Passionate about implementing cutting-edge technologies and best practices to deliver scalable, 
              secure, and cost-effective solutions that drive business growth and operational excellence.
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
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">50+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">15+</div>
                <div className="text-muted-foreground">Technologies Mastered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;