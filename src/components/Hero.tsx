import { useState, useEffect } from 'react';
import { MapPin, Mail, Phone, Linkedin, Github, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import ParticleSystem from './ParticleSystem';
import { useResponsive, useScrollAnimation, useParallaxScroll, useSmoothScroll } from '@/hooks/use-mobile';
import profilePhoto from '../assets/profile-photo.png'
import heroBg from '../assets/hero-bg.jpg'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isMobile, isTablet, isHydrated } = useResponsive();
  const { scrollToElement } = useSmoothScroll();
  
  // Scroll animations for different sections
  const { isVisible: isProfileVisible, elementRef: profileRef } = useScrollAnimation({ threshold: 0.3 });
  const { isVisible: isTitleVisible, elementRef: titleRef } = useScrollAnimation({ threshold: 0.2 });
  const { isVisible: isContactVisible, elementRef: contactRef } = useScrollAnimation({ threshold: 0.1 });
  const { isVisible: isButtonVisible, elementRef: buttonRef } = useScrollAnimation({ threshold: 0.1 });
  
  // Parallax effects for background elements
  const { offset: parallaxOffset1, elementRef: parallaxRef1 } = useParallaxScroll(0.3);
  const { offset: parallaxOffset2, elementRef: parallaxRef2 } = useParallaxScroll(0.5);
  const { offset: parallaxOffset3, elementRef: parallaxRef3 } = useParallaxScroll(0.7);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactItems = [
    { icon: MapPin, text: 'Namakkal, Tamil Nadu, India', href: 'https://maps.app.goo.gl/TmHd9zgFyMdSK8Kc7' , color: "text-red-500"},
    { icon: Mail, text: 'Gmail', href: 'mailto:praveen.dev.cloud@gmail.com' },
    { icon: Phone, text: 'Phone', href: 'tel:+916382832865' },
    { icon: Linkedin, text: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/praveen-a-devops' },
    { icon: Github, text: 'GitHub Profile', href: 'https://github.com/praveen28-devops' }
  ];

  const handleScrollToSection = (sectionId: string) => {
    scrollToElement(sectionId, 80); // Account for fixed navigation
  };

  return (
    <motion.section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 hero-content"
      style={{
        backgroundImage: `linear-gradient(135deg, hsl(215 75% 15% / 0.95), hsl(190 85% 45% / 0.9)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: isMobile ? 'scroll' : 'fixed'
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {/* Enhanced Particle System - Optimized for mobile */}
      <ParticleSystem count={isMobile ? 30 : isTablet ? 80 : 150} />

      {/* Enhanced Animated Background with Parallax Effects */}
      <div className="absolute inset-0 opacity-30">
        <div 
          ref={parallaxRef1}
          className={`absolute ${isMobile ? 'top-20 left-10' : 'top-55 left-30'} w-60 h-60 sm:w-90 sm:h-90 bg-accent/40 rounded-full blur-3xl floating-card`}
          style={{ transform: `translateY(${parallaxOffset1}px)` }}
        ></div>
        <div 
          ref={parallaxRef2}
          className={`absolute ${isMobile ? 'bottom-10 right-5' : 'bottom-20 right-10'} w-48 h-48 sm:w-96 sm:h-96 bg-primary-glow/30 rounded-full blur-3xl floating-delayed`}
          style={{ transform: `translateY(${parallaxOffset2}px)` }}
        ></div>
        <div 
          ref={parallaxRef3}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-72 sm:h-72 bg-highlight-teal/25 rounded-full blur-3xl floating-slow"
          style={{ transform: `translate(-50%, -50%) translateY(${parallaxOffset3}px)` }}
        ></div>
        <div className={`absolute ${isMobile ? 'top-16 right-16' : 'top-32 right-32'} w-40 h-40 sm:w-64 sm:h-64 bg-highlight-blue/20 rounded-full blur-3xl floating-card`} style={{ animationDelay: '4s' }}></div>
        
        {/* Additional mobile-specific background elements */}
        {isMobile && (
          <>
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/30 rounded-full blur-2xl floating-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-36 h-36 bg-primary/25 rounded-full blur-2xl floating-delayed"></div>
          </>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
<<<<<<< HEAD
          {/* Enhanced Profile Section with Real Image */}
          <motion.div 
            className="mb-10"
            initial={{ opacity: 0, scale: 0.5, rotateY: 45 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "backOut" }}
          >
            <div className="relative inline-block mb-6">
              <motion.div 
                className="w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] mx-auto rounded-full glass-card p-2 floating-card super-elevated"
                whileHover={{ scale: 1.05, rotateY: 15 }}
                transition={{ duration: 0.3 }}
              >
=======
          {/* Enhanced Profile Section with Scroll Animations */}
          <div 
            ref={profileRef}
            className={`mb-6 sm:mb-10 transition-all duration-1600 scroll-transition-scale ${isProfileVisible ? 'visible' : ''}`}
          >
            <div className="relative inline-block mb-4 sm:mb-6">
              <div className={`${isMobile ? 'w-48 h-48' : isTablet ? 'w-64 h-64' : 'w-[320px] h-[320px]'} mx-auto rounded-full glass-card p-2 floating-card super-elevated`}>
>>>>>>> 297ebab (By Me)
                <div className="w-full h-full rounded-full overflow-hidden relative image-overlay">
                  <img 
                    src={profilePhoto} 
                    alt="Praveen A - DevOps Engineer" 
                    className="w-full h-full object-cover"
                  />
                </div>
<<<<<<< HEAD
              </motion.div>
              <motion.div 
                className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-accent rounded-full glow-accent"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -bottom-2 -left-2 w-4 h-4 sm:w-6 sm:h-6 bg-primary-glow rounded-full glow-liteblue"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
              />
=======
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-accent rounded-full glow-accent animate-ping"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 sm:w-6 sm:h-6 bg-primary-glow rounded-full glow-liteblue" style={{ animationDelay: '1s' }}></div>
>>>>>>> 297ebab (By Me)
            </div>
          </motion.div>

<<<<<<< HEAD
          {/* Enhanced Name and Title */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.h1 
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-glow-blue"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
            >
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-blue-600 block"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Praveen A
              </motion.span>
            </motion.h1>
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6 text-glow"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Aspiring DevOps Engineer
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
=======
          {/* Enhanced Name and Title with Scroll Animations */}
          <div 
            ref={titleRef}
            className={`mb-6 sm:mb-8 transition-all duration-1500 delay-300 scroll-transition ${isTitleVisible ? 'visible' : ''}`}
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 text-glow-blue">
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 sm:mb-15
               text-transparent bg-clip-text 
               bg-gradient-to-r from-blue-400 via-teal-300 to-blue-600 
               animate-pulse">
                Praveen A
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-3 sm:mb-4 text-glow">
              Aspiring DevOps Engineer
            </h2>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
>>>>>>> 297ebab (By Me)
              Fresh Computer Science graduate passionate about cloud technologies, automation, and building scalable systems. 
              Ready to contribute to innovative projects and grow in the DevOps field.
            </motion.p>
          </motion.div>

<<<<<<< HEAD
          {/* Enhanced Contact Info with 3D Effects */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-5xl mx-auto px-4">
              {contactItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="glass-card px-3 sm:px-6 py-2 sm:py-3 rounded-full hover:super-elevated transition-all duration-500 group tilt-card"
                  initial={{ opacity: 0, y: 30, rotateX: 45 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.6 + index * 0.1,
                    ease: "backOut"
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 10,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-accent group-hover:text-accent-glow transition-colors duration-300" />
                    </motion.div>
                    <span className="text-white group-hover:text-accent transition-colors duration-300 font-medium">
                      {item.text}
                    </span>
                  </div>
                </motion.a>
=======
          {/* Enhanced Contact Info with Staggered Scroll Animations */}
          <div 
            ref={contactRef}
            className={`mb-6 sm:mb-8 transition-all duration-1500 delay-500 scroll-stagger ${isContactVisible ? 'visible' : ''}`}
          >
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 max-w-5xl mx-auto px-4 sm:px-0">
              {contactItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full bg-blue-900 hover:bg-blue-700 text-white 
                    hover:super-elevated transition-all duration-500 group tilt-card touch-manipulation mobile-touch-active`}
                  style={{ transitionDelay: `${700 + index * 100}ms` }}
                >
                  <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm">
                    <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-medium hidden sm:inline">{item.text}</span>
                    <span className="font-medium sm:hidden">{item.text.split(' ')[0]}</span>
                  </div>
                </a>
>>>>>>> 297ebab (By Me)
              ))}
            </div>
          </motion.div>

