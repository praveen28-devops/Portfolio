import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimations = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Smooth scrolling for the entire page
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }

    // Hero section animations
    gsap.fromTo('.hero-content', 
      { 
        opacity: 0, 
        y: 100,
        scale: 0.9
      },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.3
      }
    );

    // Section reveal animations
    gsap.utils.toArray('.section-reveal').forEach((section: any, index) => {
      gsap.fromTo(section,
        {
          opacity: 0,
          y: 100,
          rotationX: 15,
          transformPerspective: 1000
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Floating cards animation
    gsap.utils.toArray('.floating-card').forEach((card: any) => {
      gsap.to(card, {
        y: "-20px",
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        delay: Math.random() * 2
      });
    });

    // Skills grid stagger animation
    ScrollTrigger.create({
      trigger: '.skills-grid',
      start: "top 70%",
      onEnter: () => {
        gsap.fromTo('.skill-card',
          {
            opacity: 0,
            y: 50,
            rotationY: 45,
            transformPerspective: 1000
          },
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.1
          }
        );
      }
    });

    // Project cards 3D entrance
    ScrollTrigger.create({
      trigger: '.projects-grid',
      start: "top 70%",
      onEnter: () => {
        gsap.fromTo('.project-card',
          {
            opacity: 0,
            z: -100,
            rotationX: 45,
            transformPerspective: 1000
          },
          {
            opacity: 1,
            z: 0,
            rotationX: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.2
          }
        );
      }
    });

    // Parallax background elements
    gsap.utils.toArray('.parallax-bg').forEach((bg: any) => {
      gsap.to(bg, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: bg,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

    // Navigation bar reveal
    ScrollTrigger.create({
      start: "top -80",
      end: 99999,
      toggleClass: { className: "nav-scrolled", targets: ".main-nav" }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return null;
};

export default ScrollAnimations;