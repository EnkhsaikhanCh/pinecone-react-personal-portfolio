import { Copyright_icon } from "./icons/Copyright-icon";

export function Footer() {
  return (
    <div className="bg-gray-50 py-[24px] dark:bg-[#242933]">
      <p className="flex items-center justify-center gap-2 text-gray-600 dark:text-[#D1D5DB]">
        <Copyright_icon />
        2023 | Designed and coded with ❤️️ by Max Shah
      </p>
    </div>
  );
}
