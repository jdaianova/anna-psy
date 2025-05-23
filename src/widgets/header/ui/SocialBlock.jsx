import { socialLinks } from "../lib/socialLinks";

const SocialBlock = () => {
  return (
    <div className="flex flex-row gap-4">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-transform duration-300 
                    hover:scale-125"
        >
          <img
            src={link.icon}
            alt={link.alt}
            className="transition-all duration-300 h-[26px]"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialBlock;
