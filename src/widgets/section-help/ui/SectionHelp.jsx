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

  const btnStyle=`flex-1 bg-primary text-white rounded-md p-2 sm:px-4
                  text-[4vw] sPhone:text-[3.4vw] mPhone:text-[3vw] 
                  sm:!text-[2.8vw] md:!text-[2.4vw]  lg:!text-[2vw] xl:!text-[24px]
                  hover:bg-primary-dark hover:scale-110 transition-all duration-300`;

  return (
    <section className="section bg-white">
      <div className="box-in-section gap-8">
        <h2 className="title-in-section">Помогу вам</h2>

        <div className="cards-in-section gap-6">
          {sectionHelpData.map((card) => (
            <SectionHelpCard key={card.text} text={card.text} pic={card.pic} />
          ))}
        </div>

        <div className="flex flex-row  w-[100%] gap-2 mt-4 xl:w-[70%]">
          <button
            onClick={() => handleOpenModal("consultation")}
            className={btnStyle}>
            Записаться на консультацию
          </button>

          <button
            onClick={() => handleOpenModal("consultation")}
            className={btnStyle}>
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
