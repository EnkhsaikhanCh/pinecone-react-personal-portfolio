export function Chip(props) {
  const { label } = props;
  return (
    <div className="flex justify-center">
      <div className="bg-gray-600 text-white flex justify-center items-center w-28 px-4 py-2 rounded-xl">
        {label}
      </div>
    </div>
  );
}
