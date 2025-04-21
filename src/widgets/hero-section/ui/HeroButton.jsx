import { useState } from "react";

const HeroButton = ({ icon, label, text, color = 'light', onClick, delay = 0 }) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  const isLight = color === 'light';
  const bgColor = isLight ? 'bg-white' : 'bg-primary';
  const textColor = isLight ? 'text-black' : 'text-white';

  return (
    <button
      className={`flex-1 text-lg ${bgColor} ${textColor} px-10 py-8
        flex flex-col items-start justify-start gap-2
        mt-[-30px] shadow-[0_8px_24px_rgba(0,0,0,0.1)]
        ${!hasAnimated ? 'slide-in-up' : ''}
        transform hover:scale-105 transition-transform duration-300 rounded-sm`}
      onClick={onClick}
      onAnimationEnd={() => setHasAnimated(true)}
      style={{ animationDelay: `${delay}ms` }}
    >
      <img src={icon} alt={label} className="mb-2 h-[50px]" />
      <p className="font-bold text-2xl text-left">{label}</p>
      <p className="text-m">{text}</p>
    </button>
  );
};

export default HeroButton;
