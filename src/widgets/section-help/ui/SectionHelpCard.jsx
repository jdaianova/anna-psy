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
        bg-cover bg-center transition-transform duration-300
        ${animated ? 'swing' : ''} swing-hover`}
      style={{ backgroundImage: `url(${pic})` }}
    >
      <p className="text-center z-10 text-black base-font
                  md:text-[18px] lg:text-xl
                  md:p-[28px] lg:p-[46px] xl:p-[50px]">
        {text}
      </p>
    </div>
  );
};

export default SectionHelpCard;
