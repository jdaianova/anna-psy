import { useState } from "react";
import { serviceConfig } from "../../../widgets/hero-section/lib/serviceConfig";
import ContactForm from "../forms/ContactForm";

const ModalContent = ({ contentType, onClose }) => {
  const [groupType, setGroupType] = useState(null);

  if (contentType !== "group") {
    const config = serviceConfig[contentType];
    if (!config) return null;

    return (
      <div className="flex flex-col gap-6">
        <h3 className="text-2xl font-semibold text-center">{config.title}</h3>

        <ContactForm
          action="https://formspree.io/f/mwpgavgv"
          presetMessage={config.preset}
          onClose={onClose}
        />
      </div>
    );
  }

  // 🟡 ГРУППЫ: сначала выбор
  if (!groupType) {
    return (
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-semibold text-center mb-4">
          Интерактивные группы по СДВГ
        </h3>

        <button
          onClick={() => setGroupType("groupAdhd")}
          className="w-full rounded-lg bg-white px-6 py-4
                     shadow-md hover:bg-gray-100 transition"
        >
          Группа для взрослых с СДВГ
        </button>

        <button
          onClick={() => setGroupType("groupParents")}
          className="w-full rounded-lg bg-white px-6 py-4
                     shadow-md hover:bg-gray-100 transition"
        >
          Группа для родителей детей с СДВГ
        </button>
      </div>
    );
  }

  const config = serviceConfig[groupType];
  if (!config) return null;

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-2xl font-semibold text-center">{config.title}</h3>

      <ContactForm
        action="https://formspree.io/f/mwpgavgv"
        presetMessage={config.preset}
        onClose={onClose}
      />
      
      {/* <p className="text-sm text-center text-gray-500 mt-4">
  Если запись не будет оплачена в течение 24 часов, бронь будет
  автоматически отменена. Благодарю за понимание!
</p> */}
    </div>
  );
};

export default ModalContent;
