const variants = {
  primary: `
    bg-[var(--color-primary)]
    hover:bg-[var(--color-primary-dark)]
    text-white
  `,
  secondary: `
    bg-[var(--color-secondary)]
    hover:bg-[var(--color-secondary-dark)]
    text-white
  `,
};

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  ariaLabel,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`
        px-[36px]
        py-[12px]
        min-w-[220px]
        rounded-md
        transition-all
        duration-300
        hover:scale-110
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
