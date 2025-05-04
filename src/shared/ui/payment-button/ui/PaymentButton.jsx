import cards from "../../../assets/svg/cards.svg";
import paypal from "../../../assets/svg/paypal.svg";
import clock from "../../../assets/svg/clock.svg";


const PaymentButton = ({ type, onClick, fullWidth = false }) => {
    const getTextByType = (type) => {
        switch (type) {
            case "stripe":
                return "Оплатить картой и выбрать время";
            case "paypal":
                return "Оплатить через PayPal и выбрать время";
            case "manual":
                return "Записаться и оплатить позже";
            default:
                return "";
        }
    };

    const getIconByType = (type) => {
        switch (type) {
            case "stripe":
                return cards;
            case "paypal":
                return paypal;
            case "manual":
                return clock;
            default:
                return "";
        }
    };

    return (
        <button
            className={`flex flex-col items-start gap-2 
                        bg-white hover:bg-primary-light px-8 py-6 rounded-lg 
                        shadow-md text-left transition
                        ${fullWidth ? 'w-full' : 'w-[280px] max-w-full'}`}
            onClick={onClick}
        >
            <img src={getIconByType(type)} alt={type} className="h-[50px]" />
            <span className="text-base font-semibold">{getTextByType(type)}</span>
        </button>
    );
};


export default PaymentButton;
