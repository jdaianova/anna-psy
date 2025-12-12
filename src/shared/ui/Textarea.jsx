const Textarea = ({
  label,
  name,
  placeholder,
  rows = 4,
  required = false,
  defaultValue,
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

      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        rows={rows}
        required={required}
        defaultValue={defaultValue}
        className="
          w-full
          resize-none
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

export default Textarea;