<<<<<<< HEAD
          {/* Enhanced CTA Buttons with Advanced 3D Effects */}
          <motion.div 
            className="px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05, rotateX: 10 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-accent text-white font-bold px-6 sm:px-10 py-3 sm:py-4 rounded-full shadow-2xl hover:super-elevated transition-all duration-500 group perspective-card text-sm sm:text-lg w-full sm:w-auto"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Download className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" />
                  </motion.div>
                  Download Resume
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, rotateX: 10 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="glass-card border-accent text-white hover:bg-accent/20 font-bold px-6 sm:px-10 py-3 sm:py-4 rounded-full shadow-2xl hover:super-elevated transition-all duration-500 group perspective-card text-sm sm:text-lg w-full sm:w-auto"
                >
                  View Projects
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Github className="h-5 w-5 sm:h-6 sm:w-6 ml-2 sm:ml-3" />
                  </motion.div>
                </Button>
              </motion.div>
=======
          {/* Enhanced CTA Buttons with Scroll Animations */}
          <div 
            ref={buttonRef}
            className={`transition-all duration-1500 delay-700 scroll-transition ${isButtonVisible ? 'visible' : ''}`}
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0">
              <Button 
                size={isMobile ? "default" : "lg"}
                className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-accent text-white font-bold px-6 sm:px-10 py-3 sm:py-4 rounded-full shadow-2xl hover:super-elevated transition-all duration-500 group perspective-card text-sm sm:text-lg w-full sm:w-auto touch-manipulation mobile-touch-active"
                onClick={() => handleScrollToSection('projects')}
              >
                <Download className="h-4 w-4 sm:h-6 sm:w-6 mr-2 sm:mr-3 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                size={isMobile ? "default" : "lg"}
                className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-accent text-white font-bold px-6 sm:px-10 py-3 sm:py-4 rounded-full shadow-2xl hover:super-elevated transition-all duration-500 group perspective-card text-sm sm:text-lg w-full sm:w-auto touch-manipulation mobile-touch-active"
                onClick={() => handleScrollToSection('projects')}
              >
                View Projects
                <Github className="h-4 w-4 sm:h-6 sm:w-6 ml-2 sm:ml-3 group-hover:animate-bounce" />
              </Button>
>>>>>>> 297ebab (By Me)
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator with Parallax */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 floating-card">
        <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 sm:border-3 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1.5 h-3 sm:w-2 sm:h-4 bg-accent rounded-full mt-2 sm:mt-3 animate-ping glow-accent"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;