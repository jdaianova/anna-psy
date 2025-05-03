import { useEffect, useRef, useState } from 'react';
import { CircleStep } from './CircleStep';
import { approachSteps } from '../lib/approachSteps';

const SectionApproach = () => {
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          setTimeout(() => setActiveIndex(0), 100); // быстрее запускаем первый шаг
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (start && activeIndex < approachSteps.length - 1) {
      const timeout = setTimeout(() => {
        setActiveIndex((prev) => prev + 1);
      }, 1000); // время шага
      return () => clearTimeout(timeout);
    }
  }, [start, activeIndex]);

  return (
    <section
      ref={sectionRef}
      className="section bg-primary-light"
    >
      <div className="box-in-section gap-4">

        <h2 className="title-in-section"> Как я работаю </h2>

        <div className="cards-in-section gap-8 sPhone:gap-4 ">
          {approachSteps.map((step, index) => (

            <CircleStep
              key={index}
              index={index}
              color={step.color || '#7D7F72'}
              insideIcon={step.insideIcon}
              sideText={step.sideText}
              active={index === activeIndex}
              onDone={() => { }}
            />

          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionApproach;
