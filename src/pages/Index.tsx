import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProfessionalSummary from '@/components/ProfessionalSummary';
import TechnicalSkills from '@/components/TechnicalSkills';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Leadership from '@/components/Leadership';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Navigation />
      <Hero />
      <ProfessionalSummary />
      <TechnicalSkills />
      <Education />
      <Projects />
      <Leadership />
    </div>
  );
};

export default Index;
