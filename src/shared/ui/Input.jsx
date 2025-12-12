const Input = ({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={name}
          className="text-sm text-[var(--color-primary-dark)]"
        >
          {label}
        </label>
      )}

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="
          w-full
          rounded-lg
          border
          border-gray-300
          px-4
          py-2
          text-sm
          text-gray-800
          placeholder-gray-400
          outline-none
          transition
          focus:border-[var(--color-primary)]
          focus:ring-2
          focus:ring-[var(--color-primary-light)]
        "
      />
    </div>
  );
};

export default Input;
