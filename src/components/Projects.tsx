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
import { useResponsive, useScrollAnimation } from '@/hooks/use-mobile';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const { isMobile, isTablet, isHydrated } = useResponsive();

  // Scroll animations for different sections
  const { isVisible: isHeaderVisible, elementRef: headerRef } = useScrollAnimation({ threshold: 0.2 });
  const { isVisible: isProjectsVisible, elementRef: projectsRef } = useScrollAnimation({ threshold: 0.1 });
  const { isVisible: isButtonVisible, elementRef: buttonRef } = useScrollAnimation({ threshold: 0.1 });

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
    <section id="projects" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden min-h-screen">
      {/* Enhanced Background Elements with Mobile Optimizations */}
      <div className="absolute inset-0 opacity-10">
        <div className={`absolute ${isMobile ? 'top-10 left-10' : 'top-20 left-20'} w-64 h-64 sm:w-96 sm:h-96 bg-neon-blue/30 rounded-full blur-3xl floating-card`}></div>
        <div className={`absolute ${isMobile ? 'bottom-10 right-10' : 'bottom-20 right-20'} w-56 h-56 sm:w-80 sm:h-80 bg-neon-purple/20 rounded-full blur-3xl floating-card`} style={{ animationDelay: '3s' }}></div>
        {/* Additional mobile-specific background elements */}
        {isMobile && (
          <>
            <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-accent/20 rounded-full blur-2xl floating-slow"></div>
            <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-primary/15 rounded-full blur-2xl floating-delayed"></div>
          </>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header with Scroll Animations */}
        <div 
          ref={headerRef}
          className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 scroll-transition ${isHeaderVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mt-4 sm:mt-6 max-w-3xl mx-auto px-4 sm:px-0">
            Showcasing innovative solutions that drive operational excellence and business growth
          </p>
        </div>

        {/* Enhanced Projects Grid with Staggered Scroll Animations */}
        <div 
          ref={projectsRef}
          className={`grid gap-6 sm:gap-8 scroll-stagger ${isProjectsVisible ? 'visible' : ''} ${
            isMobile ? 'grid-cols-1' : 
            isTablet ? 'grid-cols-1' : 
            'grid-cols-1 lg:grid-cols-2'
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl sm:rounded-3xl overflow-hidden perspective-card transition-all duration-1000 touch-manipulation ${
                hoveredProject === index ? 'elevated-card' : ''
              }`}
              style={{ 
                transitionDelay: `${300 + index * 150}ms`,
                animationDelay: `${500 + index * 200}ms`
              }}
              onMouseEnter={() => !isMobile && setHoveredProject(index)}
              onMouseLeave={() => !isMobile && setHoveredProject(null)}
              onTouchStart={() => isMobile && setHoveredProject(index)}
              onTouchEnd={() => isMobile && setHoveredProject(null)}
            >
              {/* Enhanced Project Header with Mobile Animations */}
              <div className={`p-4 sm:p-6 bg-gradient-to-r ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-white/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-32 sm:h-32 bg-white/10 rounded-full blur-xl"></div>
                </div>
                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <project.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{project.title}</h3>
                      <div className="flex items-center space-x-2 sm:space-x-4 text-white/80 text-xs sm:text-sm">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-white/80 hover:text-white hover:bg-white/20 p-0 h-auto touch-manipulation"
                        >
                          <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                          Code
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-white/80 hover:text-white hover:bg-white/20 p-0 h-auto touch-manipulation"
                        >
                          <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                          Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Project Content with Mobile Optimizations */}
              <div className="p-4 sm:p-6">
                <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Enhanced Key Highlights with Mobile Animations */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-xs sm:text-sm font-semibold text-primary mb-2 sm:mb-3">Key Achievements</h4>
                  <div className="space-y-1 sm:space-y-2">
                    {project.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-start space-x-2">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-accent rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                        <p className="text-xs sm:text-sm text-muted-foreground">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Metrics with Mobile Animations */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-xs sm:text-sm font-semibold text-primary mb-2 sm:mb-3">Impact Metrics</h4>
                  <div className="grid grid-cols-1 gap-1 sm:gap-2">
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="text-muted-foreground">Performance:</span>
                      <span className="text-accent font-medium">{project.metrics.performance}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="text-muted-foreground">Cost Efficiency:</span>
                      <span className="text-accent font-medium">{project.metrics.cost}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="text-muted-foreground">Reliability:</span>
                      <span className="text-accent font-medium">{project.metrics.reliability}</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Technologies with Mobile Animations */}
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-primary mb-2 sm:mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-2 sm:px-3 py-1 bg-secondary-elevated text-foreground text-xs font-medium rounded-full hover:bg-accent-soft hover:text-accent transition-colors duration-300"
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

        {/* Enhanced View More Projects with Scroll Animations */}
        <div 
          ref={buttonRef}
          className={`text-center mt-8 sm:mt-12 transition-all duration-1000 delay-1000 scroll-transition ${isButtonVisible ? 'visible' : ''}`}
        >
          <Button 
            variant="outline" 
            size={isMobile ? "default" : "lg"}
            className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 touch-manipulation"
          >
            View All Projects
            <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;