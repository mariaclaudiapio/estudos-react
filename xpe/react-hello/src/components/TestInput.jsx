export default function TextInput({
  labelDescription = 'Descrição do label',
  inputValue = 'Valor do input',
  onInputChange = null,
  id = 'id_do_input_text',
  autoFocus = false,
}) {
  function handleInputChange({ currentTarget }) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }

  return (
    <div className="flex flex-col my-4">
      <label htmlFor={id} className="text-sm mb-1">
        {labelDescription}
      </label>

      <input
        id={id}
        className="border p-1"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        autoFocus={autoFocus}
      />
    </div>
  );
}
