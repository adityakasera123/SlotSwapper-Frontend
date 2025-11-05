// src/components/InputField.jsx
function InputField({ label, type = "text", name, value, onChange }) {
  return (
    <div className="mb-4 w-full">
      <label className="block text-gray-700 font-semibold mb-2">{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}

export default InputField;
