export default function Checkbox(props) {
  const { className, label, onChange, number } = props;

  return (
    <div className={className}>
      <label className="cursor-pointer w-full">
        <input type="checkbox" className="hidden peer" onChange={onChange} />
        <span className="block px-4 sm:px-8 py-4 mr-2 peer-checked:bg-yellow-400 font-medium  peer-checked:text-gray-800">
          {label} ({number})
        </span>
      </label>
    </div>
  );
}
