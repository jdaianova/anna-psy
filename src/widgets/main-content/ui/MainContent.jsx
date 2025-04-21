import { sectionsData } from '../lib/sectionsData';
import AnimatedSection from '@/shared/ui/animated-section/AnimatedSection';

const MainContent = () => {
  return (
    <div className='w-full z-40'>
      {sectionsData.map(({ id, component: Section }) => (
        <AnimatedSection key={id}>
          <div id={id} className='scroll-mt-[100px]'>
            <Section />
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
};

export default MainContent;
