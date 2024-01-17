export function Chip(props) {
  const { label } = props;
  return (
    <div className="bg-gray-600 text-white inline-block px-4 py-2 rounded-xl">
      {label}
    </div>
  );
}
