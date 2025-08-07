import { useEffect, useState } from 'react';
import { GraduationCap, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { useResponsive, useScrollAnimation } from '@/hooks/use-mobile';

const Education = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const { isMobile, isTablet, isHydrated } = useResponsive();

  // Scroll animations for different sections
  const { isVisible: isHeaderVisible, elementRef: headerRef } = useScrollAnimation({ threshold: 0.2 });
  const { isVisible: isEducationVisible, elementRef: educationRef } = useScrollAnimation({ threshold: 0.1 });
  const { isVisible: isCertificationsVisible, elementRef: certificationsRef } = useScrollAnimation({ threshold: 0.1 });

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      field: 'Computer Science & Engineering',
      institution: 'Anna University',
      period: '2020 - 2024',
      location: 'Chennai, Tamil Nadu',
      grade: 'CGPA: 8.2/10',
      highlights: [
        'Specialized in Cloud Computing and DevOps methodologies',
        'Completed capstone project on "Multi-Cloud Infrastructure Automation"',
        'Active member of DevOps and Cloud Computing student groups',
        'Participated in hackathons and technical workshops'
      ]
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'In Progress',
      level: 'Associate',
      credentialId: 'AWS-SAA-2024',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      title: 'Azure Administrator Associate',
      issuer: 'Microsoft',
      date: 'In Progress',
      level: 'Associate',
      credentialId: 'AZ-104-2024',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      date: 'Planned',
      level: 'Professional',
      credentialId: 'CKA-2024',
      color: 'from-blue-600 to-indigo-600'
    }
  ];

  const toggleCardFlip = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Elements - Responsive positioning */}
      <div className="absolute inset-0 opacity-10">
        <div className={`absolute ${isMobile ? 'top-10 right-10' : 'top-20 right-20'} w-56 h-56 sm:w-80 sm:h-80 bg-accent/30 rounded-full blur-3xl floating-card`}></div>
        <div className={`absolute ${isMobile ? 'bottom-10 left-10' : 'bottom-20 left-20'} w-48 h-48 sm:w-64 sm:h-64 bg-primary/20 rounded-full blur-3xl floating-card`} style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Responsive typography with Scroll Animation */}
        <div 
          ref={headerRef}
          className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 scroll-transition ${isHeaderVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
        </div>

        {/* Education Section - Responsive layout with Scroll Animation */}
        <div 
          ref={educationRef}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <h3 className={`text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-primary transition-all duration-1000 delay-300 scroll-transition-left ${isEducationVisible ? 'visible' : ''}`}>
            Academic Background
          </h3>
          <div className="space-y-6 sm:space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`glass-card p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl perspective-card transition-all duration-1000 touch-manipulation scroll-transition-left ${isEducationVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${500 + index * 200}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6 sm:space-x-8">
                  <div className="flex-shrink-0 mb-4 lg:mb-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-accent rounded-xl sm:rounded-2xl flex items-center justify-center glow-accent">
                      <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3 sm:mb-4">
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-primary mb-1">{edu.degree}</h4>
                        <p className="text-base sm:text-lg text-accent font-semibold">{edu.field}</p>
                        <p className="text-sm sm:text-base text-foreground">{edu.institution}</p>
                      </div>
                      <div className="mt-2 lg:mt-0 lg:text-right">
                        <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground mb-1">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground mb-1">
                          <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>{edu.location}</span>
                        </div>
                        <p className="text-accent font-semibold text-sm sm:text-base">{edu.grade}</p>
                      </div>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      {edu.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                          <p className="text-xs sm:text-sm text-muted-foreground">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section - Responsive grid layout with Staggered Scroll Animation */}
        <div 
          ref={certificationsRef}
        >
          <h3 className={`text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-primary transition-all duration-1000 delay-700 scroll-transition-right ${isCertificationsVisible ? 'visible' : ''}`}>
            Professional Certifications
          </h3>
          <div className={`grid gap-4 sm:gap-6 scroll-stagger ${isCertificationsVisible ? 'visible' : ''} ${
            isMobile ? 'grid-cols-1' : 
            isTablet ? 'grid-cols-2' : 
            'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`relative ${isMobile ? 'h-56' : 'h-64'} perspective-1000 transition-all duration-1000 touch-manipulation scroll-transition-rotate ${isCertificationsVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${900 + index * 150}ms` }}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                    flippedCards.includes(index) ? 'rotate-y-180' : ''
                  }`}
                  onClick={() => toggleCardFlip(index)}
                >
                  {/* Front of card - Responsive layout */}
                  <div className="absolute inset-0 glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 backface-hidden">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${cert.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 glow-accent`}>
                      <Award className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-primary mb-2 line-clamp-2">{cert.title}</h4>
                    <p className="text-sm sm:text-base text-accent font-semibold mb-2">{cert.issuer}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{cert.date}</p>
                    <div className={`inline-block px-2 sm:px-3 py-1 bg-gradient-to-r ${cert.color} text-white text-xs font-medium rounded-full`}>
                      {cert.level}
                    </div>
                    <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
                      <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                    </div>
                  </div>

                  {/* Back of card - Responsive layout */}
                  <div className="absolute inset-0 glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 backface-hidden rotate-y-180 flex flex-col justify-center">
                    <div className="text-center">
                      <Award className="h-8 w-8 sm:h-12 sm:w-12 text-accent mx-auto mb-3 sm:mb-4" />
                      <h4 className="text-base sm:text-lg font-bold text-primary mb-2">{cert.title}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-2">Credential ID:</p>
                      <p className="text-xs font-mono bg-secondary-elevated px-2 py-1 rounded">{cert.credentialId}</p>
                      <p className="text-xs text-muted-foreground mt-3 sm:mt-4">Tap to flip back</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .perspective-1000 {
            perspective: 1000px;
          }
          .transform-style-preserve-3d {
            transform-style: preserve-3d;
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Education;