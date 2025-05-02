import { sectionHelpData } from "../lib/sectionHelpData";
import SectionHelpCard from "./SectionHelpCard";
import { useState } from "react";
import { Modal } from "../../../shared/ui/modal/Modal";
import ModalContent from "../../../shared/ui/modal-content/ModalContent";

const SectionHelp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentType, setContentType] = useState("consultation");

  const handleOpenModal = (type) => {
    setContentType(type);
    setIsOpen(true);
  };

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

        <div className="flex flex-col w-[80%] sm:flex-row justify-center items-center gap-6 mt-[80px]">
          <button
            onClick={() => handleOpenModal("consultation")}
            className="flex-1 relative py-[12px] 
               bg-primary text-white rounded-md 
               hover:bg-primary-dark hover:scale-110 
               transition-all duration-300"
          >
            Записаться на консультацию
          </button>

          <button
            onClick={() => handleOpenModal("diagnostics")}
            className="flex-1 relative py-[12px] 
               bg-primary text-white rounded-md 
               hover:bg-primary-dark hover:scale-110 
               transition-all duration-300"
          >
            Записаться на диагностику
          </button>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalContent contentType={contentType} onClose={() => setIsOpen(false)} />
      </Modal>
    </section>
  );
};

export default SectionHelp;
