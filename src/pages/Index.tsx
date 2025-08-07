import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import CloudInfrastructure3D from '@/components/CloudInfrastructure3D';
import ProfessionalSummary from '@/components/ProfessionalSummary';
import TechnicalSkills from '@/components/TechnicalSkills';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Leadership from '@/components/Leadership';
<<<<<<< HEAD
import ScrollAnimations from '@/components/ScrollAnimations';
import ThreeScene from '@/components/ThreeScene';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <ThreeScene />
      <ScrollAnimations />
      <Navigation />
      <Hero />
      <div className="section-reveal">
        <CloudInfrastructure3D />
      </div>
      <div className="section-reveal">
        <ProfessionalSummary />
      </div>
      <div className="section-reveal">
        <TechnicalSkills />
      </div>
      <div className="section-reveal">
        <Education />
      </div>
      <div className="section-reveal">
        <Projects />
      </div>
      <div className="section-reveal">
        <Leadership />
      </div>
=======
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen safe-area-top safe-area-bottom">
      <Navigation />
      <Hero />
      <ProfessionalSummary />
      <TechnicalSkills />
      <Education />
      <Projects />
      <Leadership />
      <ScrollToTop />
>>>>>>> 297ebab (By Me)
    </div>
  );
};

export default Index;
