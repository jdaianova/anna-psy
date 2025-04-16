import AnimatedSection from '@/shared/ui/animated-section/AnimatedSection';

import Section from './Section';


const MainContent = () => {
  return (
    <div className="space-y-20 pt-20">
      <AnimatedSection>
        <Section id="about" title="Обо мне" />
      </AnimatedSection>
      <AnimatedSection>
        <Section id="services" title="Услуги" />
      </AnimatedSection>
      <AnimatedSection>
        <Section id="contact" title="Контакты" />
      </AnimatedSection>
    </div>
  );
};

export default MainContent;
