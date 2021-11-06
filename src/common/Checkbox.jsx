export default function Checkbox(props) {
  const { className, label, onChange } = props;

  return (
    <div className={className}>
      <label className="cursor-pointer w-full">
        <input type="checkbox" className="hidden peer" onChange={onChange} />
        <span className="text-[#6E6E6E] peer-checked:p-3 peer-checked:mx-1 font-medium peer-checked:bg-white   peer-checked:text-[#FA6E59]">
          {label}
        </span>
      </label>
    </div>
  );
}
