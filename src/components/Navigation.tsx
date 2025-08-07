import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useResponsive, useSmoothScroll } from '@/hooks/use-mobile';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { isMobile, isTablet, isHydrated } = useResponsive();
  const { scrollToElement } = useSmoothScroll();

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'summary', label: 'Summary' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'leadership', label: 'Leadership' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when screen size changes
  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  const scrollToSection = (sectionId: string) => {
    scrollToElement(sectionId, 80); // Account for fixed navigation height
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border-elevated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Enhanced Logo with Mobile Animations */}
          <div className="flex-shrink-0">
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              PRAVEEN A
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-underline px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'text-accent active'
                      : 'text-foreground hover:text-accent'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Tablet Navigation - Compact */}
          <div className="hidden md:block lg:hidden">
            <div className="flex items-baseline space-x-2">
              {navItems.slice(0, 4).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-2 py-2 text-xs font-medium transition-colors duration-300 rounded-lg ${
                    activeSection === item.id
                      ? 'text-accent bg-accent-soft'
                      : 'text-foreground hover:text-accent hover:bg-surface-elevated'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-2 py-2 text-xs font-medium text-foreground hover:text-accent hover:bg-surface-elevated rounded-lg transition-colors duration-300"
              >
                More
              </button>
            </div>
          </div>

          {/* Enhanced Mobile menu button with Animations */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-accent hover:bg-surface-elevated transition-colors duration-300 touch-manipulation mobile-touch-active"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation with Animations */}
      {isOpen && (
        <div className="md:hidden glass-card border-t border-border-elevated animate-in slide-in-from-top-2 duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block px-3 py-3 text-base font-medium w-full text-left transition-colors duration-300 rounded-lg touch-manipulation mobile-touch-active ${
                  activeSection === item.id
                    ? 'text-accent bg-accent-soft'
                    : 'text-foreground hover:text-accent hover:bg-surface-elevated'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Enhanced Tablet Dropdown Navigation with Animations */}
      {isOpen && isTablet && (
        <div className="hidden md:block lg:hidden glass-card border-t border-border-elevated animate-in slide-in-from-top-2 duration-300">
          <div className="px-2 pt-2 pb-3">
            <div className="grid grid-cols-2 gap-2">
              {navItems.slice(4).map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium text-left transition-colors duration-300 rounded-lg touch-manipulation mobile-touch-active ${
                    activeSection === item.id
                      ? 'text-accent bg-accent-soft'
                      : 'text-foreground hover:text-accent hover:bg-surface-elevated'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;