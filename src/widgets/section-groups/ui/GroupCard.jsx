const GroupCard = ({ title, image, description, startDate, onJoin }) => {
  return (
    <div
      className="flex flex-1 flex-col gap-4 p-6 lg:!p-10 lg:!gap-8
                      shadow-[8px_10px_20px_rgba(0,0,0,0.05)] bg-white rounded-xl"
    >
      <h3
        className="font-bold px-5 lg:!px-0 text-center 
                        text-[6vw] sPhone:text-[5.5vw] mPhone:text-[5vw] 
                        sm:!text-[4.5vw] md:!text-[3.5vw] lg:!text-[3vw] xl:!text-[40px]"
      >
        {title}
      </h3>

      <div className="flex  flex-col items-start lg:flex-row lg:!gap-10">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full lg:w-[50%] xl:w-[40%] h-auto object-contain"
        />

        <div className="flex flex-grow ">
          <ul
            className="list-disc pl-5 space-y-1
                            text-[5vw] sPhone:text-[4vw] mPhone:text-[3.6vw] 
                            sm:!text-[3.2vw] md:!text-[2.8vw] lg:!text-[2vw] xl:!text-[24px]"
          >
            {description.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </div>
      </div>

      <button
        className="px-6 py-2 rounded-md bg-primary text-white
                                text-[4vw] sPhone:text-[3.4vw] mPhone:text-[3vw] 
                                sm:!text-[2.8vw] md:!text-[2.4vw] lg:!text-[2.2vw] xl:!text-[24px]
                                hover:bg-secondary transition-colors duration-300"
        onClick={onJoin}
      >
        Присоединиться
      </button>
    </div>
  );
};

export default GroupCard;
