const RadioboxGroup = ({ label, children, className }) => {
  return (
    <fieldset className={`radioboxGroup ${className}`}>
      <legend>
        <p>{label}</p>
        {children}
      </legend>
    </fieldset>
  );
};
export default RadioboxGroup;
