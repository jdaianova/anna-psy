
import ContactForm from "../forms/ContactForm";
import { calendlyLinksData } from "../payment-button/lib/calendlyLinksData";


const ConsultationContent = ({ onClose }) => {
    const links = calendlyLinksData.consultation;

    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-2xl text-center font-bold mb-6">Записаться на индивидуальную консультацию</h3>

            <div className={`flex flex-wrap gap-4 justify-center`}>
                <ContactForm action="https://formspree.io/f/mwpgavgv" />

                {/* {Object.entries(links).map(([type, url], index, arr) => (
                    <PaymentButton
                        key={type}
                        type={type}
                        onClick={() => openCalendly(url, onClose)}
                        fullWidth={arr.length === 1} // передаём флаг
                    />
                ))} */}
            </div>
        </div>
    );
};

export default ConsultationContent;