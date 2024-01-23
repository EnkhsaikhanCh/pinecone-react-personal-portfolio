export function Chip(props) {
  const { label } = props;
  return (
    <div className="">
      <div className="bg-gray-200 text-gray-600 flex justify-center items-center w-28 px-4 py-2 rounded-xl">
        {label}
      </div>
    </div>
  );
}
