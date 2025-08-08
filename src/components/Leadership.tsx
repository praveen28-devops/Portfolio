import { useEffect, useState } from 'react';
import { 
  Users, 
  Award, 
  Heart, 
  BookOpen, 
  Lightbulb, 
  Target,
  Globe,
  Star
} from 'lucide-react';

const Leadership = () => {
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

    const element = document.getElementById('leadership');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const leadershipRoles = [
    {
      title: 'SM Volunteer',
      organization: 'SM Volunteer',
      period: '2023 - 2024',
      description: 'Leading a team of 8 DevOps engineers to implement cloud-native solutions and automation frameworks.',
      icon: Users,
      achievements: [
        'Mentored 15+ junior engineers in DevOps best practices',
        'Established coding standards and review processes',
        'Reduced team onboarding time by 50% through documentation',
        'Led cross-functional collaboration with 5 development teams'
      ],
      impact: 'Improved team productivity by 40% and deployment success rate by 95%',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'DevOps Community Organizer',
      organization: 'Chennai DevOps Meetup',
      period: '2021 - Present',
      description: 'Organizing monthly meetups and workshops to promote DevOps culture and knowledge sharing in the local tech community.',
      icon: Globe,
      achievements: [
        'Organized 20+ community events with 500+ participants',
        'Invited international speakers and industry experts',
        'Created hands-on workshops on Kubernetes and Cloud Native',
        'Built a community of 1000+ DevOps professionals'
      ],
      impact: 'Fostered knowledge sharing and career growth for 1000+ professionals',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const volunteeringExperience = [
    {
      title: 'Open Source Contributor',
      organization: 'Kubernetes Community',
      period: '2020 - Present',
      description: 'Contributing to Kubernetes documentation and tools, helping improve the developer experience.',
      icon: BookOpen,
      contributions: [
        'Contributed to Kubernetes official documentation',
        'Developed Helm charts for common use cases',
        'Mentored newcomers in community Slack channels',
        'Participated in SIG-Apps working group'
      ],
      impact: 'Enhanced documentation used by 100K+ developers worldwide',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Technical Mentor',
      organization: 'CodeForGood Initiative',
      period: '2021 - Present',
      description: 'Providing technical guidance to underprivileged students interested in cloud and DevOps technologies.',
      icon: Heart,
      contributions: [
        'Mentored 50+ students in cloud computing fundamentals',
        'Conducted free weekend workshops on AWS and Docker',
        'Helped 20+ students secure internships in tech companies',
        'Created free learning resources and tutorials'
      ],
      impact: 'Enabled career transitions for 20+ students into tech industry',
      color: 'from-red-500 to-orange-500'
    },
  ];

  const awards = [
    {
      title: 'Excellence in Technical Leadership',
      organization: 'Tech Solutions Inc.',
      year: '2023',
      description: 'Recognized for outstanding leadership in driving digital transformation initiatives'
    },
    {
      title: 'Innovation in DevOps',
      organization: 'DevOps India Conference',
      year: '2021',
      description: 'Awarded for innovative automation solutions and best practices'
    }
  ];

  return (
    <section id="leadership" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-80 h-80 bg-neon-purple/30 rounded-full blur-3xl floating-card"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl floating-card" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Leadership & Volunteering
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
            Driving positive impact through technical leadership and community engagement
          </p>
        </div>

        {/* Leadership Experience */}
        <div className="mb-20">
          <h3 className={`text-2xl font-bold text-center mb-12 text-primary transition-all duration-1000 delay-300 ${isVisible ? 'slide-in-left' : 'opacity-0 -translate-x-10'}`}>
            Leadership Experience
          </h3>
          <div className="space-y-8">
            {leadershipRoles.map((role, index) => (
              <div
                key={index}
                className={`glass-card p-8 rounded-3xl perspective-card transition-all duration-1000 ${
                  isVisible ? 'slide-in-left' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${500 + index * 200}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                  <div className="flex-shrink-0 mb-6 lg:mb-0">
                    <div className={`w-16 h-16 bg-gradient-to-br ${role.color} rounded-2xl flex items-center justify-center glow-accent`}>
                      <role.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-primary mb-2">{role.title}</h4>
                        <p className="text-lg text-accent font-semibold mb-1">{role.organization}</p>
                        <p className="text-sm text-muted-foreground mb-4">{role.period}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{role.description}</p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-sm font-semibold text-primary mb-3">Key Achievements</h5>
                        <div className="space-y-2">
                          {role.achievements.map((achievement, aIndex) => (
                            <div key={aIndex} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-sm text-muted-foreground">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-primary mb-3">Impact</h5>
                        <div className="bg-accent-soft p-4 rounded-xl border-l-4 border-accent">
                          <p className="text-sm text-foreground font-medium">{role.impact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteering Experience */}
        <div className="mb-20">
          <h3 className={`text-2xl font-bold text-center mb-12 text-primary transition-all duration-1000 delay-700 ${isVisible ? 'slide-in-right' : 'opacity-0 translate-x-10'}`}>
            Volunteering & Community Impact
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {volunteeringExperience.map((experience, index) => (
              <div
                key={index}
                className={`glass-card p-6 rounded-3xl perspective-card transition-all duration-1000 ${
                  isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${900 + index * 150}ms` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${experience.color} rounded-xl flex items-center justify-center mb-4 glow-accent`}>
                  <experience.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-primary mb-2">{experience.title}</h4>
                <p className="text-accent font-semibold mb-1">{experience.organization}</p>
                <p className="text-sm text-muted-foreground mb-4">{experience.period}</p>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{experience.description}</p>
                
                <div className="mb-4">
                  <h5 className="text-xs font-semibold text-primary mb-2">Contributions</h5>
                  <div className="space-y-1">
                    {experience.contributions.map((contribution, cIndex) => (
                      <div key={cIndex} className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-accent rounded-full mt-1.5 flex-shrink-0"></div>
                        <p className="text-xs text-muted-foreground">{contribution}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-accent-soft p-3 rounded-lg border-l-3 border-accent">
                  <p className="text-xs text-foreground font-medium">{experience.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className={`transition-all duration-1000 delay-1200 ${isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-center mb-12 text-primary">
            Awards & Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl text-center perspective-card transition-all duration-1000"
                style={{ transitionDelay: `${1400 + index * 150}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 glow-accent">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-primary mb-2">{award.title}</h4>
                <p className="text-accent font-semibold mb-1">{award.organization}</p>
                <p className="text-sm text-muted-foreground mb-3">{award.year}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;