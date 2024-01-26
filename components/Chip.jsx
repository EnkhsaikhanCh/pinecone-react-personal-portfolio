export function Chip(props) {
  const { label } = props;
  return (
    <div className="">
      <div className="flex w-full items-center justify-center rounded-xl bg-gray-200 px-4 py-2 text-gray-600 dark:bg-[#374151] dark:text-[#D1D5DB]">
        {label}
      </div>
    </div>
  );
}
