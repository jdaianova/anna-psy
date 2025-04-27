import ConsultationContent from "./ConsultationContent";
import GroupContent from "./GroupContent";
import DiagnosticsContent from "./DiagnosticsContent";

const ModalContent = ({ contentType, onClose }) => {
    return (
        <div className="flex flex-col gap-4">
            {contentType === "consultation" && <ConsultationContent onClose={onClose} />}

            {contentType.startsWith("group") && (
                <GroupContent onClose={onClose} groupType={contentType} />
            )}

            {contentType === "diagnostics" && <DiagnosticsContent onClose={onClose} />}

            <p className="text-sm text-center text-gray-500 mt-4">
                Если запись не будет оплачена в течение 24 часов, бронь будет автоматически отменена. Благодарю за понимание!
            </p>
        </div>
    );
};

export default ModalContent;
