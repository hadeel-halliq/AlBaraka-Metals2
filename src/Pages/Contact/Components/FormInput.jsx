export default function FormInput({
  id,
  label,
  type,
  name,
  value,
  order,
  placeholder,
  onChange,
}) {
  return (
    <div className={`w-fit flex flex-col gap-1 text-right ${order}`}>
      <label htmlFor={id} className="font-bold">
        {label}
      </label>
      <input
        className="pr-3 h-12 w-[240px] sm:w-[280px]  border-[1px] rounded-lg text-right focus:outline-none focus:border-primary focus:border-2"
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  );
}
