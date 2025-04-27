const GroupCard = ({ title, image, description, startDate, onJoin }) => {
    return (
        <div className="flex flex-1 flex-col gap-4 p-6 
                      shadow-[8px_10px_20px_rgba(0,0,0,0.05)] bg-white rounded-xl">

            <img src={image} alt={title} className="w-full h-auto object-contain" />

            <h3 className="text-2xl font-bold">{title}</h3>

            <ul className="list-disc pl-5 text-lg space-y-1">
                {description.map((line, idx) => (
                    <li key={idx}>{line}</li>
                ))}
            </ul>

            <div className="flex items-center justify-between mt-auto pt-2">
                <button
                    className="px-6 py-2 rounded bg-primary text-white 
                       hover:bg-secondary transition-colors duration-300"
                    onClick={onJoin}
                >
                    Присоединиться
                </button>
                <p className="text-[16px] font-bold color-secondary-dark">{startDate}</p>
            </div>

        </div>
    );
};

export default GroupCard;
