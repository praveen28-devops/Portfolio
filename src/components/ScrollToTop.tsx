import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { useSmoothScroll, useScrollAnimation } from '@/hooks/use-mobile';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const { scrollToTop } = useSmoothScroll();
  const { isVisible, elementRef } = useScrollAnimation({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setShowButton(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!showButton) return null;

  return (
    <button
      ref={elementRef}
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-40 p-3 bg-gradient-to-r from-primary to-accent text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation mobile-touch-active scroll-transition-scale ${isVisible ? 'visible' : ''}`}
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
};

export default ScrollToTop; 