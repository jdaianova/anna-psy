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
      <div
        className="flex flex-wrap sPhone:flex-nowrap w-[80%] max-w-[1200px]
                      justify-between items-stretch
                      gap-[2.5%] mt-[-16px] xl:px-[100px]
                      pb-[60px] md:pb-[60px] lg:pb-[100px]"
      >
        {buttonsData.map((btn, index) => (
          <HeroButton
            label={btn.label}
            text={btn.text}
            color={btn.color}
            icon={btn.icon}
            onClick={() => handleButtonClick(btn.id)}
            delay={200 + index * 500}
            isThird={index === 2}
          />
        ))}
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalContent
          contentType={contentType}
          onClose={() => setIsOpen(false)}
        />
      </Modal>
    </section>
  );
};

export default HeroButtons;
