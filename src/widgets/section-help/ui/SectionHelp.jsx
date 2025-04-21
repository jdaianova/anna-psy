import { sectionHelpData } from "../lib/sectionHelpData";
import SectionHelpCard from "./SectionHelpCard";

const SectionHelp = () => {
  return (
    <section className="section bg-white">
      <div className="box-in-section">
        <h2 className="title-in-section">
          Помогу вам
        </h2>

        <div className="cards-in-section">
          {sectionHelpData.map((card) => (
            <SectionHelpCard key={card.text} text={card.text} pic={card.pic} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionHelp;
