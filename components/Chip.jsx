export function Chip(props) {
  const { label } = props;
  return (
    <div className="">
      <div className="bg-gray-200 text-gray-600 flex justify-center items-center w-full px-4 py-2 rounded-xl">
        {label}
      </div>
    </div>
  );
}
