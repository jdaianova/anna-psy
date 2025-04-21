import { buttonsData } from "../lib/buttonsData";
import HeroButton from "./HeroButton";

const HeroButtons = () => {
  return (
    <section className="section z-40 bg-white">
      <div className="box-in-section !pb-[120px]">
        <div className="cards-in-section">
          {buttonsData.map((btn, index) => (
            <HeroButton
              key={index}
              label={btn.label}
              text={btn.text}
              color={btn.color}
              icon={btn.icon}
              onClick={btn.onClick}
              delay={200 + index * 500}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroButtons;