import { useEffect, useState } from 'react';
import { GraduationCap, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('education');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const education = [
    {
      degree: 'Bachelor of Engineering',
      field: 'Information Technology',
      institution: 'K S Rangasamy College of Technology',
      location: 'Namakkal, Tamil Nadu',
      period: '2023 - 2027',
      grade: 'CGPA: 7.8/10',
      highlights: [
        'Specialized in Cloud Computing and Distributed Systems',
        'Final Year Project: Automated Infrastructure Deployment',
        'Member of Computer Science Society'
      ]
    },
    {
      degree: 'Higher Secondary Certificate',
      field: 'Science',
      institution: 'Sri Vidya Mandir Matriculation Higher Secondary School',
      location: 'Namakkal, Tamil Nadu',
      period: '2022 - 2023',
      grade: 'Percentage: 81%',
      highlights: [
        'State Board Topper in Computer Science',
        'Active participant in Science Exhibitions',
        'Led school technology club'
      ]
    }
  ];

  const certifications = [
    {
      title: 'AWS Solutions Architect Professional',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-SAP-2023-001',
      level: 'Professional',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      date: '2023',
      credentialId: 'CKA-2023-002',
      level: 'Expert',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Azure DevOps Engineer Expert',
      issuer: 'Microsoft',
      date: '2022',
      credentialId: 'AZ-400-2022-003',
      level: 'Expert',
      color: 'from-blue-600 to-cyan-500'
    },
    {
      title: 'Google Cloud Professional Cloud Architect',
      issuer: 'Google Cloud',
      date: '2022',
      credentialId: 'GCP-PCA-2022-004',
      level: 'Professional',
      color: 'from-green-500 to-blue-500'
    },
    {
      title: 'HashiCorp Terraform Associate',
      issuer: 'HashiCorp',
      date: '2022',
      credentialId: 'HCT-TA-2022-005',
      level: 'Associate',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      date: '2021',
      credentialId: 'DCA-2021-006',
      level: 'Associate',
      color: 'from-blue-400 to-blue-600'
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
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-80 h-80 bg-accent/30 rounded-full blur-3xl floating-card"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl floating-card" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
        </div>

        {/* Education Section */}
        <div className="mb-20">
          <h3 className={`text-2xl font-bold text-center mb-8 text-primary transition-all duration-1000 delay-300 ${isVisible ? 'slide-in-left' : 'opacity-0 -translate-x-10'}`}>
            Academic Background
          </h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`glass-card p-6 sm:p-8 rounded-3xl transition-all duration-1000 ${
                  isVisible ? 'animate-fade-in opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${400 + index * 150}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                  <div className="flex-shrink-0 mb-4 lg:mb-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center glow-accent">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-primary mb-1">{edu.degree}</h4>
                        <p className="text-lg text-accent font-semibold">{edu.field}</p>
                        <p className="text-foreground">{edu.institution}</p>
                      </div>
                      <div className="mt-2 lg:mt-0 lg:text-right">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-1">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-1">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                        <p className="text-accent font-semibold">{edu.grade}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {edu.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className={`text-2xl font-bold text-center mb-8 text-primary transition-all duration-1000 delay-700 ${isVisible ? 'slide-in-right' : 'opacity-0 translate-x-10'}`}>
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={`#cert-${cert.credentialId}`}
                className={`relative group cursor-pointer transition-all duration-700 hover:scale-105 ${
                  isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="glass-card rounded-3xl p-4 sm:p-5 md:p-6 h-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent/20">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Award className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <h4 className="text-sm sm:text-base md:text-lg font-bold text-primary mb-2 line-clamp-2 group-hover:text-accent transition-colors duration-300">{cert.title}</h4>
                  <p className="text-accent font-semibold mb-2 text-xs sm:text-sm">{cert.issuer}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{cert.date}</p>
                  <div className={`inline-block px-2 sm:px-3 py-1 bg-gradient-to-r ${cert.color} text-white text-xs font-medium rounded-full mb-3`}>
                    {cert.level}
                  </div>
                  <div className="mt-auto">
                    <p className="text-xs text-muted-foreground mb-2">Credential ID:</p>
                    <p className="text-xs font-mono bg-secondary-elevated px-2 py-1 rounded text-center">{cert.credentialId}</p>
                  </div>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="h-4 w-4 text-accent" />
                  </div>
                </div>
              </a>
            ))}
          </div>
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
    </section>
  );
};

export default Education;