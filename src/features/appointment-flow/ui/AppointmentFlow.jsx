import { useEffect, useState } from "react";
import { paymentOptions } from "../lib/paymentOptions";

const AppointmentFlow = ({ label, calendlyLinks }) => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (selected && calendlyLinks[selected]) {
      Calendly.initPopupWidget({ url: `${calendlyLinks[selected]}?primary_color=red` });
    }
  }, [selected]);

  if (selected) return null;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">{label}</h2>
      <p className="text-sm text-gray-600">Выберите способ оплаты:</p>
      <div className="flex flex-col gap-2">
        {paymentOptions.map((opt) => (
          <button
            key={opt.id}
            onClick={() => setSelected(opt.id)}
            className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded text-left"
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AppointmentFlow;
