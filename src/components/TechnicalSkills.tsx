import { useEffect, useState } from 'react';
import {
  Cloud,
  Server,
  Database,
  Code,
  GitBranch,
  Shield,
  Monitor,
  Zap,
  Container,
  Settings,
  Network,
  Terminal
} from 'lucide-react';
import { useResponsive, useScrollAnimation } from '@/hooks/use-mobile';

const TechnicalSkills = () => {
  const { isMobile, isTablet, isHydrated } = useResponsive();

  // Scroll animations for different sections
  const { isVisible: isHeaderVisible, elementRef: headerRef } = useScrollAnimation({ threshold: 0.2 });
  const { isVisible: isSkillsVisible, elementRef: skillsRef } = useScrollAnimation({ threshold: 0.1 });
  const { isVisible: isProficiencyVisible, elementRef: proficiencyRef } = useScrollAnimation({ threshold: 0.1 });
  const { isVisible: isCertificationsVisible, elementRef: certificationsRef } = useScrollAnimation({ threshold: 0.1 });

  const skillCategories = [
    {
      title: 'Cloud Platforms',
      icon: Cloud,
      skills: ['AWS', 'Azure', 'GCP', 'DigitalOcean', 'Vercel', 'Netlify'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Infrastructure',
      icon: Server,
      skills: ['Terraform', 'Ansible', 'Docker', 'Kubernetes', 'Helm', 'Istio'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch', 'InfluxDB'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Programming',
      icon: Code,
      skills: ['Python', 'JavaScript', 'Go', 'Bash', 'YAML', 'JSON'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Version Control',
      icon: GitBranch,
      skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'GitFlow', 'GitOps'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Security',
      icon: Shield,
      skills: ['Vault', 'SOPS', 'OPA', 'Falco', 'Trivy', 'SonarQube'],
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Monitoring',
      icon: Monitor,
      skills: ['Prometheus', 'Grafana', 'ELK Stack', 'Jaeger', 'Datadog', 'New Relic'],
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'CI/CD',
      icon: Zap,
      skills: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'ArgoCD', 'Tekton', 'Spinnaker'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const proficiencyLevels = [
    { name: 'Terraform', level: 85, category: 'Infrastructure as Code' },
    { name: 'Kubernetes', level: 80, category: 'Container Orchestration' },
    { name: 'AWS', level: 75, category: 'Cloud Platform' },
    { name: 'Docker', level: 90, category: 'Containerization' },
    { name: 'Python', level: 70, category: 'Programming' },
    { name: 'Prometheus', level: 75, category: 'Monitoring' }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Elements - Responsive positioning */}
      <div className="absolute inset-0 opacity-10">
        <div className={`absolute ${isMobile ? 'top-5 left-5' : 'top-10 left-10'} w-48 h-48 sm:w-72 sm:h-72 bg-neon-cyan/30 rounded-full blur-3xl floating-card`}></div>
        <div className={`absolute ${isMobile ? 'bottom-5 right-5' : 'bottom-10 right-10'} w-64 h-64 sm:w-96 sm:h-96 bg-neon-purple/20 rounded-full blur-3xl floating-card`} style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Responsive typography with Scroll Animation */}
        <div
          ref={headerRef}
          className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 scroll-transition ${isHeaderVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mt-4 sm:mt-6 max-w-3xl mx-auto px-4 sm:px-0">
            Comprehensive expertise across modern DevOps and Cloud technologies
          </p>
        </div>

        {/* Skills Grid - Responsive grid layout with Staggered Scroll Animation */}
        <div
          ref={skillsRef}
          className={`grid gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16 scroll-stagger ${isSkillsVisible ? 'visible' : ''} ${
            isMobile ? 'grid-cols-1' :
            isTablet ? 'grid-cols-2' :
            'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
          }`}
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl perspective-card transition-all duration-1000 touch-manipulation`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br ${category.color} rounded-lg sm:rounded-xl mb-3 sm:mb-4 glow-accent`}>
                <category.icon className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-primary">
                {category.title}
              </h3>
              <div className="space-y-1 sm:space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground hover:text-accent transition-colors duration-300"
                  >
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Levels - Responsive layout with Scroll Animation */}
        <div
          ref={proficiencyRef}
          className={`transition-all duration-1000 delay-1000 scroll-transition-scale ${isProficiencyVisible ? 'visible' : ''}`}
        >
          <div className="glass-card p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-primary">Core Competencies</h3>
            <div className={`grid gap-4 sm:gap-6 ${
              isMobile ? 'grid-cols-1' :
              isTablet ? 'grid-cols-2' :
              'grid-cols-1 md:grid-cols-2'
            }`}>
              {proficiencyLevels.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="text-xs sm:text-sm text-accent">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary-elevated rounded-full h-1.5 sm:h-2">
                    <div
                      className="bg-gradient-to-r from-accent to-primary h-1.5 sm:h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isProficiencyVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${1200 + index * 150}ms`
                      }}
                    ></div>
                  </div>
                  <span className="text-xs text-muted-foreground">{skill.category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Preview - Responsive layout with Scroll Animation */}
        <div
          ref={certificationsRef}
          className={`mt-8 sm:mt-12 lg:mt-16 transition-all duration-1000 delay-1500 scroll-transition ${isCertificationsVisible ? 'visible' : ''}`}
        >
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 sm:space-x-4 glass-card px-4 sm:px-6 py-2 sm:py-3 rounded-full">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
              <span className="text-xs sm:text-sm font-medium text-foreground">
                AWS Certified (On Progress) • Azure Certified (On Progress) •
              </span>
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;