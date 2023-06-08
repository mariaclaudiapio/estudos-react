export default function DateInput({
  labelDescription = 'Descrição do label',
  inputValue = '2023-06-03',
  onInputChange = null,
  id = 'id_do_input_date',
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
        type="date"
        value={inputValue}
        onChange={handleInputChange}
        autoFocus={autoFocus}
      />
    </div>
  );
}
