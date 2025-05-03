import { methodsData } from '../lib/methodsData';
import MethodCard from './MethodCard';

const SectionMethods = () => {
  return (
    <section className="section bg-white">
      <div className="box-in-section">
        <h2 className="title-in-section leading-[0.9] sm:leading-normal mb-10 ">
          Используемые методики:</h2>

        <div className="cards-in-section gap-16">
          {methodsData.map((method, index) => (
            <MethodCard key={index} {...method} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionMethods;
