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
import { useResponsive } from '@/hooks/use-mobile';

const Leadership = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isMobile, isTablet, isHydrated } = useResponsive();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
      title: 'Community Volunteer – Ullash Trust & Atchayam Trust',
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
      title: 'Community Volunteer – Ullash Trust & Atchayam Trust',
      organization: 'SM Volunteer',
      period: 'Oct 2024 - Mar 2025',
      description: 'Supporting tribal education and elder care initiatives through direct community involvement and social outreach programs.',
      icon: BookOpen,
      contributions: [
        'Taught high school subjects to tribal students in Sittling, Dharmapuri',
        'Assisted in organizing events for elder care at Atchayam Trust',
        'Distributed food, clothes, and essentials to underserved communities',
        'Promoted awareness on education, mental health, and social responsibility'
      ],
      impact: 'Empowered communities and enriched lives through hands-on volunteering and mentorship',
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

  // Don't render until hydrated to prevent layout shift
  if (!isHydrated) {
    return (
      <section id="leadership" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Leadership & Volunteering
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
          </div>
          <div className="space-y-6 sm:space-y-8">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="glass-card p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl animate-pulse">
                <div className="h-6 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="leadership" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Enhanced Background Elements with Mobile Optimizations */}
      <div className="absolute inset-0 opacity-10">
        <div className={`absolute ${isMobile ? 'top-10 right-10' : 'top-20 right-20'} w-56 h-56 sm:w-80 sm:h-80 bg-neon-purple/30 rounded-full blur-3xl floating-card`}></div>
        <div className={`absolute ${isMobile ? 'bottom-10 left-10' : 'bottom-20 left-20'} w-64 h-64 sm:w-96 sm:h-96 bg-neon-cyan/20 rounded-full blur-3xl floating-card`} style={{ animationDelay: '4s' }}></div>
        {/* Additional mobile-specific background elements */}
        {isMobile && (
          <>
            <div className="absolute top-1/4 left-1/3 w-36 h-36 bg-accent/25 rounded-full blur-2xl floating-slow"></div>
            <div className="absolute bottom-1/4 right-1/3 w-44 h-44 bg-primary/20 rounded-full blur-2xl floating-delayed"></div>
          </>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header with Mobile Animations */}
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Leadership & Volunteering
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mt-4 sm:mt-6 max-w-3xl mx-auto px-4 sm:px-0">
            Driving positive impact through technical leadership and community engagement
          </p>
        </div>

        {/* Enhanced Leadership Experience with Mobile Optimizations */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h3 className={`text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-12 text-primary transition-all duration-1000 delay-300 ${isVisible ? 'slide-in-left' : 'opacity-0 -translate-x-10'}`}>
            Leadership Experience
          </h3>
          <div className="space-y-6 sm:space-y-8">
            {leadershipRoles.map((role, index) => (
              <div
                key={index}
                className={`glass-card p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl perspective-card transition-all duration-1000 touch-manipulation ${
                  isVisible ? 'slide-in-left' : 'opacity-0 -translate-x-10'
                }`}
                style={{ 
                  transitionDelay: `${500 + index * 200}ms`,
                  animationDelay: `${600 + index * 250}ms`
                }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6 sm:space-x-8">
                  <div className="flex-shrink-0 mb-4 sm:mb-6 lg:mb-0">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${role.color} rounded-xl sm:rounded-2xl flex items-center justify-center glow-accent`}>
                      <role.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3 sm:mb-4">
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-primary mb-1 sm:mb-2">{role.title}</h4>
                        <p className="text-base sm:text-lg text-accent font-semibold mb-1">{role.organization}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{role.period}</p>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 leading-relaxed">{role.description}</p>
                    
                    <div className={`grid gap-4 sm:gap-6 ${
                      isMobile ? 'grid-cols-1' : 
                      isTablet ? 'grid-cols-1' : 
                      'grid-cols-1 lg:grid-cols-2'
                    }`}>
                      <div>
                        <h5 className="text-xs sm:text-sm font-semibold text-primary mb-2 sm:mb-3">Key Achievements</h5>
                        <div className="space-y-1 sm:space-y-2">
                          {role.achievements.map((achievement, aIndex) => (
                            <div key={aIndex} className="flex items-start space-x-2">
                              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-accent rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                              <p className="text-xs sm:text-sm text-muted-foreground">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="text-xs sm:text-sm font-semibold text-primary mb-2 sm:mb-3">Impact</h5>
                        <div className="bg-accent-soft p-3 sm:p-4 rounded-lg sm:rounded-xl border-l-3 sm:border-l-4 border-accent">
                          <p className="text-xs sm:text-sm text-foreground font-medium">{role.impact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Volunteering Experience with Mobile Optimizations */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h3 className={`text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-12 text-primary transition-all duration-1000 delay-700 ${isVisible ? 'slide-in-right' : 'opacity-0 translate-x-10'}`}>
            Volunteering & Community Impact
          </h3>
          <div className={`grid gap-6 sm:gap-8 ${
            isMobile ? 'grid-cols-1' : 
            isTablet ? 'grid-cols-1' : 
            'grid-cols-1 lg:grid-cols-2'
          }`}>
            {volunteeringExperience.map((experience, index) => (
              <div
                key={index}
                className={`glass-card p-4 sm:p-6 rounded-2xl sm:rounded-3xl perspective-card transition-all duration-1000 touch-manipulation ${
                  isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: `${900 + index * 150}ms`,
                  animationDelay: `${1000 + index * 200}ms`
                }}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${experience.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 glow-accent`}>
                  <experience.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-primary mb-1 sm:mb-2">{experience.title}</h4>
                <p className="text-sm sm:text-base text-accent font-semibold mb-1">{experience.organization}</p>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{experience.period}</p>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed">{experience.description}</p>
                
                <div className="mb-3 sm:mb-4">
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
                
                <div className="bg-accent-soft p-2 sm:p-3 rounded-lg border-l-3 border-accent">
                  <p className="text-xs text-foreground font-medium">{experience.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Awards & Recognition with Mobile Optimizations */}
        <div className={`transition-all duration-1000 delay-1200 ${isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-12 text-primary">
            Awards & Recognition
          </h3>
          <div className={`grid gap-4 sm:gap-6 ${
            isMobile ? 'grid-cols-1' : 
            isTablet ? 'grid-cols-2' : 
            'grid-cols-1 md:grid-cols-3'
          }`}>
            {awards.map((award, index) => (
              <div
                key={index}
                className="glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center perspective-card transition-all duration-1000 touch-manipulation"
                style={{ 
                  transitionDelay: `${1400 + index * 150}ms`,
                  animationDelay: `${1500 + index * 200}ms`
                }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 glow-accent">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-primary mb-1 sm:mb-2">{award.title}</h4>
                <p className="text-sm sm:text-base text-accent font-semibold mb-1">{award.organization}</p>
                <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">{award.year}</p>
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