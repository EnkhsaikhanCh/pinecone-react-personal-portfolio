import { Mode } from "./icons/Mode";
import { MenuIcon } from "./icons/MenuIcon";
import { CloseIcon } from "./icons/closeIcon";
import { Logo } from "./icons/Logo";
import { useState } from "react";
import { MenuData } from "@/data/MenuData";

export function Menu({ items }) {
  return (
    <>
      <div className="hidden md:flex items-center gap-5 text-slate-800 ">
        {items.map((item) => (
          <a key={item.id} href="{item.link}">
            {item.label}
          </a>
        ))}
        <Mode />
        <button className="bg-slate-900 text-white rounded-lg px-4 py-2 hover:bg-sky-500">
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
      {visible && <div className="fixed inset-0 bg-gray-200"></div>}
      <div
        className={`fixed flex flex-col bg-white top-0 bottom-0 w-3/4 sm:w-1/2 transition-all ${
          visible ? "right-0" : "-right-full"
        } `}
      >
        <div className="flex justify-between p-4 border-b border-slate-200">
          <Logo />
          <button onClick={closeMenu}>
            <CloseIcon />
          </button>
        </div>
        <div>
          <div className="flex flex-col  text-slate-800">
            <div className="flex flex-col gap-5 text-slate-800  p-4 border-b border-slate-200">
              {items.map((item) => (
                <a key={item.id} href="{item.link}">
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-4 justify-between items-center p-4">
              <div className="flex justify-between items-center w-full">
                <p>Switch Theme</p>
                <Mode />
              </div>
              <div className="w-full">
                <button className="bg-slate-900 text-white rounded-lg px-4 py-2 hover:bg-sky-500 w-full">
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
