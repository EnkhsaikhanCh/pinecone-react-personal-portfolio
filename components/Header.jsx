import { Logo } from "./icons/Logo";
import { Menu } from "./Menu";
import { MenuData } from "@/data/MenuData";

export function Header() {
  return (
    <div className="px-4 py-4 md:px-10 lg:px-20 dark:bg-[#2a303c]">
      <div className="flex items-center justify-between">
        <Logo />
        <Menu items={MenuData} />
      </div>
    </div>
  );
}
