import { useState } from "react";
import { calendlyLinksData } from "../payment-button/lib/calendlyLinksData";
import PaymentButton from "../payment-button/ui/PaymentButton";
import { openCalendly } from "../../lib/openCalendly";

const groupTitles = {
    groupAdhd: "для взрослых с СДВГ",
    groupParents: "для родителей детей с СДВГ",
};

const GroupContent = ({ onClose, groupType }) => {
    const [selectedGroup, setSelectedGroup] = useState('');

    const handleSelectGroup = (groupId) => {
        setSelectedGroup(groupId);
    };

    const activeGroup = groupType === "group" ? selectedGroup : groupType;

    if (!activeGroup) {
        return (
            <div className="flex flex-col gap-4">
                <h3 className="text-2xl text-center font-bold mb-6">Выберите группу, в которую вы хотите попасть</h3>

                <div className="flex flex-col gap-4">
                    <button
                        onClick={() => handleSelectGroup("groupAdhd")}
                        className="w-full text-xl bg-white hover:bg-gray-100 px-6 py-4 rounded-lg shadow-md transition"
                    >
                        Группа для взрослых с СДВГ
                    </button>

                    <button
                        onClick={() => handleSelectGroup("groupParents")}
                        className="w-full text-xl bg-white hover:bg-gray-100 px-6 py-4 rounded-lg shadow-md transition"
                    >
                        Группа для родителей детей с СДВГ
                    </button>
                </div>
            </div>
        );
    }

    const links = calendlyLinksData[activeGroup];

    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-3xl text-center font-bold">
                Забронировать место в группе
            </h3>
            <h4 className="text-2xl text-center font-bold mb-6 mt-[-10px] text-primary">{groupTitles[activeGroup]}</h4>

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

export default GroupContent;
