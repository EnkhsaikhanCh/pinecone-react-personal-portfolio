import { Logo } from "./icons/Logo";
import { MenuIcon } from "./icons/MenuIcon";
import { Menu } from "./Menu";
import { MenuData } from "@/data/MenuData";

export function Header() {
  return (
    <div className="py-4 px-4 md:px-10 lg:px-20">
      <div className="flex justify-between items-center">
        <Logo />
        <Menu items={MenuData} />
      </div>
    </div>
  );
}
