import { methodsData } from '../lib/methodsData';
import MethodCard from './MethodCard';

const SectionMethods = () => {
  return (
    <section className="section bg-white">
      <div className="box-in-section">
        <h2 className="slogan-font text-7xl mb-[30px] mt-[-30px] ">
          Используемые методики:</h2>

        <div className="flex flex-between items-stretch gap-4">
          {methodsData.map((method, index) => (
            <MethodCard key={index} {...method} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionMethods;
