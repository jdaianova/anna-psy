import { useState } from "react";

const HeroButton = ({ icon, label, text, color = 'light', onClick, delay = 0, isThird = false }) => {

  const [hasAnimated, setHasAnimated] = useState(false);

  const isLight = color === 'light';
  const bgColor = isLight ? 'bg-white' : 'bg-primary';
  const textColor = isLight ? 'text-black' : 'text-white';

  return (
    <button
      className={`flex w-[40%] sPhone:flex-1 rounded-md p-4 sm:p-6 
                lg:p-10 lg:items-start mb-[8px] gap-2 xl:gap-4
                ${bgColor} ${textColor}
                ${!hasAnimated ? 'slide-in-up' : ''} 
                ${isThird 
                  ? 'flex-row !w-[100%] sPhone:flex-col sPhone:flex-1'  
                  : 'flex-col flex-1'}
                shadow-[0_8px_24px_rgba(0,0,0,0.1)]
                transform hover:scale-105 transition-transform duration-300`}

      onClick={onClick}
      onAnimationEnd={() => setHasAnimated(true)}
      style={{ animationDelay: `${delay}ms` }}>


        <img src={icon} alt={label} className="h-[24px] sPhone:h-[30px] lg:!h-[50px]" />

        <div className="flex flex-col gap-1 sPhone:gap-2 text-left">
          
          <p className="font-bold leading-tight
                        text-[3.6vw] sPhone:text-[2.1vw] mPhone:text-[2.4vw] 
                        sm:!text-[2.2vw] xl:!text-[24px]">
            {label}
          </p>

          <p className="leading-none 
                  text-[3.2vw] sPhone:text-[2.6vw] mPhone:text-[2.6vw] 
                  sm:!text-[2.3vw] md:!text-[2vw] xl:!text-[24px]">
            {text}
          </p>

      </div>

    </button>
  );
};

export default HeroButton;

//     ${isThird ? 'max-[500px]:flex-none' : ''}
// ${isThird ? 'flex-col max-[500px]:flex-row' : 'flex-col'}