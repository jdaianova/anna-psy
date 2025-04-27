import { openCalendly } from "../../lib/openCalendly";
import { calendlyLinksData } from "../payment-button/lib/calendlyLinksData";
import PaymentButton from "../payment-button/ui/PaymentButton";


const ConsultationContent = ({ onClose }) => {
    const links = calendlyLinksData.consultation;

    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-2xl text-center font-bold mb-6">Забронировать индивидуальную консультацию</h3>

            <div className="flex gap-4">
                {Object.entries(links).map(([type, url]) => (
                    <PaymentButton
                        key={type}
                        type={type}
                        onClick={() => openCalendly(url, onClose)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ConsultationContent;