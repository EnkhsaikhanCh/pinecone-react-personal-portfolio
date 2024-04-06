import { useState } from "react";
import { MenuIcon } from "./icons/Menu_icon";
import { CloseIcon } from "./icons/Close_icon";
import { Logo } from "./icons/Logo";
import { ThemeChanger } from "./ThemeChanger";

interface MenuItem {
  id: string;
  path: string;
  name: string;
}

const menuList: MenuItem[] = [
  { id: "about", name: "About", path: "/about" },
  { id: "work", name: "Work", path: "/work" },
  { id: "testimonials", name: "Testimonials", path: "/testimonials" },
  { id: "contact", name: "Contact", path: "/contact" },
];

export function Menu() {
  return (
    <>
      <div className="hidden items-center gap-5 text-slate-800 dark:text-[#D1D5DB] md:flex">
        {menuList.map((item) => (
          <a
            key={item.id}
            href={item.path}
            className="hover:text-sky-500 dark:hover:text-cyan-300"
          >
            {item.name}
          </a>
        ))}
        <ThemeChanger />
        <button className="rounded-lg bg-sky-500 px-4 py-2 text-white hover:bg-sky-600 dark:bg-cyan-600 dark:hover:bg-cyan-700">
          Download CV
        </button>
      </div>
      <MobileMenu />
    </>
  );
}

function MobileMenu() {
  const [visible, setVisible] = useState(false);

  const toggleMenu = () => setVisible(!visible);

  return (
    <>
      <button
        onClick={toggleMenu}
        className="md:hidden"
        aria-expanded={visible}
        aria-label="Toggle mobile menu"
      >
        {visible ? <CloseIcon /> : <MenuIcon />}
      </button>
      {visible && (
        <div className="fixed inset-0 bg-gray-200/70 transition-opacity"></div>
      )}
      <div
        className={`fixed inset-y-0 left-0 z-50 flex w-2/3 flex-col bg-white transition-transform dark:bg-[#2a303c] ${
          visible ? "translate-x-0" : "-translate-x-full"
        } sm:w-2/5`}
      >
        <div className="flex justify-between border-b border-slate-200 p-4 dark:border-[#1F2937]">
          <Logo />
          <button onClick={toggleMenu} aria-label="Close menu">
            <CloseIcon />
          </button>
        </div>
        <nav className="flex-grow">
          <ul className="flex flex-col p-4">
            {menuList.map((item) => (
              <li key={item.id}>
                <a
                  href={item.path}
                  className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4">
          <ThemeChanger />
          <button className="mt-4 w-full rounded-md bg-sky-500 px-4 py-2 text-white hover:bg-sky-600 dark:bg-cyan-600 dark:hover:bg-cyan-700">
            Download CV
          </button>
        </div>
      </div>
    </>
  );
}
