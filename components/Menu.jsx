import { MenuIcon } from "./icons/Menu_icon";
import { CloseIcon } from "./icons/Close_icon";
import { Logo } from "./icons/Logo";
import { useState } from "react";
import { MenuData } from "@/data/MenuData";
import { ThemeChanger } from "./ThemeChanger";

export function Menu({ items }) {
  return (
    <>
      <div className="hidden items-center gap-5 text-slate-800 dark:text-[#D1D5DB] md:flex">
        {items.map((item) => (
          <a key={item.id} href={item.link}>
            {item.label}
          </a>
        ))}
        <ThemeChanger />
        <button className="rounded-lg bg-sky-500 px-4 py-2 text-white hover:bg-sky-600 dark:bg-cyan-600 dark:hover:bg-cyan-700">
          Download CV
        </button>
      </div>
      <MobileMenu items={MenuData} />
    </>
  );
}

function MobileMenu({ items }) {
  const [visible, setVisible] = useState(false);

  function openMenu() {
    setVisible(true);
  }

  function closeMenu() {
    setVisible(false);
  }

  return (
    <>
      <button className="sm:flex md:hidden" onClick={openMenu}>
        <MenuIcon />
      </button>
      {visible && <div className="fixed inset-0 bg-gray-200/70"></div>}
      <div
        className={`fixed bottom-0 top-0 flex w-2/3 flex-col bg-white transition-all dark:bg-[#2a303c] sm:w-2/5 ${
          visible ? "right-0" : "-right-full"
        } `}
      >
        <div className="flex justify-between border-b border-slate-200 p-4 dark:border-[#1F2937]">
          <Logo />
          <button onClick={closeMenu}>
            <CloseIcon />
          </button>
        </div>
        <div>
          <div className="flex flex-col  text-slate-800">
            <div className="flex flex-col gap-5 border-b  border-slate-200 p-4 text-slate-800 dark:border-[#1F2937] dark:text-[#D1D5DB]">
              {items.map((item) => (
                <a key={item.id} href={item.link}>
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col items-center justify-between gap-4 p-4">
              <div className="flex w-full items-center justify-between dark:text-[#D1D5DB]">
                <p>Switch Theme</p>
                <ThemeChanger />
              </div>
              <div className="w-full">
                <button className="w-full rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-sky-500">
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
