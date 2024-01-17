import { Logo } from "./icons/Logo";
import { Menu } from "./Menu";
import { MenuIcon } from "./icons/MenuIcon";

export function Navbar() {
  const menuItems = [
    { label: "About", link: "/about" },
    { label: "Work", link: "/work" },
    { label: "Testimonials", link: "/testimonials" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <div className="py-4 px-4 md:px-10 lg:px-20">
      <div className="flex justify-between items-center ">
        <Logo />
        <div className="sm:flex md:hidden">
          <MenuIcon />
        </div>
        <Menu items={menuItems} />
      </div>
    </div>
  );
}
