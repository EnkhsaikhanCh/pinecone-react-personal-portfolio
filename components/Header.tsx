import { Logo } from "./icons/Logo";
import { Menu } from "./Menu";

export function Header() {
  return (
    <div className="sticky top-0 z-50 flex w-full bg-white shadow-sm dark:bg-[#2a303c]">
      <div className="container mx-auto px-4 py-2 md:px-10 lg:px-20">
        <div className="flex items-center justify-between">
          <Logo />
          <Menu />
        </div>
      </div>
    </div>
  );
}
