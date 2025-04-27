import { useState } from "react";
import { buttonsData } from "../lib/buttonsData";
import HeroButton from "./HeroButton";
import { Modal } from "../../../shared/ui/modal/Modal";
import ModalContent from "../../../shared/ui/modal-content/ModalContent";

const HeroButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentType, setContentType] = useState(""); // contentType = id

  const handleButtonClick = (id) => {
    setContentType(id);
    setIsOpen(true);
  };

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
              onClick={() => handleButtonClick(btn.id)}
              delay={200 + index * 500}
            />
          ))}
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalContent contentType={contentType} onClose={() => setIsOpen(false)}/>
      </Modal>
    </section>
  );
};

export default HeroButtons;
