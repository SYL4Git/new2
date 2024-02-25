const Radiobox=({ children, value, name, defaultChecked, disabled, onChange })=> {
    return (
      <label>
        <input
          type="radio"
          value={value}
          name={name}
          disabled={disabled}
          defaultChecked={defaultChecked}
          onChange={({ target: { checked } }) => onChange(checked)}
        />
        {children}
      </label>
    );
  }
  export default Radiobox