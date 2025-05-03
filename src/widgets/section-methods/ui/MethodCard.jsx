const MethodCard = ({ image, title, text }) => {
  return (
    <div className="flex flex-col items-start gap-4 md:w-[44%]">
      <img src={image} alt={title} className="rounded-md shadow-md" />

      <div className="flex flex-col items-start">

        <h3 className="font-bold 
              text-[6vw] sPhone:text-[5.5vw] mPhone:text-[5vw] 
              sm:!text-[4.5vw] md:!text-[3.5vw] lg:!text-[3vw] xl:!text-[30px]">
          {title}
        </h3>

        <p className="text-gray-700 
                      text-[5vw] sPhone:text-[4vw] mPhone:text-[3.6vw] 
                      sm:!text-[3.2vw] md:!text-[2.6vw] lg:!text-[2vw] xl:!text-[24px]">
          {text}
        </p>

      </div>


    </div>
  );
};

export default MethodCard;
