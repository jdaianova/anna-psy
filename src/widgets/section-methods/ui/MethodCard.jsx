const MethodCard = ({ image, title, text }) => {
    return (
      <div className="flex flex-col items-start">
        <img src={image} alt={title} className="rounded-md shadow-md mb-[16px]" />
        <h3 className="text-xl font-bold mb-[4px]">{title}</h3>
        <p className="text-sm text-gray-500">{text}</p>
      </div>
    );
  };
  
  export default MethodCard;
  