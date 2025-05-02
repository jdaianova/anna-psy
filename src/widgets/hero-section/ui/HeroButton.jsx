import { useState } from "react";

const HeroButton = ({ icon, label, text, color = 'light', onClick, delay = 0 }) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  const isLight = color === 'light';
  const bgColor = isLight ? 'bg-white' : 'bg-primary';
  const textColor = isLight ? 'text-black' : 'text-white';

  return (
    <button
      className={`hero-btn ${bgColor} ${textColor}
                  ${!hasAnimated ? 'slide-in-up' : ''}
                 transform hover:scale-105 transition-transform duration-300 rounded-sm`}
      onClick={onClick}
      onAnimationEnd={() => setHasAnimated(true)}
      style={{ animationDelay: `${delay}ms` }}
    >
      <img src={icon} alt={label} className="h-[40px]" />

      <div className="flex flex-col gap-2">

        <p className="font-bold text-left leading-tight
                    md:text-[18px] lg:text-[22px] xl:text-[24px]">
          {label}
        </p>

        <p className="text-sm text-left leading-none">{text}</p>

      </div>
    </button>
  );
};

export default HeroButton;
