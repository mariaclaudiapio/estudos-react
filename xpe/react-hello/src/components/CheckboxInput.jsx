export default function CheckboxInput({
  labelDescription = "Descrição do checkbox",
  inputValue = "Valor do input",
  onCheckboxChange = null,
  id = "id_do_checkbox",
  autoFocus = false,
}) {
  function handleInputChange() {
    if (onCheckboxChange) {
      onCheckboxChange();
    }
  }

  return (
    <div className="flex flex-row items-baseline space-x-2 my-4">
      <input
        id={id}
        className="border p-1"
        type="checkbox"
        value={inputValue}
        onChange={handleInputChange}
        autoFocus={autoFocus}
      />

      <label htmlFor={id} className="text-sm mb-1">
        {labelDescription}
      </label>
    </div>
  );
}
