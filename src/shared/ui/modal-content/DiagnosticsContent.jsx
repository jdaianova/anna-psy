import { openCalendly } from "../../lib/openCalendly";
import { calendlyLinksData } from "../payment-button/lib/calendlyLinksData";
import PaymentButton from "../payment-button/ui/PaymentButton";

const DiagnosticsContent = ({ onClose }) => {
    const links = calendlyLinksData.consultation;

    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-2xl text-center font-bold mb-6">
                Забронировать диагностическую консультацию
            </h3>

            <div className="flex flex-wrap gap-4 justify-center">
                {Object.entries(links).map(([type, url], _, arr) => (
                    <PaymentButton
                        key={type}
                        type={type}
                        onClick={() => openCalendly(url, onClose)}
                        fullWidth={arr.length === 1}
                    />
                ))}
            </div>
        </div>
    );
};

export default DiagnosticsContent;
