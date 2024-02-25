const Radiobox = ({
  children,
  value,
  name,
  defaultChecked,
  disabled,
  className,
}) => {
  return (
    <label>
      <input
        className={`radiobox ${className}`}
        type="radio"
        value={value}
        name={name}
        disabled={disabled}
        defaultChecked={defaultChecked}
      />
      {children}
    </label>
  );
};
export default Radiobox;
