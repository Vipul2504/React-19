export const InputComp = ({ label, id, error, ...props }) => {
  return (
    <div className="control no-margin">
      <label htmlFor={label}>{label}</label>
      <input id={id} {...props} />
      <div className="control-error">{error && <p>P{error}</p>}</div>
    </div>
  );
};
