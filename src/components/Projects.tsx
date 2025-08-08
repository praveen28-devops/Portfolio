import { useEffect, useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  Cloud, 
  Server, 
  Database, 
  Shield,
  Monitor,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const projects = [
    {
      title: 'Multi-Cloud Infrastructure Automation',
      description: 'Designed and implemented a comprehensive infrastructure automation solution supporting AWS, Azure, and GCP with unified Terraform modules and GitOps workflows.',
      icon: Cloud,
      technologies: ['Terraform', 'AWS', 'Azure', 'GCP', 'GitLab CI', 'Ansible'],
      highlights: [
        'Reduced infrastructure provisioning time by 75%',
        'Implemented cross-cloud disaster recovery',
        'Achieved 99.9% uptime across all environments'
      ],
      metrics: {
        performance: '75% faster deployments',
        cost: '40% cost reduction',
        reliability: '99.9% uptime'
      },
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Kubernetes Platform Engineering',
      description: 'Built a production-ready Kubernetes platform with automated scaling, monitoring, and security policies for microservices architecture.',
      icon: Server,
      technologies: ['Kubernetes', 'Helm', 'Prometheus', 'Grafana', 'Istio', 'ArgoCD'],
      highlights: [
        'Orchestrated 200+ microservices',
        'Implemented zero-downtime deployments',
        'Automated security scanning and compliance'
      ],
      metrics: {
        performance: '200+ services managed',
        cost: '60% resource optimization',
        reliability: 'Zero-downtime deployments'
      },
      color: 'from-purple-500 to-violet-500'
    },
    {
      title: 'CI/CD Pipeline Optimization',
      description: 'Revolutionized the development workflow by implementing advanced CI/CD pipelines with automated testing, security scanning, and progressive deployments.',
      icon: Zap,
      technologies: ['Jenkins', 'Docker', 'SonarQube', 'Trivy', 'Selenium', 'Kubernetes'],
      highlights: [
        'Accelerated release cycles from weeks to hours',
        'Integrated automated security and quality gates',
        'Implemented canary and blue-green deployments'
      ],
      metrics: {
        performance: '90% faster releases',
        cost: 'Reduced manual effort by 80%',
        reliability: '95% reduction in production issues'
      },
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Observability & Monitoring Platform',
      description: 'Developed a comprehensive observability solution with real-time monitoring, alerting, and analytics for distributed systems.',
      icon: Monitor,
      technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'Jaeger', 'PagerDuty', 'Datadog'],
      highlights: [
        'Implemented distributed tracing across 50+ services',
        'Built custom dashboards and alerting rules',
        'Reduced MTTR from hours to minutes'
      ],
      metrics: {
        performance: '5-minute MTTR',
        cost: '50% reduction in debugging time',
        reliability: '99.95% service availability'
      },
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Database Migration & Optimization',
      description: 'Led the migration of legacy databases to cloud-native solutions with automated backup, scaling, and performance optimization.',
      icon: Database,
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'AWS RDS', 'Aurora', 'DMS'],
      highlights: [
        'Migrated 10TB+ data with zero downtime',
        'Improved query performance by 3x',
        'Implemented automated backup and recovery'
      ],
      metrics: {
        performance: '3x query performance',
        cost: '45% cost savings',
        reliability: '99.99% data integrity'
      },
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Security & Compliance Automation',
      description: 'Implemented DevSecOps practices with automated security scanning, compliance monitoring, and vulnerability management.',
      icon: Shield,
      technologies: ['Vault', 'SOPS', 'Falco', 'OPA', 'Trivy', 'AWS Security Hub'],
      highlights: [
        'Automated security compliance across all environments',
        'Implemented secrets management and rotation',
        'Achieved SOC2 and ISO27001 compliance'
      ],
      metrics: {
        performance: '100% automated scanning',
        cost: '70% reduction in security overhead',
        reliability: 'Zero security incidents'
      },
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-neon-blue/30 rounded-full blur-3xl floating-card"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-neon-purple/20 rounded-full blur-3xl floating-card" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
            Showcasing innovative solutions that drive operational excellence and business growth
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl md:rounded-3xl overflow-hidden perspective-card transition-all duration-700 touch-manipulation ${
                isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'
              } ${hoveredProject === index ? 'elevated-card' : ''}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              onTouchStart={() => setHoveredProject(index)}
              onTouchEnd={() => setHoveredProject(null)}
            >
              {/* Project Header */}
              <div className={`p-4 md:p-6 bg-gradient-to-r ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -top-2 -right-2 w-16 h-16 md:w-24 md:h-24 bg-white/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-2 -left-2 w-20 h-20 md:w-32 md:h-32 bg-white/10 rounded-full blur-xl"></div>
                </div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 md:space-x-4 mb-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <project.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white leading-tight">{project.title}</h3>
                  </div>
                  <div className="flex items-center space-x-3 md:space-x-4 text-white/80 text-sm">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-white/80 hover:text-white hover:bg-white/20 p-1 h-auto text-xs md:text-sm touch-manipulation"
                    >
                      <Github className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                      Code
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-white/80 hover:text-white hover:bg-white/20 p-1 h-auto text-xs md:text-sm touch-manipulation"
                    >
                      <ExternalLink className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 md:p-6">
                <p className="text-muted-foreground mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="mb-4 md:mb-6">
                  <h4 className="text-xs md:text-sm font-semibold text-primary mb-2 md:mb-3">Key Achievements</h4>
                  <div className="space-y-1.5 md:space-y-2">
                    {project.highlights.slice(0, 2).map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics - Condensed for mobile */}
                <div className="mb-4 md:mb-6">
                  <h4 className="text-xs md:text-sm font-semibold text-primary mb-2 md:mb-3">Impact Metrics</h4>
                  <div className="grid grid-cols-1 gap-1.5 md:gap-2">
                    <div className="flex justify-between items-center text-xs md:text-sm">
                      <span className="text-muted-foreground">Performance:</span>
                      <span className="text-accent font-medium">{project.metrics.performance}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs md:text-sm">
                      <span className="text-muted-foreground">Reliability:</span>
                      <span className="text-accent font-medium">{project.metrics.reliability}</span>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-xs md:text-sm font-semibold text-primary mb-2 md:mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {project.technologies.slice(0, 4).map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-2 py-1 md:px-3 bg-secondary-elevated text-foreground text-xs font-medium rounded-full hover:bg-accent-soft hover:text-accent transition-colors duration-200 touch-manipulation"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-1000 ${isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'}`}>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8 py-3 rounded-full transition-all duration-300"
          >
            View All Projects
            <ExternalLink className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;