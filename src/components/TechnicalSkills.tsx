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

const TechnicalSkills = () => {
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

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: 'Cloud Platforms',
      icon: Cloud,
      skills: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Infrastructure',
      icon: Server,
      skills: ['Terraform', 'Ansible', 'CloudFormation', 'Pulumi'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Containerization',
      icon: Container,
      skills: ['Docker', 'Kubernetes', 'Helm', 'Podman'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      title: 'CI/CD Tools',
      icon: GitBranch,
      skills: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Azure DevOps'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Monitoring',
      icon: Monitor,
      skills: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Security',
      icon: Shield,
      skills: ['Vault', 'SOPS', 'Falco', 'Trivy'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Programming',
      icon: Code,
      skills: ['Python', 'Bash', 'Go', 'JavaScript'],
      color: 'from-yellow-500 to-amber-500'
    }
  ];

  const proficiencyLevels = [
    { name: 'AWS', level: 95, category: 'Cloud' },
    { name: 'Docker', level: 92, category: 'Container' },
    { name: 'Kubernetes', level: 88, category: 'Container' },
    { name: 'Terraform', level: 90, category: 'IaC' },
    { name: 'Python', level: 85, category: 'Programming' },
    { name: 'Jenkins', level: 87, category: 'CI/CD' }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-neon-cyan/30 rounded-full blur-3xl floating-card"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl floating-card" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
            Comprehensive expertise across modern DevOps and Cloud technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`glass-card p-6 rounded-2xl perspective-card transition-all duration-1000 ${
                isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl mb-4 glow-accent`}>
                <category.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-accent transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'fade-in-scale' : 'opacity-0 scale-95'}`}>
          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-center mb-8 text-primary">Core Competencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {proficiencyLevels.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-accent">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary-elevated rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-accent to-primary h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
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

        {/* Certifications Preview */}
        <div className={`mt-16 transition-all duration-1000 delay-1500 ${isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            <div className="inline-flex items-center space-x-4 glass-card px-6 py-3 rounded-full">
              <Shield className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium text-foreground">
                AWS Certified • Azure Certified • Kubernetes Certified
              </span>
              <Shield className="h-5 w-5 text-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;