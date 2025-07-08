import { useEffect, useState } from 'react';

const SectionHelpCard = ({ pic, text }) => {
  const [animated, setAnimated] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimated(false);
    }, 1200); // время анимации
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`flex-1 rounded-sm  shadow-[8px_10px_20px_rgba(0,0,0,0.1)] 
        flex justify-center items-center 
        px-7 py-10 sPhone:px-12 mPhone:px-4 sm:!px-10 xl:py-16
        bg-cover bg-center transition-transform duration-300
        ${animated ? 'swing' : ''} swing-hover`}
      style={{ backgroundImage: `url(${pic})` }}
    >
      <p className="text-center z-10
              text-[5vw] sPhone:text-[4vw] mPhone:text-[3.6vw] 
              sm:!text-[3.2vw] md:!text-[2.8vw] lg:!text-[2vw] xl:!text-[24px]">
        {text}
      </p>
    </div>
  );
};

export default SectionHelpCard;
